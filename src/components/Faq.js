'use client';
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { orange } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

const faqs = [
    {
        question: 'What is the purpose of the CHEASY token?',
        answer: 'The CHEASY token is integral to CheasySwap, used for governance, fee discounts, staking rewards, and accessing exclusive features within the platform. It empowers users to participate actively in decision-making and helps optimize the platform\'s operations and security.',
    },
    {
        question: 'What are the benefits of participating early in the ICO?',
        answer: 'Early participants in the ICO benefit from lower token prices and potential bonuses. Investing early can secure you a favorable purchase rate before the price increases in subsequent phases of the ICO.',
    },
    {
        question: 'Are there any rewards for long-term holders of CHEASY tokens?',
        answer: 'Yes, long-term holders are rewarded with bonus distributions, reduced trading fees, and enhanced staking rewards, which are designed to encourage holding and contribute to the stability and security of the platform.',
    },
    {
        question: 'How will the funds raised in the ICO be used?',
        answer: 'Funds raised will be allocated to further development of the CheasySwap platform, enhancing security features, expanding our blockchain integrations, marketing, and building reserves to stabilize the token price during market volatility.',
    },
    {
        question: 'What happens if the ICO does not reach its funding goal?',
        answer: 'If the ICO does not reach its funding goal, the collected funds may be refunded to participants, or we may proceed with a scaled-down version of the project, depending on the amount raised and strategic priorities at that time.',
    },
    {
        question: 'Can I trade CHEASY tokens immediately after purchasing them in the ICO?',
        answer: 'CHEASY tokens may be subject to a cliff and vesting period as specified in the ICO terms. This is to ensure price stability and a gradual introduction of tokens into circulation. Specific details will be provided during the ICO process.',
    },
    {
        question: 'Are there any geographical restrictions on participating in the ICO?',
        answer: 'Yes, participation in the ICO may be restricted in certain jurisdictions due to local regulations. Please check our website or consult legal advice in your area to determine if you are eligible to participate.',
    },
    {
        question: 'What is the total supply of CHEASY tokens and how are they distributed?',
        answer: 'The total supply of CHEASY tokens is capped at 1,000,000,000. Distribution includes allocations for the ICO, liquidity provision, team and founders, community incentives, staking rewards, and a reserve fund. Detailed allocation percentages are available in our whitepaper.',
    },
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
        <Box id="faqs" sx={{
            bgcolor: '#121212',
            color: orange[500],
            py: 5,
            px: 10,
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
                // textShadow: '0px 0px 20px rgba(255, 165, 0, 0.7)' // Text shadow for 3D effect
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
                            mb: 3,
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
