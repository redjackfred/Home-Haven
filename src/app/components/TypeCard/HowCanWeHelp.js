"use client"

import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography } from "@mui/material";
import json2mq from 'json2mq';
import cssStyle from "./typeCard.module.css"
export default function HowCanWeHelp()  {
    // Media queries to determine screen size
    const matches1 = useMediaQuery(json2mq({minWidth: 1200}));
    const matches2 = useMediaQuery(json2mq({minWidth: 700}));
    const matches3 = useMediaQuery(json2mq({minWidth: 0}));

    let variant;
    // Set variant based on screen size
    if (matches1) {
        variant = "h3"
    } else if (matches2) {
        variant = "h5"
    } else if (matches3) {
        variant = "h6"
    }

    return (
    // Typography component with dynamic variant and custom style
        <Typography variant={variant} className={cssStyle.HowCanWeHelp}>
            How can we help?
        </Typography>
    )

}

