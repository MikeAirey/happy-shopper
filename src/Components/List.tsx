import groupByShop from "../StateManagement/groupByShop";
import { QuantityOfItem } from "../Types/Item";
import { Shop } from "../Types/Shop";
import PerShopList from "./PerShopList";

export type ListProps = {
    items: QuantityOfItem[];
    shops: Shop[];
};

const List: React.VFC<ListProps> = ({ items, shops }) => {
    const itemsByShop = groupByShop(items, shops);
    return (
        <div>
            {Object.keys(itemsByShop).map((k) => (
                <PerShopList
                    key={k}
                    shop={shops.find((s) => s.id === k)!}
                    items={itemsByShop[k]}
                />
            ))}
        </div>
    );
};

export default List;
