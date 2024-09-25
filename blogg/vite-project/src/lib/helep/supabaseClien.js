import {createClient} from "@supabase/supabase-js";
const supabase = createClient(
    "https://ykxvqayhknjmbejczjfy.supabase.co/",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlreHZxYXloa25qbWJlamN6amZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2NzkxODIsImV4cCI6MjA0MjI1NTE4Mn0.s8V2E_celkiAeejHJq7QyjAJ5SmiUZDxHDIRc9czpjM"
);
export default supabase;