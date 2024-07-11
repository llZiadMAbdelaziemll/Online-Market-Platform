import { useQuery } from "@tanstack/react-query";
import { getCartProducts } from "../../../services/apiCart";
import { useUser } from "../auth/useUser";

export function useCartProducts() {
  const {
    user: { id },
  } = useUser();

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["cart", id],
    queryFn: () => getCartProducts(id),
    retry: false,
  });

  return { isLoading, error, products };
}
