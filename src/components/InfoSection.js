'use client';
import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Grow } from '@mui/material';
import { orange } from '@mui/material/colors';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LayersIcon from '@mui/icons-material/Layers';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const features = [
    {
        icon: <SwapHorizIcon fontSize="large" color="primary" />,
        title: "Innovative Swapping Mechanism",
        description: "Ensures minimal slippage and optimizes trade routes across various liquidity pools."
    },
    {
        icon: <SecurityIcon fontSize="large" color="primary" />,
        title: "Enhanced Security Protocols",
        description: "Employs regular audits, real-time monitoring, and encryption to protect user data and funds."
    },
    {
        icon: <SpeedIcon fontSize="large" color="primary" />,
        title: "Low Transaction Costs",
        description: "Utilizes optimized smart contracts and layer-two solutions to reduce gas costs."
    },
    {
        icon: <PeopleIcon fontSize="large" color="primary" />,
        title: "User-Friendly Interface",
        description: "Features a simple, intuitive interface to reduce the complexity for new users."
    },
    // Adding new features here
    {
        icon: <TrendingUpIcon fontSize="large" color="primary" />,
        title: "Dynamic Yield Farming",
        description: "Adjusts farming rewards in real-time based on market conditions to maximize user gains."
    },
    {
        icon: <LayersIcon fontSize="large" color="primary" />,
        title: "Multi-Layer Security",
        description: "Implements multiple layers of security protocols to ensure maximum safety of assets."
    },
    {
        icon: <PublicIcon fontSize="large" color="primary" />,
        title: "Global Access",
        description: "Provides services across multiple blockchains, facilitating global access and participation."
    },
    {
        icon: <VerifiedUserIcon fontSize="large" color="primary" />,
        title: "Trustless Environment",
        description: "Ensures that all transactions are executed without the need for trusted intermediaries."
    }
];

function FeatureCard({ feature, delay }) {
    return (
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1000 + delay }}>
            <Grid item xs={12} sm={6} md={3}>
                <Card sx={{
                    minWidth: 200,
                    minHeight: 200,
                    bgcolor: 'transparent',
                    color: 'text.primary',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    m: 1,
                    border: `1px solid ${orange[500]}` // Adding orange border
                }}>
                    <CardContent>
                        {feature.icon}
                        <Typography variant="h5" component="div">
                            {feature.title}
                        </Typography>
                        <Typography variant="body2">
                            {feature.description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grow>
    );
}

function InfoSection() {
    return (
        <Box id="about" sx={{
            flexGrow: 1,
            p: 5,
            m: 2,
            mt: '5%',
            borderRadius: 2,
            bgcolor: '#121212',
            color: orange[500] // Using orange for text color
        }}>
            <Typography variant='h4' fontWeight='bold' gutterBottom textAlign="center" color={orange[500]}>
                WHY CHEASYSWAP ?
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} delay={index * 500} />
                ))}
            </Grid>
        </Box>
    );
}

export default InfoSection;
