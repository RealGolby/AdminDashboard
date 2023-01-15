import * as React from 'react';
import {useState} from 'react';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {DrawSidebar} from "./DrawSidebar";
import {createBrowserRouter, Outlet, RouterProvider, useLocation} from "react-router-dom";
import Paper from '@mui/material/Paper';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {Button, Card, List, ListItemText, Snackbar, Stack, Typography} from "@mui/material";
import ServerList from "./backend/ServerList";
import Server from "./backend/Server";
import {DashboardItemTitle} from "./DashboardItemTitle";
import ServerBase from "./backend/ServerBase";
import ServerManage from "./backend/ServerManage";
import ServerLogs from "./backend/ServerLogs";
import ServerConsole from "./backend/ServerConsole";
import ServerBackups from "./backend/ServerBackups";
import ServerCharacters from "./backend/ServerCharacters";
import ServerCharacter from "./backend/ServerCharacter";
import PlayerList from "./players/PlayerList";
import Player from "./players/Player";
import PurchasesList from "./purchases/PurchasesList";
import {SnackbarProvider} from "notistack";

import StorageIcon from '@mui/icons-material/Storage';
import PeopleIcon from '@mui/icons-material/People';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from "@mui/icons-material/Dashboard";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#4fbabf',
        },
        secondary: {
          main: '#62a09e',
        },
        background: {
          default: '#3d484a',
          paper: '#27343f',
        },
        text: {
          primary: 'rgba(255,255,255,0.87)',
          secondary: 'rgba(255,255,255,0.54)',
          disabled: 'rgba(255,255,255,0.38)',
        },
        divider: 'rgba(77,125,129,0.12)',
        info: {
          main: '#0881d4',
        },
      },
});

/*
    {name: "Backend", route: "/backend",
        children:
            [
                {
                    name: "logs",
                    route: "/backend/logs",
                    children: null
                },
                {
                    name: "events",
                    route: "/backend/events",
                    children: null
                },
                {
                    name: "servers",
                    route: "/backend/servers",
                    children: null
                }
            ]
    },

 */

const drawerItems = [
    {name: "Overview", children: null, route: "/", icon:<DashboardIcon/>},
    {name: "Servers", route: "/backend/servers", children: null, icon:<StorageIcon/>},
    {name: "Players", route: "/players", children: null, icon:<PeopleIcon/>},
    {name: "Purchases", route: "/purchases", children:null, icon:<CreditCardIcon/>}
]

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const purchasesWeekly = [
    {
        name: "sunday",
        epicStore: 54,
        steam: 154,
        GOG: 21
    },
    {
        name: "monday",
        epicStore: 67,
        steam: 123,
        GOG: 19
    },
    {
        name: "wednesday",
        epicStore: 79,
        steam: 120,
        GOG: 30
    },
    {
        name: "thursday",
        epicStore: 67,
        steam: 167,
        GOG: 27
    },
    {
        name: "friday",
        epicStore: 64,
        steam: 152,
        GOG: 13
    },
    {
        name: "saturday",
        epicStore: 70,
        steam: 170,
        GOG: 10
    }
]

const onlinePlayersWeekly = [
    {
        name: "sunday",
        online: 5110,
    },
    {
        name: "monday",
        online: 4846,
    },
    {
        name: "wednesday",
        online: 5170,
    },
    {
        name: "thursday",
        online: 4670,
    },
    {
        name: "friday",
        online: 7054,
    },
    {
        name: "saturday",
        online: 6822,
    }
]

function OnlineServers() {
    return (
        <Paper sx={{padding: 1}}>
            <DashboardItemTitle>Online Servers: 32</DashboardItemTitle>
            <Typography>Total Servers: 42</Typography>
        </Paper>
    )
}

function OnlinePlayers() {
    return (
        <Paper sx={{padding: 1}}>
            <DashboardItemTitle>Online Players: 4171</DashboardItemTitle>
            <Stack direction={"row"} spacing={4} justifyContent={"space-evenly" } divider={<Divider orientation="vertical" flexItem />}>
                <Typography>Total Players: 9487</Typography>
                <Typography>Avg Players: 4026</Typography>
            </Stack>
        </Paper>
    )
}

function PurchasesToday() {
    return (
        <Paper sx={{padding: 1}}>
            <DashboardItemTitle>Daily purchases: 532</DashboardItemTitle>
            <Stack direction={"row"} spacing={4} justifyContent={"space-evenly" } divider={<Divider orientation="vertical" flexItem />}>
                <Typography>Total purchases: 2684</Typography>
                <Typography>estimated earning: 420.69 $</Typography>
            </Stack>
        </Paper>
    )
}

// TODO
// each line representing region
export function WeeklyPlayersChart() {
    return (
        <Paper sx={{padding: 1}}>
            <DashboardItemTitle>Online Players</DashboardItemTitle>
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
                <Line type="monotone" dataKey="online" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </Paper>
    )
}

// TODO
//
function ImportantNotifications() {
    return (
        <Paper sx={{padding: 1}}>
            <DashboardItemTitle>Important Notifications</DashboardItemTitle>
            <List>
                <Card>
                    <ListItemText>Player <a>FASABI</a> killed 256 players in a minute 25m ago</ListItemText>
                    <ListItemText>Server <a>snowflake-EU-100-duo</a> crashed unexpectedly yesterday</ListItemText>
                </Card>
            </List>
        </Paper>
    )
}

// TODO
// each line representing store
function WeeklyPurchasesChart() {
    return (
        <Paper sx={{padding: 1}}>
            <Typography fontSize={42}>Game purchases</Typography>
            <LineChart
                width={500}
                height={300}
                data={purchasesWeekly}
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
                <Line type="monotone" dataKey="steam" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="epicStore" stroke="#82ca9d" />
                <Line type="monotone" dataKey="GOG" stroke="#82cad9" />
            </LineChart>
        </Paper>
    )
}

/*

<Grid container spacing={{xs: 2}}>
                    <Grid item><OnlineServers/></Grid>
                    <Grid item><OnlinePlayers/></Grid>
                    <Grid item ><PurchasesToday/></Grid>
                    <Grid item><WeeklyPurchasesChart/></Grid>
                </Grid>
 */

const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardContent/>,
        children: [
            {
                path: "",
                element: <Stack spacing={2}>
                    <Stack direction={{xs: 'column', md: 'row'}} spacing={{xs: 2, md: 2}}>
                        <OnlinePlayers/>
                        <OnlineServers/>
                        <PurchasesToday/>
                    </Stack>
                    <Stack direction={{xs: 'column', md: 'row'}} spacing={{xs: 2, md: 2}}>
                        <WeeklyPurchasesChart/>
                        <WeeklyPlayersChart/>
                    </Stack>
                    <Stack direction={{xs: 'column', md: 'row'}} spacing={{xs: 2, md: 2}}>
                        <ImportantNotifications/>
                    </Stack>
                </Stack>
            },
            {
                path: "/backend",
                children: [
                    {
                        path: "servers",
                        children:
                            [
                                {
                                    path: "",
                                    element: <ServerList/>
                                },
                                {
                                    path: ":serverID",
                                    element: <ServerBase/>,
                                    children:
                                        [
                                            {
                                                path: "",
                                                element: <Server/>
                                            },
                                            {
                                                path: "manage",
                                                element: <ServerManage/>
                                            },
                                            {
                                                path: "logs",
                                                element: <ServerLogs/>
                                            },
                                            {
                                                path: "events",
                                                element: <p>events</p>
                                            },
                                            {
                                                path: "characters",
                                                children:
                                                    [
                                                        {
                                                            path: "",
                                                            element: <ServerCharacters/>
                                                        },
                                                        {
                                                            path: ":characterID",
                                                            element: <ServerCharacter/>
                                                        }
                                                    ]
                                            },
                                            {
                                                path: "backups",
                                                element: <ServerBackups/>
                                            },
                                            {
                                                path: "console",
                                                element: <ServerConsole/>
                                            }
                                        ]
                                }
                            ]
                    },
                    {
                        path: "logs",
                        element:
                            <>
                                <p>backend/logs</p>
                            </>
                    },
                    {
                        path: "events",
                        element:
                            <>
                                <p>backend/events</p>
                            </>
                    },
                    {
                        index: true,
                        element:
                            <>
                                <p>backend</p>
                            </>
                    }
                ]
            },
            {
                path: "players",
                children: [
                    {
                        path: "suspensions",
                        element:
                            <>
                                <p>players/suspensions</p>
                            </>
                    },
                    {
                        index: true,
                        element: <PlayerList/>
                    },
                    {
                        path: ":playerID",
                        element: <Player/>
                    }
                ],
            },
            {
                path: "purchases",
                children: [
                    {
                        index: true,
                        element: <PurchasesList/>
                    }
                ]
            },
        ]
    }
]);

function DashboardContent() {
    const location = useLocation()
    const [selected, setSelected] = useState(["Overview"]);
    return (
        <ThemeProvider theme={mdTheme}>
            <SnackbarProvider maxSnack={3}>
                <Box sx={{display: 'flex'}}>
                    <CssBaseline/>
                    <Drawer variant="permanent" open={true}>
                        <Toolbar
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                px: [1],
                            }}
                        >
                           <Typography width={"100%"}>Admin Panel</Typography> 
                        </Toolbar>
                        <Divider/>
                        <DrawSidebar offset={0} items={drawerItems} route={location.pathname}/>
                    </Drawer>
                    <Box sx={{padding: 2}} width={"100%"} minHeight={"100vh"}>
                        <Outlet/>
                    </Box>
                </Box>
            </SnackbarProvider>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return   <RouterProvider router={router} />;
}
