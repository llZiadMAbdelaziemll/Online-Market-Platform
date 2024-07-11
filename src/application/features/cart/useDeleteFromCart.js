import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteFromCart as deleteProductFromCart } from "../../../services/apiCart";

export function useDeleteFromCart() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteFromCart } = useMutation({
    mutationFn: deleteProductFromCart,
    onSuccess: () => {
      toast.success("Product successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteFromCart };
}
