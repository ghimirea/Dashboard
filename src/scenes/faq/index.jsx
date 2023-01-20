import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Quesions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Mollit qui officia irure consectetur non anim anim.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Exercitation cupidatat do minim consectetur nisi officia pariatur
            enim est sit cillum laboris anim dolor. Quis non do cupidatat culpa
            nostrud minim velit incididunt voluptate voluptate occaecat
            excepteur qui nulla. Incididunt nulla amet esse sint id. Sit
            pariatur aliqua mollit qui in. Ad cupidatat enim sit qui duis est id
            eiusmod cillum minim tempor id minim esse. Ipsum voluptate enim
            deserunt mollit voluptate consectetur. Ex non cillum non labore
            nulla cupidatat ex reprehenderit laboris incididunt ea. Nisi qui id
            cupidatat ex adipisicing labore excepteur sunt. Voluptate qui
            consequat dolor eiusmod Lorem in sint adipisicing in. Laboris
            excepteur commodo laboris culpa dolore consectetur sit. Mollit
            commodo irure labore ullamco sit excepteur dolore irure magna. Elit
            exercitation aute adipisicing culpa sunt sit eiusmod. Reprehenderit
            nulla deserunt ex ad velit veniam in ullamco ea minim nostrud
            consequat est exercitation. Elit deserunt ad labore aliqua id ex
            dolor adipisicing pariatur non. Ipsum laborum quis occaecat aliquip
            velit nostrud est dolore ad nostrud culpa enim. Et nisi occaecat
            consequat reprehenderit exercitation eiusmod velit. Aliqua duis duis
            ipsum ut velit in cupidatat pariatur aliquip aliqua tempor commodo.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Mollit qui officia irure consectetur non anim anim.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Occaecat non esse ullamco et veniam. Et amet veniam elit officia
            labore elit aliquip. Nostrud nulla pariatur aliqua nostrud minim
            elit fugiat nulla et. Voluptate anim deserunt labore anim ea. Aliqua
            ad nisi voluptate eu nulla elit.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Mollit qui officia irure consectetur non anim anim.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Occaecat non esse ullamco et veniam. Et amet veniam elit officia
            labore elit aliquip. Nostrud nulla pariatur aliqua nostrud minim
            elit fugiat nulla et. Voluptate anim deserunt labore anim ea. Aliqua
            ad nisi voluptate eu nulla elit.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Mollit qui officia irure consectetur non anim anim.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Occaecat non esse ullamco et veniam. Et amet veniam elit officia
            labore elit aliquip. Nostrud nulla pariatur aliqua nostrud minim
            elit fugiat nulla et. Voluptate anim deserunt labore anim ea. Aliqua
            ad nisi voluptate eu nulla elit.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Mollit qui officia irure consectetur non anim anim.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Occaecat non esse ullamco et veniam. Et amet veniam elit officia
            labore elit aliquip. Nostrud nulla pariatur aliqua nostrud minim
            elit fugiat nulla et. Voluptate anim deserunt labore anim ea. Aliqua
            ad nisi voluptate eu nulla elit.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Mollit qui officia irure consectetur non anim anim.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Occaecat non esse ullamco et veniam. Et amet veniam elit officia
            labore elit aliquip. Nostrud nulla pariatur aliqua nostrud minim
            elit fugiat nulla et. Voluptate anim deserunt labore anim ea. Aliqua
            ad nisi voluptate eu nulla elit.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
