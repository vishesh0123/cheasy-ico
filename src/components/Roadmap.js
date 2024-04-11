import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Paper from '@mui/material/Paper';
import { orange } from '@mui/material/colors';

const milestones = [
    { label: 'Token Idea & Conceptualization', date: 'Q1 2023' },
    { label: 'Smart Contract Development', date: 'Q2 2023' },
    { label: 'Auditing & Testing', date: 'Q3 2023' },
    { label: 'Pre-ICO Stage', date: 'Q4 2023' },
    { label: 'ICO Launch', date: 'Q1 2024' },
    { label: 'Listing on Exchanges', date: 'Q2 2024' },
    // Add more milestones as needed
];

export default function Roadmap() {
    return (
        <Box sx={{
            // border: '5px solid orange',
            height: '100vh',
            mt: '10%',
        }}>
            <Typography sx={{
                color: 'orange',
                mt: 2,
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
                            {index < milestones.length - 1 && <TimelineConnector style={{ backgroundColor: orange[200] }} />}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} style={{ padding: '6px 16px', backgroundColor: '#333', color: orange[500] }}>
                                <Typography variant="h6" component="h1" style={{ color: orange[500] }}>
                                    {milestone.label}
                                </Typography>
                                <Typography style={{ color: orange[200] }}>{milestone.date}</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>

        </Box>
    )
}
