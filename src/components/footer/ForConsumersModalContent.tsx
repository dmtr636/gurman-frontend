import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import styles from "./Footer.module.css"

const ForConsumersModalContent = () => {
    return(
        <>
            <div className={styles["modalContentTitle"]}>
                Правила продажи
            </div>

            <div className={styles["modalContentSubtitle"]}>
                {"1. Общие положения\n"}
            </div>
            <div className={styles["modalContent"]}>
                {
                    "\n" +
                    "1.1. Настоящие Правила действуют в отношении всей Заказанной Клиентом Продукции, указанной на Сайте и в мобильных приложениях, в отношении Заказов путем продажи дистанционным способом, а также путем розничной продажи иными способами, предусмотренными действующим законодательством РФ.\n" +
                    "Заказывая товары через Интернет-магазин, Клиент соглашается с Условиями продаж и товаров и Условиями Бонусной системы (далее - Условия), изложенными ниже.\n" +
                    "\n" +
                    "1.2. Настоящие Условия, также информация о Товаре, представленная на Сайте, не являются публичной офертой в соответствии со ст. 435 и ч. 2 ст. 437 ГК РФ.\n" +
                    "\n" +
                    "1.3. К отношениям между Клиентом и Продавцом применяются положения ГК РФ о розничной купле-продаже (§ 2 глава 30), а также Закон РФ \"О защите прав потребителей\" от 07.02.1992 № 2300-1 и иные правовые акты, принятые в соответствии с ними.\n" +
                    "\n" +
                    "1.4. Продавец оставляет за собой право вносить изменения в настоящие Условия, в связи с чем Клиент обязуется регулярно отслеживать изменения в Условиях.\n" +
                    "\n" +
                    "1.5. Клиент соглашается с Условиями нажатием кнопки \"Подтвердить\" на последнем этапе оформления Заказа на Сайте или оформлением заказа по телефону через оператора, предоставляя данные требующиеся для оформления заказа.\n"
                }
            </div>

            <div className={styles["modalContentSubtitle"]}>
                {"2. Оформление и сроки выполнения Заказа\n"}
            </div>
            <div className={styles["modalContent"]}>
                {
                    "\n" +
                    "2.1. Заказ Клиента может быть оформлен следующими способами:\n" +
                    "\n" +
                    "самостоятельное оформление заказа на сайте;\n" +
                    "самостоятельное оформление заказа через мобильные приложения, прочие сервисы, приложения и агрегаторы заказов;\n" +
                    "оформление заказа по телефону через оператора Call-центра.\n" +
                    "\n" +
                    "2.2. Для оформления Клиентом Заказа через интернет-магазин необходимо выбрать подходящий Товар в меню на сайте гурман-калуга.рф, затем нажать кнопку с ценой товара. Повторите это для каждой позиции Товара. Используя пункт «Оформить заказ», оформите Заказ. Отправкой заказа Клиент подтверждает полное согласие с условиями заказа, составом, ассортиментом и количеством заказанного товара, подтверждает правильность всех предоставленных персональных данных. После этого Продавец вправе связаться с Клиентом для подтверждения Заказа и данных Клиента.\n" +
                    "\n" +
                    "При оформлении Заказа Клиент должен указать следующую информацию:\n" +
                    "Имя;\n" +
                    "Мобильный телефон;\n" +
                    "Адрес доставки (улица, дом, подъезд, квартира).\n" +
                    "\n" +
                    "2.3. Для оформления Заказа по телефону, необходимо позвонить по телефону указанному на сайте.\n" +
                    "\n" +
                    "2.4. Все информационные материалы, представленные на Сайте, носят справочный характер и не могут в полной мере передавать достоверную информацию о свойствах и характеристиках Товара, включая цвета, размеры и формы. В случае возникновения у Клиента вопросов, касающихся свойств и характеристик Товара, перед оформлением Заказа, Клиент должен обратиться к Продавцу.\n" +
                    "\n" +
                    "2.5. При невозможности связаться с Клиентом для подтверждения Заказа или уточнения существенных условий доставки - заказ считается аннулированным и не передается на приготовление."
                }
            </div>

            <div className={styles["modalContentSubtitle"]}>
                {"3. Момент заключения договора\n"}
            </div>
            <div className={styles["modalContent"]}>
                {
                    "\n" +
                    "Соглашаясь с настоящими правилами, Клиент совершает действия по заключению предварительного Договора купли-продажи. Действия, перечисленные ниже и совершенные сторонами, подтверждают заключение предварительного Договора:\n" +
                    "\n" +
                    "Факт получения денежной суммы за оформленный Клиентом Заказ;\n" +
                    "Факт передачи Товара курьеру для доставки по указанному адресу;\n" +
                    "Факт совершения клиентом Заказа.\n" +
                    "Моментом заключения основного Договора розничной купли-продажи товаров является момент передачи заказанного Товара Клиенту (Получателю Заказа) и одновременной передачи с товаром кассового или товарного чека либо иного документа, подтверждающего оплату товара.\n" +
                    "\n"
                }
            </div>

            <div className={styles["modalContentSubtitle"]}>
                {"4. Доставка\n"}
            </div>
            <div className={styles["modalContent"]}>
                {
                    "\n" +
                    "Доставка осуществляется в течение 60-90 минут. Точные данные о сроках и времени доставки сообщает оператор при оформлении либо подтверждении заказа (в случае если клиент оформил заказ через сайт).\n" +
                    "\n" +
                    "Клиент, соглашаясь с оговоренными оператором сроками доставки, подтверждает готовность ожидать оформленный заказ в течении указанного времени.\n" +
                    "\n" +
                    "Минимальная сумма Заказа: 0р, в отдаленные районы города - индивидуально.\n" +
                    "\n" +
                    "Подробные условия доставки представлены по ссылке - Доставка и оплата.\n" +
                    "\n" +
                    "Передача заказа\n" +
                    "\n" +
                    "При получении заказа клиент самостоятельно осуществляет проверку комплектности и качества товара.\n" +
                    "\n" +
                    "В случае отсутствия претензий к полученному Товару Вы оплачиваете сотруднику Службы доставки стоимость заказа и получаете кассовый или товарный чек, если он не был оплачен ранее.\n" +
                    "\n" +
                    "При авансовой оплате заказа (с помощью электронных платежных систем и пр.), Покупатель обязан предъявить удостоверяющий личность документ.\n" +
                    "\n" +
                    "4.2. Продавец приложит все усилия для соблюдения сроков доставки, указанных на Сайте, тем не менее, задержки в доставке возможны ввиду непредвиденных обстоятельств, произошедших не по вине Продавца.\n" +
                    "\n" +
                    "4.3. Риск случайной гибели или случайного повреждения Товара переходит к Клиенту с момента передачи ему Заказа. В случае недоставки Заказа Продавец возмещает Клиенту стоимость предоплаченного Клиентом Заказа и доставки после получения подтверждения утраты Заказа от Службы доставки.\n" +
                    "\n" +
                    "4.4. При доставке Заказ вручается Клиенту либо лицу, указанному в качестве Получателя Заказа. При отсутствии Клиента либо указанного им Получателя в месте доставки, Заказ вручается лицу, предъявившему документ, подтверждающий размещение либо оплату Заказа.\n" +
                    "\n" +
                    "4.5. Во избежание случаев мошенничества, при вручении предоплаченного Заказа лицо, осуществляющее доставку Заказа, вправе затребовать документ, удостоверяющий личность Получателя, а также указать тип и номер предоставленного Получателем документа на квитанции к Заказу. Продавец гарантирует конфиденциальность и защиту персональной информации Получателя.\n" +
                    "\n" +
                    "4.6. Продажа алкогольной продукции и пива дистанционно не производится. Приобретение и оплата алкогольной продукции и пива осуществляется в точках продаж на условиях самовывоза. Реализация алкогольной продукции и пива осуществляется с учетом временных ограничений, установленных органами местного самоуправления. Продажа алкогольной продукции и пива несовершеннолетним не производится."
                }
            </div>

            <div className={styles["modalContentSubtitle"]}>
                {"5. Оплата Товара\n"}
            </div>
            <div className={styles["modalContent"]}>
                {
                    "\n" +
                    "5.1. Цена Товара указывается на Сайте. В случае неверного указания цены заказанного Клиентом Товара, Продавец при первой возможности информирует об этом Клиента для подтверждения Заказа по исправленной цене либо аннулирования Заказа. При невозможности связаться с Клиентом данный Заказ считается аннулированным. Если Заказ был оплачен, Продавец возвращает Клиенту оплаченную за Заказ сумму путем ее отражения на Пользовательском счете Клиента.\n" +
                    "\n" +
                    "5.2. Цена Товара на Сайте может быть изменена Продавцом в одностороннем порядке. При этом цена на заказанный Клиентом Товар изменению не подлежит.\n" +
                    "\n" +
                    "5.3. Оплата заказа может быть произведена следующими способами:\n" +
                    "\n" +
                    "наличный расчет курьеру при получении заказа;\n" +
                    "безналичный расчет по банковским картам с помощью мобильного банковского терминала;\n" +
                    "безналичный расчет на сайте через процессинговый центр;\n" +
                    "безналичный расчет по реквизитам (оговаривается отдельно)."
                }
            </div>

            <div className={styles["modalContentSubtitle"]}>
                {"6. Возврат Товара\n"}
            </div>
            <div className={styles["modalContent"]}>
                {
                    "\n" +
                    "6.1. Возврат товара надлежащего качества.\n" +
                    "\n" +
                    "6.1.1. Клиент вправе отказаться от заказанного Товара в любое время до его получения.\n" +
                    "\n" +
                    "6.1.2. Клиент не вправе отказаться от Товара надлежащего качества после получения товара.\n" +
                    "\n" +
                    "6.2. Возврат товара ненадлежащего качества\n" +
                    "\n" +
                    "6.2.1. Клиент может возвратить Товар ненадлежащего качества Продавцу и потребовать возврата уплаченной денежной суммы. Клиент также может потребовать замены Товара ненадлежащего качества либо устранения недостатков.\n" +
                    "\n" +
                    "6.2.2. В случае отказа Клиента от договора и предъявления требования о возврате уплаченной за товар денежной суммы согласно п.6.2.1. Условий, стоимость Товара подлежит возврату Клиенту в течение 10 дней с момента получения Продавцом письменного заявления Клиента.\n" +
                    "\n" +
                    "6.3. Возврат денежных средств\n" +
                    "\n" +
                    "6.3.1. Денежные средства подлежат возврату Клиенту способом, примененным Клиентом при оплате товаров.\n" +
                    "\n" +
                    "6.3.2. В случае если возврат денежных средств осуществляется неодновременно с возвратом товара Клиентом, возврат указанной суммы осуществляется Продавцом с согласия Клиента одним из следующих способов:\n" +
                    "наличными денежными средствами по месту нахождения Продавца;\n" +
                    "почтовым переводом;\n" +
                    "путем перечислен ия соответствующей суммы на банковский или иной счет Клиента, указанный Клиентом*\n" +
                    "*В этом случае возврат денежных средств осуществляется не позднее 14 календарных дней с момента предъявления Клиентом соответствующего требования.\n" +
                    "\n" +
                    "6.4. Порядок действий при нарушении продавцом условия об ассортименте (пересорте).\n" +
                    "\n" +
                    "6.4.1. В случае передачи Товара в нарушение условия об ассортименте не применяются правила ст. 468 ГК РФ.\n" +
                    "\n" +
                    "6.4.2. В случае обнаружения в Заказе Товара, не соответствующего заказанному (пересорт), Клиент вправе при передаче заказа отказаться от данного Товара и потребовать замены на Товар, предусмотренный Заказом, либо возврата денежных средств за фактически непереданный Товар.\n" +
                    "\n" +
                    "6.4.3. Товар, переданный Клиенту в нарушение условия об ассортименте, подлежит возврату Продавцу. В случае если Клиент принимает данный Товар, Продавец вправе потребовать от Клиента оплаты данного Товара по цене, установленной Продавцом для данного Товара на Сайте на момент передачи Товара. Если фактически переданный Товар отсутствует в ассортименте Продавца, представленном на Сайте на момент передачи Товара, данный Товар оплачивается по цене, согласованной с Продавцом.\n" +
                    "\n" +
                    "6.4.4. Замена товара, не соответствующего Заказу по ассортименту, осуществляется путем оформления нового заказа по согласованию сторон – Продавцом либо Клиентом – с оплатой с Пользовательского счета, где отражается стоимость фактически непереданного Товара.\n" +
                    "\n" +
                    "6.4.5. В случае невозможности осуществить замену Товара, Продавец уведомляет об этом Клиента по номеру телефона, указанному Клиентом при регистрации, а денежные средства, фактически оплаченные за непереданный товар, возвращаются в порядке, предусмотренном п.6.4.6.\n" +
                    "\n" +
                    "6.4.6. Денежные средства, оплаченные Клиентом за фактически непереданный Товар подлежат возврату в течение 10 дней с момента получения письменного заявления Клиента о возврате денежных средств. Возврат уплаченной за товар суммы осуществляется тем способом, которым была произведена оплата.\n" +
                    "\n" +
                    "6.5. Порядок действий при нарушении Продавцом условия о количестве.\n" +
                    "\n" +
                    "6.5.1. При передаче Заказа Клиент обязан проверить количество Товаров в Заказе. Если при передаче Заказа Клиентом обнаружены расхождения по количеству Товара в Заказе, Клиент обязан в присутствии представителя Продавца составить Акт о расхождении по количеству.\n" +
                    "\n" +
                    "6.5.2. Если Продавец передал Клиенту меньшее количество Товара, чем определено Заказом (недовложение), Клиент при передаче Заказа вправе принять Товар в части, соответствующей Заказу, и потребовать передать недостающее количество Товара, либо, если недостающий Товар был оплачен, отказаться от Заказа в части недостающего Товара и потребовать возврата денежных средств за недостающий Товар.\n" +
                    "\n" +
                    "6.5.3. Передача недостающего Товара осуществляется посредством оформления нового Заказа по согласованию сторон – Продавцом либо Клиентом, при условии предоставления Клиентом Акта о расхождении (Акта о недовложении), составленного в порядке п.6.5.1.\n" +
                    "\n" +
                    "6.5.4. В случае если недостающий Товар был предварительно оплачен Клиентом, его стоимость отражается на счете, который выбирается как способ оплаты нового Заказа. Если недостающий Товар не был оплачен Клиентом, он оплачивается любым доступным способом, выбранным Клиентом либо Продавцом по согласованию с Клиентом, при оформлении нового Заказа.\n" +
                    "\n" +
                    "6.5.5. В случае невозможности передать недостающий Товар, Продавец уведомляет об этом Клиента по номеру телефона, указанному им при совершении Заказа, а денежные средства, фактически оплаченные за недостающий товар, возвращаются в порядке, предусмотренном п.6.5.6.\n" +
                    "\n" +
                    "6.5.6. Денежные средства, оплаченные Клиентом за недостающий Товар подлежат возврату в течение 10 дней с момента получения письменного заявления Клиента о возврате денежных средств, а также Акта о расхождении (Акта о недовложении) по количеству, составленного в порядке п.6.5.1. Возврат уплаченной за товар суммы осуществляется тем способом, которым была произведена оплата.\n" +
                    "\n" +
                    "6.5.7. В случае нарушения Клиентом п.6.5.1 в части составления Акта, Продавец вправе отказать Клиенту в удовлетворении претензий по количеству переданного Товара"
                }
            </div>

            <div className={styles["modalContentSubtitle"]}>
                {"7. Гарантии и ответственность\n"}
            </div>
            <div className={styles["modalContent"]}>
                {
                    "\n" +
                    "7.1. Продавец гарантирует, что поставленный Товар надлежащего качества, соответствует основным требованиям законодательства, применяемым в отношении поставленного Товара.\n" +
                    "\n" +
                    "7.2. Продавец не несет ответственности за ущерб, причиненный Клиенту вследствие ненадлежащего использования Товаров, заказанных на Сайте.\n" +
                    "\n" +
                    "7.3. Продавец вправе переуступать либо каким-либо иным способом передавать свои права и обязанности, вытекающие из его отношений с Клиентом, третьим лицам.\n" +
                    "\n" +
                    "7.4. Клиент обязуется не использовать заказанный Товар в предпринимательских целях."
                }
            </div>

            <div className={styles["modalContentSubtitle"]}>
                {"8. Конфиденциальность и защита персональной информации\n"}
            </div>
            <div className={styles["modalContent"]}>
                {
                    "\n" +
                    "8.1. Предоставление информации Клиентом:\n" +
                    "\n" +
                    "При регистрации на Сайте либо при осуществлении Заказа через Сайт, мобильное приложение либо через Call-центр Клиент предоставляет следующую информацию: Имя, телефон, улицу, номер дома, квартиры/офиса.\n" +
                    "\n" +
                    "8.2. Предоставляя свои персональные данные при регистрации на сайте либо при осуществлении Заказа, Клиент соглашается на их обработку Продавцом, в том числе и в целях продвижения Продавцом товаров и услуг. Клиент предоставляет Продавцу право осуществлять любые действия (операции) в отношении предоставленных персональных данных, которые необходимы для достижения целей, указанных в п.8.3 настоящих Правил, включая (без ограничения), сбор, систематизацию, накопление, хранение, обновление, изменение, использование, обезличивание, блокирование, уничтожение, а также осуществление любых иных действий с предоставленными персональными данными Клиента, предусмотренных действующим законодательством РФ. Продавец вправе обрабатывать персональные данные Клиента посредством внесения их в электронные базы данных, включать в списки (реестры) и отчетные формы, предусмотренные документами, регламентирующими предоставление отчетных данных (документов). Продавец имеет право во исполнение своих обязательств, связанных с обработкой персональных данных, на обмен (прием и передачу) персональных данных со сторонними организациями с использованием машинных носителей или по каналам связи, с соблюдением мер, обеспечивающих их защиту от несанкционированного доступа, при условии, что их прием и обработка будут осуществляться лицом, обязанным сохранять профессиональную тайну.\n" +
                    "\n" +
                    "8.3. Использование информации предоставленной Клиентом и получаемой Продавцом.\n" +
                    "\n" +
                    "Продавец использует информацию:\n" +
                    "\n" +
                    "для выполнения своих обязательств перед Клиентом;\n" +
                    "для оценки и анализа работы Сайта;\n" +
                    "для оценки и анализа в целях разработки и формирования специальных предложений для Клиента;\n" +
                    "с письменного согласия Клиента – в рекламных целях.\n" +
                    "8.4. Разглашение информации, полученной Продавцом:\n" +
                    "\n" +
                    "8.4.1. Продавец обязуется не разглашать полученную от Клиента информацию. Не считается нарушением предоставление Продавцом информации агентам и третьим лицам, действующим на основании договора с Продавцом, для исполнения обязательств перед Клиентом.\n" +
                    "\n" +
                    "8.4.2. Не считается нарушением обязательств разглашение информации в соответствии с обоснованными и применимыми требованиями закона.\n" +
                    "\n" +
                    "8.5. Продавец не несет ответственности за сведения, предоставленные Клиентом на Сайте в общедоступной форме."
                }
            </div>
        </>
    )
}

export default ForConsumersModalContent