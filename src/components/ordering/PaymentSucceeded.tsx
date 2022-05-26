import React, {useEffect} from "react";
import navStore from "../../store/navStore";
import Drawer from "@mui/material/Drawer";
import OrderingResultSuccess from "./OrderingResultSuccess";
import { observer } from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

function PaymentSucceeded() {
    useEffect(() => {
        navStore.openResult()
    }, [])

    return (
        <Drawer
            anchor={'right'}
            open={navStore.resultOpenState}
            elevation={0}
        >
            <OrderingResultSuccess />
        </Drawer>
    )
}

export default observer(PaymentSucceeded)