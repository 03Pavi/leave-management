"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Authenticate } from '@/assets/images'
import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { styled } from '@mui/material/styles';
import { useAppDispatch } from '@/store/hooks'
import { GetUSerDetails } from "@/features/user/user.actions"
import { RequestStatus } from '@/lib/enum'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
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
    const dispatch = useAppDispatch()
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })
    const router = useRouter()
    const handleLogin = async () => {
        if (!userDetails.email || !userDetails.password) {
            toast.error('Please fill all the fields', {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            });
            return;
        }
        else {
            const response = await dispatch(GetUSerDetails(userDetails))
            if (response.meta.requestStatus === RequestStatus.FULFILLED) {
                console.log(response.payload)
            } else if (response.meta.requestStatus === RequestStatus.REJECTED) {
                toast.error(response.payload, {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "light",
                });
            }

        }
        // router.push("/welcome")
    }

    return (
        <Box className="login-page-wrapper">
            <ToastContainer />
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
                                <Typography component="p">Email</Typography>
                                <TextField
                                    className='text-field'
                                    variant="outlined"
                                    onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}
                                    fullWidth
                                />
                            </Box>
                            <Box mb={2} className="login-input-field">
                                <Typography component="p">Password</Typography>
                                <TextField
                                    className='text-field'
                                    variant="outlined"
                                    onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
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
