import styled from "styled-components";
import { format } from "date-fns";

import { formatCurrency } from "../../../utils/helpers";
import Modal from "../../../basicUi/Modal";
import Menus from "../../../basicUi/Menus";
import ConfirmDelete from "../../../basicUi/ConfirmDelete";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";

import Table from "../../ui/Table";
import { useCreateSubCategory } from "./useCreateSubCategory";
import { useDeleteSubCategory } from "./useDeleteSubCategory";
import CreateSubCategoryForm from "./CreateSubCategoryForm";

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

function SubCategoriesRow({ subCategory }) {
  const { isDeleting, deleteSubCategory } = useDeleteSubCategory();
  const { isCreating, createSubCategory } = useCreateSubCategory();

  const {
    id: subCategoryId,
    name,
    product,
    trending,
    slug,
    sortDesc,
    fullDesc,
    productTags,
    status,
    mainCategory,
  } = subCategory;
  // function handleDuplicate() {
  //   createCategory({
  //     name: `Copy of ${name}`,
  //     product,
  //     trending,
  //     slug,
  //     sortDesc,
  //     productTags,
  //     status,
  //     subCategories,
  //   });
  // }

  return (
    <Table.Row>
      <Field>{name}</Field>
      <Field>{mainCategory}</Field>
      <Field>{product}</Field>
      <ChangedField>{status}</ChangedField>
      <Field>{trending}</Field>

      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={subCategoryId} />

            <Menus.List id={subCategoryId}>
              {/* <Menus.Button
                icon={<FiSettings />}
                onClick={handleDuplicate}
                disabled={isCreating}
              >
                Duplicate
              </Menus.Button> */}
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateSubCategoryForm categoryToEdit={subCategory} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="subCategories"
                disabled={isDeleting}
                onConfirm={() => deleteSubCategory(subCategoryId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default SubCategoriesRow;
