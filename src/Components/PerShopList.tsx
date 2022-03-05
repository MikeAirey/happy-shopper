import groupByAisle from "../StateManagement/groupByAisle";
import { QuantityOfItem } from "../Types/Item";
import { Shop } from "../Types/Shop";
import PerAisleList from "./PerAisleList";

export type PerShopListProps = {
  shop: Shop;
  items: QuantityOfItem[];
}

const PerShopList: React.VFC<PerShopListProps> = ({shop, items}) => {
  const itemsByAisle = groupByAisle(items, shop);
  return (
      <div>
          {Object.keys(itemsByAisle).map((k) => (
              <PerAisleList
                  key={k}
                  aisle={shop.aisles.find((a) => a.id === k)!}
                  items={itemsByAisle[k]}
              />
          ))}
      </div>
  );
}

export default PerShopList;
