import React from "react";

import { mockFeedback } from "../../styles/helpers";
import * as S from "./Feedback.styled";
import FeedbackSlide from "./FeedbackSlide/FeedbackSlide";

const Feedback = () => {
  return (
    <S.Root>
      {mockFeedback.map((item, i) => (
        <FeedbackSlide
          avatar={item.avatar}
          info={item.info}
          content={item.content}
          key={i}
        />
      ))}
    </S.Root>
  );
};

export default Feedback;
