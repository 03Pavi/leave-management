"use client"
import React from 'react'
import { Authenticate } from '@/assets/images'
import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { styled } from '@mui/material/styles';
import "./styles.css"
const Root = styled('div')(({ theme }) => ({
    marginTop: "20px",
    width: '100%',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    '& > :not(style) ~ :not(style)': {
        marginTop: theme.spacing(2),
    },
}));
const LoginPage = () => {
    const router = useRouter()
    const handleLogin = () => {
        router.push("/welcome")
    }
    return (
        <Box className="login-page-wrapper">
            <Box className="right">
                <Image src={Authenticate} alt='' width={500} className='login-image' />
            </Box>
            <Box className="left">
                <Box className="navigate-link">
                    <Typography component="p">Welcome! To<Typography component="span">&nbsp;Leave Management System</Typography></Typography>
                </Box>
                <Box className="login-page-container">
                    <Box className="login-form">
                        <>
                            <Typography className='title' component="span">Welcome back! 👋</Typography>
                            <Typography className='description' component="p">Login to your account</Typography>
                        </>
                        <Box className="login-input">
                            <Box mb={2} className="login-input-field">
                                <Typography component="p">UserName / Email</Typography>
                                <TextField
                                    className='text-field'
                                    variant="outlined"
                                    fullWidth
                                />
                            </Box>
                            <Box mb={2} className="login-input-field">
                                <Typography component="p">Password</Typography>
                                <TextField
                                    className='text-field'
                                    variant="outlined"
                                    fullWidth
                                />
                            </Box>
                            <Button onClick={handleLogin} sx={{ bgcolor: "#0067FF", marginBottom: "10px", height: "40px" }} variant='contained' fullWidth>
                                Login
                            </Button>
                        </Box>
                        <Typography component="span" className='forget-password-link'>Forget Password?</Typography>
                        <Root>
                            <Divider sx={{ color: "var(--black)", }}>
                                or
                            </Divider>
                        </Root>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default LoginPage
