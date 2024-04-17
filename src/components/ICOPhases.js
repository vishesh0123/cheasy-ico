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
import { styled } from '@mui/material/styles';

const phases = [
    { phase: '1', tokens: 60000000, price: 0.05 },
    { phase: '2', tokens: 60000000, price: 0.08 },
    { phase: '3', tokens: 60000000, price: 0.11 },
    { phase: '4', tokens: 60000000, price: 0.15 },
    { phase: '5', tokens: 60000000, price: 0.20 },
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

const CustomTimeline = styled(Timeline)(({ theme }) => ({

    // Add more custom styles if needed
}));

const CustomTimelineItem = styled(TimelineItem)({
    '&::before': {
        // Override the content property to be an empty string
        content: 'none',
        // Remove other styles that you don't need
        flex: 'none',
        padding: 0,
    },
});

export default function ICOPhases() {
    return (
        <Box sx={{
            // bgcolor: '#121212',
            height: '100%',
            mt: '1%',
            mx: 2,
            borderRadius: 2,
            py: 1,
            width: '40vw',
        }}>
            <Typography sx={{
                color: orange[500],
                mt: 1,
                mb: 1,
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
            }}>
                ICO PHASES
            </Typography>
            <CustomTimeline position="right">
                {phases.map((phase, index) => (
                    <CustomTimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot style={{ backgroundColor: orange[500] }} />
                            {index < phases.length - 1 && (
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
                                    p: 1,
                                    mb: 1,
                                    backgroundColor: index == 0 ? 'green' : '#333',
                                    color: orange[500],
                                    '&:hover': {
                                        backgroundColor: orange[700],
                                        color: '#fff'
                                    },
                                    width: index == 0 ? '120%' : '100%',
                                }}>
                                    <Typography variant="h6" component="h1" sx={{ color: 'inherit' }}>
                                        {`PHASE ${phase.phase}`}
                                    </Typography>
                                    {/* <Typography sx={{ color: orange[200] }}>
                                        Tokens: {phase.tokens.toLocaleString()} CHEASY
                                    </Typography> */}
                                    <Typography sx={{ color: orange[200] }}>
                                        Price: ${phase.price.toFixed(2)} per token
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </TimelineContent>
                    </CustomTimelineItem>
                ))}
            </CustomTimeline>
        </Box>
    );
}
