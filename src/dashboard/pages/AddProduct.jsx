import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateProductForm from "../features/products/CreateProductForm";
const AddProduct = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Add Product</Heading>
      </Row>

      <Row>
        <CreateProductForm />
      </Row>
    </>
  );
};

export default AddProduct;
