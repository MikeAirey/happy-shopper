import { QuantityOfItem } from "../Types/Item";
import { Shop } from "../Types/Shop";

export type PerShopListProps = {
  shop: Shop;
  items: QuantityOfItem[];
}

const PerShopList: React.VFC<PerShopListProps> = ({shop, items}) => <div></div>;

export default PerShopList;
