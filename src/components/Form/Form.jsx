import React from "react";
import Input from "../Input";

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
      <Input name="date" label="Дата" placeholder="Введите дату" />
      <Input name="time" label="Время" placeholder="Введите время" />
    </S.Root>
  );
};

export default Form;
