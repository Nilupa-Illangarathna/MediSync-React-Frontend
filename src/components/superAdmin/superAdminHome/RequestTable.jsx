import { useMemo } from "react"
import { MaterialReactTable, useMaterialReactTable } from "material-react-table"
import { Chip, ButtonGroup, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const data = [
  {
    id: 1,
    name: "John Doe",
    urgency: "High",
    fitOnStatus: "completed",
  },
  {
    id: 2,
    name: "Jane Doe",
    urgency: "Medium",
    fitOnStatus: "in progress",
  },
  {
    id: 3,
    name: "Joe Doe",
    urgency: "Low",
    fitOnStatus: "canceled",
  },
  {
    id: 4,
    name: "Kevin Vandy",
    urgency: "High",
    fitOnStatus: "completed",
  },
  {
    id: 5,
    name: "Joshua Rolluffs",
    urgency: "Medium",
    fitOnStatus: "in progress",
  },
]

const RequestTable = () => {
  const navigate = useNavigate()

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "urgency",
        header: "Urgency",
        Cell: ({ cell }) => (
          <Chip
            label={cell.getValue()}
            color={
              cell.getValue() === "High"
                ? "error"
                : cell.getValue() === "Medium"
                ? "warning"
                : "success"
            }
          />
        ),
      },
      {
        accessorKey: "fitOnStatus",
        header: "FitOn Status",
        Cell: ({ cell }) => (
          <Chip
            label={cell.getValue()}
            color={
              cell.getValue() === "completed"
                ? "success"
                : cell.getValue() === "in progress"
                ? "warning"
                : "default"
            }
          />
        ),
      },
      {
        id: "actions",
        header: "Actions",
        Cell: () => (
          <ButtonGroup variant='contained' size='small'>
            <Button>View</Button>
            <Button>Update</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        ),
      },
    ],
    []
  )

  const table = useMaterialReactTable({
    columns,
    data,
  })

  return <MaterialReactTable table={table} />
}

export default RequestTable
