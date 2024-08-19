import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../services/apiProducts";

export function useAllProducts() {
  const { isLoading, data: { data: products, count } = {} } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts({ page: 0 }),
  });

  return { isLoading, products, count };
}
