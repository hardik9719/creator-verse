import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://cpkyjrnbxltkimayradg.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwa3lqcm5ieGx0a2ltYXlyYWRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyMTk0NjIsImV4cCI6MjAzOTc5NTQ2Mn0.oc30aPSqu18Idmr2IE287NX7l81VihLnew8V74S_tjk"
  );
export default supabase;