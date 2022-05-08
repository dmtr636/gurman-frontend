import {makeAutoObservable} from "mobx";
import axios from "axios";
import {SERVER_HOST} from "../constants/constants";

class SliderStore {
    images: string[] = []

    constructor() {
        makeAutoObservable(this)
    }

    fetchImages() {
        axios.get(SERVER_HOST + "/slider-images")
            .then(response => {
                this.images = response["data"]["images"]
                console.log(response["data"]["images"])
            })
    }
}

export default new SliderStore()