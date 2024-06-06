import { useTheme } from "@emotion/react";
import { HomeBanner, HomeSlider, IsLoading, Slides } from "../../Components/index";
import { useGetData } from "../../Hooks/useGetData";
import { Box, Container, Typography } from "@mui/material";

export const Home = () => {
  const { isLoading, data } = useGetData(`books`);
  const theme = useTheme();

  return (
    <Box>
      {isLoading ? (
        <IsLoading />
      ) : (
        <>
          <Box>
            <Container maxWidth="lg">
              <HomeBanner />
            </Container>
          </Box>
          <Box sx={{ bgcolor: theme.palette.sectionBgColor.main }}>
            <Container maxWidth="lg">
              <Typography
                sx={{
                  pt: "30px",
                  fontSize: "25px",
                  textAlign: "center",
                  color: theme.palette.firstTextColor.main,
                  fontWeight: "bold"
                }}
                component={"h2"}
              >
                Best Selling Books Ever
              </Typography>
              <Slides slidesData={data?.data} />
            </Container>
          </Box>

          <Box sx={{ bgcolor: theme.palette.colorWhite.main }}>
            <Container maxWidth="lg">
              <Typography
                sx={{
                  pt: "30px",
                  fontSize: "25px",
                  
                  color: theme.palette.firstTextColor.main,
                  fontWeight: "bold"
                }}
                component={"h2"}
              >
                Featured This Week
              </Typography>
              <HomeSlider books={data?.data}/>
            </Container>
          </Box>
        </>
      )}
    </Box>
  );
};
