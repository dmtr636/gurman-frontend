import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {ReactNode} from "react";
import styles from "./Footer.module.css";
import useWindowDimensions from "../../hooks/hooks";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
    },
    '& .MuiDialogTitle-root': {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(5)
    }
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose?: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 16,
                        top: 16,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon sx={{ fontSize: 42 }} />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

const Modal = (props: {close: () => void, content: ReactNode, title: string}) => {
    const {width} = useWindowDimensions()

    const handleClose = () => {
        props.close()
    };

    return(
        <>
            {width < 767
                ?
                <BootstrapDialog
                    aria-labelledby="customized-dialog-title"
                    open={true}
                    fullWidth={true}
                    maxWidth={'lg'}
                    scroll={"body"}
                    PaperProps={{style: {
                            width: "1002px",
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginTop: "55px",
                            maxWidth: "100%",
                            height: "calc(100vh - 60px)"
                    }}}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" >
                        <div className={styles["modalContentTitle"]}>
                            {props.title}
                        </div>
                    </BootstrapDialogTitle>
                    <DialogContent>
                        {props.content!}
                    </DialogContent>
                </BootstrapDialog>
                :
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={true}
                    fullWidth={true}
                    maxWidth={'lg'}
                    PaperProps={{style: {width: "1002px"}}}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        <div className={styles["modalContentTitle"]}>
                            {props.title}
                        </div>
                    </BootstrapDialogTitle>
                    <DialogContent>
                        {props.content!}
                    </DialogContent>
                </BootstrapDialog>
            }
        </>
    )
}

export default Modal