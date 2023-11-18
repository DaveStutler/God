import { createClient } from "@supabase/supabase-js";

const URL = `https://eewbkhaslzwsgoygwutj.supabase.co`;
const API_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVld2JraGFzbHp3c2dveWd3dXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNzcwNzYsImV4cCI6MjAxNDY1MzA3Nn0.Dg7FbaUCfYQ67FzWxMqjtveMQ5VltT3ykCWJsWU4VhU`;

export const supabase = createClient(URL, API_KEY);
