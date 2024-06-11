import { Box, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import { ShoppingContent } from "../../Components";




export const Shopping = () => {
  const theme = useTheme();
  

  return (
    <Box sx={{py: theme.palette.sectionPaddingY.main}}>
      <Container maxWidth="lg">
        <Box>
          <ShoppingContent/>
        </Box>
      </Container>
    </Box>
  );
};
