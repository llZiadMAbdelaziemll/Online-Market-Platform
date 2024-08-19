import styled, { css } from "styled-components";
import Stats from "./Stats";
import RevenueChart from "./RevenueChart";
import { useOrders } from "../orders/useOrders";
import MapChart from "./MapChart";
import PurchasedProductTable from "./PurchasedProductTable";
import Spinner from "../../ui/Spinner";
import OrderTable from "../orders/OrderTable";
import { useMonthOrders } from "../orders/useMonthOrders";
import { useLastMonthOrders } from "../orders/useLastMonthOrders";

const StyledCharts = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 8rem;
`;
const StyledCommonLayout = styled.div`
  display: grid;
  grid-template-columns: 78rem 37.3rem;
  gap: 1rem;
`;

function DashboardLayout() {
  const { orders, count: ordersCount, isLoading } = useOrders();
  const { orders: lastMonthOrders, isLoading: isLoading2 } =
    useLastMonthOrders();
  const { orders: monthOrders, isLoading: isLoading3 } = useMonthOrders();
  if (isLoading || isLoading2 || isLoading3) return <Spinner />;

  const revenue = orders?.reduce((acc, order) => order?.amount + acc, 0);
  const monthRevenue = monthOrders?.data?.reduce(
    (acc, revenue) => revenue?.amount + acc,
    0
  );
  const lastMonthRevenue = lastMonthOrders?.data?.reduce(
    (acc, revenue) => revenue?.amount + acc,
    0
  );

  const expenses = 4 * orders?.length;

  const orderMonthRate =
    ((monthOrders?.count - lastMonthOrders?.count) /
      (monthOrders?.count > lastMonthOrders?.count
        ? lastMonthOrders?.count
        : monthOrders?.count)) *
    100;
  const revenueMonthRate =
    ((monthRevenue - lastMonthRevenue) /
      (monthRevenue > lastMonthRevenue ? monthRevenue : lastMonthRevenue)) *
    100;
  console.log(revenueMonthRate);
  return (
    <>
      <Stats
        ordersCount={ordersCount}
        revenue={revenue}
        expenses={expenses}
        orderMonthRate={orderMonthRate}
        revenueMonthRate={revenueMonthRate}
      />
      <StyledCharts>
        <StyledCommonLayout>
          <RevenueChart revenue={revenue} expenses={expenses} />
          <PurchasedProductTable />
        </StyledCommonLayout>
        <StyledCommonLayout>
          <OrderTable />
          <MapChart />
        </StyledCommonLayout>
      </StyledCharts>
    </>
  );
}

export default DashboardLayout;
