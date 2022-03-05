import groupByShop from "./groupByShop";

test("groupByShopWorksCorrectly", () => {
    const shops = [
        { aisles: [], id: "911", name: "Coles" },
        { aisles: [], id: "912", name: "Woolies" },
        { aisles: [], id: "924", name: "IGA" },
        { aisles: [], id: "944", name: "Salamanca Fresh" },
    ];
    const items = [
        {
            item: { id: "123", name: "cheese", currentlyBestFrom: shops[1] },
            quantity: 2,
        },
        {
            item: { id: "456", name: "potato", generallyBestFrom: shops[3] },
            quantity: 1,
        },
        {
            item: {
                id: "111",
                name: "frozen pizza",
                currentlyBestFrom: shops[0],
            },
            quantity: 1,
        },
        { item: { id: "333", name: "bread" }, quantity: 3 },
        { item: { id: "444", name: "milk" }, quantity: 5 },
        {
            item: {
                id: "222",
                name: "frozen peas",
                generallyBestFrom: shops[1],
                currentlyBestFrom: shops[2],
            },
            quantity: 22,
        },
    ];

    const grouped = groupByShop(items, shops);
    const groupedShopIds = Object.keys(grouped);
    expect(groupedShopIds).toStrictEqual(["911", "912", "924", "944"]);

    expect(grouped["911"]).toStrictEqual([items[2], items[3], items[4]]);
    expect(grouped["912"]).toStrictEqual([items[0], items[3], items[4]]);
    expect(grouped["924"]).toStrictEqual([items[3], items[4], items[5]]);
    expect(grouped["944"]).toStrictEqual([items[1], items[3], items[4]]);
});
