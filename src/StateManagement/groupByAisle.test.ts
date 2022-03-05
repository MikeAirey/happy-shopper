import { Aisle } from "../Types/Aisle";
import groupByAisle from "./groupByAisle";

test("groupByAisleWorksCorrectly", () => {
    const aisles: Aisle[] = [
        { id: "12A", name: "Fruit & veg" },
        { id: "13B", name: "Dairy" },
        { id: "787B", name: "Other stuff" },
    ];
    const shops = [
        { aisles: aisles, id: "911", name: "Coles" },
        { aisles: aisles, id: "912", name: "Woolies" },
        { aisles: aisles, id: "924", name: "IGA" },
        { aisles: aisles, id: "944", name: "Salamanca Fresh" },
    ];
    const items = [
        {
            item: { id: "123", name: "cheese", currentlyBestFrom: shops[1], aisle: aisles[1] },
            quantity: 2,
        },
        {
            item: { id: "456", name: "potato", generallyBestFrom: shops[3], aisle: aisles[0] },
            quantity: 1,
        },
        {
            item: {
                id: "111",
                name: "frozen pizza",
                currentlyBestFrom: shops[0], aisle: aisles[1],
            },
            quantity: 1,
        },
        { item: { id: "333", name: "bread" }, quantity: 3 },
        { item: { id: "444", name: "milk", aisle: aisles[1] }, quantity: 5 },
        {
            item: {
                id: "222",
                name: "breadcrumbs",
                generallyBestFrom: shops[1],
                currentlyBestFrom: shops[2], aisle: aisles[2],
            },
            quantity: 22,
        },
    ];

    const grouped = groupByAisle(items, shops[0]);
    const groupedAisleIds = Object.keys(grouped);
    expect(groupedAisleIds).toStrictEqual(["", "12A", "13B", "787B"]);

    expect(grouped[""]).toStrictEqual([items[3]]);
    expect(grouped["12A"]).toStrictEqual([items[1]]);
    expect(grouped["13B"]).toStrictEqual([items[0], items[2], items[4]]);
    expect(grouped["787B"]).toStrictEqual([items[5]]);
});
