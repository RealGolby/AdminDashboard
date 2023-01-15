import {Link} from "react-router-dom";
import Paper from "@mui/material/Paper";
import {DataGrid} from "@mui/x-data-grid";
import React from "react";

interface GeneralCharacter {
    name: string
    id: number
    susAmount: number
    playTime: number
    kills: number
    deaths: number

}

const rows: GeneralCharacter[] = [
    {name: "Test1", id: 1, susAmount: 23, playTime: 20.4, kills: 31, deaths: 5},
    {name: "TestChar", id: 2, susAmount: 11, playTime: 9.8, kills: 8, deaths: 7},
    {name: "Charrracterrrr", id: 3, susAmount: 7, playTime: 13.7, kills: 7, deaths: 1}
];


const columns = [
    { field: 'name', headerName: 'name', width: 150 },
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'susAmount', headerName: 'SUS', width: 150 },
    { field: 'playTime', headerName: 'playTime', width: 150 },
    { field: 'kills', headerName: 'onlinePlayers', width: 150 },
    { field: 'deaths', headerName: 'maxPlayers', width: 150 },
    { field: "e", headerName: "View", sortable: false,
        renderCell: (params: any) => {
            const onClick = async (e: any) => {
                alert(params.row.id)
                console.log(params.api)
            }

            return <Link to={"" + params.row.id + ""}>View</Link>
        }
    }
];

function ServerCharacters() {


    return (
        <Paper style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </Paper>
    )
}

export default ServerCharacters;