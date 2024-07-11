import React from "react";
import styled from "styled-components";
import Container from "../../ui/Container";
import { useCartProducts } from "./useCartProducts";
import { useDeleteFromCart } from "./useDeleteFromCart";
import Spinner from "../../../basicUi/Spinner";
import { formatCurrency } from "../../../utils/helpers";
import { MdDelete } from "react-icons/md";
import Empty from "../../../basicUi/Empty";

const StyledCart = styled.div`
  margin: 10rem 0 5rem;
`;

const StyledHeader = styled.div`
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-200);
  border: 1px solid #e9e9e9;
  text-transform: capitalize;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
  color: #444;
  background-color: #e9e9e9;
  display: grid;
  grid-template-columns: 518.08px 201.35px 284.4px 201.38px 90px;
  align-items: center;

  & div {
    padding: 1.5rem;
  }
  & div:nth-child(3) {
    text-align: center;
  }
`;

const StyledBody = styled.div`
  padding: 0.6rem 1.4rem;
  text-align: start;
  background-color: #f7f7f8;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-200);
  }
`;

const StyledRow = styled.div`
  padding: 2.5rem 0;
  text-align: start;
  display: grid;
  grid-template-columns: 518.08px 201.35px 284.4px 201.38px 90px;
  align-items: center;
  & div:nth-child(3),
  div:nth-child(5) {
    text-align: center;
    margin-right: 2rem;
  }
  div:nth-child(5) {
    cursor: pointer;
  }
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-200);
  }
`;

const Photo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & img {
    width: 60px;
    border: 1px solid #e9e9e9;
    border-radius: 5px;
  }
`;
export default function CartTable() {
  const { isLoading, products } = useCartProducts();
  const { isDeleting, deleteFromCart } = useDeleteFromCart();
  if (isLoading) return <Spinner />;
  if (products?.length === 0) return <Empty resource="products" />;

  return (
    <StyledCart>
      <Container>
        <StyledHeader>
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
          <div>Action</div>
        </StyledHeader>
        <StyledBody>
          {products ? (
            products?.map((product) => {
              return (
                <StyledRow key={product.id}>
                  <Photo>
                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/product/1.jpg" />
                    <div>{product?.name}</div>
                  </Photo>
                  <div>{formatCurrency(product?.price)}</div>
                  <div>{product?.quantity}</div>
                  <div>
                    {formatCurrency(product?.price * product?.quantity)}
                  </div>
                  <div
                    onClick={() => deleteFromCart(product?.id)}
                    disabled={isDeleting}
                  >
                    <MdDelete />
                  </div>
                </StyledRow>
              );
            })
          ) : (
            <Empty resource="products" />
          )}
        </StyledBody>
      </Container>
    </StyledCart>
  );
}
