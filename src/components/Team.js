'use client';
import React from 'react';
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import { orange } from '@mui/material/colors';

const teamMembers = [
    // Populate with your team member data
    {
        name: 'Alice Johnson',
        role: 'Founder & CEO',
        image: '/t1.jpg',
        bio: 'Alice has over 10 years of experience in blockchain technologies and business leadership.',
    },
    {
        name: 'Bob Smith',
        role: 'CTO',
        image: '/t2.jpg',
        bio: 'Bob is a tech visionary with a deep understanding of blockchain infrastructure and cybersecurity.',
    },
    {
        name: 'Bob Smith',
        role: 'CTO',
        image: '/t2.jpg',
        bio: 'Bob is a tech visionary with a deep understanding of blockchain infrastructure and cybersecurity.',
    },
    // Add more team members as needed
];

const Team = () => {
    return (
        <Box sx={{ bgcolor: '#121212', py: 5, px: 3, mt: '5%', mx: 2 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: orange[500], textAlign: 'center', mb: 4 }}>
                OUR MOTIVATED TEAM
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {teamMembers.map((member, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345, bgcolor: 'black', color: orange[500], '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s' } }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={member.image}
                                    alt={member.name}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {member.role}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mt: 1, color: 'white' }}>
                                        {member.bio}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Team;
