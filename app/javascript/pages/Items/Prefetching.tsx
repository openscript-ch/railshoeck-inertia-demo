import { ItemsTable } from "../../components/ItemsTable";
import type { Item } from "../../models/Item";

export default function Prefetching({ items }: { items: Item[] }) {
  return <ItemsTable items={items} />;
}
