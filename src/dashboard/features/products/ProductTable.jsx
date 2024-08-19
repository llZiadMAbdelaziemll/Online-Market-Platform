import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Pagination from "../../ui/Pagination";
import Menus from "../../ui/Menus";
import ProductRow from "./ProductRow";
import { useProducts } from "./useProducts";

import Empty from "../../ui/Empty";
const TableTopic = styled.div`
  font-size: 17px;
  letter-spacing: 0.0125em;
  font-weight: 500;
  padding: 10px 15px;
  color: var(--color-grey-500);
`;

function ProductTable() {
  const { isLoading, count, products } = useProducts();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!products.length) return <Empty resourceName="products" />;

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "date-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  let sortedProducts;
  if (field === "name" || field === "date") {
    if (direction === "asc") {
      sortedProducts = products?.sort((a, b) =>
        a[field].localeCompare(b[field])
      );
    }
    if (direction === "desc") {
      sortedProducts = products?.sort((a, b) =>
        b[field].localeCompare(a[field])
      );
    }
  }
  if (field === "price") {
    sortedProducts = products?.sort((a, b) => (a[field] - b[field]) * modifier);
  }
  console.log(products);
  return (
    <Menus>
      <Table columns="60px 150px 90px 80px 110px 90px 120px 160px 20px">
        <TableTopic>Products</TableTopic>
        <Table.Header>
          <div>Image</div>
          <div>Name</div>
          <div>price</div>

          <div>Offer</div>
          <div>Purchased</div>
          <div>Stock</div>
          <div>Status</div>
          <div>Date</div>
          <div>Action</div>
        </Table.Header>
        <Table.Body
          data={sortedProducts}
          render={(product) => (
            <ProductRow product={product} key={product.id} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default ProductTable;
