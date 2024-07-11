import React from "react";
import Meta from "../ui/Meta";
import BreadCrumb from "../ui/BreadCrumb";
import styled from "styled-components";
import Container from "../ui/Container";
import Row from "../ui/Row";
import { useFavorites } from "../features/favorites/useFavorites";
import BasicCard from "../ui/BasicCard";
import Spinner from "../../basicUi/Spinner";
import Empty from "../../basicUi/Empty";

const StyledList = styled.div`
  margin: 10rem 0;
`;
const List = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
const WishList = () => {
  const { isLoading, error, products } = useFavorites();

  if (isLoading) return <Spinner />;
  if (products.length === 0) return <Empty resource="wishlist" />;
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />

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
    </>
  );
};

export default WishList;
