"use client";
import React from 'react'
import { Box } from '@mui/material';
import ICOPhases from './ICOPhases';
import IcoLaunch from './IcoLaunch';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Launch() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            {isMobile ?
                (<Box id="buy cheasy"
                    // display='flex'
                    // justifyContent='space-between'
                    // flexDirection='column'
                    maxWidth='100vw'
                >
                    <ICOPhases />
                    <IcoLaunch />
                </Box>) :
                (
                    <Box id="buy cheasy" display='flex' justifyContent='space-between'>
                        <ICOPhases />
                        <IcoLaunch />
                    </Box>
                )}
        </>
    )
}
