import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditProduct } from "../../../services/apiProducts";

export function useCreateProduct() {
  const queryClient = useQueryClient();

  const { mutate: createProduct, isLoading: isCreating } = useMutation({
    mutationFn: createEditProduct,
    onSuccess: () => {
      toast.success("New product successfully created");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createProduct };
}
