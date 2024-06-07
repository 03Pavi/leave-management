import React from 'react'
import Dashboard from "@/layout/Layout"
import { Metadata } from 'next';
import Role from '@/screens/roles-page';
export const metadata: Metadata = {
    title: 'Roles',
    icons: {
        icon: '/leave-management-solutions.png',
    }
};
const page = () => {
    return (
        <Dashboard>
            <Role />
        </Dashboard>
    )
}

export default page
