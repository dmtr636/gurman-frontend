import {makeAutoObservable} from "mobx";
import axios from "axios";
import {SERVER_HOST} from "../constants/constants";

class SettingsStore {
    siteOpenState = true

    constructor() {
        makeAutoObservable(this)
    }

    setSiteOpenState(state: boolean) {
        this.siteOpenState = state
    }

    fetchSiteOpenState() {
        axios.get(SERVER_HOST + "/api/site-state")
            .then(res => this.setSiteOpenState(res.data['isOpen']))
        console.log("fetch")
    }
}

export default new SettingsStore()