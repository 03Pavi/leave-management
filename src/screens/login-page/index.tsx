import React from 'react'
import { Authenticate } from '@/assets/images'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import "./styles.css"
const LoginPage = () => {
    return (
        <Box className="login-page-wrapper">
            <Box className="right">
                <Image src={Authenticate} alt='' />
            </Box>
            <Box className="left">
                <Box className="navigate-link">
                    <Typography component="p">Not Register?<Typography component="span">Create an account</Typography></Typography>
                </Box>
                <Box className="login-page-container">
                    <Box className="login-form">
                        <>
                            <Typography className='title' component="span">Welcome back! 👋</Typography>
                            <Typography className='description' component="p">Login to your account</Typography>
                        </>
                       <Box className="login-input">
                       </Box>
                    </Box>

                </Box>

            </Box>
        </Box>
    )
}

export default LoginPage
