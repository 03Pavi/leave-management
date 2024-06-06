
'use client'
import React from 'react'
import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import { WaveIcon } from '@/assets/icons'
import { WELCOME_DESCRIPTION, WELCOME_TITLE } from '@/lib/constants'
import { useRouter } from 'next/navigation'
import "./styles.css"
const Welcome = () => {
    const router = useRouter()
    const handleSubmit = () => {
        router.push("/dashboard")
    }
    return (
     <Box className="welcome-parent-wrapper">
           <Box className="welcome-wrapper">
            <Box className="top-section">
                <Box className="wave-icon">
                    <WaveIcon />
                </Box>
                <Typography className="title">
                    {WELCOME_TITLE}
                </Typography>
                <Typography className="description">
                    {WELCOME_DESCRIPTION}
                </Typography>
            </Box>
            <Box className="bottom-section">
                <TextField id="outlined-basic" label="Organization name" size='small' variant="outlined" fullWidth />
                <TextField id="outlined-basic2" label="Number of employee" size='small' variant="outlined" fullWidth />
                <Button variant="contained" className='welcome-button' onClick={handleSubmit}>SUBMIT</Button>
                <Divider className="divider" />
            </Box>
            <Box className="footer-section">
                <Typography component="span" color="var(--black)">Do you need any help ?</Typography>
                <Typography component="span" color="var(--blue)">Contact US</Typography>
            </Box>
        </Box>
     </Box>
    )
}

export default Welcome
