import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateSubCategoryForm from "../features/subCategories/CreateSubCategoryForm";
import SubCategoryTable from "../features/subCategories/SubCategoryTable";
const AddSubCategory = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Add Sub Category</Heading>
      </Row>

      <Row type="horizontal-top">
        <CreateSubCategoryForm />
        <SubCategoryTable />
      </Row>
    </>
  );
};

export default AddSubCategory;
