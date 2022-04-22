import { Box, styled } from "@mui/material";
import groupByAisle from "../../StateManagement/groupByAisle";
import { QuantityOfItem } from "../../Types/Item";
import { Shop } from "../../Types/Shop";
import PerAisleList from "./PerAisleList";

const PerShopBox = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    },
    [theme.breakpoints.up("sm")]: {
        justifyContent: "space-between",
    },
}));

export type PerShopListProps = {
    shop: Shop;
    items: QuantityOfItem[];
};

const PerShopList: React.VFC<PerShopListProps> = ({ shop, items }) => {
    const itemsByAisle = groupByAisle(items, shop);
    const pc = 100.0 / Object.keys(itemsByAisle).length;
    return items.length > 0 ? (
        <PerShopBox>
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
        </PerShopBox>
    ) : null;
};

export default PerShopList;
