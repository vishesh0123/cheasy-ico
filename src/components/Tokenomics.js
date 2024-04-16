'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { orange } from '@mui/material/colors';
import { motion } from 'framer-motion';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Tooltip from '@mui/material/Tooltip';  // Import Tooltip

const data = [
    { y: 30, name: 'Initial Coin Offering (ICO)', desc: 'The ICO serves as the primary mechanism for distributing CHEASY tokens to the public. Setting aside 30% of the total supply for the ICO allows us to secure initial funding necessary for development and operational costs while engaging a broad investor base.' },
    { y: 20, name: 'Liquidity Provision', desc: 'Robust liquidity is essential for the efficient operation of a DEX. Allocating 20% of CHEASY tokens to liquidity provision ensures that our platform can offer low slippage and fast transaction execution from day one. Incentives: Tokens will be used to reward users who supply liquidity to our trading pairs, promoting a healthy and stable market environment.' },
    { y: 15, name: 'Team and Founders', desc: 'To attract and retain the best talent, we allocate 15% of the tokens to our team and founders, vested over four years with monthly releases. This aligns the long-term interests of our core contributors with the success of CheasySwap. Vesting Schedule: Four-year linear vesting with monthly token releases to prevent market dumps and encourage ongoing commitment.' },
    { y: 10, name: 'Community and Ecosystem Incentives', desc: 'A vibrant community is the backbone of any decentralized project. We allocate 10% of CHEASY tokens to foster community growth through airdrops, contests, and development grants. Activities Supported: Community contests, hackathons, development grants, and other initiatives to encourage active participation and innovation.' },
    { y: 10, name: 'Staking Rewards', desc: 'Staking rewards are crucial for securing network participation and encouraging long-term holding. This allocation helps maintain network security and operational efficiency. Mechanism: Users staking CHEASY tokens will receive rewards, enhancing network security and promoting token value retention.' },
    { y: 5, name: 'Reserve Fund', desc: 'The reserve fund acts as a financial safeguard to stabilize the token’s market value during volatility and to address unforeseen circumstances effectively. Usage: Supporting market stability, providing liquidity in times of need, and other strategic initiatives as deemed necessary by governance.' },
    { y: 10, name: 'Marketing and Business Development', desc: 'Effective marketing and strategic business development are vital for the platforms growth and sustainability. This allocation ensures that CheasySwap remains competitive and continues to attract new users. Activities: Marketing campaigns, partnership developments, promotional events, and expansion activities to increase platform adoption and visibility.' },
];

const chartOptions = {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        },
        backgroundColor: '#121212',
        height: 600, // Set fixed height for consistency
    },
    title: {
        text: 'TOKEN DISTRIBUTION',
        style: {
            color: orange[500]
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        name: 'Share',
        data: data,
        colors: [
            '#FF8C00', '#FFA500', '#FFB733', '#FFC966', '#FFDB99', '#FFEDCC'
        ]
    }]
};


const TokenInfoBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.grey[900],
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    margin: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)'
    },
    height: 'auto', // Adjusted for content
}));

const Tokenomics = () => {
    return (
        <Box id="tokenomics" sx={{
            bgcolor: '#121212',
            color: orange[500],
            height: '120vh',
            mt: '5%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mx: 2,
            borderRadius: 2,
            px: 5,
        }}>
            <Typography variant="h3" sx={{ mb: 4, fontWeight: 'bold' }}>
                TOKENOMICS
            </Typography>
            <Box display="flex" justifyContent="space-around" sx={{ width: '100%', flexWrap: 'wrap' }}>
                <Box sx={{
                    width: '40%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    p: 4,
                    bgcolor: '#333',
                    borderRadius: 2,
                }}>
                    <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }}>
                        TOKEN INFORMATION
                    </Typography>
                    {data.map((item, index) => (
                        <Tooltip key={index} title={item.desc || ''} arrow placement="right" >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                            >
                                <TokenInfoBox>
                                    <FiberManualRecordIcon sx={{ color: chartOptions.series[0].colors[index], mr: 2, fontSize: 'large' }} />
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                        {item.y}% {item.name}
                                    </Typography>
                                </TokenInfoBox>
                            </motion.div>
                        </Tooltip>
                    ))}
                    <Typography sx={{ mt: 2, fontSize: 16, fontWeight: 'bold', textAlign: 'center' }} >
                        CHEASY TOKEN ADDRESS:<br />
                        <Typography component="span" sx={{ fontSize: 14, wordBreak: 'break-all', fontWeight: 'bold' }}>
                            TBD
                        </Typography>
                    </Typography>
                </Box>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />
            </Box>
        </Box>
    );
};

export default Tokenomics;
