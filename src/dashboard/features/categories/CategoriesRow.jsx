import styled from "styled-components";
import { format } from "date-fns";

import { formatCurrency } from "../../../utils/helpers";
import { useDeleteCategory } from "./useDeleteCategory";
import Modal from "../../../basicUi/Modal";
import Menus from "../../../basicUi/Menus";
import ConfirmDelete from "../../../basicUi/ConfirmDelete";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";

import Table from "../../ui/Table";
import { useCreateCategory } from "./useCreateCategory";
import CreateCategoryForm from "./CreateCategoryForm";
import { useUser } from "../../../application/features/auth/useUser";

const Img = styled.img`
  display: block;
  width: 33px;
  height: 33px;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;

  border-radius: 5px;
`;

const Field = styled.div`
  font-size: 14px;
  font-weight: 400;
  // color: var(--color-grey-600);
  // font-family: "Sono";
  text-transform: capitalize;
`;

const ChangedField = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-transform: upperCase;
`;

function CategoriesRow({ category }) {
  const { isDeleting, deleteCategory } = useDeleteCategory();
  const { user } = useUser();

  const {
    id: categoryId,
    name,
    product,
    slug,
    sortDesc,
    productTags,
    status,
    subCategories,
  } = category;

  return (
    <Table.Row>
      <Field>{name}</Field>
      <Field>{subCategories?.join(", ") || "no Subs"}</Field>
      <Field>{product}</Field>
      <ChangedField>{status}</ChangedField>

      {user?.user_metadata?.role === "admin" && (
        <div>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={categoryId} />

              <Menus.List id={categoryId}>
                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="edit">
                <CreateCategoryForm categoryToEdit={category} />
              </Modal.Window>

              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="categories"
                  disabled={isDeleting}
                  onConfirm={() => deleteCategory(categoryId)}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>
      )}
    </Table.Row>
  );
}

export default CategoriesRow;
