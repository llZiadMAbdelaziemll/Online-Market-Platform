import React from "react";
import BreadCrumb from "../ui/BreadCrumb";
import Meta from "../ui/Meta";
import Spinner from "../../basicUi/Spinner";
import { useCartProducts } from "../features/cart/useCartProducts";
import CartTable from "../features/cart/CartTable";

const Cart = () => {
  const { products, isLoading } = useCartProducts();
  if (isLoading) return <Spinner />;
  console.log(products);
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <CartTable />
    </>
  );
};

export default Cart;
