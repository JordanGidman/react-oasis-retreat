import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://swnljlgucehtzgluhzxp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3bmxqbGd1Y2VodHpnbHVoenhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1ODkwMzgsImV4cCI6MjAzMzE2NTAzOH0._ZwhWj9a1YFYdXKXGUGZ4wYAqyv9VaAb3n8QPNoPfc4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
