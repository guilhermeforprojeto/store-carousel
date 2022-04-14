/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";

const SContainer = styled.div`
  align-items: center;
  display: flex;
`;

const STextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 10px;
`;

const Slide3 = () => (
  <SContainer>
    <STextWrapper>
      <h1>Tenes simples e pratico</h1>
      <p>Tenes confortavel e e muito pratico.</p>
    </STextWrapper>
    <img
      width="400"
      height="400"
      src="https://images-americanas.b2w.io/produtos/1636825622/imagens/tenis-caminhada-icalcados-elastico-super-leve-confortavel-cinza-40/1636825631_1_large.jpg"
    />
  </SContainer>
);

export default Slide3;
