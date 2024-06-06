import { Box } from "@mui/material";
import banner from "../../../../public/images/banner.jpg";
import { useTheme } from "@emotion/react";
export const HomeBanner = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: theme.palette.colorWhite.main,
        py: theme.palette.sectionPaddingY.main,
      }}
    >
      <img style={{ width: "100%" }} src={banner} alt="" />
    </Box>
  );
};
