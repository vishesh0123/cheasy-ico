'use client';
import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

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

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
    fontWeight: 'bold',
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

export default function Tokenomics() {
    return (
        <Box sx={{
            // border: '5px solid orange',
            height: '100vh',
            mt: '10%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography sx={{
                color: 'orange',
                mt: 2,
                fontSize: 50,
                fontWeight: 'bold',
            }}>
                TOKENOMICS
            </Typography>
            <Box display='flex'
                sx={{
                    width: '100%',
                    mt: 6,
                }}>
                <Box sx={{
                    width: '42%',
                    // border: '2px solid orange',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    borderRadius: '20px',
                    ml: 5,
                }}>
                    <Typography sx={{
                        color: 'orange',
                        fontSize: 30,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                        TOKEN INFORMATION
                    </Typography>

                    <Box sx={{
                        ml: 2,
                    }}>
                        <Typography style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            color: 'orange',
                            fontWeight: 'bold',

                        }}>
                            <FiberManualRecordIcon />&nbsp;
                            25% OF SUPPLY SOLD IN PRESALE
                        </Typography>
                        <Typography style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            color: 'orange',
                            fontWeight: 'bold',

                        }}>
                            <FiberManualRecordIcon />&nbsp;
                            25% ALLOCATED FOR MARKETING
                        </Typography>
                        <Typography style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            color: 'orange',
                            fontWeight: 'bold',

                        }}>
                            <FiberManualRecordIcon />&nbsp;
                            25% FOR THE PROJECT TREASURY
                        </Typography>
                        <Typography style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            color: 'orange',
                            fontWeight: 'bold',

                        }}>
                            <FiberManualRecordIcon />&nbsp;
                            15% USED FOR STAKING REWARDS
                        </Typography>
                        <Typography style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            color: 'orange',
                            fontWeight: 'bold',

                        }}>
                            <FiberManualRecordIcon />&nbsp;
                            10% FOR EXCHANGE LIQUIDITY
                        </Typography>

                    </Box>


                    <Typography sx={{
                        color: 'orange',
                        fontSize: 20,
                        fontWeight: 'bold',
                        ml: 2,
                    }} >
                        CHEASY TOKEN ADDRESS: <br /> 0x2541A36BE4cD39286ED61a3E6AFC2307602489d6
                    </Typography>

                </Box>
                <PieChart
                    series={[{ data, innerRadius: 100 }]} {...size}
                >
                    <PieCenterLabel>100 M SUPPLY</PieCenterLabel>
                </PieChart>

            </Box>



        </Box>
    )
}
