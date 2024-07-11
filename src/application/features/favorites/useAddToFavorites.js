import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addToFavorites } from "../../../services/apiFavorites";

export function useAddToFavorites() {
  const queryClient = useQueryClient();

  const { mutate: addProductToFavorites, isLoading: isCreating } = useMutation({
    mutationFn: addToFavorites,
    onSuccess: () => {
      toast.success(" product get added successfully to favorites");
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, addProductToFavorites };
}
