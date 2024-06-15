import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Textarea from "../../ui/Textarea";

function CreateSubCategoryForm() {
  return (
    <Form>
      <FormRow label="Main Category">
        <Input type="text" id="name" />
      </FormRow>
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

export default CreateSubCategoryForm;
