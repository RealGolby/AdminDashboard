import {Grid, Icon, Stack, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import {Delete, Remove, Restore} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {useSnackbar} from "notistack";


function ServerBackup() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    function recover() {
        enqueueSnackbar("successfully removed backup", {variant: "success"})
    }
    function remove() {
        enqueueSnackbar("successfully restored backup", {variant: "success"})
    }

    return (
        <Paper sx={{padding: 1}}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography>21-7-2027</Typography>
                <Stack direction={"row"}>
                    <IconButton color={"error"} onClick={recover}>
                        <Delete/>
                    </IconButton>
                    <IconButton color={"primary"} onClick={remove}>
                        <Restore/>
                    </IconButton>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default function ServerBackups() {
    return (
        <Stack spacing={1} sx={{padding: 1}}>
            <ServerBackup/>
            <ServerBackup/>
            <ServerBackup/>
            <ServerBackup/>
        </Stack>
    )
}