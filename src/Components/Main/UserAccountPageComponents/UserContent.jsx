import { Box, Typography } from "@mui/material";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import { PropTypes } from "prop-types";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

export const UserContent = ({ userInfo }) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: { xs: "100%", md: "60%" }, m: "auto" }}>
      <Box
        sx={{
          borderBottom: `1px solid ${theme.palette.secondTextColor.main}`,
        }}
      >
        <Box
          sx={{
            borderBottom: `1px solid ${theme.palette.secondTextColor.main}`,
            color: theme.palette.mainColor.main,
            py: "5px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
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
              color: theme.palette.secondTextColor.main,
            }}
            component={"p"}
          >
            <span style={{ fontSize: "17px" }}>User Name :</span>{" "}
            {userInfo?.name}
          </Typography>

          <Typography
            sx={{
              fontSize: "15px",
              py: "8px",
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              color: theme.palette.secondTextColor.main,
            }}
            component={"p"}
          >
            <span style={{ fontSize: "17px" }}>User Email :</span>{" "}
            {userInfo?.email}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: "15px",
          gap: "15px",
          flexDirection: {xs: "column", sm: "row"}
        }}
      >
        <Typography
          component={"p"}
          sx={{
            fontSize: "19px",
            color: theme.palette.secondTextColor.main,
          }}
        >
          update your information
        </Typography>
        <Link
          className="main-hover-button"
          to={"/user-page/user"}
          style={{
            position: "relative",
            color: theme.palette.colorWhite.main,
            backgroundColor: theme.palette.mainColor.main,
            borderRadius: "30px",
            fontSize: "18px",
            overflow: "hidden",
            padding: "9px 25px",
          }}
        >
          Update
        </Link>
      </Box>
    </Box>
  );
};

UserContent.propTypes = {
  userInfo: PropTypes.object,
};
