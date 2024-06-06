import React from 'react'
import Dashboard from "@/layout/Layout"
import { Metadata } from 'next';
import User from '@/screens/users-page';
export const metadata: Metadata = {
    title: 'Users',
    icons: {
        icon: '/leave-management-solutions.png',
    }
};
const page = () => {
    return (
        <Dashboard>
            <User />
        </Dashboard>
    )
}

export default page
