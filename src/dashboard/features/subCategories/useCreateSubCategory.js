import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditSubCategory } from "../../../services/apiSubCategories";

export function useCreateSubCategory() {
  const queryClient = useQueryClient();

  const { mutate: createSubCategory, isLoading: isCreating } = useMutation({
    mutationFn: createEditSubCategory,
    onSuccess: () => {
      toast.success("New sub category successfully created");
      queryClient.invalidateQueries({ queryKey: ["sub_categories"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createSubCategory };
}
