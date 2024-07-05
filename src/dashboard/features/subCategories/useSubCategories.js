import { useQuery } from "@tanstack/react-query";
import { getSubCategories } from "../../../services/apiSubCategories";

export function useSubCategories() {
  const {
    isLoading,
    data: { data: subCategories, count } = {},
    error,
  } = useQuery({
    queryKey: ["sub_categories"],
    queryFn: () => getSubCategories(),
  });

  return { isLoading, error, subCategories, count };
}
