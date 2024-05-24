import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://molceycmvkdoaxysltyx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vbGNleWNtdmtkb2F4eXNsdHl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2MDc5NDksImV4cCI6MjAxNjE4Mzk0OX0.hcNqlS34hpP8P57WRjQInnhQsL9eVcei380JUCLbc1c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
