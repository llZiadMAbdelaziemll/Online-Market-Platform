import supabase from "./supabase";

export async function getSubCategories() {
  let query = supabase.from("sub_categories").select("*", { count: "exact" });

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Sub categories could not be loaded");
  }
  console.log(data);

  return { data, count };
}
export async function createEditSubCategory(newSubCategory, id) {
  // const hasImagePath = newSubCategory.image?.startsWith?.(supabaseUrl);
  const { productTags, ...other } = newSubCategory;

  // 1. Create/edit doctor
  let query = supabase.from("sub_categories");

  // A) CREATE
  if (!id) {
    query = query.insert([{ ...other, productTags: [productTags] }]);
  }

  // B) EDIT
  if (id) {
    query = query
      .update({
        ...other,

        productTags: [productTags],
      })
      .eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Sub category could not be created");
  }

  return data;
}

export async function deleteSubCategory(id) {
  const { data, error } = await supabase
    .from("sub_categories")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Sub category could not be deleted");
  }

  return data;
}
