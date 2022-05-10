import styles from "./PickupForm.module.css"
import mapImage from "../../images/map.png"

const PickupForm = () => {
    return(
        <div>
            <div className={styles["title"]}>
                Калуга, Плеханова 19А
            </div>
            <div className={styles["image"]}>
                <img src={mapImage} alt={""} />
            </div>
        </div>
    )
}

export default PickupForm