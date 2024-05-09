
import { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { medicalRecordsData } from "../../values/medicalRecordsData";
import Box from "@mui/material/Box";

const RecordManagement = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "patientId",
        header: "Patient ID",
        size: 100,
      },
      {
        accessorKey: "patientName",
        header: "Patient Name",
        size: 150,
      },
      {
        accessorKey: "age",
        header: "Age",
        size: 100,
      },
      {
        accessorKey: "gender",
        header: "Gender",
        size: 100,
      },
      {
        accessorKey: "bloodGroup",
        header: "Blood Group",
        size: 120,
      },
      {
        accessorKey: "medicalRecordFile",
        header: "Medical Record",
        Cell: ({ cell }) => (
          <a href={cell.getValue()} target="_blank" rel="noopener noreferrer">View Record</a>
        ),
        size: 200,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 200,
      },
      {
        accessorKey: "consent",
        header: "Consent",
        Cell: ({ cell }) => (cell.getValue() ? "Yes" : "No"),
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: medicalRecordsData,
    pageSizeOptions: [8], // Set the page size options to only include 8 records per page
    defaultPageSize: 8, // Set the default page size to 8 records per page
  });

  return (
    <Box sx={{ width: "90%", margin: "0 auto" }}>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default RecordManagement;
