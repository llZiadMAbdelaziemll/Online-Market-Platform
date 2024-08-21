import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import ImageBox from "../../ui/ImageBox";
import Textarea from "../../ui/Textarea";
import { useCreateCategory } from "./useCreateCategory";
import { useEditCategory } from "./useEditCategory";
import { useAllProducts } from "../products/useAllProducts";

function CreateCategoryForm({ categoryToEdit = {}, onCloseModal }) {
  const { isCreating, createCategory } = useCreateCategory();
  const { isEditing, editCategory } = useEditCategory();
  const { products } = useAllProducts();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = categoryToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const handleCreateCategory = (data) => {
    console.log(data);

    const productCount = products?.filter(
      (product) => product.category.toLowerCase() == data?.name.toLowerCase()
    )?.length;
    if (isEditSession)
      editCategory(
        { newCategoryData: { ...data }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCategory(
        { ...data, subCategories: [], product: productCount, status: "active" },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  };
  return (
    <Form
      onSubmit={handleSubmit(handleCreateCategory)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Name">
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Slug">
        <Input
          type="text"
          id="slug"
          disabled={isWorking}
          {...register("slug", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Sort Description">
        <Textarea
          id="sortDesc"
          disabled={isWorking}
          {...register("sortDesc", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Full Description">
        <Textarea
          id="fullDesc"
          disabled={isWorking}
          {...register("fullDesc", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Product Tags ( Type and make comma to separate tags )">
        <Input
          type="text"
          id="productTags"
          disabled={isWorking}
          {...register("productTags", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Category" : "Submit"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCategoryForm;
