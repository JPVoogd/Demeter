import { reactive } from 'vue'

export const useAuthStore = reactive({
  fname: "",
  lname: "",
  email: "",
  role: "",
})