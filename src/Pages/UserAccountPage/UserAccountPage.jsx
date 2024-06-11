import { Box, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import { IsLoading, UserContent, UpdateUserInfo } from "../../Components/index";
import { useParams } from "react-router-dom";
import { useAuthorizedGetData } from "../../Hooks/useAuthorizedGetData";

export const UserAccountPage = () => {
  const { data: userInfo, isLoading } = useAuthorizedGetData("user");
  const theme = useTheme();
  const { info } = useParams();

  return (
    <Box
      sx={{
        py: theme.palette.sectionPaddingY.main,
      }}
    >
      {isLoading ? (
        <IsLoading />
      ) : (
        <Container maxWidth="lg">
          {info == "user-info" ? (
            <UserContent userInfo={userInfo} />
          ) : (
            <UpdateUserInfo />
          )}
        </Container>
      )}
    </Box>
  );
};
