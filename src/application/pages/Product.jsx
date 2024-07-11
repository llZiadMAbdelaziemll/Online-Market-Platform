import React, { useState } from "react";
import styled from "styled-components";
import { useProducts } from "../../dashboard/features/products/useProducts";
import { useProduct } from "../../dashboard/features/products/useProduct";
import SectionHeader from "../ui/SectionHeader";
import Container from "../ui/Container";
import Row from "../ui/Row";
import BasicCard from "../ui/BasicCard";
import Meta from "../ui/Meta";
import BreadCrumb from "../ui/BreadCrumb";
import Heading from "../ui/Heading";
import StarRating from "../../utils/StarRating";
import Small from "../ui/Small";
import Button from "../ui/Button";
import IconLink from "../ui/IconLink";
import ButtonIcon from "../ui/ButtonIcon";
import Spinner from "../../basicUi/Spinner";
import Empty from "../../basicUi/Empty";
import { formatCurrency } from "../../utils/helpers";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { useUser } from "../features/auth/useUser";
import { useNavigate } from "react-router-dom";
import { useAddToCart } from "../features/cart/useAddToCart";
import { useAddToFavorites } from "../features/favorites/useAddToFavorites";

const StyledProduct = styled.section`
  margin: 10rem 0;
  & div.topSidedRow {
    align-items: start;
    gap: 2.6rem;
  }
`;

const PopularProducts = styled.div`
  margin: 10rem 0;
`;
const ImageSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;
const MiniImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & img {
    min-width: 6.84rem;
    min-height: 6.84rem;
    border: 1px solid #e9e9e9;
    background-color: #f7f7f8;
    border-radius: 5px;
    cursor: crosshair;
  }
`;
const Img = styled.img`
  width: 41.44rem;
  height: 41.44rem;
  border: 1px solid #e9e9e9;
  background-color: #f7f7f8;
  border-radius: 5px;
  cursor: crosshair;
`;
const InformationSide = styled.div`
  max-width: 85.59rem;
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
    border-bottom: 1px solid #e9e9e9;
  }
`;
const Products = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SugaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: start;
  gap: 1.2rem;
  padding: 1.4rem 0;
`;
const Label = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: start; */
  & p {
    margin-bottom: 0;
  }
`;

const Topic = styled.p`
  min-width: 100px;
  /* margin-right: 10px; */
  color: #2b2b2d;
  font-weight: 500;
  text-transform: capitalize;
`;

const Value = styled.p`
  padding-left: 0.9rem;
  color: #777;
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
`;
export default function Product() {
  const [input, setInput] = useState(1);
  const navigate = useNavigate();
  const { products } = useProducts();

  const { product, isLoading } = useProduct();
  const { user, isAuthenticated } = useUser();
  const { addProductToCart } = useAddToCart();
  const { addProductToFavorites } = useAddToFavorites();
  console.log(product);
  if (isLoading) return <Spinner />;
  if (!product) return <Empty resourceName="product" />;
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

  const offerValue = price * offer;

  function handleAddCart(e) {
    e.preventDefault();

    if (!isAuthenticated) navigate("/login");
    else {
      addProductToCart({
        image,
        name,
        quantity: input,
        price,
        product_id: productId,
        user_id: user?.id,
      });
    }
  }

  function handleAddFavorites(data) {
    data.preventDefault();
    const quantity = data?.quantity ? quantity : 1;
    if (!isAuthenticated) navigate("/login");
    else {
      addProductToFavorites({
        category,
        review,
        fullDetails,
        price,
        offer,
        quantity,

        product_id: productId,
        user_id: user?.id,
      });
    }
  }
  return (
    <>
      <Meta title={"Product"} />
      <BreadCrumb title="Product" />
      <StyledProduct>
        <Container>
          <Row className="topSidedRow">
            <ImageSide>
              <Img src={image?.at(0)} />
              <MiniImages>
                <img src={image?.at(1)} />
                <img src={image?.at(2)} />
                <img src={image?.at(3)} />
                <img src={image?.at(4)} />
                <img src={image?.at(5)} />
              </MiniImages>
            </ImageSide>
            <InformationSide>
              <Heading as="h2">
                {name} - {sortDescription}
              </Heading>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus sequi unde libero ea odio aperiam ex alias quod?
                Tempora, magnam? Reprehenderit incidunt repudiandae officia eius
                a ullam. Recusandae quia aliquid ratione est quis voluptatibus
                magni porro a. Necessitatibus, tenetur ducimus.
              </p>
              <StarRating size={16} defaultRating={review} color="#f5885f" />
              <SugaryInfo>
                <Label>
                  <Topic>category</Topic> : <Value>{category}</Value>
                </Label>
                <Label>
                  <Topic>slug</Topic> : <Value>{slug}</Value>
                </Label>
                <Label>
                  <Topic>purchased</Topic> : <Value>{purchased}</Value>
                </Label>
                <Label>
                  <Topic>stock</Topic> : <Value>{stock}</Value>
                </Label>
                <Label>
                  <Topic>color</Topic> : <Value>{color}</Value>
                </Label>
                <Label>
                  <Topic>price</Topic> : <Value>{price}</Value>
                </Label>
              </SugaryInfo>
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

                  <Icon>
                    <FaRegHeart onClick={handleAddFavorites} />
                  </Icon>
                </form>
              </BuyOperations>
            </InformationSide>
          </Row>
        </Container>
        <PopularProducts>
          <Container>
            <Row>
              <SectionHeader>
                <SectionHeader.HeaderHead>
                  Popular Products
                </SectionHeader.HeaderHead>
                <SectionHeader.HeaderDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore lacus vel facilisis.
                </SectionHeader.HeaderDescription>
              </SectionHeader>
            </Row>
          </Container>
          <Container>
            <Row>
              <Products>
                {products?.slice(0, 5).map((product) => {
                  return (
                    <BasicCard
                      key={product.id}
                      product={product}
                      place="product"
                    />
                  );
                })}
              </Products>
            </Row>
          </Container>
        </PopularProducts>
      </StyledProduct>
    </>
  );
}
