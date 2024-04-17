"use client";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import cheasyImage from '../../public/cheasy.png';
import HeaderButton from './HeaderButton';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            onClick={handleDrawerToggle}
            width='100vw'
            sx={{
                '& > *': { // This applies the style to every direct child of the Box component
                    margin: 2, // You can change this value to the margin you want
                },
            }}
        >
            <HeaderButton name="Buy Cheasy" />
            <HeaderButton name="Roadmap" />
            <HeaderButton name="Tokenomics" />
            <HeaderButton name="About" />
            <HeaderButton name="FAQs" />
            <HeaderButton name="Docs" />
            <w3m-button />
        </Box>
    );

    return (
        <AppBar position="relative" elevation={0} sx={{ background: 'inherit', marginTop: 2, zIndex: 2 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={cheasyImage.src} alt="Cheasy" style={{ width: 70, height: 70 }} />
                    <Typography
                        sx={{
                            flexGrow: 1,
                            color: 'orange',
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginLeft: 2,
                        }}
                    >
                        CheasySwap
                    </Typography>
                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '50%' }}>
                                <HeaderButton name="Buy Cheasy" />
                                <HeaderButton name="Roadmap" />
                                <HeaderButton name="Tokenomics" />
                                <HeaderButton name="About" />
                                <HeaderButton name="FAQs" />
                                <HeaderButton name="Docs" />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'right',
                                justifyContent: 'flex-end',
                                width: '30%',
                            }}>
                                <w3m-button />
                            </Box>
                        </>
                    )}

                </Toolbar>
            </Container>
            {isMobile && (
                <Box
                    sx={{
                        width: 200,
                        flexShrink: 0,
                        display: mobileOpen ? 'block' : 'none',
                    }}
                >
                    {drawer}
                </Box>
            )}
        </AppBar>
    );
}
