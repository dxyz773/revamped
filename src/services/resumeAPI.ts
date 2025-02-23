import supabase from "./supabase";

export async function getResume() {
  const { data, error } = await supabase.from("resume").select("*");

  if (error) {
    console.error(error);
    throw new Error("resume could not be loaded");
  }

  return data;
}
