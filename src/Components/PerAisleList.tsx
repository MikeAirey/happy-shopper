import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import { useState } from "react";
import { Aisle } from "../Types/Aisle";
import { QuantityOfItem } from "../Types/Item";

export type PerAisleListProps = {
  aisle?: Aisle;
  items: QuantityOfItem[];
};

const PerAisleList: React.VFC<PerAisleListProps> = ({ aisle, items }) => {
  const [checked, setChecked] = useState([] as number[]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return items.length > 0 ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" color="secondary">
        {aisle?.name || "Aisle unknown"}
      </Typography>
      <List
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {items
          .sort((x,y) => x.item.name.localeCompare(y.item.name))
          .map((item, i) => (
          <ListItem key={item.item.id}>
            <ListItemButton role={undefined} onClick={handleToggle(i)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(i) !== -1}
                  tabIndex={-1}
                />
              </ListItemIcon>
              <ListItemText
                primary={`${item.item.name}${
                  item.quantity > 1 ? ` (x${item.quantity})` : ""
                }`}
                sx={{
                  textDecoration:
                    checked.indexOf(i) !== -1 ? "line-through" : "none",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  ) : null;
};

export default PerAisleList;
