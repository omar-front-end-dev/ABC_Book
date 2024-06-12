import { Box, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import { IsLoading, UserContent, UpdateUserInfo, Authentication} from "../../Components/index";
import { useParams } from "react-router-dom";
import { useAuthorizedGetData } from "../../Hooks/useAuthorizedGetData";
import { useSelector } from "react-redux";


export const UserAccountPage = () => {
  const { data: userInfo, isLoading } = useAuthorizedGetData("user");
  const theme = useTheme();
  const { typeAuth } = useParams();
  

  const { isAuth } = useSelector(state => state.authReducer)

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
          {!isAuth ? <Authentication/> : 
          <>
            {typeAuth == "updateUser" ? (
              <UpdateUserInfo />
              ) : (
              <UserContent userInfo={userInfo} />
          )}
          </>
          }
        </Container>
      )}
    </Box>
  );
};
