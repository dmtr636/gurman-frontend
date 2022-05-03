import {makeAutoObservable} from "mobx";

class Category {
    categories = [
        {id: 1, name: "Акции", path: "shares"},
        {id: 2, name: "Шаурма", path: "shawarma"},
        {id: 3, name: "Шашлык", path: "shashlik"},
        {id: 4, name: "Бургеры", path: "burgers"},
        {id: 5, name: "Стрит-фуд", path: "street-food"}
    ]

    constructor() {
        makeAutoObservable(this)
    }
}

export default new Category()