import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://uvcniqkmwtdzvenobucf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2Y25pcWttd3RkenZlbm9idWNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2MzY2NjksImV4cCI6MjAzNDIxMjY2OX0.h7Hq6CLeha7dqX5G1mgmT-Y5JY9xNaOCieyTRpnlNYw";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
