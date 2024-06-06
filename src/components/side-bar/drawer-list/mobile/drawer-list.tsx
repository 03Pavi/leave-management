import ListItem from '@/components/list-item/list-item'
import { SideBarListItem } from '@/components/list-item/config'
import { DrawerHeader } from '@/layout/config'
import { Divider, List, SwipeableDrawer } from '@mui/material'
import { usePathname } from 'next/navigation'
import React from 'react'
interface IProps {
    isOpen: boolean
    handleDrawerOpen: () => void
}
const DrawerList = ({ isOpen, handleDrawerOpen }: IProps) => {
    const pathName = usePathname()
    return (
        <SwipeableDrawer
            open={pathName.includes("/welcome") ? false : isOpen}
            onClose={handleDrawerOpen}
            onOpen={handleDrawerOpen}
            sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: "256px" },
            }}
        >
            <DrawerHeader />
            <Divider />
            <List>
                {
                    SideBarListItem.map((item, index) => <ListItem URL={pathName} Path={item.path} Title={item.title} key={index} Icon={item.icon} />)
                }
            </List>
        </SwipeableDrawer>
    )
}

export default DrawerList
