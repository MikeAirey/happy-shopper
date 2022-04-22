import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Compose from "./Components/Composing/Compose";
import ShoppingList from "./Components/Shopping/List";
import Shop from "./Components/Shop";
import Shops from "./Components/Shops";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const aisles = [
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
        item: {
            id: "123",
            name: "cheese",
            currentlyBestFrom: shops[1],
            aisle: aisles[1],
        },
        quantity: 2,
    },
    {
        item: {
            id: "456",
            name: "potato",
            generallyBestFrom: shops[3],
            aisle: aisles[0],
        },
        quantity: 1,
    },
    {
        item: {
            id: "111",
            name: "frozen pizza",
            currentlyBestFrom: shops[0],
            aisle: aisles[1],
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
            currentlyBestFrom: shops[2],
            aisle: aisles[2],
        },
        quantity: 22,
    },
];

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route
                        index
                        element={<ShoppingList items={items} shops={shops} />}
                    />
                    <Route path="compose" element={<Compose />} />
                    <Route path="shops" element={<Shops />}>
                        <Route path=":shopName" element={<Shop />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
