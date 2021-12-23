import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
  text-transform: uppercase;
  padding: 10px;
`;
export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
export const ButtonContainer = styled.section`
  text-align: right;
  margin: 20px 0;

  button{
      margin: 0 20px;
      background: #442222;
      color: white;
      text-transform: upperase;
      padding: 10px;
      width: 100px;
      border-style:none;
      border-radius: 20px;
      cursor: pointer;
  }
`;
