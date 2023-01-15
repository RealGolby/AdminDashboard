import {Stack, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import {DashboardItemTitle} from "../DashboardItemTitle";
import * as React from "react";
import {useParams} from "react-router-dom";
import {SuspensionHistory, TakeAction} from "../backend/ServerCharacter";
import ItemContainer from "../ItemContainer";

/*
platforma
joindate
ban history
last online
 */

function PlayerInfo() {
    let { playerId } = useParams()
    //     {name: "quartz", id: 1, isBanned: false, isAdmin: false, joinDate: "21.2.2023", platform: "Steam", isOnline: false},
    return (
        <ItemContainer title="Basic Information">
            <Stack direction={"row"} spacing={2}>
                <Stack>
                    <Typography variant={"caption"}>name:</Typography>
                    <Typography variant={"h5"}>SteamUser420</Typography>
                </Stack>
                <Stack>
                    <Typography variant={"caption"}>id:</Typography>
                    <Typography variant={"h5"}>3</Typography>
                </Stack>
                <Stack>
                    <Typography variant={"caption"}>is banned:</Typography>
                    <Typography variant={"h5"}>false</Typography>
                </Stack>
                <Stack>
                    <Typography variant={"caption"}>is admin:</Typography>
                    <Typography variant={"h5"}>false</Typography>
                </Stack>
                <Stack>
                    <Typography variant={"caption"}>join date:</Typography>
                    <Typography variant={"h5"}>21.3.2023</Typography>
                </Stack>
                <Stack>
                    <Typography variant={"caption"}>platform:</Typography>
                    <Typography variant={"h5"}>Steam</Typography>
                </Stack>
                <Stack>
                    <Typography variant={"caption"}>last online:</Typography>
                    <Typography variant={"h5"}>Now</Typography>
                </Stack>
            </Stack>
        </ItemContainer>
    )
}


export default function Player() {

    return (
        <Stack sx={{padding: 1}} spacing={1}>
            <PlayerInfo/>
            <Stack direction={"row"} spacing={1}>
                <SuspensionHistory/>
                <TakeAction/>
            </Stack>
        </Stack>
    )
}