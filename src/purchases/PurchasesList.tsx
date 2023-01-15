import {Link} from "react-router-dom";
import Paper from "@mui/material/Paper";
import {DataGrid} from "@mui/x-data-grid";
import React from "react";


interface PurchaseGeneral {
    id: number
    priceEuro: number
    itemKind: string
    isRefunded: boolean
}

// id, amount, timestamp, store, isRefunded, player
const rows: PurchaseGeneral[] = [
    {id: 1, priceEuro: 20, itemKind: "BaseGame", isRefunded: false},
    {id: 2, priceEuro: 20, itemKind: "BaseGame", isRefunded: false},
    {id: 3, priceEuro: 20, itemKind: "BaseGame", isRefunded: false},
    {id: 4, priceEuro: 20, itemKind: "BaseGame", isRefunded: false}
];


const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'priceEuro', headerName: 'price €', width: 150 },
    { field: 'itemKind', headerName: 'item', width: 150 },
    { field: 'isRefunded', headerName: 'is refunded', width: 150 },
    { field: "e", headerName: "View", sortable: false,
        renderCell: (params: any) => {
            // getPlayer from purchase
            return <Link to={"/players/"+params.row.id}>View</Link>
        }
    }
];

export default function PurchasesList() {
    return (
        <Paper style={{ height: "100%", width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </Paper>
    )
}
