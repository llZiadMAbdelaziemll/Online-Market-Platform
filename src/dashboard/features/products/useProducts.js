import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../../services/apiProducts";

export function useProducts() {
  const {
    isLoading,
    data: { data: products, count } = {},
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  return { isLoading, error, products, count };
}
