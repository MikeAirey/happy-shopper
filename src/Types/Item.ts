import { Aisle } from "./Aisle";
import { Shop } from "./Shop";

export type Item = {
    id: string;
    name: string;
    // This will remain very optional for the foreseeable. MVP of this app definitely does not include totals or budgeting.
    approximatePrice?: number;
    // Effectively, "is on special at". Could also mean "I want to get this item from this specific shop for another reason", e.g. "there are really good apples here" or "I want to go to this shop to see what they have, and I'm just going to mark this random item as a reminder"
    currentlyBestFrom?: Shop;
    // The shop that, all else being equal, you'd normally buy the item from. Either it's cheaper, or better quality, or just more convenient.
    generallyBestFrom?: Shop;
    aisle?: Aisle;
};

export type QuantityOfItem = {
    item: Item;
    quantity: number;
};
