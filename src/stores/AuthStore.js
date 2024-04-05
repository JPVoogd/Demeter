import { defineStore } from "pinia";
import { supabase } from "@/supabase/config";

export const useAuthStore = defineStore('user', {
    state: () => ({
      user: [],
    }),
    actions: {

    }
  })