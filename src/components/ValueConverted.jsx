import styled from "styled-components";

const ValueConvertedStyle = styled.h1`
  background-color: white;
  padding: 15px;
`

const ValueConverted = ({ value, message }) => {
  return (
    <div>
      <ValueConvertedStyle>Valor convertido: $ {value}</ValueConvertedStyle>
    </div>
  );
};
export default ValueConverted;
