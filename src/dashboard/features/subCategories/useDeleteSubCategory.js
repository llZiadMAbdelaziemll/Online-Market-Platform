import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteSubCategory as deleteSubCategoryApi } from "../../../services/apiSubCategories";

export function useDeleteSubCategory() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteSubCategory } = useMutation({
    mutationFn: deleteSubCategoryApi,
    onSuccess: () => {
      toast.success("Sub category successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["sub_categories"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteSubCategory };
}
