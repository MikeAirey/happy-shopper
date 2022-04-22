import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

const darkTheme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    color: theme.palette.text.primary,
                }),
            },
        },
    },
    palette: {
        mode: "dark",
    },
});

const App: React.VFC = () => (
    <ThemeProvider theme={darkTheme}>
        <Header />
        <div style={{ paddingTop: "36px" }}>
            <Outlet />
        </div>
    </ThemeProvider>
);

export default App;
