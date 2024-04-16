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
    { label: 'Token Idea & Conceptualization', date: 'Q1 2023' },
    { label: 'Smart Contract Development', date: 'Q2 2023' },
    { label: 'Auditing & Testing', date: 'Q3 2023' },
    { label: 'Pre-ICO Stage', date: 'Q4 2023' },
    { label: 'ICO Launch', date: 'Q1 2024' },
    { label: 'Listing on Exchanges', date: 'Q2 2024' },
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
        <Box sx={{
            bgcolor: '#121212',
            height: '130vh',
            mt: '5%',
            mx: 2,
            borderRadius: 2,
            py: 1
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
                                    <Typography sx={{ color: orange[200] }}>{milestone.date}</Typography>
                                </Paper>
                            </motion.div>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    );
}
