import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteProduct as deleteProductApi } from "../../../services/apiProducts";

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteProduct } = useMutation({
    mutationFn: deleteProductApi,
    onSuccess: () => {
      toast.success("Product successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteProduct };
}
