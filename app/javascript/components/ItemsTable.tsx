import { Box } from "@mantine/core";
import { IconMoodSad } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import type { Item } from "../models/Item";
import classes from "./datatable.module.css";

type ItemsTableProps = {
  loading?: boolean;
  items?: Item[];
};

export function ItemsTable({ items = [], loading = false }: ItemsTableProps) {
  return (
    <DataTable
      withTableBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      fetching={loading}
      height={500}
      noRecordsIcon={
        <Box p={4} mb={4} className={classes.noRecordsBox}>
          <IconMoodSad size={36} strokeWidth={1.5} />
        </Box>
      }
      columns={[
        {
          accessor: "id",
          title: "ID",
          textAlign: "right",
        },
        {
          accessor: "name",
          title: "Item Name",
        },
        {
          accessor: "acquisition",
          title: "Acquisition Date",
        },
        {
          accessor: "price",
          title: "Price",
        },
        {
          accessor: "item_type",
          title: "Item Type",
        },
      ]}
      records={items}
    />
  );
}
