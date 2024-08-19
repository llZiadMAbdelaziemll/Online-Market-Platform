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

function PurchasedProductRow({ product }) {
  const { id, image, name, price, purchased, stock } = product;

  return (
    <Table.Row>
      <Img src={image[0]} alt="notfound" />
      <Field>{name}</Field>

      <ChangedField>{purchased}</ChangedField>
      <Field>{formatCurrency(Math.round(price) * purchased)}</Field>
    </Table.Row>
  );
}

export default PurchasedProductRow;
