'use client';
import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PieChart, PieSeries } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { orange } from '@mui/material/colors';

const data = [
    { value: 25, label: 'PRESALE' },
    { value: 20, label: 'MARKETING' },
    { value: 20, label: 'TREASURY' },
    { value: 15, label: 'STAKING' },
    { value: 10, label: 'TEAM' },
    { value: 10, label: 'LIQUIDITY' },
];

const size = {
    width: 600,
    height: 400,
};

const StyledText = styled('text')(() => ({
    fill: orange[500],
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
    fontWeight: 'bold',
}));

const PieCenterLabel = ({ children }) => {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
};

const Tokenomics = () => {
    return (
        <Box sx={{
            bgcolor: '#121212', // Ensuring background compatibility
            color: orange[500],
            height: '100vh',
            mt: '5%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mx: 2,
            borderRadius: 2,
            px: 5,
        }}>
            <Typography variant="h3" sx={{ mb: 4, fontWeight: 'bold' }}>
                TOKENOMICS
            </Typography>
            <Box display="flex" sx={{ width: '100%' }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    p: 4,
                    bgcolor: '#333', // Enhancing visibility
                    borderRadius: '20px',
                }}>
                    <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }}>
                        TOKEN INFORMATION
                    </Typography>
                    {data.map((item) => (
                        <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                            <FiberManualRecordIcon sx={{ color: orange[500], mr: 1 }} />
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                {item.value}% {item.label}
                            </Typography>
                        </Box>
                    ))}
                    <Typography sx={{ mt: 2, fontSize: 16, fontWeight: 'bold' }} >
                        CHEASY TOKEN ADDRESS: <br /> 0x2541A36BE4cD39286ED61a3E6AFC2307602489d6
                    </Typography>
                </Box>
                <PieChart series={[{ data, innerRadius: 100 }]} {...size} >
                    <PieCenterLabel>100 M SUPPLY</PieCenterLabel>
                </PieChart>
            </Box>
        </Box>
    );
};

export default Tokenomics;