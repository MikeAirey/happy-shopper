import groupByShop from "../../StateManagement/groupByShop";
import { QuantityOfItem } from "../../Types/Item";
import { Shop } from "../../Types/Shop";
import Accordion from "../Accordion";
import PerShopList from "./PerShopList";

export type ListProps = {
  items: QuantityOfItem[];
  shops: Shop[];
};

const List = ({ items, shops }: ListProps) => {
  const itemsByShop = groupByShop(items, shops);
  return (
    <div>
      {Object.keys(itemsByShop).map((k) => {
        const shop = shops.find((s) => s.id === k)!;
        const items = itemsByShop[k];
        return items.length > 0 ? (
          <Accordion key={k} caption={shop.name}>
            <PerShopList shop={shop} items={itemsByShop[k]} />
          </Accordion>
        ) : null;
      })}
    </div>
  );
};

export default List;
