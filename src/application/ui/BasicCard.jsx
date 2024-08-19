import React, { useState } from "react";
import styled from "styled-components";
import ReactImageZoom from "react-image-zoom";
import { useNavigate } from "react-router-dom";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import Small from "./Small";
import { formatCurrency } from "../../utils/helpers";
import StarRating from "../../utils/StarRating";
import { useUser } from "../features/auth/useUser";
import { useAddToFavorites } from "../features/favorites/useAddToFavorites";
import { useAddToCart } from "../features/cart/useAddToCart";
import Modal from "./Modal";
import ProductDetailsModal from "../features/product/ProductDetailsModal";
import { useFavorites } from "../features/favorites/useFavorites";
import { useCartProducts } from "../features/cart/useCartProducts";
import toast from "react-hot-toast";
import { useDeleteFavorites } from "../features/favorites/useDeleteFavorites";
import { useDeleteFromCart } from "../features/cart/useDeleteFromCart";

const TopHalf = styled.div`
  position: relative;
`;

const ImageDiv = styled.div`
  width: 19.8rem;
  height: 19.8rem;
  overflow: hidden;
  border: 1px solid #e9e9e9;
`;

const Icon = styled.div`
  height: 35px;
  width: 35px;
  position: absolute;
  bottom: -16px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f7f7f8;
  border: 1px solid #e9e9e9;
  background-color: aliceblue;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    color: var(--color-green-400);
    cursor: pointer;
  }

  &.exist {
    background-color: var(--color-green-400);
    & svg {
      color: white;
    }
  }
`;
const SidedIcons = styled.div`
  position: absolute;
  right: -3rem;
  top: 0;
  transition: 0.5s ease-in-out;

  & ${Icon}:first-child {
    top: 1rem;
  }
  & ${Icon}:last-child {
    top: 5.2rem;
  }
  & svg {
    color: black;
    cursor: pointer;
  }
`;
const StyledBasicCard = styled.div`
  width: 223.5px;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: center;
  gap: 2.2rem;
  padding: 1.2rem;
  border: 1px solid #e9e9e9;
  background-color: #fff;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  &:hover ${SidedIcons} {
    right: 3rem;
  }

  & small {
    text-transform: capitalize;
  }
`;

const BotHalf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;
const Description = styled.h5`
  font-size: 1.5rem;
  font-weight: 500;
  color: #2b2b2d;
  letter-spacing: 0.03rem;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: var(--color-green-400);
  }
`;

const Prices = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Price = styled.span`
  color: var(--color-green-400);
  font-size: 1.6rem;
  font-weight: 700;
`;
const BasicCard = ({ product, place = "" }) => {
  const [userRating, setUserRating] = useState("");
  const navigate = useNavigate();
  const { user, isAuthenticated } = useUser();
  const { addProductToFavorites } = useAddToFavorites();
  const { addProductToCart } = useAddToCart();
  const { products: favoriteProducts } = useFavorites();
  const { products: cartProducts } = useCartProducts();
  const { isDeleting, deleteFromFavorites } = useDeleteFavorites();
  const { deleteFromCart } = useDeleteFromCart();
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
  } = product;
  place;
  const isExistFavorites = favoriteProducts?.some(
    (p) => p?.product_id == productId || p?.id == productId
  );
  const isExistCart = cartProducts?.some(
    (p) =>
      p?.product_id == productId ||
      favoriteProducts?.some(
        (v) => v?.id == productId && p?.product_id == v?.product_id
      )
  );
  const productInFavorite = favoriteProducts?.filter(
    (p) => p?.product_id == productId
  );

  const productInCart = cartProducts?.filter((p) => {
    if (place === "wishlist") {
      return p?.product_id == product?.product_id;
    } else {
      return p?.product_id == productId;
    }
  });

  function handleAddCart(e) {
    e.preventDefault();

    if (!isAuthenticated) {
      navigate("/login");
    } else if (!isExistCart) {
      addProductToCart({
        image,
        name,
        quantity: 1,
        price,
        product_id: place === "wishlist" ? product?.product_id : productId,
        user_id: user?.id,
      });
    } else {
      deleteFromCart(productInCart?.at(0)?.id);
    }
  }

  function handleAddFavorites() {
    if (!isAuthenticated) navigate("/login");
    if (!isExistFavorites) {
      addProductToFavorites({
        image,
        category,
        review,
        fullDetails,
        price,
        offer,
        quantity: 1,

        product_id: productId,
        user_id: user?.id,
      });
    } else if (place === "wishlist") {
      deleteFromFavorites(productId);
    } else {
      deleteFromFavorites(productInFavorite?.at(0)?.id);
    }
  }
  return (
    <StyledBasicCard>
      <TopHalf>
        <ImageDiv
          onClick={(e) => {
            navigate(
              `${
                place === "wishlist"
                  ? `/product/${product?.product_id}`
                  : `/product/${productId}`
              }`
            );
          }}
        >
          {/* <Img src="./products/1.jpg" /> */}
          <ReactImageZoom
            width={198}
            height={198}
            zoomWidth={-100}
            zoomPosition="original"
            img={image?.at(0)}
          />
        </ImageDiv>
        <SidedIcons>
          <Icon
            onClick={(e) => {
              e.stopPropagation();
              handleAddFavorites();
            }}
            className={`${isExistFavorites ? "exist" : ""}`}
          >
            <FaRegHeart />
          </Icon>
          <Modal>
            <Modal.Open opens="details">
              <Icon
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <FaRegEye />
              </Icon>
            </Modal.Open>

            <Modal.Window name="details">
              <ProductDetailsModal productDetail={product} />
            </Modal.Window>
          </Modal>
          {/* <Icon>
            <FaRegEye />
          </Icon> */}
        </SidedIcons>
        <Icon
          onClick={(e) => {
            e.stopPropagation();
            handleAddCart(e);
          }}
          className={`${isExistCart ? "exist" : ""}`}
        >
          <RiShoppingBagLine />
        </Icon>
      </TopHalf>
      <BotHalf>
        <Small>{category}</Small>
        <StarRating size={15} onSetRating={setUserRating} color="#f5885f" />
        <Description>
          {fullDetails.length > 35
            ? `${fullDetails?.slice(0, 35)}..`
            : fullDetails}
        </Description>
        <Prices>
          <Price>{formatCurrency(price)}</Price>
          <Small type="price">{formatCurrency(offer)}</Small>
        </Prices>
      </BotHalf>
    </StyledBasicCard>
  );
};

export default BasicCard;
