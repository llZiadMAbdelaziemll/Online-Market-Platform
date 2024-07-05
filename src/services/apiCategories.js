import supabase from "./supabase";

export async function getCategories() {
  let query = supabase.from("categories").select("*", { count: "exact" });

  const { data, error, count } = await query;
  console.log(data);
  if (error) {
    console.error(error);
    throw new Error("categories could not be loaded");
  }

  return { data, count };
}

export async function createEditCategory(newCategory, id) {
  // const hasImagePath = newCategory.image?.startsWith?.(supabaseUrl);
  const { subCategories, productTags, ...other } = newCategory;

  // 1. Create/edit doctor
  let query = supabase.from("categories");

  // A) CREATE
  if (!id) {
    query = query.insert([
      { ...other, subCategories: [subCategories], productTags: [productTags] },
    ]);
  }

  // B) EDIT
  if (id) {
    query = query
      .update({
        ...other,
        subCategories: [subCategories],
        productTags: [productTags],
      })
      .eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("product could not be created");
  }

  return data;
}

export async function deleteCategory(id) {
  const { data, error } = await supabase
    .from("categories")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("category could not be deleted");
  }

  return data;
}
