import React from "react";
import Menus from "../../../basicUi/Menus";
import Table from "../../ui/Table";
import styled from "styled-components";
import { format } from "date-fns";
import { useSubCategories } from "./useSubCategories";
import SubCategoriesRow from "./SubCategoriesRow";

const TableTopic = styled.div`
  font-size: 17px;
  letter-spacing: 0.0125em;
  font-weight: 500;
  padding: 10px 15px;
`;
const SubCategoryTable = () => {
  const { isLoading, error, subCategories } = useSubCategories();

  return (
    <Menus>
      <Table columns="75px 200px 70px 80px 90px 30px">
        <TableTopic>Sub Categories</TableTopic>
        <Table.Header>
          <div>Name</div>

          <div>Main Category</div>
          <div>Product</div>

          <div>Status</div>
          <div>Trending</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={subCategories}
          render={(subCategory) => (
            <SubCategoriesRow subCategory={subCategory} key={subCategory.id} />
          )}
        />
      </Table>
    </Menus>
  );
};

export default SubCategoryTable;
