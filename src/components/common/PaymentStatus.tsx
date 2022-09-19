import {observer} from "mobx-react-lite";
import navStore from "../../store/navStore";
import styled from "styled-components";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {SERVER_HOST} from "../../constants/constants";

const Loader = styled.img`
  width: 243px;
  height: 238px;
  margin: auto;
`

function PaymentStatus() {
    const navigate = useNavigate()

    useEffect(() => {
        navStore.openLoading()

        let payment_id = localStorage.getItem("payment_id")
        if (payment_id != null) {
            axios.get(SERVER_HOST + "/api/payment-status?payment_id=" + payment_id)
                .then(res => {
                    navStore.closeLoading()
                    if (res.data['status'] === 'succeeded') {
                        navigate("/payment-succeeded")
                    } else {
                        navigate("/payment-error")
                    }
                })
        } else {
            navStore.closeLoading()
            navigate("/payment-error")
        }
    }, [navigate])

    return (
        <>
        </>
    )
}

export default observer(PaymentStatus)