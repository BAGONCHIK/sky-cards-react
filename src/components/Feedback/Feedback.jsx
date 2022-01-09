import React from "react";

import { mockFeedback } from "../../styles/helpers";
import * as S from "./Feedback.styled";
import FeedbackSlide from "./FeedbackSlide/FeedbackSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

const Feedback = () => {
  return (
    <S.Root id="feedback">
      <S.Title>Отзывы о нашей работе</S.Title>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {mockFeedback.map((item, i) => (
          <SwiperSlide key={i}>
            <FeedbackSlide
              avatar={item.avatar}
              info={item.info}
              content={item.content}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Root>
  );
};

export default Feedback;
