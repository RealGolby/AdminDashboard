import {Link} from "react-router-dom";
import Paper from "@mui/material/Paper";
import {DataGrid} from "@mui/x-data-grid";
import React from "react";


interface PlayerGeneral {
    name: string
    id: number
    isBanned: boolean,
    isAdmin: boolean,
    joinDate: string,
    platform: string,
    isOnline: boolean
}

const rows: PlayerGeneral[] = [
    {name: "quartz", id: 1, isBanned: false, isAdmin: false, joinDate: "21.2.2023", platform: "Steam", isOnline: false},
    {name: "quartz", id: 1, isBanned: false, isAdmin: false, joinDate: "21.2.2023", platform: "Steam", isOnline: false},
    {name: "quartz", id: 1, isBanned: false, isAdmin: false, joinDate: "21.2.2023", platform: "Steam", isOnline: false},
    {name: "quartz", id: 1, isBanned: false, isAdmin: true, joinDate: "21.2.2023", platform: "Steam", isOnline: false},
];


const columns = [
    { field: 'name', headerName: 'name', width: 150 },
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'isBanned', headerName: 'isBanned', width: 150 },
    { field: 'isAdmin', headerName: 'isAdmin', width: 150 },
    { field: 'joinDate', headerName: 'joinDate', width: 150 },
    { field: 'platform', headerName: 'platform', width: 150 },
    { field: 'isOnline', headerName: 'isOnline', width: 150 },
    { field: "e", headerName: "Action", sortable: false,
        renderCell: (params: any) => {
            const onClick = async (e: any) => {
                alert(params.row.id)
                console.log(params.api)
            }

            return <Link to={"/players/"+params.row.id}>View</Link>
        }
    }
];

export default function PlayerList() {
    return (
        <Paper style={{ height: "100%", width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </Paper>
    )
}