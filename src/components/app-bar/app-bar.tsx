import { AccountCircle } from "@mui/icons-material";
import { Toolbar, IconButton, Typography, Box } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import { AppBar } from "@/layout/config";
import { LogOutMenu } from "@/components/logout/logout-menu";
import { APP_NAME } from "@/lib/constants";
import { usePathname } from "next/navigation";
interface Props {
    isOpen: boolean;
    handleDrawerOpen: () => void;
}
const AppbarComponent = ({
    isOpen,
    handleDrawerOpen,
}: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const handleOnMenuClose = () => {
        setIsMenuOpen(false);
    };
    const handleOnMenuOpen = () => {
        setIsMenuOpen(true);
    };
    const pathName = usePathname()
    return (
        <AppBar className="app-bar" position="fixed" open={isOpen} sx={{ bgcolor: `var(--blue)` }}>
            <Toolbar className="tool-bar">
                {
                    pathName.includes("/welcome") ? <></> :
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ marginRight: 2.5 }}
                        >
                            <MenuIcon style={{ fontSize: "24px" }} />
                        </IconButton>
                }
                <Box
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{
                            display: { xs: "none", sm: "block" },
                            fontSize: "18px",
                            marginLeft: "3px",
                            fontWeight: "600",
                            lineHeight: "24px",
                        }}
                        noWrap
                        component="div"
                    >
                        {APP_NAME}
                    </Typography>
                    <Typography
                        sx={{
                            display: { xs: "block", sm: "none" },
                            fontSize: "18px",
                        }}
                        noWrap
                        component="div"
                    ></Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={handleOnMenuOpen}
                        className="profileMenu"
                        sx={{ padding: "0px" }}
                    >
                        <AccountCircle />
                    </IconButton>
                </Box>
                <LogOutMenu
                    isMenuOpen={isMenuOpen}
                    userName={"user"}
                    handleOnMenuClose={handleOnMenuClose}
                />
            </Toolbar>
        </AppBar>
    );
};

export default AppbarComponent