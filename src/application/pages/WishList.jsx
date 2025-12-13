import React from "react";
import WishListCards from "../features/favorites/WishListCards";
import Meta from "../ui/Meta";
import BreadCrumb from "../ui/BreadCrumb";

const WishList = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />

      <WishListCards />
    </>
  );
};

export default WishList;
