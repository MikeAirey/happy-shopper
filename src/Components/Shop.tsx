import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const Shop = () => {
  const { shopName } = useParams();
  return (
    <Box>
      I'm the shop details page for {shopName}. You'll be able to use me to add
      location, notes, and all the stuff that's on special at the moment.
    </Box>
  );
};

export default Shop;
