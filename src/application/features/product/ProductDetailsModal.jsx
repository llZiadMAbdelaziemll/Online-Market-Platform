import React, { useState } from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { formatCurrency } from "../../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../dashboard/features/products/useProducts";
import { useUser } from "../auth/useUser";
import { useAddToCart } from "../cart/useAddToCart";
import { useAddToFavorites } from "../favorites/useAddToFavorites";
import StarRating from "../../../utils/StarRating";
import Small from "../../ui/Small";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import { useCartProducts } from "../cart/useCartProducts";
import { useFavorites } from "../favorites/useFavorites";
import toast from "react-hot-toast";
import { useDeleteFavorites } from "../favorites/useDeleteFavorites";

const StyledModal = styled.div`
  /* padding: 2.4rem; */
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: #fff;
`;

const Left = styled.div`
  width: 36rem;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const Right = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  gap: 2rem;
  & h2 {
    color: #2b2b2d;
    font-size: 22px;
    font-weight: 600;
  }

  & > p {
    color: #7a7a7a;
    font-size: 1.4rem;
    line-height: 1.75;
    padding-bottom: 2rem;
    margin-bottom: 0;
    border-bottom: 1px solid #e9e9e9;
  }
`;
const Price = styled.div`
  display: flex;
  align-items: end;
  gap: 0.6rem;

  & h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 0;
    color: var(--color-green-400);
  }

  & small {
    font-size: 1.6rem;
  }
`;
const BuyOperations = styled.div`
  display: flex;
  align-items: center;
  & form {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    & input[type="number"] {
      height: 40px;
      width: 40px;
      text-align: center;
      border: 1px solid #e9e9e9;
      border-radius: 5px;
    }
    & input[type="number"]:focus {
      outline: 2px solid #2b2b2d !important;
    }
    & a {
      margin-top: 0;
    }
  }
`;

const OperationButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  & button {
    height: 18px;
    width: 18px;
    background-color: #fff;
    border: 1px solid #e9e9e9;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease 0s;

  & svg {
    color: var(--color-green-900);
    font-size: 1.9rem;
  }
  &:hover {
    background-color: var(--color-green-400);
    svg {
      color: var(--color-green-0);
    }
  }
  &.exist {
    background-color: var(--color-green-400);
    & svg {
      color: white;
    }
  }
`;
export default function ProductDetailsModal({ productDetail }) {
  const [input, setInput] = useState(1);
  const navigate = useNavigate();
  const { user, isAuthenticated } = useUser();
  const { addProductToCart } = useAddToCart();
  const { addProductToFavorites } = useAddToFavorites();
  const { products: favoriteProducts } = useFavorites();
  const { products: cartProducts } = useCartProducts();
  const { isDeleting, deleteFromFavorites } = useDeleteFavorites();

  const {
    id: productId,
    image,
    name,
    stock,
    purchased,
    sortDescription,
    category,
    fullDetails,
    review,
    slug,
    color,
    price,
    offer,
  } = productDetail;
  const offerValue = price * offer;
  const isExistFavorites = favoriteProducts?.some(
    (p) => p?.product_id == productId
  );
  const isExistCart = cartProducts?.some((p) => p?.product_id == productId);
  const productInFavorite = favoriteProducts?.filter(
    (p) => p?.product_id == productId
  );
  function handleAddCart(e) {
    e.preventDefault();

    if (!isAuthenticated) navigate("/login");
    if (!isExistCart) {
      addProductToCart({
        image,
        name,
        quantity: input,
        price,
        product_id: productId,
        user_id: user?.id,
      });
    } else {
      toast.error("The product already exists in Cart");
    }
  }

  function handleAddFavorites(data) {
    data.preventDefault();
    const quantity = data?.quantity ? quantity : 1;
    if (!isAuthenticated) navigate("/login");
    if (!isExistFavorites) {
      addProductToFavorites({
        image,
        category,
        review,
        fullDetails,
        price,
        offer,
        quantity,

        product_id: productId,
        user_id: user?.id,
      });
    } else {
      deleteFromFavorites(productInFavorite?.at(0)?.id);
    }
  }
  return (
    <StyledModal>
      <Left>
        <img src={image?.at(2)} />
      </Left>

      <Right>
        <Heading as="h2">
          {name} - {sortDescription}
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus sequi unde libero ea odio aperiam ex alias quod?
          Tempora, magnam? Reprehenderit incidunt repudiandae officia eius a
          ullam. Recusandae quia aliquid ratione est quis voluptatibus magni
          porro a. Necessitatibus, tenetur ducimus.
        </p>
        <StarRating size={19} defaultRating={review} color="#f5885f" />

        <Price>
          <h2>{formatCurrency(price)}</h2>
          <Small type="price">{formatCurrency(offerValue)}</Small>
        </Price>

        <BuyOperations>
          <form>
            <input
              type="number"
              defaultValue="1"
              max="100"
              value={input}
              onChange={(e) => setInput(+e.target.value)}
            />
            <OperationButtons>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setInput(() => {
                    if (input == stock) return input;
                    else return input + 1;
                  });
                }}
              >
                +
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setInput(() => {
                    if (input == 1) return input;
                    else return input - 1;
                  });
                }}
              >
                -
              </button>
            </OperationButtons>
            <Button onClick={handleAddCart}>Add To Cart</Button>

            <Icon className={`${isExistFavorites ? "exist" : ""}`}>
              <FaRegHeart onClick={handleAddFavorites} />
            </Icon>
          </form>
        </BuyOperations>
      </Right>
    </StyledModal>
  );
}
