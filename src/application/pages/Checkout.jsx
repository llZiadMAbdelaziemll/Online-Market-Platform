import React from "react";
import Meta from "../ui/Meta";
import BreadCrumb from "../ui/BreadCrumb";
import styled from "styled-components";
import Container from "../ui/Container";
import Row from "../ui/Row";
import CheckoutDetails from "../features/order/CheckoutDetails";

export default function Checkout() {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <CheckoutDetails />
    </>
  );
}
