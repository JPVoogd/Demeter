import {reactive} from 'vue'

export const useProductStore = reactive({
    id: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    card: false,
    cash: false,
})
