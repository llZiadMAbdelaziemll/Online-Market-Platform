import supabase, { supabaseUrl } from "./supabase";
import { PAGE_SIZE } from "../utils/constants";

export async function getProducts({ page }) {
  let query = supabase.from("products").select("*", { count: "exact" });
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("products could not be loaded");
  }
  console.log(data);

  return { data, count };
}
export async function getPurchasedProducts() {
  const { data, error, count } = await supabase
    .from("products")
    .select("*", { count: "exact" })
    .order("purchased", { ascending: false })
    .limit(8); // Order by largest purchase value

  if (error) {
    console.error(error);
    throw new Error("products not found");
  }

  return { data, count };
}
export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("product not found");
  }
  console.log(data);
  return data;
}
export async function createEditProduct(newProduct, id) {
  const hasImagePath = newProduct?.image?.every((image) =>
    image?.startsWith?.(supabaseUrl)
  );
  // newProduct.image?.startsWith?.(supabaseUrl);
  console.log(hasImagePath);
  const { tag, ...other } = newProduct;
  const imageNames = newProduct.image.map((image) => {
    return `${image.name}?t=${Math.random()}`.replaceAll("/", "");
  });
  // const imageName = `${newProduct.image.name}?t=${Math.random()}`.replaceAll(
  //   "/",
  //   ""
  // );
  const imagePaths = hasImagePath
    ? newProduct?.image?.map((image) => image)
    : imageNames.map((name) => {
        return `${supabaseUrl}/storage/v1/object/public/products/${name}`;
      });
  // const imagePaths =  imageNames.map((name) => {
  //     return `${supabaseUrl}/storage/v1/object/public/products/${name}`;
  //   });

  // 1. Create/edit doctor
  let query = supabase.from("products");

  // A) CREATE
  if (!id) query = query.insert([{ ...other, image: [...imagePaths], tag }]);

  // // B) EDIT
  if (id)
    query = query
      .update({ ...other, image: [...imagePaths], tag })
      .eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("product could not be created");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  for (let i = 0; i < newProduct?.image?.length; i++) {
    const image = newProduct.image[i];
    const imageName = `${image.name}`;

    const { error: storageError } = await supabase.storage
      .from("products")
      .upload(imageName, image);

    if (storageError) {
      await supabase.from("products").delete().eq("id", data.id);
      console.error(storageError);
      throw new Error(
        "product image could not be uploaded and the product was not created"
      );
    }
  }
  // const { error: storageError } = await supabase.storage
  //   .from("products")
  //   .upload(imageName, newProduct.image);

  // // 3. Delete the product IF there was an error uplaoding image
  // if (storageError) {
  //   await supabase.from("products").delete().eq("id", data.id);
  //   console.error(storageError);
  //   throw new Error(
  //     "product image could not be uploaded and the product was not created"
  //   );
  // }

  return data;
}

export async function deleteProduct(id) {
  const { data, error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("product could not be deleted");
  }

  return data;
}
