import { v4 } from "uuid";
import create from "zustand";
import { State } from "../Types/State";

const emptyState: State = {
    allItems: [],
    list: {
        items: [],
    },
    shops: [],
};

const useStore = create<State>((set) => ({
    ...emptyState,
    addShop: () => (name: string) =>
        set((state: State) => ({
            shops: [...state.shops, { name, aisles: [], id: v4() }],
        })),
    removeShop: (id: string) =>
        set((state: State) => ({
            shops: state.shops.filter((s) => s.id !== id),
        })),
    defineItem: (name: string) =>
        set((state: State) => ({
            allItems: [...state.allItems, { name, id: v4() }],
        })),
    undefineItem: (id: string) =>
        set((state: State) => ({
            allItems: state.allItems.filter((s) => s.id !== id),
            list: { items: state.list.items.filter((i) => i.item.id !== id) },
        })),
    addToList: (id: string) =>
        set((state: State) => {
            const itemAlreadyListed = state.list.items.find(
                (i) => i.item.id === id
            );
            if (itemAlreadyListed) {
                return {
                    list: {
                        items: [
                            ...state.list.items.filter((i) => i.item.id !== id),
                            {
                                item: itemAlreadyListed.item,
                                quantity: itemAlreadyListed.quantity + 1,
                            },
                        ],
                    },
                };
            }
            const lookedUpItem = state.allItems.find((i) => i.id === id);
            if (!lookedUpItem) {
                throw new Error("Item " + id + " not found.");
            }
            return {
                list: {
                    items: [
                        ...state.list.items,
                        { item: lookedUpItem, quantity: 1 },
                    ],
                },
            };
        }),
    removeFromList: (id: string) =>
        set((state: State) => ({
            list: {
                items: state.list.items.filter((i) => i.item.id !== id),
            },
        })),
}));
