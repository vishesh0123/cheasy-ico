'use client';
import React from 'react';
import { Box, Typography, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
import { orange } from '@mui/material/colors';
import { motion } from 'framer-motion';

const InfoSection = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const containerVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.3 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', delay: 0.5 } },
    };

    return (
        <Box sx={{
            bgcolor: '#121212',
            py: 5,
            px: 5,
            display: 'flex',
            alignItems: 'center',
            mx: 2,
            borderRadius: 2,
            overflow: 'hidden',
            mt: '5%',
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Typography variant="h4" component="h2" sx={{
                            fontWeight: 'bold',
                            color: orange[500],
                            mb: 3,
                            ml: matches ? 10 : 2,
                        }}>
                            CHEASYSWAP PROTOCOL INFO
                        </Typography>
                        <Typography variant="body1" paragraph sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 16,
                        }}>
                            CheasySwap is a next-generation decentralized exchange platform, offering an interoperable swapping mechanism that rivals industry giants like Uniswap and PancakeSwap. Our protocol is designed to provide seamless token exchange across multiple chains, high liquidity options, and minimal slippage.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 16,
                        }}>
                            Our platform leverages automated market maker (AMM) technology to ensure that your trading experience is efficient and user-friendly. With CheasySwap, users can earn CHEASY tokens through yield farming, staking, and by participating in our governance model.
                        </Typography>
                        <Typography variant="body1" sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 16,
                        }}>
                            We are committed to providing a secure, transparent, and cost-effective trading environment. Join us on the journey to redefine the DeFi space.
                        </Typography>
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={5}>
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                    >
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
                    </motion.div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InfoSection;
