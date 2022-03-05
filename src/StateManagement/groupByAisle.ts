import { QuantityOfItem } from "../Types/Item";
import { Shop } from "../Types/Shop";

export default (items: QuantityOfItem[], shop: Shop) => {
    const itemsByShop: { [shopId: string]: QuantityOfItem[] } = shops.reduce(
        (acc, s) => ({ ...acc, [s.id]: [] }),
        {}
    );
    return items.reduce((psi, i) => {
        const preferredShop =
            i.item.currentlyBestFrom || i.item.generallyBestFrom;
        if (!preferredShop) {
            return Object.keys(psi).reduce(
                (acc, k) => ({ ...acc, [k]: [...psi[k], i] }),
                {}
            );
        }
        const shopItems = psi[preferredShop.id];
        return {
            ...psi,
            [preferredShop.id]: [...shopItems, i],
        };
    }, itemsByShop);
};
