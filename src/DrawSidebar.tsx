import {List, SvgIconTypeMap} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {useNavigate} from "react-router-dom";
import Paper from "@mui/material/Paper";


export interface ListItem {
    name: String,
    children: ListItem[] | null,
    route: string
    icon: any
}

export function DrawSidebar({items, offset, route}: { items: ListItem[], offset: number, route: string}) {
    let navigate = useNavigate()

    function isSelected(path: string) {
        return path === route;
    }

    return (
        <List sx={{padding: 1}}>
            {
                items.map((it) => {
                    return (
                        <>
                            {
                                isSelected(it.route) ? (
                                    <Paper>
                                        <ListItemButton sx={{ pl: 4*offset }} onClick={() => {navigate(it.route)}}>
                                            <ListItemIcon>
                                                {it.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={it.name} />
                                        </ListItemButton>
                                    </Paper>
                                ) : (
                                    <ListItemButton sx={{ pl: 4*offset }} onClick={() => {navigate(it.route)}}>
                                        <ListItemIcon>
                                            {it.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={it.name} />
                                    </ListItemButton>
                                )
                            }
                            {
                                it.children != null ? <List>{<DrawSidebar items={it.children} offset={offset+1} route={route}/>}</List> : undefined
                            }
                        </>
                    )
                })
            }
        </List>
    )
}