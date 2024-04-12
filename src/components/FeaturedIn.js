'use client';
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { orange } from '@mui/material/colors';

const features = [
    { logo: '/f1.png', name: 'Logo 1' },
    { logo: '/f2.png', name: 'Logo 2' },
    { logo: '/f3.png', name: 'Logo 3' },
    // More logos...
];
const FeaturedIn = () => {
    return (
        <Box sx={{
            bgcolor: '#121212', py: 5, px: 3, mt: '5%', mx: 2,
            borderRadius: 2
        }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: orange[500], textAlign: 'center', mb: 4 }}>
                FEATURED IN
            </Typography>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}> {/* Adjust the grid sizing to accommodate larger images */}
                        <Paper
                            elevation={3}
                            sx={{
                                p: 2,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                bgcolor: 'transparent',
                                border: `1px solid ${orange[500]}`,
                                borderRadius: '10px',
                                overflow: 'hidden', // To ensure the image does not overflow the paper on scaling
                            }}
                        >
                            <Box
                                component="img"
                                src={feature.logo}
                                alt={feature.name}
                                sx={{
                                    width: '100%', // Full width of the paper
                                    maxWidth: '150px', // Increased max-width of the image
                                    height: 'auto',
                                    transition: 'transform .2s', // Smooth transition for hover effect
                                    '&:hover': {
                                        transform: 'scale(1.1)', // Slightly increase size on hover
                                    },
                                }}
                            />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FeaturedIn;

