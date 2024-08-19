import supabase from "./supabase";

export async function getCartProducts(id) {
  const { data, error } = await supabase
    .from("cart")
    .select("*,products(*)")
    .eq("user_id", id);

  if (error) {
    console.error(error);
    throw new Error("product not found");
  }
  console.log(data);
  return data;
}

export async function addToCart(product) {
  // A) CREATE
  const query = supabase.from("cart").insert([{ ...product }]);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("product could not be added to cart");
  }

  return data;
}

export async function deleteFromCart(id) {
  const { data, error } = await supabase.from("cart").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("product could not be deleted");
  }

  return data;
}
