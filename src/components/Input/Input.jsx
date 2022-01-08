import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./Input.styled";
import { actions } from "../../models/form";

const Input = ({ label, placeholder, name }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = useCallback((e) => setValue(e.target.value), [setValue]);

  const handleBlur = useCallback(
    (e) => {
      setValue(e.target.value);
      console.info(name, value);
      dispatch(actions.setForm({ prop: name, value }));
    },
    [dispatch, setValue, name, value]
  );

  return (
    <S.Root>
      <S.Label hasText={!!value}>{label}</S.Label>
      <S.Input
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </S.Root>
  );
};

export default Input;
