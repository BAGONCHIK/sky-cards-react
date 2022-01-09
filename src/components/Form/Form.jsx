import React from "react";
import Input from "../Input";
import Example from "./Example/Example";
import { images } from "../../assets/images";

import * as S from "./Form.styled";

const Form = () => {
  return (
    <S.Root>
      <S.Title>Контактная информация</S.Title>
      <Input name="name" label="Ваше имя" placeholder="Введите имя" />
      <Input name="email" label="Ваш email" placeholder="Введите email" />
      <S.Title>Детали заказа</S.Title>
      <Input
        name="content"
        label="Как подписать"
        placeholder="Теплые слова..."
      />
      <Input name="place" label="Место" placeholder="Введите место" />
      <Input name="date" label="Дата" placeholder="Введите дату" type="date" />
      <Input
        name="time"
        label="Время"
        placeholder="Введите время"
        type="time"
      />
      <S.ExampleList>
        <Example image={images.Bg0} />
        <Example image={images.Bg1} />
        <Example image={images.Bg2} />
        <Example image={images.Bg3} />
        <Example image={images.Bg4} />
      </S.ExampleList>
    </S.Root>
  );
};

export default Form;
