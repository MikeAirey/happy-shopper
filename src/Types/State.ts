import { Item } from "./Item";
import { List } from "./List";
import { Shop } from "./Shop";

export type State = {
  shops: Shop[];
  list: List;
  allItems: Item[];
}