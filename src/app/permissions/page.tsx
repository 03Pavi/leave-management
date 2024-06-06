import React from 'react'
import Dashboard from "@/layout/Layout"
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Permissions',
    icons: {
        icon: '/leave-management-solutions.png',
    }
};
const page = () => {
    return (
        <Dashboard>
            permissions
        </Dashboard>
    )
}

export default page
