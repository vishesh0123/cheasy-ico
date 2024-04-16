import React from 'react'
import { Box, Typography, Paper } from '@mui/material';
import ICOPhases from './ICOPhases';
import IcoLaunch from './IcoLaunch';


export default function Launch() {
    return (
        <Box display='flex' justifyContent='space-between'>
            <ICOPhases />
            <IcoLaunch />
        </Box>
    )
}
