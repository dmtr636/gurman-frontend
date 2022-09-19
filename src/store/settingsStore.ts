import {makeAutoObservable} from "mobx";
import axios from "axios";
import {SERVER_HOST} from "../constants/constants";
import {isWorkingTime} from "../utils/utils";

class SettingsStore {
    siteOpenState = true

    constructor() {
        makeAutoObservable(this)
    }

    setSiteOpenState(state: boolean) {
        this.siteOpenState = state
    }

    fetchSiteOpenState() {
        if (!isWorkingTime()) {
            this.siteOpenState = false
        } else {
            axios.get(SERVER_HOST + "/api/site-state")
                .then(res => this.setSiteOpenState(res.data['isOpen']))
        }
    }
}

export default new SettingsStore()