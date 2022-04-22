import { QuantityOfItem } from "../Types/Item";
import { Shop } from "../Types/Shop";

// Should be able to consolidate this with groupByShop. TODO.
const fn = (items: QuantityOfItem[], shop: Shop) => {
  const itemsByAisle: { [aisleId: string]: QuantityOfItem[] } = {};
  //   shop.aisles.reduce(
  //     (acc, a) => ({ ...acc, [a.id]: [] }),
  //     { "": [] } // Note the 'empty aisle' array
  //   );
  return items.reduce((acc, i) => {
    const k = i.item.aisle?.id || "";
    const it = acc[k] || [];
    return {
      ...acc,
      [k]: [...it, i],
    };
  }, itemsByAisle);
};

// TODO: Order aisles in the order they are laid out in the shop.

export default fn;
