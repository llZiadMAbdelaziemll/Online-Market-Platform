import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategories } from "../../../services/apiCategories";

export function useCategories() {
  const {
    isLoading,
    data: { data: categories, count } = {},
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  return { isLoading, error, categories, count };
}
