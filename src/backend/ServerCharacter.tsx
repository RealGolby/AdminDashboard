import {Button, List, MenuItem, Stack, Switch, TextField, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import {DashboardItemTitle} from "../DashboardItemTitle";
import * as React from "react";
import {Link, useParams} from "react-router-dom";
import Select from "@mui/material/Select";
import {useState} from "react";
import {useSnackbar} from "notistack";

function CharacterStatistics() {
    //     {name: "FASABI", id: 3, susAmount: 7, playTime: 13.7, kills: 7, deaths: 1}
    return <Paper sx={{padding: 1}}>
        <DashboardItemTitle>Character Statistics</DashboardItemTitle>
        <Stack direction={"row"} spacing={2}>
            <Stack>
                <Typography variant={"caption"}>Name:</Typography>
                <Typography variant={"h5"}>BOB</Typography>
            </Stack>
            <Stack>
                <Typography variant={"caption"}>id:</Typography>
                <Typography variant={"h5"}>3</Typography>
            </Stack>
            <Stack>
                <Typography variant={"caption"}>SUS:</Typography>
                <Typography variant={"h5"}>7</Typography>
            </Stack>
            <Stack>
                <Typography variant={"caption"}>playTime:</Typography>
                <Typography variant={"h5"}>14H</Typography>
            </Stack>
            <Stack>
                <Typography variant={"caption"}>kills:</Typography>
                <Typography variant={"h5"}>7</Typography>
            </Stack>
            <Stack>
                <Typography variant={"caption"}>deaths:</Typography>
                <Typography variant={"h5"}>1</Typography>
            </Stack>
            <Stack>
                <Typography variant={"caption"}>K/D</Typography>
                <Typography variant={"h5"}>7</Typography>
            </Stack>
        </Stack>
    </Paper>
}

function BasicServerInfo() {
    return <Paper sx={{padding: 1}}>
        <DashboardItemTitle>Server Info</DashboardItemTitle>
        <Stack direction={"row"} spacing={2}>
            <Stack>
                <Typography variant={"caption"}>Name:</Typography>
                <Typography variant={"h5"}>BOB</Typography>
            </Stack>
            <Stack>
                <Typography variant={"caption"}>id:</Typography>
                <Typography variant={"h5"}>3</Typography>
            </Stack>
            <Stack>
                <Typography variant={"caption"}>SUS:</Typography>
                <Typography variant={"h5"}>7</Typography>
            </Stack>
            <Stack>
                <Typography variant={"caption"}>playTime:</Typography>
                <Typography variant={"h5"}>14H</Typography>
            </Stack>
            <Stack>
                <Typography variant={"caption"}>kills:</Typography>
                <Typography variant={"h5"}>7</Typography>
            </Stack>
            <Stack>
                <Typography variant={"caption"}>deaths:</Typography>
                <Typography variant={"h5"}>1</Typography>
            </Stack>
            <Stack>
                <Typography variant={"caption"}>K/D</Typography>
                <Typography variant={"h5"}>7</Typography>
            </Stack>
        </Stack>
    </Paper>
}

export function SuspensionHistory() {
    return (
        <Paper sx={{padding: 1}}>
            <DashboardItemTitle>Suspensions</DashboardItemTitle>
            <List style={{height: "400px",overflow: 'scroll'}} sx={{padding: 1}}>
                <Typography>21.6.2023 - Player player1 id:1 banned by "Admin"<br/>duration: 1 week<br/>reson: "cheating"</Typography>
                <Typography>21.6.2023 - Player player1 id:1 banned by "Admin"<br/>duration: 1 week<br/>reson: "cheating"</Typography>
                <Typography>21.6.2023 - Player player1 id:1 banned by "Admin"<br/>duration: 1 week<br/>reson: "cheating"</Typography>
                <Typography>21.6.2023 - Player player1 id:1 banned by "Admin"<br/>duration: 1 week<br/>reson: "cheating"</Typography>
                <Typography>21.6.2023 - Player player1 id:1 banned by "Admin"<br/>duration: 1 week<br/>reson: "cheating"</Typography>
                <Typography>21.6.2023 - Player player1 id:1 banned by "Admin"<br/>duration: 1 week<br/>reson: "cheating"</Typography>
                <Typography>21.6.2023 - Player player1 id:1 muted by "Admin"<br/>duration: 1 week<br/>reson: "cheating"</Typography>
            </List>
        </Paper>
    )
}

export function TakeAction() {
    const [isIndefinite, setIndefinite] = useState(false)
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    // const [action, setAction] = useState(null)

    function showSnackbar() {
        enqueueSnackbar("Succesfully punished player", {variant: "success"})
    }

    return (
        <Paper sx={{padding: 1}}>
            <DashboardItemTitle>Take Action</DashboardItemTitle>

            <Stack spacing={1}>             <Typography>action:</Typography>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                >
                    <MenuItem value={10}>chat mute</MenuItem>
                    <MenuItem value={20}>ban</MenuItem>
                    <MenuItem value={30}>ban all</MenuItem>
                    <MenuItem value={40}>kick</MenuItem>
                </Select>

                <Stack>
                    <Typography>Permanent</Typography>
                    <Switch onClick={() => setIndefinite(!isIndefinite)}/>
                </Stack>
                {isIndefinite ? undefined : (
                    <>
                        <Typography>time in seconds:</Typography>
                        <TextField/>
                    </>
                )}
                <Typography>reason:</Typography>
                <TextField/>
                <Button variant={"contained"} onClick={showSnackbar}>submit</Button>
            </Stack>
        </Paper>
    )
}

export function ServerInfo() {
    let { serverID, characterID } = useParams()
    //     {name: "amethyst", id: 3, region: "EU", type: "pvp", onlinePlayers: 84, maxPlayers: 100, avgServerLoad: 60}
    return (
        <Paper sx={{padding: 1}}>
            <DashboardItemTitle>Server Information</DashboardItemTitle>
            <Stack direction={"row"} spacing={2}>
                <Stack>
                    <Typography variant={"caption"}>name:</Typography>
                    <Typography variant={"h5"}>amethyst</Typography>
                </Stack>
                <Stack>
                    <Typography variant={"caption"}>id:</Typography>
                    <Typography variant={"h5"}>3</Typography>
                </Stack>
                <Stack>
                    <Typography variant={"caption"}>region:</Typography>
                    <Typography variant={"h5"}>EU</Typography>
                </Stack>
                <Stack>
                    <Typography variant={"caption"}>type:</Typography>
                    <Typography variant={"h5"}>pvp</Typography>
                </Stack>
                <Stack>
                    <Typography variant={"caption"}>online players:</Typography>
                    <Typography variant={"h5"}>84/100</Typography>
                </Stack>
                <Stack>
                    <Typography variant={"caption"}>uptime:</Typography>
                    <Typography variant={"h5"}>60 days</Typography>
                </Stack>
                <Stack>
                    <Typography variant={"caption"}>view:</Typography>
                    <Link to={"/backend/servers/"+serverID}>View</Link>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default function ServerCharacter() {
    return (
        <Stack spacing={1} sx={{padding: 1}}>
            <Stack direction={"row"} spacing={1}>
                <CharacterStatistics/>
                <ServerInfo/>
            </Stack>
            <Stack direction={"row"} spacing={1} sx={{padding: 1}}>
                <TakeAction/>
                <SuspensionHistory/>
            </Stack>
        </Stack>
    )
}