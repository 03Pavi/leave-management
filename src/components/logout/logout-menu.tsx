import { Menu, MenuItem, Avatar } from "@mui/material";
import { LogoutButton } from "@/components/logout/logout-button";
import { useEffect, useState } from "react";
// import { signOut } from "@/auth";
export const LogOutMenu = ({
    isMenuOpen,
    userName,
    handleOnMenuClose,
}: {
    isMenuOpen: boolean;
    userName: string;
    handleOnMenuClose: () => void;
}) => {
    const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined);
    useEffect(() => { setAnchorEl(document.getElementsByClassName("profileMenu")[0]); }, [])
    return (
        <Menu
            anchorEl={anchorEl}
            keepMounted
            open={isMenuOpen}
            onClose={handleOnMenuClose}
        >
            <MenuItem className="profile-menu-items">
                <Avatar
                    alt={userName?.toUpperCase()}
                    sx={{ width: "30px", height: "30px" }}
                />
                {userName}
            </MenuItem>
            <MenuItem style={{ padding: "0px" }}>
                <LogoutButton signOut={async()=>{}} />
            </MenuItem>
        </Menu>
    );
};

