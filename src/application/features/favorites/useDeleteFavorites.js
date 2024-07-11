import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteFromFavorites as deleteProductFromFavorites } from "../../../services/apiFavorites";

export function useDeleteFavorites() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteFromFavorites } = useMutation({
    mutationFn: deleteProductFromFavorites,
    onSuccess: () => {
      toast.success("Product successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteFromFavorites };
}
