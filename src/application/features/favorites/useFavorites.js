import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../../../services/apiFavorites";
import { useUser } from "../auth/useUser";

export function useFavorites() {
  const { user } = useUser();

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["favorites", user?.id],
    queryFn: () => getFavorites(user?.id),
    retry: false,
  });

  return { isLoading, error, products };
}
