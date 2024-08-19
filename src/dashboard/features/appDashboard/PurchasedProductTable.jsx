import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import PurchasedProductRow from "./PurchasedProductRow";
import Empty from "../../ui/Empty";
import { usePurchasedProducts } from "../products/usePurchasedProducts";

const StyledTable = styled.div`
  height: 41.6rem;
  border: 1px solid var(--color-grey-100);

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const TableTopic = styled.div`
  font-size: 17px;
  letter-spacing: 0.0125em;
  font-weight: 500;
  padding: 10px 15px;
  color: var(--color-grey-500);
  border: 1px solid var(--color-grey-100);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function PurchasedProductTable() {
  const { isLoading, products } = usePurchasedProducts();
  console.log(products);
  if (isLoading) return <Spinner />;
  if (!products?.length) return <Empty resourceName="orders" />;

  return (
    <StyledTable>
      <Menus>
        <Table columns=" 40px 90px 50px 50px ">
          <TableTopic>Top Products</TableTopic>
          <Table.Header>
            <div>Image</div>
            <div>Name</div>
            <div>Orders</div>
            <div>Total</div>
          </Table.Header>
          <Table.Body
            data={products}
            render={(product) => (
              <PurchasedProductRow product={product} key={product.id} />
            )}
          />
        </Table>
      </Menus>
    </StyledTable>
  );
}

export default PurchasedProductTable;
