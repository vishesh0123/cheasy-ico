"use client";
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { orange } from '@mui/material/colors';
import { motion } from 'framer-motion';

const milestones = [
    {
        label: 'Launch and Establishment',
        date: 'Q2 2024',
        description: "Launch of the ICO and initial listing of CHEASY tokens on major exchanges. Deployment of the core platform on Binance Smart Chain. Implementation of basic swapping and liquidity provisions functionalities."
    },
    {
        label: 'Feature Expansion and Cross-Chain Integration',
        date: 'Q3 2024',
        description: "Introduction of advanced trading features such as limit orders and margin trading. Deployment on additional blockchains including Cronos, Ethereum, and Polygon to enhance cross-chain liquidity."
    },
    {
        label: 'Community Growth and Ecosystem Development',
        date: 'Q4 2024',
        description: "Launch of community governance features allowing CHEASY token holders to propose and vote on platform decisions. Expansion of liquidity incentives to include multi-chain pools."
    },
    {
        label: 'Platform Optimization and Scalability Enhancements',
        date: 'Q1 2025',
        description: "Integration of layer-two scaling solutions to enhance transaction speeds and reduce costs. Continuous optimization of smart contract efficiency and security."
    },
    {
        label: 'Sustainability and Long-Term Innovations',
        date: 'Q2 2025',
        description: "Research and development of proprietary blockchain solutions to address specific needs within the DeFi ecosystem. Exploration of AI and machine learning integration."
    }
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.4,
            duration: 0.5
        }
    }
};

export default function Roadmap() {
    return (
        <Box
            id="roadmap"
            sx={{
                bgcolor: '#121212',
                height: '180vh',
                mt: '5%',
                mx: 2,
                borderRadius: 2,
                py: 1,
            }}>
            <Typography sx={{
                color: orange[500],
                mt: 5,
                fontSize: 50,
                fontWeight: 'bold',
                textAlign: 'center',
            }}>
                ROADMAP
            </Typography>
            <Timeline position="alternate">
                {milestones.map((milestone, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot style={{ backgroundColor: orange[500] }} />
                            {index < milestones.length - 1 && (
                                <TimelineConnector style={{ backgroundColor: orange[200] }} />
                            )}
                        </TimelineSeparator>
                        <TimelineContent>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={itemVariants}
                            >
                                <Paper elevation={3} sx={{
                                    p: 2,
                                    backgroundColor: '#333',
                                    color: orange[500],
                                    '&:hover': {
                                        backgroundColor: orange[700],
                                        color: '#fff'
                                    }
                                }}>
                                    <Typography variant="h6" component="h1" sx={{ color: 'inherit' }}>
                                        {milestone.label}
                                    </Typography>
                                    <Typography sx={{ color: orange[200] }}>
                                        {milestone.date}
                                    </Typography>
                                    <Typography sx={{ mt: 1, color: 'text.primary' }}>
                                        {milestone.description}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    );
}
