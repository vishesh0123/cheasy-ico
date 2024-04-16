import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import cheasyImage from '../../public/cheasy.png';
import HeaderButton from './HeaderButton';
import Head from 'next/head';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header() {
    return (
        <AppBar position="relative"
            elevation={0}
            sx={{
                background: 'inherit',
                marginTop: 2,
                zIndex: 2
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={cheasyImage.src} alt="Cheasy" style={{ width: 70, height: 70 }} />
                    <Typography
                        sx={{
                            color: 'orange',
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginLeft: 2,
                            // textShadow: '2px 2px 2px rgba(255, 69, 0, 0.8)'
                        }}>
                        CheasySwap
                    </Typography>
                    <Box
                        sx={{
                            marginLeft: 5,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '50%',
                        }}>
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


                </Toolbar>
            </Container>
        </AppBar>

    )
}
