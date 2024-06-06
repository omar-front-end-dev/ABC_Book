import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { PropTypes } from "prop-types";
import { Box, Container } from "@mui/material";
import "./Slides.css";
import { CardItem } from "../../index";
import { useTheme } from "@emotion/react";

export const Slides = ({ slidesData }) => {
  const theme = useTheme();
  return (
    <Box sx={{ py: theme.palette.sectionPaddingY.main, overflow: "hidden" }}>
      <Container maxWidth="xl">
        <Swiper
          spaceBetween={28}
          slidesPerView={1}
          slidesPerGroupSkip={1}
          breakpoints={{
            500: { slidesPerView: 2 },
            769: { slidesPerView: 3 },
            991: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="slider"
        >
          {slidesData.map((bookItem) => {
            return (
              <SwiperSlide key={bookItem.id} className="swiper-slides">
                <CardItem book={bookItem} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Box>
  );
};

Slides.propTypes = {
  slidesData: PropTypes.array,
};
