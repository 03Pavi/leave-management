import React from 'react'
import Dashboard from "@/layout/Layout"
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Roles',
    icons: {
        icon: '/leave-management-solutions.png',
    }
};
const page = () => {
    return (
        <Dashboard>
            role
        </Dashboard>
    )
}

export default page
