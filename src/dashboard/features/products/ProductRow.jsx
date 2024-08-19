import styled from "styled-components";
import { format } from "date-fns";

import { formatCurrency } from "../../../utils/helpers";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";

import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteProduct } from "./useDeleteProduct";
import CreateProductForm from "./CreateProductForm";

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
  text-transform: capitalize;
`;

function ProductRow({ product }) {
  const { isDeleting, deleteProduct } = useDeleteProduct();
  const {
    id: productId,
    image,
    name,
    offer,
    price,
    purchased,
    date,
    status,
    stock,
  } = product;
  // function handleDuplicate() {
  //   createDoctor({
  //     name: `Copy of ${name}`,
  //     department,
  //     specialization,
  //     degree,
  //     mobile,
  //     email,
  //     price,
  //     joiningDate,
  //   });
  // }

  return (
    <Table.Row>
      <Img src={image[0]} alt="notfound" />
      <Field>{name}</Field>
      <Field>{formatCurrency(price)}</Field>
      <Field>{offer || "-"}</Field>
      <Field>{purchased || 0}</Field>
      <Field>{stock || 0}</Field>
      <ChangedField>{status || "Pending"}</ChangedField>
      <Field>{format(new Date(date), "MMM dd yyyy")}</Field>

      {/* {userRole === "admin" && ( */}
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={productId} />

            <Menus.List id={productId}>
              {/* <Menus.Button
                icon={<FiSettings />}
                // onClick={handleDuplicate}
                // disabled={isCreating}
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
              <CreateProductForm productToEdit={product} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="products"
                disabled={isDeleting}
                onConfirm={() => deleteProduct(productId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
      {/* )} */}
    </Table.Row>
  );
}

export default ProductRow;
