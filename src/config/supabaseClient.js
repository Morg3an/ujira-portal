import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://birrfcsthlapxntmhfno.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpcnJmY3N0aGxhcHhudG1oZm5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2MDM5NzcsImV4cCI6MjAyMjE3OTk3N30.-m9Fti8mTUFslX69Wy-WgMA-X_BaehjXg_l8Tug6fHY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
