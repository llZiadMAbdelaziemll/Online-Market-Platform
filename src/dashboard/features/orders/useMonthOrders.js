import { useQuery } from "@tanstack/react-query";
import { getCertainPeriodOrders } from "../../../services/apiOrders";

export function useMonthOrders() {
  const today = new Date();
  const firstDayOfThisMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  );

  const { isLoading, data: orders } = useQuery({
    queryFn: () => getCertainPeriodOrders(firstDayOfThisMonth, today),
    queryKey: ["orders", `between-${firstDayOfThisMonth}-${today}`],
  });

  return { isLoading, orders };
}
