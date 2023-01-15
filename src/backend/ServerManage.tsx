import {Form} from "react-router-dom";
import {Button, MenuItem, SelectChangeEvent, Stack, TextField, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import Select from '@mui/material/Select';
import {DashboardItemTitle} from "../DashboardItemTitle";
import React from "react";
import {useSnackbar} from "notistack";
import ItemContainer from "../ItemContainer";


function ScheduleAction() {
    const [age, setAge] = React.useState('');
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    function showSnackbar() {
        enqueueSnackbar("Action scheduled!", {variant: "success"})
    }

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <ItemContainer title="Schedule action">
            <Stack spacing={1}>
                <Typography>time in seconds:</Typography>
                <TextField/>
                <Typography>reason:</Typography>
                <TextField/>
                <Typography>action:</Typography>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>None</MenuItem>
                    <MenuItem value={20}>allowAdmins</MenuItem>
                    <MenuItem value={30}>disconnectAll</MenuItem>
                    <MenuItem value={30}>shutdown</MenuItem>
                </Select>
                <Button variant={"contained"} onClick={showSnackbar}>submit</Button>
            </Stack>
        </ItemContainer>
    )
}

function ScheduleBackup() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    function showSnackbar() {
        enqueueSnackbar("Backup scheduled!", {variant: "success"})
    }

    return (
        <ItemContainer title="Scheduled backup">
            <Stack spacing={1}>
                <Typography>time in seconds:</Typography>
                <TextField/>
                <Button variant={"contained"} onClick={showSnackbar}>submit</Button>
            </Stack>
        </ItemContainer>
    )
}

function ConnectionBlocking() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    function showSnackbar() {
        enqueueSnackbar("Whitelist set!", {variant: "success"})
    }

    return (
        <ItemContainer title="Whitelist">
            <Stack spacing={1} justifyContent={"space-between"}>
                <Typography>type:</Typography>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    fullWidth={true}
                >
                    <MenuItem value={10}>allowAll</MenuItem>
                    <MenuItem value={20}>allowAdmins</MenuItem>
                    <MenuItem value={30}>blockAll</MenuItem>
                </Select>
                <Button variant={"contained"} onClick={showSnackbar}>submit</Button>
            </Stack>
        </ItemContainer>
    )
}

function ManageProcess() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    function restart() {
        enqueueSnackbar("server restarted!", {variant: "success"})
    }
    function shutdown() {
        enqueueSnackbar("server shutdowned!", {variant: "success"})
    }
    function start(){
        enqueueSnackbar("server started!", {variant: "success"})
    }

    return (
        <ItemContainer title="Manage process">
            <Stack spacing={1}>
                <Button onClick={restart} variant={"contained"} color={"secondary"}>Restart</Button>
                <Button onClick={shutdown} variant={"contained"} color={"error"}>Shut down</Button>
                <Button onClick={start} variant={"contained"} color={"success"}>Start</Button>
            </Stack>
        </ItemContainer>
    )
}

export default function ServerManage() {
    return (
        <Stack sx={{padding: 1}}>
            <Stack direction={"row"} spacing={1}>
                <ScheduleAction/>
                <ConnectionBlocking/>
                <ScheduleBackup/>
                <ManageProcess/>
            </Stack>
        </Stack>
    )
}