import React from "react";
import MobileDrawerList from "./drawer-list/mobile/drawer-list";
import DesktopDrawerList from "./drawer-list/desktop/drawer-list";
interface Props {
    isOpen: boolean;
    handleDrawerOpen: () => void;
}
const Sidebar = ({
    isOpen,
    handleDrawerOpen,
}: Props) => {
    return (
        <>
            <MobileDrawerList isOpen={isOpen} handleDrawerOpen={handleDrawerOpen} />
            <DesktopDrawerList isOpen={isOpen} />
        </>
    );
};

export default Sidebar;
