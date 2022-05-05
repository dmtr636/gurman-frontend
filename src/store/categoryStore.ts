import {makeAutoObservable} from "mobx";
import axios from "axios";
import {ICategory} from "../model/ICategory";

class CategoryStore {
    categories: ICategory[] = []

    constructor() {
        makeAutoObservable(this)
    }

    fetchCategories() {
        axios.get("http://localhost:8000/categories")
            .then(response => {
                this.categories = response.data["categories"]
                console.log(response.data)
            })
    }
}

export default new CategoryStore()