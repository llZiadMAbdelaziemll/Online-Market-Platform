import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vibfzknmdfemspsxflyq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpYmZ6a25tZGZlbXNwc3hmbHlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2Mjk4NzEsImV4cCI6MjA1MzIwNTg3MX0.SFk_nNxNq2x3kb4_tbtbs9KKB4TcaAS-MyCUDSXH8hI";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
