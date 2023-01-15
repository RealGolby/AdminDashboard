import {Typography} from "@mui/material";
import {MockServerLogs} from "./MockServerLogs";

export default function ServerLogs() {
    return <Typography style={{whiteSpace: 'pre-line'}}>{MockServerLogs}</Typography>
}