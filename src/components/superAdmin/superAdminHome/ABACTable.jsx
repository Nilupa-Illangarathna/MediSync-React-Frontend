import React, { useState } from "react";
import { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { Chip, ButtonGroup, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { items } from "../../../values/items";
import ServiceSelectionDialog from "./ServiceSelectionDialog";

const abacData = [
  {
    id: 1,
    name: "Premium Subscriber",
    services: [1, 2, 3, 4, 5, 6, 7, 8], // All services allowed for premium subscribers
  },
  {
    id: 3,
    name: "Gold Subscriber",
    services: [1, 2, 3, 5, 7, 8], // Only select services allowed for gold subscribers
  },
  {
    id: 2,
    name: "Silver Subscriber",
    services: [1, 3, 5, 7], // Only select services allowed for silver subscribers
  },
  {
    id: 4,
    name: "Basic Subscriber",
    services: [1, 3], // Only basic services allowed for basic subscribers
  },
  // Add more attributes as needed
];


const ABACTable = () => {
  const navigate = useNavigate();
  const [attributes, setAttributes] = useState(abacData);
  const [selectedAttribute, setSelectedAttribute] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "name",
        header: "Attribute Name",
      },
      {
        accessorKey: "services",
        header: "Allowed Services",
        Cell: ({ cell }) => (
          <div>
            {cell.getValue().map((serviceId) => (
              <Chip
                key={serviceId}
                label={getServiceName(serviceId)}
                color="primary"
                size="small" // Set size to small
                style={{ margin: "2px" }} // Reduced margin for a more compact layout
              />
            ))}
          </div>
        ),
      },
      {
        id: "actions",
        header: "Actions",
        Cell: ({ row }) => (
          <ButtonGroup variant="contained" size="small">
            <Button onClick={() => handleEditServices(row.original)}>Edit Services</Button>
          </ButtonGroup>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: attributes,
  });

  const getServiceName = (serviceId) => {
    const service = items.find((item) => item.id === serviceId);
    return service ? service.name : "";
  };

  const handleEditServices = (attribute) => {
    setSelectedAttribute(attribute);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedAttribute(null);
  };

  const handleServiceSelection = (selectedServices) => {
    const updatedAttributes = attributes.map((attribute) =>
      attribute.id === selectedAttribute.id ? { ...attribute, services: selectedServices } : attribute
    );
    setAttributes(updatedAttributes);
    handleCloseDialog();
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}> {/* Set the width of the container and center it */}
      <MaterialReactTable table={table} />
      <ServiceSelectionDialog
        open={isDialogOpen}
        handleClose={handleCloseDialog}
        services={items}
        handleServiceSelection={handleServiceSelection}
      />
    </div>
  );
};

export default ABACTable;