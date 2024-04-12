'use client';
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { orange } from '@mui/material/colors';

const InfoSection = () => {
    return (
        <Box sx={{ bgcolor: '#121212', py: 5, px: 5, display: 'flex', alignItems: 'center', mx: 2, borderRadius: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: orange[500], mb: 3, ml: 10 }}>
                        CHEASYSWAP PROTOCOL INFO
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                        CheasySwap is a next-generation decentralized exchange platform, offering an interoperable swapping mechanism that rivals industry giants like Uniswap and PancakeSwap. Our protocol is designed to provide seamless token exchange across multiple chains, high liquidity options, and minimal slippage.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                        Our platform leverages automated market maker (AMM) technology to ensure that your trading experience is efficient and user-friendly. With CheasySwap, users can earn CHEASY tokens through yield farming, staking, and by participating in our governance model.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                        We are committed to providing a secure, transparent, and cost-effective trading environment. Join us on the journey to redefine the DeFi space.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={5} display="flex" justifyContent="center">
                    <Paper elevation={6} sx={{ p: 2, bgcolor: 'transparent' }}>
                        <Box
                            component="img"
                            sx={{
                                height: 'auto',
                                maxWidth: '100%',
                                maxHeight: { xs: 233, md: 350 },
                                borderRadius: '10px',
                            }}
                            alt="CheasySwap Protocol"
                            src="/swap.png" // Replace with path to your image
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InfoSection;
