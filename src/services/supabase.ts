import { createClient } from "@supabase/supabase-js";
const projectURL = "https://nxpvufpxssypajwzuxoc.supabase.co";
const projectKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54cHZ1ZnB4c3N5cGFqd3p1eG9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5MzM3OTQsImV4cCI6MjA1NTUwOTc5NH0.sJX_d_JzVd8kCCurlJq5aVYlI6SRVQwstW7mevdJkFs";
const supabase = createClient(projectURL, projectKey);

export default supabase;
