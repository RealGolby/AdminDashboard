import {DataGrid} from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
// @ts-ignore
import React from "react";
import {Link} from "react-router-dom";

interface region {

}

interface ServerGeneral {
    name: string
    id: number
    region: string
    type: string
    onlinePlayers: number
    maxPlayers: number
    avgServerLoad: number
}

const rows: ServerGeneral[] = [
    {name: "quartz", id: 1, region: "EU", type: "pvp", onlinePlayers: 84, maxPlayers: 100, avgServerLoad: 60},
    {name: "obsidian", id: 2, region: "EU", type: "pvp", onlinePlayers: 84, maxPlayers: 100, avgServerLoad: 60},
    {name: "amethyst", id: 3, region: "EU", type: "pvp", onlinePlayers: 84, maxPlayers: 100, avgServerLoad: 60}
];


const columns = [
    { field: 'name', headerName: 'name', width: 150 },
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'region', headerName: 'region', width: 150 },
    { field: 'type', headerName: 'type', width: 150 },
    { field: 'onlinePlayers', headerName: 'onlinePlayers', width: 150 },
    { field: 'maxPlayers', headerName: 'maxPlayers', width: 150 },
    { field: 'avgServerLoad', headerName: 'avgServerLoad', width: 150 },
    { field: "e", headerName: "View", sortable: false,
        renderCell: (params: any) => {
            const onClick = async (e: any) => {
                alert(params.row.id)
                console.log(params.api)
            }

            return <Link to={"/backend/servers/"+params.row.id}>View</Link>
        }
    }
];

function ServerList() {
    return (
        <Paper style={{ height: "100%", width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </Paper>
    )
}

export default ServerList;