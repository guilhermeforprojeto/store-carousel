/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
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

const SlideOne = () => (
  <SContainer>
    <STextWrapper>
      <h1>
        Tênis de Caminhada
      </h1>
      <p>
        Este tenes e arejado e bom para caminhadas longas.
      </p>
    </STextWrapper>
    <img width="400" height="400" src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/04/E74-0492-304/E74-0492-304_zoom1.jpg?ts=1603739430&ims=544x" />

  </SContainer>
);


export default SlideOne;