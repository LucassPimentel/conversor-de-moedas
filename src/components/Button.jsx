import styled from "styled-components";

const BtnStyle = styled.button`
  margin-left: 1em;
  padding: 15px;
  cursor: pointer;
  transition: 0.6s;
  background-color: #dcdcdc;
  border: 1px solid black;

  &:hover {
      background-color: white;
  }
`;

const Button = ({ onClick }) => {
  return <BtnStyle onClick={onClick}>Converter</BtnStyle>;
};

export default Button;
