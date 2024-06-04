import { Box } from "@mui/material";
import { Register } from "../../Components/Main/AuthenticationComponents/Register";

export const Authentication = () => {
  return (
    <Box>
      <Box sx={{ width: "50%", bgcolor: "#eee", height: "550px" }}>
        <Register />
      </Box>
    </Box>
  );
};
