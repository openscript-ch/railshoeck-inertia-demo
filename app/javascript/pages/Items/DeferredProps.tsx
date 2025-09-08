import { Deferred } from "@inertiajs/react";
import { ItemsTable } from "../../components/ItemsTable";
import type { Item } from "../../models/Item";

export default function DeferredProps({ items, title }: { items: Item[], title: string }) {
  return (
    <main>
      <h1>{title}</h1>
      <Deferred data="items" fallback={<ItemsTable loading />}>
        <ItemsTable items={items} />
      </Deferred>
    </main>
  );
}
