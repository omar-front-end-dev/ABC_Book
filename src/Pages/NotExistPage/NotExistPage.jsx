import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import logo from "../../../public/images/Logo/logo.png.webp"
export const NotExistPage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#f003",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: theme.palette.secondTextColor.main
        }}
      >
        <img src={logo} alt="logo image" style={{marginBottom: "25px"}}/>
        <Typography
          sx={{
            fontSize: {xs: "35px", lg: "60px"},
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
          component={"h1"}
        >
          <WarningAmberIcon
            sx={{ fontSize: {xs: "35px", lg: "60px"}, color: theme.palette.mainColor.main }}
          />{" "}
          404 :{"Not Found"}
        </Typography>
        <Typography component={"p"} sx={{ fontSize: "20px" }}>
          You are requesting a page that does not exist
        </Typography>
      </Box>
    </Box>
  );
};
