import React from "react";
import BreadCrumb from "../ui/BreadCrumb";
import Meta from "../ui/Meta";
import styled from "styled-components";
import Container from "../ui/Container";
import Row from "../ui/Row";
import BasicCard from "../ui/BasicCard";
import Filters from "../features/shop/Filters";
import { useProducts } from "../../dashboard/features/products/useProducts";
import { useSearchParams } from "react-router-dom";

const StyledShop = styled.section`
  margin: 10rem 0;
  & div.alignedTopRow {
    align-items: start;
    gap: 3.5rem;
  }
`;

const FilterSide = styled.div`
  padding: 2.4rem;
  background-color: #f7f7f8;
  font-size: 1.4rem;
  color: #2b2b2d;
  min-width: 30.6rem;
  max-width: 30.6rem;
`;
const ProductsSide = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Shop = () => {
  const { products } = useProducts();
  const [searchParams] = useSearchParams();

  // 1) FILTER
  const filteredProducts = products?.filter(
    (product) =>
      (searchParams.getAll("category").length === 0 ||
        searchParams
          .getAll("category")
          .includes(product.category.toLowerCase())) &&
      (searchParams.getAll("color").length === 0 ||
        searchParams.getAll("color").includes(product.color?.toLowerCase())) &&
      (!searchParams.get("minPrice") ||
        product.price >= parseInt(searchParams.get("minPrice"))) &&
      (!searchParams.get("maxPrice") ||
        product.price <= parseInt(searchParams.get("maxPrice"))) &&
      (!searchParams.get("tag") ||
        product?.tag
          .map((tag) => tag?.toLowerCase())
          .some((tag) => searchParams.get("tag")?.includes(tag)))
  );
  //  const filterValue = searchParams.get("category") || "all";

  //  let filteredProducts;
  //  if (filterValue === "all") filteredProducts = doctors;
  //  if (filterValue === "dentist")
  //    filteredProducts = products.filter(
  //      (doctor) => doctor.department === "Dentist"
  //    );

  //  if (filterValue === "cardiology")
  //    filteredProducts = products.filter(
  //      (doctor) => doctor.department === "Cardiology"
  //    );
  //  if (filterValue === "neurology")
  //    filteredProducts = products.filter(
  //      (doctor) => doctor.department === "Neurology"
  //    );
  return (
    <>
      <Meta title={"Shop"} />
      <BreadCrumb title="Shop" />
      <StyledShop>
        <Container>
          <Row className="alignedTopRow">
            <FilterSide>
              <Filters />
            </FilterSide>
            <ProductsSide>
              {filteredProducts?.map((product) => {
                return <BasicCard key={product.id} product={product} />;
              })}
              {/* <BasicCard />
              <BasicCard /> */}
            </ProductsSide>
          </Row>
        </Container>
      </StyledShop>
    </>
  );
};

export default Shop;
