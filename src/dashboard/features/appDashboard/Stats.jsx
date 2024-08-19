import { HiUser } from "react-icons/hi2";
import { FaShoppingBag } from "react-icons/fa";
import Stat from "./Stat";
import { CiDollar } from "react-icons/ci";
import { MdCurrencyExchange } from "react-icons/md";
import { formatCurrency } from "../../../utils/helpers";
import styled, { css } from "styled-components";
import { useLastMonthOrders } from "../orders/useLastMonthOrders";
import { useMonthOrders } from "../orders/useMonthOrders";

const StyledStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.4rem;
  margin-bottom: 2rem;
  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;

function Stats({
  ordersCount,
  revenue,
  expenses,
  arrow,
  orderMonthRate,
  revenueMonthRate,
}) {
  return (
    <StyledStats>
      <Stat
        arrow={arrow}
        title="Customers"
        color="red"
        icon={<HiUser />}
        value="10"
        rate={100}
      />
      <Stat
        title="Order"
        color="blue"
        icon={<FaShoppingBag />}
        value={ordersCount}
        arrow={arrow}
        rate={orderMonthRate}
      />
      <Stat
        title="Revenue"
        color="green"
        icon={<CiDollar />}
        value={formatCurrency(revenue)}
        arrow={arrow}
        rate={revenueMonthRate}
      />

      <Stat
        title="Expenses"
        color="yellow"
        icon={<MdCurrencyExchange />}
        value={formatCurrency(expenses)}
        arrow={arrow}
        rate={10}
      />
    </StyledStats>
  );
}

export default Stats;
