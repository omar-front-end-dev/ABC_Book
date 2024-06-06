import { Box, Container } from "@mui/material";
import { UserContent } from "../../Components/index";
import { useTheme } from "@emotion/react";
import { IsLoading } from "../../Components/index";
import { useGetData } from "../../Hooks/useGetData";

export const UserAccountPage = () => {
  // const user_data = localStorage.getItem("user_data")
  const token = "113|dqzD1HAz3BCUp6da8ITUigNq1foAVOEoRpJRDmuK059f7780"
  const { isLoading, error, data} = useGetData(token)
  const theme = useTheme();

  console.log(data);
  
  return (
    <Box
      sx={{
        color: theme.palette.secondTextColor.main,
        py: theme.palette.sectionPaddingY.main,
      }}
    >
      <Container maxWidth="lg">
        <UserContent />
      </Container>
    </Box>
  );
};
