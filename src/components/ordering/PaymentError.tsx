import React, {useEffect} from "react";
import navStore from "../../store/navStore";
import Drawer from "@mui/material/Drawer";
import {observer} from "mobx-react-lite";
import OrderingResultError from "./OrderingResultError";

function PaymentError() {
    useEffect(() => {
        navStore.openResult()
    }, [])

    return (
        <Drawer
            anchor={'right'}
            open={navStore.resultOpenState}
            elevation={0}
        >
            <OrderingResultError />
        </Drawer>
    )
}

export default observer(PaymentError)