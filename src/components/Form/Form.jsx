import React, { useCallback } from "react";
import Input from "../Input";
import Example from "./Example/Example";
import { useDispatch } from "react-redux";
import { ExampleBgs } from "../../styles/helpers";
import * as S from "./Form.styled";
import { actions } from "../../models/form";
import { useSelector } from "react-redux";
import { formDataSelector } from "../../models/form/selectors";

const Form = () => {
  const dispatch = useDispatch();

  const data = useSelector(formDataSelector);

  const handleChangeBg = useCallback(
    (bg) => {
      dispatch(actions.setBg(bg));
    },
    [dispatch]
  );

  const handleShowResult = useCallback(() => {
    dispatch(actions.showResult(data));
  }, [data, dispatch]);

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
        {ExampleBgs.map((item) => (
          <Example
            id={item.id}
            image={item.url}
            onChangeBg={handleChangeBg}
            key={item.id}
          />
        ))}
      </S.ExampleList>
      <button onClick={handleShowResult}>Show</button>
    </S.Root>
  );
};

export default Form;
