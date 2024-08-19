import React from "react";
import BreadCrumb from "../ui/BreadCrumb";
import Meta from "../ui/Meta";
import Spinner from "../ui/Spinner";
import { useCartProducts } from "../features/cart/useCartProducts";
import CartTable from "../features/cart/CartTable";
import Row from "../ui/Row";
import Button from "../ui/Button";
import styled from "styled-components";
import Container from "../ui/Container";
import { Link } from "react-router-dom";

const StyledCart = styled.section`
  margin: 10rem 0 5rem;
`;
const StyledLink = styled(Link)`
  text-decoration: underline;
  color: #444;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  letter-spacing: 0.8px;
`;
const Cart = () => {
  const { isLoading, products } = useCartProducts();
  if (isLoading) return <Spinner />;

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <StyledCart>
        <Container>
          <CartTable products={products} />
        </Container>
        {products?.length && (
          <Container>
            <Row>
              <StyledLink to="/shop">Continue Shopping</StyledLink>
              <Button to="/checkout">Check Out</Button>
            </Row>
          </Container>
        )}
      </StyledCart>
    </>
  );
};

export default Cart;
