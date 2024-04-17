"use client";
import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Button, Snackbar } from '@mui/material';
import { styled } from '@mui/system';
import { orange } from '@mui/material/colors';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const CountdownSegment = styled(motion.div)({
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 165, 0, 0.8)',
    borderRadius: '10px',
    padding: '10px 20px',
    margin: '0 10px',
    color: '#FFF',
    fontWeight: 'bold',
    boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
    fontSize: '2rem',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
});

const CountdownTimer = ({ targetDate, mobile }) => {
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

    const [timeLeft, setTimeLeft] = useState({});
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Set mounted state to true once the component mounts
    }, []);

    useEffect(() => {
        if (isMounted) {
            const timer = setTimeout(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isMounted, timeLeft]);

    const timeAnimation = {
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.5 }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            {Object.keys(timeLeft).length > 0 && Object.keys(timeLeft).map((interval, i) => (
                <CountdownSegment key={i} variants={timeAnimation} initial="initial" animate="animate">
                    {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
                    <Typography component="span" sx={{ fontSize: mobile ? 5 : 20, fontWeight: 'medium' }}>
                        {interval.toUpperCase()}
                    </Typography>
                </CountdownSegment>
            ))}
        </Box>
    );
};

const IcoLaunch = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const icoStartDate = new Date('2024-05-01T00:00:00');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <Box sx={{
            mt: '1%',
            mx: 2,
            // border: `3px solid ${orange[500]}`,
            width: 'auto',
            maxWidth: '100vw',
            borderRadius: '10px',
            // background: 'linear-gradient(145deg, #121212, #333333)', // Gradient background
        }}>
            <Paper elevation={4}
                sx={{
                    p: 4,
                    // bgcolor: '#121212',
                    color: 'white',
                    textAlign: 'center',
                    background: 'transparent',
                }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: orange[500], textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    PHASE 1 OF ICO WILL BE LIVE IN
                </Typography>
                <CountdownTimer targetDate={icoStartDate} mobile={isMobile} />
                <Typography variant="subtitle1" sx={{ mt: 2, color: orange[500], fontWeight: 'bold', fontSize: 20 }}>
                    1 CHEASY = $0.05
                </Typography>
                <Typography variant="h6" sx={{ mt: 3, color: orange[500] }}>
                    60,000,000 CHEASY ALLOCATED FOR PHASE 1
                </Typography>
                <Button variant="contained" sx={{ mt: 5, bgcolor: orange[500], '&:hover': { bgcolor: orange[700] } }}
                    onClick={() => setOpenSnackbar(true)}>
                    Buy Cheasy
                </Button>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    message="Phase 1 is not live yet"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center', // Centers children horizontally in the flex container
                    alignItems: 'center', // Centers children vertically in the flex container
                    width: '100%', // Ensures the box takes full width of its parent
                    mt: 5,
                }}>
                    <img src='usdt.svg' alt="USDT" style={{
                        margin: '0 5px',
                        width: '10%'
                    }} />
                    <img src='usdc.svg' alt="USDC" style={{
                        margin: '0 5px',// Adds horizontal margin between icons
                        width: '10%'
                    }} />
                    <img src='dai.svg' alt="DAI" style={{
                        margin: '0 5px', // Adds horizontal margin between icons
                        width: '10%'
                    }} />
                </Box>

                <Typography variant="caption" sx={{ display: 'block', mt: 1, color: orange[500], fontWeight: 'bold' }}>
                    USDT, USDC, DAI ACCEPTED ( BINANCE SMART CHAIN NETWORK )
                </Typography>
            </Paper>
        </Box>
    );
};

export default IcoLaunch;
