import React from "react";
import Input from "../Input";

import * as S from "./Form.styled";

const Form = () => {
  return (
    <S.Root>
      <S.Title>Контактная информация</S.Title>
      <Input label="Ваше имя" placeholder="Введите имя" />
      <Input label="Ваш email" placeholder="Введите email" />
      <S.Title>Детали заказа</S.Title>
      <Input label="Как подписать" placeholder="Теплые слова..." />
      <Input label="Место" placeholder="Введите место" />
      <Input label="Время" placeholder="Введите время" />
    </S.Root>
  );
};

export default Form;
