/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
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

const Slide2 = () => (
  <SContainer>
    <STextWrapper>
      <h1>
        Tenes detalhes vermelho
      </h1>
      <p>
        Tenes confortavel e com estilo para o dia a dia.
      </p>
    </STextWrapper>
    <img width="400" height="400" src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/10/E74-0492-010/E74-0492-010_zoom1.jpg?ts=1603739417" />

  </SContainer>
);


export default Slide2;