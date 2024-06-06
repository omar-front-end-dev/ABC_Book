import { Box, Typography } from "@mui/material";
import "./IsLoading.css";

export const IsLoading = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        bgcolor: "#fff",
      }}
    >
      <Typography sx={{}} className="loader" component={"span"} />
    </Box>
  );
};