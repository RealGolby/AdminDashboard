import {Form} from "react-router-dom";
import {Button, MenuItem, SelectChangeEvent, Stack, TextField, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import Select from '@mui/material/Select';
import {DashboardItemTitle} from "../DashboardItemTitle";
import React from "react";
import {useSnackbar} from "notistack";


function ScheduleAction() {
    const [age, setAge] = React.useState('');
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    function showSnackbar() {
        enqueueSnackbar("UwU", {variant: "success"})
    }

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Paper sx={{padding: 1}}>
            <DashboardItemTitle>Schedule action</DashboardItemTitle>
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
        </Paper>
    )
}

function ScheduleBackup() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    function showSnackbar() {
        enqueueSnackbar("UwU", {variant: "success"})
    }

    return (
        <Paper sx={{padding: 1}}>
            <DashboardItemTitle>Scheduled backup</DashboardItemTitle>
            <Stack spacing={1}>
                <Typography>time in seconds:</Typography>
                <TextField/>
                <Button variant={"contained"} onClick={showSnackbar}>submit</Button>
            </Stack>
        </Paper>
    )
}

function ConnectionBlocking() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    function showSnackbar() {
        enqueueSnackbar("UwU", {variant: "success"})
    }

    return (
        <Paper sx={{padding: 1}}>
            <Stack spacing={1} justifyContent={"space-between"}>
                <DashboardItemTitle>Connection FireWall</DashboardItemTitle>
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
        </Paper>
    )
}

function ManageProcess() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    function restart() {
        enqueueSnackbar("successfully restarted", {variant: "success"})
    }
    function shutdown() {
        enqueueSnackbar("successfully shut down", {variant: "success"})
    }

    return (
        <Paper sx={{padding: 1}}>
            <Stack spacing={1}>
                <DashboardItemTitle>Manage process</DashboardItemTitle>
                <Button onClick={restart} variant={"contained"} color={"error"}>Restart</Button>
                <Button onClick={shutdown} variant={"contained"} color={"error"}>Shut down</Button>
            </Stack>
        </Paper>
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