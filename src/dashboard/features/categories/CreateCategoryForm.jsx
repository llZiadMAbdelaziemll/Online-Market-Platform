import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import ImageBox from "../../ui/ImageBox";
import Textarea from "../../ui/Textarea";

function CreateCategoryForm() {
  return (
    <Form>
      <FormRow label="Name">
        <Input type="text" id="name" />
      </FormRow>

      <FormRow label="Slug">
        <Input type="text" id="specialization" />
      </FormRow>
      <FormRow label="Sort Description">
        <Textarea />
      </FormRow>
      <FormRow label="Full Description">
        <Textarea />
      </FormRow>

      <FormRow label="Product Tags ( Type and make comma to separate tags )">
        <Input type="text" id="joiningDate" />
      </FormRow>

      <FormRow>
        <Button>Submit</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCategoryForm;
