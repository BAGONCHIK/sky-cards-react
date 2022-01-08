import React, { useCallback, useState } from "react";

import * as S from "./Input.styled";

const Input = ({ label, placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback((e) => setValue(e.target.value), [setValue]);

  return (
    <S.Root>
      <S.Label hasText={!!value}>{label}</S.Label>
      <S.Input
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </S.Root>
  );
};

export default Input;
