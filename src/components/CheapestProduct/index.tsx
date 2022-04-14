/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import { formatPrice } from "../../util/format";




interface Product {
  product?: {
    id: number;
    title: string;
    price: number;
    image: string;
  }

}

export default function CheapestProduct(props: Product): JSX.Element {
  const SContainer = styled.div`
    align-items: center;
    display: flex;
    margin: 20px 0px;
  `;

  const STextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 44px;
    color: white;
  `;

  return (
    <SContainer>
      <STextWrapper>
        <h4>Produto mais barato da loja, Aproveite agora!</h4>
        <h1>{props.product?.title}</h1>
        <p>{formatPrice(props.product?.price || 0)}</p>
      </STextWrapper>
      <img
        width="250"
        height="250"
        src={props.product?.image}
      />
    </SContainer>
  );
}
