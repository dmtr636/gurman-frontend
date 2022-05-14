import styles from "./Footer.module.css"
import vkImage from "../../images/Vk.svg"
import instagramImage from "../../images/Instagram.svg"
import {useState} from "react";
import Modal from "./Modal";
import ForConsumersModalContent from "./ForConsumersModalContent";
import DeliveryAndPickupModalContent from "./DeliveryAndPickupModalContent";
import PaymentModalContent from "./PaymentModalContent";
import SaleRulesModalContent from "./SaleRulesModalContent";
import AboutSellerModalContent from "./AboutSellerModalContent";

const FOR_CONSUMERS_MODAL_TYPE = "FOR_CONSUMERS_MODAL_TYPE"
const DELIVERY_AND_PICKUP_MODAL_TYPE = "DELIVERY_AND_PICKUP_MODAL_TYPE"
const PAYMENT_MODAL_CONTENT_TYPE = "PAYMENT_MODAL_CONTENT_TYPE"
const SALE_RULES_MODAL_CONTENT_TYPE = "SALE_RULES_MODAL_CONTENT_TYPE"
const ABOUT_SELLER_MODAL_CONTENT_TYPE = "ABOUT_SELLER_MODAL_CONTENT_TYPE"

const ModalContent = (modalType: string)  => {
    switch (modalType) {
        case FOR_CONSUMERS_MODAL_TYPE:
            return <ForConsumersModalContent />
        case DELIVERY_AND_PICKUP_MODAL_TYPE:
            return <DeliveryAndPickupModalContent />
        case PAYMENT_MODAL_CONTENT_TYPE:
            return <PaymentModalContent />
        case SALE_RULES_MODAL_CONTENT_TYPE:
            return <SaleRulesModalContent />
        case ABOUT_SELLER_MODAL_CONTENT_TYPE:
            return <AboutSellerModalContent/>
        default:
            return <></>
    }
}

const ModalTitle = (modalType: string) => {
    switch (modalType) {
        case FOR_CONSUMERS_MODAL_TYPE:
            return "Мы строги к правилам!"
        case DELIVERY_AND_PICKUP_MODAL_TYPE:
            return "Доставка и самовывоз"
        case PAYMENT_MODAL_CONTENT_TYPE:
            return "Оплата"
        case SALE_RULES_MODAL_CONTENT_TYPE:
            return "Правила продажи"
        case ABOUT_SELLER_MODAL_CONTENT_TYPE:
            return "Данные о продавце"
        default:
            return ""
    }
}

const Footer = () => {
    const [modalType, setModalType] = useState("")

    return(
        <footer className={styles.footer}>
            <div className={styles.col}>
                <div className={styles.brand}>
                    Гурман
                </div>
                <div className={styles.colHeader}>
                    Клиентам
                </div>
                <div
                    className={styles.colItem}
                    onClick={() => setModalType(FOR_CONSUMERS_MODAL_TYPE)}
                >
                    Для потребителей
                </div>
                <div
                    className={styles.colItem}
                    onClick={() => setModalType(DELIVERY_AND_PICKUP_MODAL_TYPE)}
                >
                    Доставка и самовывоз
                </div>
                <div
                    className={styles.colItem}
                    onClick={() => setModalType(PAYMENT_MODAL_CONTENT_TYPE)}
                >
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
                <div
                    className={styles.colItem}
                    onClick={() => setModalType(SALE_RULES_MODAL_CONTENT_TYPE)}
                >
                    Правила продажи
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.colHeader}>
                    Компания
                </div>
                <div
                    className={styles.colItem}
                    onClick={() => setModalType(ABOUT_SELLER_MODAL_CONTENT_TYPE)}
                >
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
            {modalType !== "" &&
                <Modal 
                    close={() => setModalType("")} 
                    content={ModalContent(modalType)}
                    title={ModalTitle(modalType)}
                />
            }
        </footer>
    )
}

export default Footer