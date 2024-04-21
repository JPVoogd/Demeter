import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabaseUrl = "https://toozjaeqsedouhoavndj.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvb3pqYWVxc2Vkb3Vob2F2bmRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MzM5OTUsImV4cCI6MjAyNzMwOTk5NX0.rbQYXHTiY001c2JgTEGg87iD8DE5o57foO4BJrXQmTY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)