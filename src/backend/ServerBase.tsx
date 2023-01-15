import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {Button, ButtonGroup, Stack} from "@mui/material";
import Divider from "@mui/material/Divider";
import {WeeklyPlayersChart} from "../Dashboard";
import * as React from "react";


export default function ServerBase() {
    let { serverID } = useParams()
    let navigate = useNavigate()
    const location = useLocation()


    console.log(location)

    function goto(path: string) {
        navigate("/backend/servers/"+serverID+"/"+path)
    }

    function getVariant(path: string) {
        if (path === "" && "/backend/servers/"+serverID === location.pathname) {
            return "contained"
        }
        if ("/backend/servers/"+serverID+"/"+path === location.pathname) {
            return "contained"
        }
        return "outlined"
    }

    return (
        <Stack width={"100%"}>
            <Stack height={64} direction={"row"}>
                <ButtonGroup color={"secondary"} variant="text" aria-label="text button group">
                    <Button variant={getVariant("")} onClick={() => {
                        goto("")
                    }
                    }>Overview</Button>
                    <Button variant={getVariant("manage")} onClick={() => {
                        goto("manage")
                    }}>Manage</Button>
                    <Button variant={getVariant("characters")} onClick={() => {
                        goto("characters")
                    }
                    }>Characters</Button>
                    <Button variant={getVariant("events")} onClick={() => {
                        goto("events")
                    }
                    }>Events</Button>
                    <Button variant={getVariant("logs")} onClick={() => {
                        goto("logs")
                    }
                    }>Logs</Button>
                    <Button variant={getVariant("backups")} onClick={() => {
                        goto("backups")
                    }
                    }>Backups</Button>
                    <Button variant={getVariant("console")} onClick={() => {
                        goto("console")
                    }
                    }>Console</Button>
                </ButtonGroup>
            </Stack>
            <Divider/>
            <Outlet/>
        </Stack>
    )
}