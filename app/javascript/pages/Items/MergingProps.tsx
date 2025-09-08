import { router } from "@inertiajs/react";
import { Box, Button, Group, Paper, Text } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { useRef, useState } from "react";
import type { Item } from "../../models/Item";

import { IconMoodSad } from "@tabler/icons-react";
import classes from "../../components/datatable.module.css";

export default function MergingProps({ items, title }: { items: Item[], title: string }) {
  const scrollViewportRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const loadMoreRecords = () => {
    setLoading(true);
    router.reload({
      only: ["items"],
      data: { offset: items.length },
      onFinish: () => setLoading(false),
    });
  };

  const onReset = () => {
    setLoading(true);
    router.reload({
      reset: ["items"],
      data: { offset: 0 },
      onFinish: () => setLoading(false),
    });
  };

  return (
    <main>
      <h1>{title}</h1>
      <DataTable
        withTableBorder
        borderRadius="sm"
        withColumnBorders
        striped
        highlightOnHover
        fetching={loading}
        scrollViewportRef={scrollViewportRef}
        onScrollToBottom={loadMoreRecords}
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

      <Paper p="md" mt="sm" withBorder>
        <Group justify="space-between">
          <Text size="sm">Showing {items.length} records</Text>
          <Button variant="light" onClick={onReset}>
            Reset records
          </Button>
        </Group>
      </Paper>
    </main>
  );
}
