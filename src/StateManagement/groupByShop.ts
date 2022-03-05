import { QuantityOfItem } from "../Types/Item";
import { Shop } from "../Types/Shop";

export default (items: QuantityOfItem[], shops: Shop[]) => {
    const itemsByShop: { [shopId: string]: QuantityOfItem[] } = shops.reduce(
        (acc, s) => ({ ...acc, [s.id]: [] }),
        {}
    );
    return items.reduce((acc, i) => {
        const preferredShop =
            i.item.currentlyBestFrom || i.item.generallyBestFrom;
        if (!preferredShop) {
            return Object.keys(acc).reduce(
                (acc1, k) => ({ ...acc1, [k]: [...acc[k], i] }),
                {}
            );
        }
        const shopItems = acc[preferredShop.id];
        return {
            ...acc,
            [preferredShop.id]: [...shopItems, i],
        };
    }, itemsByShop);
};
