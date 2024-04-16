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
    if (name === 'Docs') {
        hrefValue = 'https://docs.cheasy.finance/'
    }

    return (
        <Link sx={buttonStyle} href={hrefValue}>
            {name}
        </Link>
    );
}
