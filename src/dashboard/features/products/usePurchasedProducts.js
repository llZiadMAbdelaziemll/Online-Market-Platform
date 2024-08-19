import { useQuery } from "@tanstack/react-query";
import { getPurchasedProducts } from "../../../services/apiProducts";

export function usePurchasedProducts() {
  const {
    isLoading,
    data: { data: products, count } = {},
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getPurchasedProducts(),
  });

  return { isLoading, error, products, count };
}
