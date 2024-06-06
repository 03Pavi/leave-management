"use client";
import { ReactNode, useState } from "react";
import { Box } from "@mui/material";
import AppBar from "@/components/app-bar/app-bar";
import SideBar from "@/components/side-bar/side-bar";
import { Main } from "@/layout/config";
import "./styles.css"
const LayoutComponent = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [isOpen, setIsOpen] = useState(true);
    const handleDrawerOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Box sx={{ display: "flex" }}>
            <AppBar isOpen={isOpen} handleDrawerOpen={handleDrawerOpen} />
            <SideBar isOpen={isOpen} handleDrawerOpen={handleDrawerOpen} />
            <Main className="main-body" open={isOpen}>
                <Box sx={{ flex: 1, height: "55px" }} />
                {children}
            </Main>
        </Box>
    );
};
export default LayoutComponent