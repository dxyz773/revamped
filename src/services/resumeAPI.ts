import supabase from "./supabase";
import { type Resume } from "../features/resume/resumeTypes";
import { PostgrestError } from "@supabase/supabase-js";

export async function getResume(): Promise<Resume | PostgrestError> {
  console.log("test");
  const { data, error } = await supabase
    .from("resume")
    .select("*")
    .returns<Resume>();
  console.log(data);
  if (error) {
    return error;
  }

  return data;
}
