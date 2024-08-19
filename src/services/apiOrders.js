import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function getOrders() {
  const { data, error, count } = await supabase
    .from("orders")
    .select("*", { count: "exact" });

  if (error) {
    console.error(error);
    throw new Error("orders not found");
  }
  return { data, count };
}

export async function getOrdersAfterDate(date) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }))
    .limit(10);

  if (error) {
    console.error(error);
    throw new Error("Orders could not get loaded");
  }
  console.log(data);
  return data;
}

export async function getCertainPeriodOrders(date1, date2) {
  const { data, error, count } = await supabase
    .from("orders")
    .select("*", { count: "exact" })
    .gte("created_at", date1.toISOString())
    .lte("created_at", date2.toISOString());
  if (error) {
    console.error(error);
    throw new Error("Orders for last month could not be loaded");
  }

  console.log(data, count);
  return { data, count };
}
export async function createOrder(newOrder) {
  console.log(newOrder);

  const imagePaths = newOrder?.image?.map((image) => image);

  const query = supabase
    .from("orders")
    .insert([{ ...newOrder, image: [...imagePaths] }]);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("product could not be created");
  }

  return data;
}
