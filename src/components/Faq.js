'use client';
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { orange } from '@mui/material/colors';
import Box from '@mui/material/Box';

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

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{
            width: '100%', bgcolor: '#121212', color: orange[500], py: 5, mt: '5%', mx: 2,
            borderRadius: 2
        }}>
            <Typography variant="h4" sx={{ color: 'orange', mb: 3, textAlign: 'center', fontWeight: 'bold' }}>
                Frequently Asked Questions
            </Typography>
            {faqs.map((faq, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    sx={{ bgcolor: '#333', color: orange[500], mb: 1, '&:before': { display: 'none' } }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: orange[500] }} />}
                        aria-controls={`panel${index}bh-content`}
                        id={`panel${index}bh-header`}
                    >
                        <Typography sx={{ fontWeight: 'bold' }}>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {faq.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    )
}
