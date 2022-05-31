import {makeAutoObservable} from "mobx";
import axios from "axios";
import {ICategory} from "../model/ICategory";
import {SERVER_HOST} from "../constants/constants";

export const STATIC_CATEGORIES: ICategory[] = [
    {
        name: "Популярное",
        id: -1
    },
    {
        name: "Акции",
        id: -2
    }
]

class CategoryStore {
    categories: ICategory[] = []

    constructor() {
        makeAutoObservable(this)
    }

    fetchCategories() {
        axios.get(SERVER_HOST + "/categories")
            .then(response => {
                this.categories = [...STATIC_CATEGORIES, ...response.data["categories"]]
            })
    }

    get shawarmaCategoryId() {
        return this.categories.find(category => category.name === 'Шаурма')?.id
    }
}

export default new CategoryStore()