import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addToCart } from "../../../services/apiCart";

export function useAddToCart() {
  const queryClient = useQueryClient();

  const { mutate: addProductToCart, isLoading: isCreating } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      toast.success(" product get added successfully to cart");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, addProductToCart };
}
