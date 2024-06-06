import { Box, Typography } from "@mui/material";
import RecentActorsIcon from "@mui/icons-material/RecentActors";

import { useTheme } from "@emotion/react";

export const UserContent = () => {
  const theme = useTheme();
  return (
    <Box sx={{width: {xs: "100%", md: "60%"}, m: "auto"}}>
      <Box
        sx={{
          borderBottom: `1px solid ${theme.palette.mainColor.main}`,
          py: "5px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          mb: "10px",
        }}
      >
        <RecentActorsIcon size={"20px"} />
        <Typography component={"h3"} sx={{ fontSize: "18px" }}>
          PROFILE
        </Typography>
      </Box>
      <Box className="my-account-page__info">
        <Typography
          sx={{
            fontSize: "15px",
            py: "8px",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
          component={"p"}
        >
          <span style={{ fontSize: "17px" }}>First Name :</span>{" "}
          {/* {dataName.firstName} */}
          omar mohamed
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            py: "8px",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
          component={"p"}
        >
          <span style={{ fontSize: "17px" }}>Last Name :</span> ll
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            py: "8px",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
          component={"p"}
        >
          <span style={{ fontSize: "17px" }}>Email :</span>{" "}
          {/* {dataName.email} */}
          kkkkk
        </Typography>
      </Box>
    </Box>
  );
};

{
  /* <Box
    sx={{
      borderTop: `1px solid ${theme.palette.mainColor.main}`,
      mt: "10px",
      py: "16px",
    }}
  >
    <Box sx={{ width: "200px" }}>
      <Logout_Or_Not />
      kk
    </Box>
  </Box> */
}
