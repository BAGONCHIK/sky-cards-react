import React from "react";
import { images } from "../../assets/images";

import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.Root>
      <S.FooterLogo src={images.LogoNoBg} />
      <S.Buttons>
        <S.Button href="/home#">Home</S.Button>
        <S.Button href="mailto:skycards@mail.ru">Связаться с нами</S.Button>
      </S.Buttons>
      <S.BigText>
        Создаем карты звёздного неба с самым разным оформлением и индивидуальным
        дизайном. Мы ценим каждого своего клиента, а поэтому подготовили для Вас
        бесплатную доставку. Надеемся, что наши картины привнесут в вашу жизнь
        немного тепла и красоты.
      </S.BigText>
      <S.Copyright>
        Copyright © 2022 SkyCards, Inc. Все права защищены.
      </S.Copyright>
    </S.Root>
  );
};

export default Footer;
