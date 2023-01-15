import {Typography} from "@mui/material";
import * as React from "react";

export function DashboardItemTitle(props: any) {
    return (
        <Typography fontSize={36}>{props.children}</Typography>
    )
}