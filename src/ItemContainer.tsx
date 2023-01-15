import { Paper } from '@mui/material';
import * as React from 'react';
import { DashboardItemTitle } from './DashboardItemTitle';

export default function DashboardItemContainer({title, children}: {title: string, children: any}) {
    return (
        <Paper sx={{padding: 1}}>
            <DashboardItemTitle>{title}</DashboardItemTitle>
            {children}
        </Paper>
    )
}
