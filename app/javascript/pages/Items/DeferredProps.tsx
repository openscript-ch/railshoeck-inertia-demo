import { Deferred } from "@inertiajs/react";
import { ItemsTable } from "../../components/ItemsTable";
import type { Item } from "../../models/Item";

export default function DeferredProps({ items }: { items: Item[] }) {
  return (
    <Deferred data="items" fallback={<ItemsTable loading />}>
      <ItemsTable items={items} />
    </Deferred>
  );
}
