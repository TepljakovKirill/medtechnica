import { defineStore } from "pinia"
import axios from "axios"
import { NEW_ITEMS } from "../constants/api"

export const useNewItems = defineStore('items', {
    state: () => ({
        newItems: [],
    }),
    actions: {
        async getNewItems() {
            try {
                const response = await axios.get(NEW_ITEMS);
                this.newItems = response.data;
            } catch (error) {
                console.error("Ошибка при получении новых элементов:", error);
            }
        }
    }
})