import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateCategoryForm from "../features/categories/CreateCategoryForm";
import CategoryTable from "../features/categories/CategoryTable";
const AddCategory = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Add Category</Heading>
      </Row>

      <Row type="horizontal-top">
        <CreateCategoryForm />
        <CategoryTable />
      </Row>
    </>
  );
};

export default AddCategory;
