import { useQuery } from "@tanstack/react-query";
import { getCertainPeriodOrders } from "../../../services/apiOrders";

export function useLastMonthOrders() {
  const today = new Date();
  const firstDayOfLastMonth = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    1
  );
  const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0); // last day of the previous month

  const { isLoading, data: orders } = useQuery({
    queryFn: () =>
      getCertainPeriodOrders(firstDayOfLastMonth, lastDayOfLastMonth),
    queryKey: [
      "orders",
      `between-${firstDayOfLastMonth}-${lastDayOfLastMonth}`,
    ],
  });
  return { isLoading, orders };
}
