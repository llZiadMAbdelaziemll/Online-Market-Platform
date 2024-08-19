import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../../services/apiOrders";

export function useOrders() {
  const {
    isLoading,
    data: { data: orders, count } = {},
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(),
  });

  return { isLoading, error, orders, count };
}