import type { ItemType } from "./ItemType";

export type Item = {
  id: number;
  name: string;
  acquisition: string;
  price: number;
  item_type: ItemType;
  has_file: boolean;
};
