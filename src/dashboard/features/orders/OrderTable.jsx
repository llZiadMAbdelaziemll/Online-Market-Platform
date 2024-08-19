import styled from "styled-components";
import { useRecentOrders } from "./useRecentOrders";

import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import OrderRow from "./OrderRow";
import Empty from "../../ui/Empty";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-100);
`;
const TableTopic = styled.div`
  font-size: 17px;
  letter-spacing: 0.0125em;
  font-weight: 500;
  padding: 10px 15px;
  color: var(--color-grey-500);
`;

function OrderTable() {
  const { isLoading, orders } = useRecentOrders();

  if (isLoading) return <Spinner />;
  if (!orders?.length) return <Empty resourceName="orders" />;

  return (
    <StyledTable>
      <Menus>
        <Table columns="26px 50px 110px 128px 80px 93px 128px">
          <TableTopic>Recent Orders</TableTopic>
          <Table.Header>
            <div>ID</div>
            <div>Image</div>
            <div>Name</div>
            <div>Customer</div>

            <div>Amount</div>
            <div>Status</div>
            <div>Vendor</div>
          </Table.Header>
          <Table.Body
            data={orders}
            render={(order) => <OrderRow order={order} key={order.id} />}
          />
        </Table>
      </Menus>
    </StyledTable>
  );
}

export default OrderTable;
