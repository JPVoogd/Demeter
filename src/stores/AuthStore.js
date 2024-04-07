import { reactive } from 'vue'

export const useAuthStore = reactive({
  userId: "",
  fname: "",
  lname: "",
  email: "",
  role: "",
})