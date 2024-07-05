import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Textarea from "../../ui/Textarea";
import { Controller, useForm } from "react-hook-form";
import Select from "../../../basicUi/Select";
import Modal from "../../../basicUi/Modal";
import Menus from "../../../basicUi/Menus";
import { useCategories } from "../categories/useCategories";
import { useCreateSubCategory } from "./useCreateSubCategory";
import { useEditSubCategory } from "./useEditSubCategory";
import { useEditCategory } from "../categories/useEditCategory";

function CreateSubCategoryForm({ categoryToEdit = {}, onCloseModal }) {
  const { categories } = useCategories();
  const { isCreating, createSubCategory } = useCreateSubCategory();
  const { isEditing, editSubCategory } = useEditSubCategory();
  const { isEditing: isEditing2, editCategory } = useEditCategory();

  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = categoryToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, control, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const handleCreateSubCategory = (data) => {
    console.log(data);
    const mainCategory = categories
      ?.filter((category) => {
        return category?.name == data?.mainCategory;
      })
      ?.at(0);

    if (isEditSession)
      editSubCategory(
        { newSubCategoryData: { ...data }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else {
      createSubCategory(
        { ...data, categoryId: mainCategory?.id },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
    editCategory({
      newCategoryData: {
        ...mainCategory,
        subCategories: [...mainCategory.subCategories, data.name],
      },
      id: mainCategory.id,
    });
  };
  return (
    <Form
      onSubmit={handleSubmit(handleCreateSubCategory)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Select Main Category">
        <Controller
          name="mainCategory" // The name should match the key in your data object
          control={control}
          defaultValue="Clothing" // Set the default value as needed
          render={({ field }) => {
            return (
              <Select
                disabled={isWorking}
                options={categories}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            );
          }}
        />
      </FormRow>
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
          {isEditSession ? "Edit Sub Category" : "Submit"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateSubCategoryForm;
