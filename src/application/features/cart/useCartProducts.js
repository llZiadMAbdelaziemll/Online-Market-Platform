import { useQuery } from "@tanstack/react-query";
import { getCartProducts } from "../../../services/apiCart";
import { useUser } from "../auth/useUser";

export function useCartProducts() {
  const { user } = useUser();

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["cart", user?.id],
    queryFn: () => getCartProducts(user?.id),
    retry: false,
  });

  return { isLoading, error, products };
}
