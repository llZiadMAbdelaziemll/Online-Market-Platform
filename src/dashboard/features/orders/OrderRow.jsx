import styled from "styled-components";
import { formatCurrency } from "../../../utils/helpers";
import Table from "../../ui/Table";

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

function OrderRow({ order }) {
  const { id, image, product, customer, amount, status, vendor } = order;

  return (
    <Table.Row>
      <Field>#{id}</Field>
      <Img src={image[0]} alt="notfound" />
      <Field>{product}</Field>
      <Field>{customer}</Field>
      <Field>{formatCurrency(amount)}</Field>
      <ChangedField>{status || "Pending"}</ChangedField>
      <Field>{vendor || "Carrot"}</Field>
    </Table.Row>
  );
}

export default OrderRow;
