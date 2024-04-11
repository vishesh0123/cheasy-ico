import React from 'react'
import Image from "next/image";
import Box from '@mui/material/Box';

export default function LogoBg() {
    return (
        <>
            <Box sx={{
                opacity: 0.2,
                zIndex: 1,
                display: 'flex',
                marginTop: 20
            }}>
                <Image
                    src="/cheasy.png"
                    alt="Picture of the author"
                    style={{
                        clipPath: "inset(0 30% 0 0)",
                    }}
                    width={500}
                    height={400}
                />
                <Image
                    src="/cheasy.png"
                    alt="Picture of the author"
                    style={{
                        clipPath: "inset(0 0 20% 0)",
                    }}
                    width={300}
                    height={300}
                />
                <Image
                    src="/cheasy.png"
                    alt="Picture of the author"
                    style={{
                        clipPath: "inset(0 20% 0 0)",
                    }}
                    width={400}
                    height={500}
                />
            </Box>
        </>
    )
}
