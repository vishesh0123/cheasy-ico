'use client';
import React from 'react';
import { Box, Grid, Link, Typography, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import { orange } from '@mui/material/colors';

// Assuming you have your token logo as an image file in your project's public directory
const logoSrc = '/cheasy.png';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                px: 3,
                py: 2,
                bgcolor: '#121212',
                color: orange[500],
                fontSize: 14,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: '5%'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    mb: { xs: 2, md: 0 },
                }}
            >
                <img src={logoSrc} alt="Token Logo" style={{ width: '100px', marginBottom: '8px' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>CHEASY</Typography>
            </Box>
            <Grid container spacing={2} justifyContent="center" sx={{ mb: { xs: 2, md: 0 } }}>
                {/* Update href with actual URLs */}
                <Grid item xs={6} md={2}><Link href="#" sx={{ color: orange[500] }}>About</Link></Grid>
                <Grid item xs={6} md={2}><Link href="#" sx={{ color: orange[500] }}>Roadmap</Link></Grid>
                <Grid item xs={6} md={2}><Link href="#" sx={{ color: orange[500] }}>Rewards</Link></Grid>
                <Grid item xs={6} md={2}><Link href="#" sx={{ color: orange[500] }}>FAQ</Link></Grid>
                <Grid item xs={6} md={2}><Link href="#" sx={{ color: orange[500] }}>Privacy Policy</Link></Grid>
                <Grid item xs={6} md={2}><Link href="#" sx={{ color: orange[500] }}>Terms & Conditions</Link></Grid>
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-end' },
                }}
            >
                <Typography sx={{ mb: 1 }}>4th Floor Woof Street</Typography>
                <Typography sx={{ mb: 1 }}>Doge Trade Center, Panama</Typography>
                <Link href="mailto:marketing@yourtoken.io" sx={{ color: orange[500], mb: 1 }}>
                    marketing@yourtoken.io
                </Link>
                <Box>
                    <IconButton href="#" sx={{ color: orange[500] }}><TwitterIcon /></IconButton>
                    <IconButton href="#" sx={{ color: orange[500] }}><TelegramIcon /></IconButton>
                </Box>
                <Typography sx={{ mt: 1 }}>2024 Token Name. All Rights Reserved.</Typography>
            </Box>
        </Box>
    );
};

export default Footer;
