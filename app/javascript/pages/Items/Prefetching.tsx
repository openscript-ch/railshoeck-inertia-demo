import { ItemsTable } from "../../components/ItemsTable";
import type { Item } from "../../models/Item";

export default function Prefetching({ items, title }: { items: Item[], title: string }) {
  return (<main>
    <h1>{title}</h1>
    <ItemsTable items={items} />;
  </main>)
}
