import { Box, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import { IsLoading, UserContent, UpdateUserInfo } from "../../Components/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../../config";
import { useParams } from "react-router-dom";

export const UserAccountPage = () => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const { info } = useParams();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setIsLoading(false);
        const token = localStorage.getItem("user_data");
        const response = await axios.get(`${baseURL}/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    setIsLoading(true);
    fetchUserInfo();
  }, []);

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
