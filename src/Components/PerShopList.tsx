import { Box } from "@mui/material";
import groupByAisle from "../StateManagement/groupByAisle";
import { QuantityOfItem } from "../Types/Item";
import { Shop } from "../Types/Shop";
import PerAisleList from "./PerAisleList";

export type PerShopListProps = {
  shop: Shop;
  items: QuantityOfItem[];
};

const PerShopList: React.VFC<PerShopListProps> = ({ shop, items }) => {
  const itemsByAisle = groupByAisle(items, shop);
  const pc = 100.0 / Object.keys(itemsByAisle).length;
  return items.length > 0 ? (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {Object.keys(itemsByAisle).map((k) => (
        <div
          style={{
            flex: `0 0 ${pc}%`,
          }}
          key={k}
        >
          <PerAisleList
            aisle={shop.aisles.find((a) => a.id === k)}
            items={itemsByAisle[k]}
          />
        </div>
      ))}
    </Box>
  ) : null;
};

export default PerShopList;
