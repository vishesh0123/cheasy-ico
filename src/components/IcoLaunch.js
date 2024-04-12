'use client';
import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { red, orange } from '@mui/material/colors';

const CountdownSegment = styled(Box)(({ theme }) => ({
    display: 'inline-block',
    backgroundColor: red[500],
    borderRadius: '10px',
    padding: theme.spacing(1, 2),
    margin: theme.spacing(0, 0.5),
    color: theme.palette.common.white,
    fontWeight: 'bold',
}));

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            {Object.keys(timeLeft).map((interval, i) => (
                <CountdownSegment key={i}>
                    {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: 25,
                    }} variant="caption" display="block">{interval.toUpperCase()}</Typography>
                </CountdownSegment>
            ))}
        </Box>
    );
};

const IcoLaunch = () => {
    // Set the date you're counting down to
    const icoStartDate = new Date('2024-07-01T00:00:00');

    return (
        <Box sx={{
            position: 'absolute', // Adjusted from 'absolute' for the example
            top: '20%', // Adjust these values as necessary
            right: '2%',
            border: `5px solid ${orange[500]}`,
            width: 'auto', // Adjusted from a percentage for the example
            maxWidth: '600px', // Maximum width of the paper
            margin: 'auto', // For centering if needed
            borderRadius: '10px',
        }}>
            <Paper elevation={4} sx={{ p: 4, bgcolor: '#121212', color: 'white', textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: orange[500] }}>
                    ICO LAUNCH COUNTDOWN
                </Typography>
                <CountdownTimer targetDate={icoStartDate} />
                <Typography variant="subtitle1" sx={{ mt: 2, color: orange[300], fontWeight: 'bold', fontSize: 20 }}>
                    1 CHEASY  = $0.05
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, fontWeight: 'bold', color: orange[300] }}>
                    Get ready to participate in the revolution of decentralized finance. Secure your spot and be one of the first to get Cheasy Tokens at the most competitive rates. Stay tuned!
                </Typography>
            </Paper>
        </Box>
    );
};

export default IcoLaunch;
