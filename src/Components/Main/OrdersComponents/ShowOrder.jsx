import { useTheme } from "@emotion/react";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useAuthorizedGetData } from "../../../Hooks/useAuthorizedGetData";
import { useParams } from "react-router-dom";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import { styled } from "@mui/material/styles";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import PropTypes from "prop-types";
export const ShowOrder = () => {
  const { orderPage } = useParams();
  const { data: order } = useAuthorizedGetData(`orders/${orderPage}`);
  const theme = useTheme();
  const steps = ["Create An Order", "pending order", "The order is arriving"];

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: <BorderColorOutlinedIcon />,
      2: <PendingActionsIcon />,
      3: <LocalShippingOutlinedIcon />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
    icon: PropTypes.node,
  };

  const orderSteps = () => {
    if (order?.data.status == "pending") {
      return 1;
    } else if (order?.data.status == "decided") {
      return 2;
    }
  };

  return (
    <Box sx={{ py: theme.palette.sectionPaddingY.main }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          mb: "20px",
          color: theme.palette.secondTextColor.main,
        }}
      >
        <Typography sx={{ fontSize: "25px" }}>Order Details Page</Typography>
        <FeedOutlinedIcon sx={{ fontSize: "30px" }} />
      </Box>
      <Box>
        <Box sx={{ mb: "30px" }}>
          <Typography
            sx={{
              fontSize: "17px",
              color: theme.palette.secondTextColor.main,
              mb: "5px",
            }}
          >
            <strong style={{ color: theme.palette.mainColor.main }}>
              Name :
            </strong>{" "}
            {order?.data.customerName}
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              color: theme.palette.secondTextColor.main,
              mb: "5px",
            }}
          >
            <strong style={{ color: theme.palette.mainColor.main }}>
              Email :
            </strong>{" "}
            {order?.data.customerEmail}
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              color: theme.palette.secondTextColor.main,
              mb: "5px",
            }}
          >
            <strong style={{ color: theme.palette.mainColor.main }}>
              Phone :
            </strong>{" "}
            {order?.data.customerPhone}
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              color: theme.palette.secondTextColor.main,
              mb: "5px",
            }}
          >
            <strong style={{ color: theme.palette.mainColor.main }}>
              Address :
            </strong>{" "}
            {order?.data.customerAddress}
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              color: theme.palette.secondTextColor.main,
              mb: "5px",
            }}
          >
            <strong style={{ color: theme.palette.mainColor.main }}>
              notes :
            </strong>{" "}
            {order?.data.notes}
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              color: theme.palette.secondTextColor.main,
              mb: "5px",
            }}
          >
            <strong style={{ color: theme.palette.mainColor.main }}>
              Total Price :
            </strong>{" "}
            {order?.data.finalPrice} $
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              color: theme.palette.secondTextColor.main,
              mb: "5px",
            }}
          >
            <strong style={{ color: theme.palette.mainColor.main }}>
              Discount :
            </strong>{" "}
            {order?.data.discountValue}%
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              color: theme.palette.secondTextColor.main,
              mb: "5px",
            }}
          >
            <strong style={{ color: theme.palette.mainColor.main }}>
              Payment Method :
            </strong>{" "}
            {order?.data.paymentMethod}
          </Typography>
        </Box>
        <Box sx={{ mb: "25px" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "25px",
              mb: "20px",
              color: theme.palette.secondTextColor.main,
            }}
          >
            Order Status
          </Typography>
          <Stepper
            alternativeLabel
            activeStep={orderSteps()}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
      <Box>
        {order?.data.items.map((book) => {
          const { id, image, category, description, price, title } = book.book;
          return (
            <Box
              key={id}
              sx={{
                border: "1px solid #ddd",
                p: "10px",
                my: "10px",
                display: "flex",
                gap: "20px",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box
                sx={{ minWidth: "150px", width: { xs: "100%", md: "150px" } }}
              >
                <img style={{ width: "100%" }} src={image} alt="" />
              </Box>
              <Box>
                <Typography
                  component={"p"}
                  sx={{
                    fontSize: "15px",
                    color: theme.palette.secondTextColor.main,
                    mb: "5px",
                  }}
                >
                  <strong style={{ color: theme.palette.mainColor.main }}>
                    Title:
                  </strong>{" "}
                  {title}
                </Typography>
                <Typography
                  component={"p"}
                  sx={{
                    fontSize: "15px",
                    color: theme.palette.secondTextColor.main,
                    mb: "5px",
                  }}
                >
                  <strong style={{ color: theme.palette.mainColor.main }}>
                    category:
                  </strong>{" "}
                  {category}
                </Typography>
                <Typography
                  component={"p"}
                  sx={{
                    fontSize: "15px",
                    color: theme.palette.secondTextColor.main,
                    mb: "5px",
                  }}
                >
                  <strong style={{ color: theme.palette.mainColor.main }}>
                    Price:
                  </strong>{" "}
                  {price}
                </Typography>
                <Typography
                  component={"p"}
                  sx={{
                    fontSize: "15px",
                    color: theme.palette.secondTextColor.main,
                    mb: "5px",
                  }}
                >
                  <strong style={{ color: theme.palette.mainColor.main }}>
                    Description:
                  </strong>{" "}
                  {description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
