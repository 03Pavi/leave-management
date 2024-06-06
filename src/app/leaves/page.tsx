import React from 'react'
import Dashboard from "@/layout/Layout"
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Leave',
    icons: {
        icon: '/leave-management-solutions.png',
    }
};
const page = () => {
    return (
        <Dashboard>
            Leave
        </Dashboard>
    )
}

export default page
