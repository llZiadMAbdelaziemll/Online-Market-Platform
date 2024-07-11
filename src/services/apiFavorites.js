import supabase from "./supabase";

export async function getFavorites(id) {
  const { data, error } = await supabase
    .from("favorites")
    .select("*")
    .eq("user_id", id);

  if (error) {
    console.error(error);
    throw new Error("favorites products not found");
  }
  console.log(data);
  return data;
}

export async function addToFavorites(product) {
  // A) CREATE
  const query = supabase.from("favorites").insert([{ ...product }]);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("product could not be added to favorites");
  }

  return data;
}

export async function deleteFromFavorites(id) {
  const { data, error } = await supabase
    .from("favorites")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("product could not be deleted");
  }

  return data;
}
