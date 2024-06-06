import { useParams } from "react-router-dom";
import { useGetData } from "../../Hooks/useGetData";
import { IsLoading, SingleProductContent } from "../../Components/index";
import { Box, Container } from "@mui/material";
import { useTheme } from "@emotion/react";

export const SingleProduct = () => {
  const theme = useTheme();
  const { booksId } = useParams();
  const { isLoading, data } = useGetData(`books/${booksId}`);

  return (
    <Box sx={{ py: theme.palette.sectionPaddingY.main }}>
      <Container maxWidth="lg">
        {isLoading ? <IsLoading /> : <SingleProductContent book={data?.data} />}
      </Container>
    </Box>
  );
};
