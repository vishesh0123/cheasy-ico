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
            <Box sx={{ flexGrow: 1, m: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                        <Typography>
                            CheasySwap&apos;s mission is to revolutionize the decentralized finance landscape by innovating and simplifying DeFi transactions, making them more accessible, efficient, and secure for all users, regardless of their technical expertise. We are committed to driving the adoption of DeFi by addressing the core challenges that hinder its mainstream acceptance. Through CheasySwap, we aim to empower individuals and businesses to participate in an open, transparent, and equitable financial ecosystem.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                width: '100%',
                                height: 0,
                                paddingBottom: '56.25%', // 16:9 Aspect Ratio
                                position: 'relative',
                            }}
                        >
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/M_fuXxRGx8k?si=fhBsSwPehHOUvWQA"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="CheasySwap Video"
                            ></iframe>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Grid container spacing={2} justifyContent="center">
                {features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} delay={index * 500} />
                ))}
            </Grid>
        </Box>
    );
}

export default InfoSection;
