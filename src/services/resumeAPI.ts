import supabase from "./supabase";
import { type Resume } from "../features/resume/resumeTypes";

export async function getResume(): Promise<Resume> {
  const { data, error } = await supabase
    .from("resume")
    .select("*")
    .returns<Resume>();

  if (error) {
    throw new Error("Resume data could not be fetched");
  }

  return data;
}
