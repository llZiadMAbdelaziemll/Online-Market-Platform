import React from "react";
import Menus from "../../../basicUi/Menus";
import Table from "../../ui/Table";
import styled from "styled-components";
import { format } from "date-fns";
import { useCategories } from "./useCategories";
import CategoriesRow from "./CategoriesRow";

const TableTopic = styled.div`
  font-size: 17px;
  letter-spacing: 0.0125em;
  font-weight: 500;
  padding: 10px 15px;
`;
const CategoryTable = () => {
  const { isLoading, error, categories } = useCategories();
  return (
    <Menus>
      <Table columns="75px 260px 70px 80px 90px 30px">
        <TableTopic>Operations</TableTopic>
        <Table.Header>
          <div>Name</div>

          <div>Sub Categories</div>
          <div>Product</div>

          <div>Status</div>
          <div>Trending</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={categories}
          render={(category) => (
            <CategoriesRow category={category} key={category.id} />
          )}
        />
      </Table>
    </Menus>
  );
};

export default CategoryTable;
