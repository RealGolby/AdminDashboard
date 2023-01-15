import {useNavigate, useParams} from "react-router-dom";
import {Button, ButtonGroup, List, ListItemButton, Stack, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import {DashboardItemTitle} from "../DashboardItemTitle";
import {WeeklyPlayersChart} from "../Dashboard";
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import * as React from "react";
import {Circle} from "@mui/icons-material";
import {green} from "@mui/material/colors";
import Divider from "@mui/material/Divider";

function ServerInfo() {
    //     {name: "amethyst", id: 3, region: "EU", type: "pvp", onlinePlayers: 84, maxPlayers: 100, avgServerLoad: 60}
    return (
        <Paper sx={{padding: 1}}>
            <DashboardItemTitle>Basic Information</DashboardItemTitle>
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
                    <Typography variant={"caption"}>onlinePlayers:</Typography>
                    <Typography variant={"h5"}>84/100</Typography>
                </Stack>
                <Stack>
                    <Typography variant={"caption"}>uptime:</Typography>
                    <Typography variant={"h5"}>60 days</Typography>
                </Stack>
            </Stack>
        </Paper>
    )
}

function ServerStatistics() {
    return <Paper sx={{padding: 1}}>
        <DashboardItemTitle>Server Statistics</DashboardItemTitle>
        <Stack direction={"row"} spacing={2}>
            <Stack>
                <Typography variant={"caption"}>cpu:</Typography>
                <Typography variant={"h5"}>80%</Typography>
            </Stack>
            <Stack>
                <Typography variant={"caption"}>ram:</Typography>
                <Typography variant={"h5"}>60%</Typography>
            </Stack>
            <Stack>
                <Typography variant={"caption"}>disk:</Typography>
                <Typography variant={"h5"}>40%</Typography>
            </Stack>
            <Stack>
                <Typography variant={"caption"}>network:</Typography>
                <Typography variant={"h5"}>20Mbps</Typography>
            </Stack>
        </Stack>
    </Paper>
}

function ServerState() {
    return (
        <Paper sx={{padding: 1}}>
            <DashboardItemTitle>Server State</DashboardItemTitle>
            <Stack direction={"row"}>
                <Circle color={"success"}/>
                <Typography variant={"h4"} sx={{padding: 1}}>Online</Typography>
            </Stack>
        </Paper>
    )
}

const onlinePlayersWeekly = [
    {
        name: "sunday",
        cpu: 70,
        mem: 60,
        net: 40,
        disk: 20
    },
    {
        name: "monday",
        cpu: 70,
        mem: 60,
        net: 40,
        disk: 20
    },
    {
        name: "wednesday",
        cpu: 70,
        mem: 60,
        net: 40,
        disk: 20
    },
    {
        name: "thursday",
        cpu: 70,
        mem: 60,
        net: 40,
        disk: 20
    },
    {
        name: "friday",
        cpu: 70,
        mem: 60,
        net: 40,
        disk: 20
    },
    {
        name: "saturday",
        cpu: 70,
        mem: 60,
        net: 40,
        disk: 20
    }
]

function WeeklyStatistics() {
    return <Paper sx={{padding: 1}}>
        <DashboardItemTitle>Server Load</DashboardItemTitle>
        <LineChart
            width={500}
            height={300}
            data={onlinePlayersWeekly}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cpu" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="mem" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="net" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="disk" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    </Paper>
}

export default function Server() {
    let { id } = useParams()

    return (
        <Stack width={"100%"}>
            <Stack spacing={2} width={"100%"} sx={{padding: 1}} flexWrap={"wrap"}>
                <Stack direction={"row"} spacing={2}>
                    <ServerInfo/>
                    <ServerState/>
                    <ServerStatistics/>
                </Stack>
                <Stack direction={"row"} spacing={2}>
                    <WeeklyPlayersChart/>
                    <WeeklyStatistics/>
                </Stack>
            </Stack>
        </Stack>
    )
}