import { useForm, Controller } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import ImageBox from "../../ui/ImageBox";
import Textarea from "../../ui/Textarea";
import Select from "../../../basicUi/Select";
import { getToday } from "../../../utils/helpers";
import { useCreateProduct } from "./useCreateProduct";
import { useCategories } from "../categories/useCategories";

function CreateProductForm() {
  const { createProduct } = useCreateProduct();
  const { categories } = useCategories();
  const { register, handleSubmit, reset, control, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const handleCreateProduct = (data) => {
    console.log(data);
    const { image1, image2, image3, image4, image5, image6, image7, ...other } =
      data;
    const image = [
      image1[0],
      image2[0],
      image3[0],
      image4[0],
      image5[0],
      image6[0],
      image7[0],
    ];
    console.log(image);

    createProduct(
      { ...other, image: image, date: getToday(), status: "Pending" },
      {
        onSuccess: (data) => {
          reset();
          // onCloseModal?.();
        },
      }
    );
  };
  return (
    <Form type="full" onSubmit={handleSubmit(handleCreateProduct)}>
      <FormRow size="layout">
        <FormRow>
          <ImageBox register={register} id="image1">
            <ImageBox.Img />
            <ImageBox.ImgInput />
          </ImageBox>
          <FormRow size="one-third">
            <ImageBox width="104" height="104" register={register} id="image2">
              <ImageBox.Img />
              <ImageBox.ImgInput />
            </ImageBox>
            <ImageBox width="104" height="104" register={register} id="image3">
              <ImageBox.Img />
              <ImageBox.ImgInput />
            </ImageBox>
            <ImageBox width="104" height="104" register={register} id="image4">
              <ImageBox.Img />
              <ImageBox.ImgInput />
            </ImageBox>
          </FormRow>
          <FormRow size="one-third">
            <ImageBox width="104" height="104" register={register} id="image5">
              <ImageBox.Img />
              <ImageBox.ImgInput />
            </ImageBox>
            <ImageBox width="104" height="104" register={register} id="image6">
              <ImageBox.Img />
              <ImageBox.ImgInput />
            </ImageBox>
            <ImageBox width="104" height="104" register={register} id="image7">
              <ImageBox.Img />
              <ImageBox.ImgInput />
            </ImageBox>
          </FormRow>
        </FormRow>
        <FormRow>
          <FormRow size="half">
            <FormRow label="Product name">
              <Input
                type="text"
                id="name"
                {...register("name", {
                  required: "This field is required",
                })}
              />
            </FormRow>

            <FormRow label="Select Category">
              <Controller
                name="category" // The name should match the key in your data object
                control={control}
                defaultValue="Clothing" // Set the default value as needed
                render={({ field }) => {
                  return (
                    <Select
                      options={categories}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  );
                }}
              />
            </FormRow>
          </FormRow>

          <FormRow type="vertical" label="Slug">
            <Input
              type="text"
              id="slug"
              {...register("slug", {
                required: "This field is required",
              })}
            />
          </FormRow>

          <FormRow label="Sort Description">
            <Textarea
              id="sortDescription"
              {...register("sortDescription", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow size="half">
            <FormRow label="Color">
              <Input type="text" id="color" />
            </FormRow>

            <FormRow label="Quantity">
              <Input type="number" defaultValue="1" id="quantity" />
            </FormRow>
          </FormRow>
          {/* <FormRow label="Size">
            <Input type="text" id="size" />
          </FormRow> */}

          <FormRow label="Price">
            <Input
              type="text"
              id="price"
              {...register("price", {
                required: "This field is required",
              })}
            />
          </FormRow>

          <FormRow label="Full Detail">
            <Textarea id="fullDetails" {...register("fullDetails")} />
          </FormRow>

          <FormRow label="Product Tags ( Type and make comma to separate tags )">
            <Input
              type="text"
              id="tag"
              {...register("tag", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </FormRow>
      </FormRow>

      <FormRow>
        <Button>Submit</Button>
      </FormRow>
    </Form>
  );
}

export default CreateProductForm;
