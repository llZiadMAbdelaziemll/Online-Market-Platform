import { useState } from "react";
import supabase from "../services/supabase";
import Button from "../dashboard/ui/Button";

import { products } from "./data-products";
import { categories } from "./data-categories";
// import { subCategories } from "./data-sub_categories";

// const originalSettings = {
//   minBookingLength: 3,
//   maxBookingLength: 30,
//   maxGuestsPerBooking: 10,
//   breakfastPrice: 15,
// };

async function deleteProducts() {
  const { error } = await supabase.from("products").delete().gt("id", 0);
  if (error) console.log(error.message);
}
async function deleteCategories() {
  const { error } = await supabase.from("categories").delete().gt("id", 0);
  if (error) console.log(error.message);
}
// async function deleteSubCategories() {
//   const { error } = await supabase.from("sub_categories").delete().gt("id", 0);
//   if (error) console.log(error.message);
// }

async function createProducts() {
  const { error } = await supabase.from("products").insert(products);
  if (error) console.log(error.message);
}
async function createCategories() {
  const { error } = await supabase.from("categories").insert(categories);
  if (error) console.log(error.message);
}

// async function createSubCategories() {
//   const { error } = await supabase.from("sub_categories").insert(subCategories);
//   if (error) console.log(error.message);
// }

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);

    await deleteProducts();
    await deleteCategories();
    // await deleteSubCategories();

    await createProducts();
    await createCategories();
    // await createSubCategories();

    setIsLoading(false);
  }
  async function uploadProducts() {
    setIsLoading(true);
    await deleteProducts();
    await createProducts();
    setIsLoading(false);
  }
  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3>SAMPLE DATA</h3>

      <Button onClick={uploadAll} disabled={isLoading}>
        Upload ALL
      </Button>
      <Button onClick={uploadProducts} disabled={isLoading}>
        Upload products ONLY
      </Button>
    </div>
  );
}

export default Uploader;
