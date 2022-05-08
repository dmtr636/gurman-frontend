import {makeAutoObservable} from "mobx";
import axios from "axios";
import {ICategory} from "../model/ICategory";
import {SERVER_HOST} from "../constants/constants";

class CategoryStore {
    categories: ICategory[] = []

    constructor() {
        makeAutoObservable(this)
    }

    fetchCategories() {
        axios.get(SERVER_HOST + "/categories")
            .then(response => {
                this.categories = response.data["categories"]
                console.log(response.data)
            })
    }
}

export default new CategoryStore()