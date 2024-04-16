'use client';
import React from 'react';
import { Box, Grid, Link, Typography, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import { orange } from '@mui/material/colors';

const logoSrc = '/cheasy.png';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                px: 4,
                py: 2,
                bgcolor: '#121212',
                color: orange[500],
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: '5%'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <img src={logoSrc} alt="Token Logo" style={{ width: '80px', marginRight: '12px' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>CheasySwap</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link href="#" sx={{ color: 'white', mr: 3, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>About</Link>
                <Link href="#" sx={{ color: 'white', mr: 3, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Roadmap</Link>
                <Link href="#" sx={{ color: 'white', mr: 3, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Rewards</Link>
                <Link href="#" sx={{ color: 'white', mr: 3, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>FAQ</Link>
                <Link href="#" sx={{ color: 'white', mr: 3, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Privacy Policy</Link>
                <Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Terms & Conditions</Link>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                }}
            >
                <Typography sx={{ mb: 1, color: 'white' }}>4th Floor Woof Street</Typography>
                <Typography sx={{ mb: 1, color: 'white' }}>Doge Trade Center, Panama</Typography>
                <Link href="mailto:marketing@yourtoken.io" sx={{ color: 'white', mb: 2, '&:hover': { textDecoration: 'underline' } }}>
                    marketing@yourtoken.io
                </Link>
                <Box>
                    <IconButton href="#" sx={{ color: orange[500], '&:hover': { color: 'white' } }}><TwitterIcon /></IconButton>
                    <IconButton href="#" sx={{ color: orange[500], '&:hover': { color: 'white' } }}><TelegramIcon /></IconButton>
                </Box>
                <Typography sx={{ mt: 1, color: 'white' }}>© 2024 CheasySwap. All Rights Reserved.</Typography>
            </Box>
        </Box>
    );
};

export default Footer;
