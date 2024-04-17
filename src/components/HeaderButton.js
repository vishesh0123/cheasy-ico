"use client";
import React from 'react';
import { Link } from '@mui/material';

export default function HeaderButton({ name }) {
    const buttonStyle = {
        color: 'orange',
        fontSize: '16px',
        fontWeight: 'bold',
        ':hover': {
            color: '#eb4404',
        },
        textTransform: 'none',
    };

    let hrefValue = `/#${name.toLowerCase()}`;
    let targetValue = undefined;
    let relValue = undefined;

    if (name === 'Docs') {
        hrefValue = 'https://docs.cheasy.finance/';
        targetValue = "_blank";
        relValue = "noopener noreferrer";
    }

    return (
        <Link sx={buttonStyle} href={hrefValue} target={targetValue} rel={relValue}>
            {name}
        </Link>
    );
}
