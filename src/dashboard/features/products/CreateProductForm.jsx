import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import ImageBox from "../../ui/ImageBox";
import Textarea from "../../ui/Textarea";

function CreateProductForm() {
  return (
    <Form type="full">
      <FormRow size="layout">
        <FormRow>
          <ImageBox>
            <ImageBox.Img />
            <ImageBox.ImgInput />
          </ImageBox>
          <FormRow size="one-third">
            <ImageBox width="104" height="104">
              <ImageBox.Img />
              <ImageBox.ImgInput />
            </ImageBox>
            <ImageBox width="104" height="104">
              <ImageBox.Img />
              <ImageBox.ImgInput />
            </ImageBox>
            <ImageBox width="104" height="104">
              <ImageBox.Img />
              <ImageBox.ImgInput />
            </ImageBox>
          </FormRow>
          <FormRow size="one-third">
            <ImageBox width="104" height="104">
              <ImageBox.Img />
              <ImageBox.ImgInput />
            </ImageBox>
            <ImageBox width="104" height="104">
              <ImageBox.Img />
              <ImageBox.ImgInput />
            </ImageBox>
            <ImageBox width="104" height="104">
              <ImageBox.Img />
              <ImageBox.ImgInput />
            </ImageBox>
          </FormRow>
        </FormRow>
        <FormRow>
          <FormRow size="half">
            <FormRow label="Product name">
              <Input type="text" id="name" />
            </FormRow>

            <FormRow label="Select Categories">
              <Input type="text" id="department" />
            </FormRow>
          </FormRow>

          <FormRow type="vertical" label="Slug">
            <Input type="text" id="specialization" />
          </FormRow>

          <FormRow label="Sort Description">
            <Textarea />
          </FormRow>

          <FormRow label="Colors">
            <Input type="text" id="mobile" />
          </FormRow>
          <FormRow label="Size">
            <Input type="text" id="email" />
          </FormRow>

          <FormRow label="Full Detail">
            <Textarea />
          </FormRow>

          <FormRow label="Product Tags ( Type and make comma to separate tags )">
            <Input type="text" id="joiningDate" />
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
