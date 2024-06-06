"use client"
import LoginPage from "@/screens/login-page";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation"
import { useFormState } from "react-dom"
export default function Page() {
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault()
    router.push("/welcome")
  }
  return (
    <LoginPage />
  )
}