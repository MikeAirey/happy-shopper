import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Shops: React.VFC = () => (
    <Box>
        <Typography>This will be the list of shops that you frequent.</Typography>
        <Outlet />
    </Box>
);

export default Shops;
