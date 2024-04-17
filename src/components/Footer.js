'use client';
import React from 'react';
import { Box, Grid, Link, Typography, IconButton } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { orange } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const logoSrc = '/cheasy.png';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box
            component="footer"
            sx={{
                px: 4,
                py: 2,
                bgcolor: '#121212',
                color: orange[500],
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
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
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
                <Link href="/#about" sx={{ color: 'white', mr: 3, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>About</Link>
                <Link href="/#roadmap" sx={{ color: 'white', mr: 3, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Roadmap</Link>
                <Link href="/#faqs" sx={{ color: 'white', mr: 3, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>FAQ</Link>
                <Link href="/privacypolicy.pdf" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', mr: 3, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Privacy Policy</Link>
                <Link href="/terms.pdf" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Terms & Conditions</Link>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isMobile ? 'center' : 'flex-end',
                }}
            >
                <Link href="mailto:support@cheasy.finance" sx={{ color: 'white', mb: 2, '&:hover': { textDecoration: 'underline' } }}>
                    support@cheasy.finance
                </Link>
                <Box>
                    <IconButton href="https://twitter.com/CheasySwap" target="_blank" sx={{ color: orange[500], '&:hover': { color: 'white' } }}><XIcon /></IconButton>
                    <IconButton href="https://www.youtube.com/@CheasySwap" target="_blank" sx={{ color: orange[500], '&:hover': { color: 'white' } }}><YouTubeIcon /></IconButton>
                    <IconButton href="https://t.me/CheasySwap" target="_blank" sx={{ color: orange[500], '&:hover': { color: 'white' } }}><TelegramIcon /></IconButton>
                </Box>
                <Typography sx={{ mt: 1, color: 'white' }}>© 2024 CheasySwap. All Rights Reserved.</Typography>
            </Box>
        </Box>
    );
};

export default Footer;
