import React from "react";
import { useFavorites } from "./useFavorites";
import Empty from "../../../basicUi/Empty";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import Container from "../../ui/Container";
import Row from "../../ui/Row";
import BasicCard from "../../ui/BasicCard";

const StyledList = styled.div`
  margin: 10rem 0;
`;
const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
export default function WishListCards() {
  const { isLoading, error, products } = useFavorites();

  if (isLoading) return <Spinner />;
  if (products.length === 0) return <Empty resource="wishlist" />;

  return (
    <StyledList>
      <Container>
        <Row>
          <List>
            {products?.map((product) => {
              return (
                <BasicCard
                  key={product.id}
                  product={product}
                  place="wishlist"
                />
              );
            })}
          </List>
        </Row>
      </Container>
    </StyledList>
  );
}
