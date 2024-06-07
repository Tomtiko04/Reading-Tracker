import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://izufyckqxkgkfkpfhudz.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6dWZ5Y2txeGtna2ZrcGZodWR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc3OTU5OTMsImV4cCI6MjAzMzM3MTk5M30.19Ylw69meTVCXt7c-lgWCACOZ1loTglYRk9KMWl1woM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;