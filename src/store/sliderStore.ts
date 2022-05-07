import {makeAutoObservable} from "mobx";
import axios from "axios";

class SliderStore {
    images: string[] = []

    constructor() {
        makeAutoObservable(this)
    }

    fetchImages() {
        axios.get("http://localhost:8000/slider-images")
            .then(response => {
                this.images = response["data"]["images"]
                console.log(response["data"]["images"])
            })
    }
}

export default new SliderStore()