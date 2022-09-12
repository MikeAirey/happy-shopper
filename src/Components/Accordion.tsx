import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from "@mui/material";
import { useState } from "react";

export type AccordionProps = {
  caption: string;
  children: React.ReactElement | React.ReactElement[];
};

const Accordion = ({ children, caption }: AccordionProps) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <MuiAccordion
      expanded={expanded}
      onChange={(_, isExpanded) => setExpanded(isExpanded)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
        <Typography color="primary" variant="h5">
          {caption}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
