import { Box, Typography } from "@mui/material";
import AddNew from "./AddNew";
import List from "./List";

const Compose: React.VFC = () => (
    <Box>
        <Typography color="primary">
            This is the page you use to compose your shopping list.
        </Typography>
        <List />
        <AddNew />
    </Box>
);

export default Compose;
