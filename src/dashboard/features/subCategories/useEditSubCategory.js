import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditSubCategory } from "../../../services/apiSubCategories";
import { toast } from "react-hot-toast";

export function useEditSubCategory() {
  const queryClient = useQueryClient();

  const { mutate: editSubCategory, isLoading: isEditing } = useMutation({
    mutationFn: ({ newSubCategoryData, id }) =>
      createEditSubCategory(newSubCategoryData, id),
    onSuccess: () => {
      toast.success("Sub category successfully edited");
      queryClient.invalidateQueries({ queryKey: ["sub_categories"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editSubCategory };
}
