import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../../../services/apiFavorites";
import { useUser } from "../auth/useUser";

export function useFavorites() {
  const {
    user: { id },
  } = useUser();

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["favorites", id],
    queryFn: () => getFavorites(id),
    retry: false,
  });

  return { isLoading, error, products };
}
