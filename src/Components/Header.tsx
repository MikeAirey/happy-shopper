import { AppBar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => (
  <AppBar
    sx={{
      alignItems: "center",
      alignSelf: "stretch",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      fontVariant: "small-caps",
    }}
  >
    <Link
      to="/"
      style={{
        fontStyle: "italic",
        textDecoration: "none",
      }}
    >
      <Typography variant="h5">happy shopper</Typography>
    </Link>
    <div style={{ display: "inline-flex" }}>
      <Link to="/compose">compose</Link>
      <Typography>&nbsp;|&nbsp;</Typography>
      <Link to="/shops">shops</Link>
    </div>
  </AppBar>
);

export default Header;
