import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { PropTypes } from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./HomeComponents.css";
import { HomeSliderBook } from "./HomeSliderBook";

export const HomeSlider = ({ books }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: theme.palette.colorWhite.main,
        py: theme.palette.sectionPaddingY.main,
      }}
    >
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="slide"
      >
        {books.map((book) => {
          return (
            <SwiperSlide key={book.id} className="swiper-slides">
              <HomeSliderBook book={book}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

HomeSlider.propTypes = {
  books: PropTypes.array,
};
