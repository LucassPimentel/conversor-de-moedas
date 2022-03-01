import styled from "styled-components";

import Button from "./Button";
import ValueConverted from "./ValueConverted";

import { useState } from "react";

const InputStyle = styled.input`
  border: none;
  padding: 15px;
  width: 400px;
`;

const Input = () => {
  const [value, setValue] = useState(0);

  const [valueConverted, setValueConverted] = useState(0);

  const handleConversion = () => {
    setValueConverted((value * 5.16).toFixed(2));
  };

  const handleChange = (e) => {
    {
      isNaN(e.target.value) || e.target.value < 0
        ? setValueConverted("Valor inválido")
        : setValue(e.target.value);
    }
  };
  return (
    <>
      <InputStyle
        type="number"
        placeholder="Digite o valor a ser convertido"
        onChange={handleChange}
      ></InputStyle>
      <Button onClick={handleConversion} />
      <ValueConverted value={valueConverted} />
    </>
  );
};

export default Input;
