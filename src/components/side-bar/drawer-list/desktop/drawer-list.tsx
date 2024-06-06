import React from 'react'
import { Drawer, DrawerHeader } from "@/layout/config";
import { Divider, List } from '@mui/material';
import { SideBarListItem } from '@/components/list-item/config';
import ListItem from '@/components/list-item/list-item';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
const DrawerList = ({ isOpen }: { isOpen: boolean }) => {
    const pathName = usePathname()
    const router = useRouter()
    console.log(pathName)
    return (
        <Drawer
            variant="permanent"
            open={pathName.includes("/welcome") ? false : isOpen}
            sx={{
                display: { xs: "none", sm: "block", border: "none !important" },
                "& .MuiDrawer-paper": { border: "none" },
            }}
        >
            <DrawerHeader />
            <Divider />
            <List>
                {
                    SideBarListItem.map((item, index) =>
                        <ListItem URL={pathName} Path={item.path} Title={item.title} Icon={item.icon} />
                    )
                }
            </List>
        </Drawer>
    )
}

export default DrawerList
