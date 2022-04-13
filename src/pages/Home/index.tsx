import React, { useState, useEffect } from "react";
import { MdAddShoppingCart } from "react-icons/md";

import { ProductList } from "./styles";
import { api } from "../../services/api";
import { formatPrice } from "../../util/format";
import { useCart } from "../../hooks/useCart";
import Carousel from "../../components/Carousel";
import SlideOne from "../../components/SlideOne";
import Slide2 from "../../components/SlideOne/Slide2";
import Slide3 from "../../components/SlideOne/Slide3";
import CheapestProduct from "../../components/CheapestProduct";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [chepPromo, setChepPromo] = useState<Product>();
  const { addProduct, cart } = useCart();
  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount };
    newSumAmount[product.id] = product.amount;
    return newSumAmount;
  }, {} as CartItemsAmount);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>("products");


      response.data.sort((a: Product, b: Product) => { return a.price - b.price; })
      const cheapestProduct = response.data[0]

      setProducts(response.data);
      setChepPromo(cheapestProduct as Product);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  return (
    <div>
      <Carousel>
        <SlideOne />
        <Slide2 />
        <Slide3 />

      </Carousel>
      <CheapestProduct product={chepPromo} />
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt="Tênis de Caminhada Leve Confortável" />
            <strong>{product.title}</strong>
            <span>{formatPrice(product.price)}</span>
            <button
              type="button"
              data-testid="add-product-button"
              onClick={() => handleAddProduct(product.id)}
            >
              <div data-testid="cart-product-quantity">
                <MdAddShoppingCart size={16} color="#FFF" />
                {cartItemsAmount[product.id] || 0}
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>


    </div>

  );
};

export default Home;
