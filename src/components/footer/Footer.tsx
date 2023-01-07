import styles from "./Footer.module.css"
import vkImage from "../../images/Vk.svg"
import instagramImage from "../../images/Instagram.svg"
import Modal from "./Modal";
import ForConsumersModalContent from "./ForConsumersModalContent";
import DeliveryAndPickupModalContent from "./DeliveryAndPickupModalContent";
import PaymentModalContent from "./PaymentModalContent";
import SaleRulesModalContent from "./SaleRulesModalContent";
import AboutSellerModalContent from "./AboutSellerModalContent";
import navStore from "../../store/navStore";
import {observer} from "mobx-react-lite";
import RequisitesModalContent from "./RequisitesModalContent";
import PrivacyPolicyModalContent from "./PrivacyPolicyModalContent";
import UseTermsModalContent from "./UseTermsModalContent";
import useWindowDimensions from "../../hooks/hooks";
import footerBrandImage from "../../images/footerBrandImage.svg"

export const FOR_CONSUMERS_MODAL_TYPE = "FOR_CONSUMERS_MODAL_TYPE"
export const DELIVERY_AND_PICKUP_MODAL_TYPE = "DELIVERY_AND_PICKUP_MODAL_TYPE"
export const PAYMENT_MODAL_CONTENT_TYPE = "PAYMENT_MODAL_CONTENT_TYPE"
export const SALE_RULES_MODAL_CONTENT_TYPE = "SALE_RULES_MODAL_CONTENT_TYPE"
export const ABOUT_SELLER_MODAL_CONTENT_TYPE = "ABOUT_SELLER_MODAL_CONTENT_TYPE"
export const REQUISITES_MODAL_CONTENT_TYPE = "REQUISITES_MODAL_CONTENT_TYPE"
export const PRIVACY_POLICY_MODAL_CONTENT_TYPE = "PRIVACY_POLICY_MODAL_CONTENT_TYPE"
export const USE_TERMS_MODAL_CONTENT_TYPE = "USE_TERMS_MODAL_CONTENT_TYPE"

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
        case REQUISITES_MODAL_CONTENT_TYPE:
            return <RequisitesModalContent />
        case PRIVACY_POLICY_MODAL_CONTENT_TYPE:
            return <PrivacyPolicyModalContent />
        case USE_TERMS_MODAL_CONTENT_TYPE:
            return <UseTermsModalContent />
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
        case REQUISITES_MODAL_CONTENT_TYPE:
            return "Полные реквизиты"
        case PRIVACY_POLICY_MODAL_CONTENT_TYPE:
            return "Политика конфиденциальности"
        case USE_TERMS_MODAL_CONTENT_TYPE:
            return "Пользовательское соглашение"
        default:
            return ""
    }
}

const Footer = observer(() => {
    const [modalType, setModalType] = [navStore.footerModalType, (type: string) => navStore.setFooterModalType(type)]
    const { height, width } = useWindowDimensions()

    return(
        <footer className={styles.footer}>
            <div className={styles.col}>
                <img src={footerBrandImage} alt={""} className={styles.brand} />
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
                <div
                    className={styles.colItem}
                    onClick={() => setModalType(PRIVACY_POLICY_MODAL_CONTENT_TYPE)}
                >
                    Политика<br />
                    конфендициальности
                </div>
                <div
                    className={styles.colItem}
                    onClick={() => setModalType(USE_TERMS_MODAL_CONTENT_TYPE)}
                >
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
                <div
                    className={styles.colItem}
                    onClick={() => setModalType(REQUISITES_MODAL_CONTENT_TYPE)}
                >
                    Полные реквизиты
                </div>
                <div className={styles.colItemImages}>
                    <img className={styles.imageLink} src={vkImage} alt={""} />
                    <img className={styles.imageLink} src={instagramImage} alt={""} />
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomContent}>
                    © Все права защищены «Гурман» 2022
                    {width >= 1366 &&
                        <a
                            className={styles.madeInKodim}
                            href={"https://кодим.рф"}
                            target={"_blank"}
                        >
                            Сделано в <div className={styles.kodimLogo}></div>
                        </a>
                    }
                </div>
            </div>
            {width < 768 &&
                <>
                    <div className={styles['line1']} />
                    <div className={styles['line2']} />
                    <div className={styles['line3']} />
                </>
            }
            {modalType !== "" &&
                <Modal 
                    close={() => setModalType("")} 
                    content={ModalContent(modalType)}
                    title={ModalTitle(modalType)}
                />
            }
        </footer>
    )
})

export default Footer