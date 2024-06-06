import Welcome from '@/components/welcome/welcome'
import Dashboard from "@/layout/Layout"
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: 'Users',
    icons: {
        icon: '/leave-management-solutions.png',
    }
};
const page = () => {
    return (
        <Dashboard>
            <Welcome />
        </Dashboard>
    )
}

export default page
