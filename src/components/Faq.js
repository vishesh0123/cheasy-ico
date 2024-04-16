'use client';
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { orange } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

const faqs = [
    {
        question: 'What is the purpose of the token?',
        answer: 'The token is designed to facilitate transactions within our platform, providing users with access to exclusive features and incentivizing participation in our ecosystem.',
    },
    {
        question: 'How can I participate in the presale?',
        answer: 'You can participate in the presale by registering on our website, completing the KYC process, and then following the instructions provided to contribute.',
    },
    {
        question: 'What are the benefits of staking?',
        answer: 'Staking rewards users for locking up their tokens for a specified period, offering them interest payments in return. It helps secure the network and provides users with a steady return on their investment.',
    },
    // Add more FAQs as needed
];



export default function Faq() {
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const accordionMotion = {
        initial: { scale: 0.98, opacity: 0.9 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.2 }
    };

    return (
        <Box sx={{
            bgcolor: '#121212',
            color: orange[500],
            py: 5,
            px: 5,
            mt: '5%',
            mx: 2,
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.75)' // Enhanced shadow for 3D-like depth
        }}>
            <Typography variant="h4" sx={{
                color: 'orange',
                mb: 3,
                textAlign: 'center',
                fontWeight: 'bold',
                textShadow: '0px 0px 20px rgba(255, 165, 0, 0.7)' // Text shadow for 3D effect
            }}>
                FAQs
            </Typography>
            {faqs.map((faq, index) => (
                <motion.div {...accordionMotion} key={index}>
                    <Accordion
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                        sx={{
                            bgcolor: '#333',
                            color: orange[500],
                            mb: 1,
                            '&:before': { display: 'none' },
                            boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.5)' // Internal shadow for depth
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: orange[500] }} />}
                            aria-controls={`panel${index}bh-content`}
                            id={`panel${index}bh-header`}
                        >
                            <Typography sx={{ fontWeight: 'bold' }}>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: 'white' }}>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </motion.div>
            ))}
        </Box>
    )
}
