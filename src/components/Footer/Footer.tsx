import styles from "./Footer.module.css"
import vkImage from "../../images/Vk.svg"
import instagramImage from "../../images/Instagram.svg"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.col}>
                <div className={styles.brand}>
                    Гурман
                </div>
                <div className={styles.colHeader}>
                    Клиентам
                </div>
                <div className={styles.colItem}>
                    Для потребителей
                </div>
                <div className={styles.colItem}>
                    Доставка и самовывоз
                </div>
                <div className={styles.colItem}>
                    Оплата
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.colHeader}>
                    Информация
                </div>
                <div className={styles.colItem}>
                    Политика<br />
                    конфендициальности
                </div>
                <div className={styles.colItem}>
                    Пользовательское<br />
                    соглашение
                </div>
                <div className={styles.colItem}>
                    Правила продажи
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.colHeader}>
                    Компания
                </div>
                <div className={styles.colItem}>
                    Данные о продавце
                </div>
                <div className={styles.colItem}>
                    Полные реквизиты
                </div>
                <div className={styles.colItemImages}>
                    <img className={styles.imageLink} src={vkImage} alt={""} />
                    <img className={styles.imageLink} src={instagramImage} alt={""} />
                </div>
            </div>
            <div className={styles.bottom}>
                © Все права защищены «Гурман» 2022
            </div>
        </footer>
    )
}

export default Footer