import React from 'react';
import { Button } from '@mui/material';

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

    return (
        <Button sx={buttonStyle}>
            {name}
        </Button>
    );
}
