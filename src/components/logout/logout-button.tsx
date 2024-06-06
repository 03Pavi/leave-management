import { Box, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import "./index.css";
export const LogoutButton = ({ signOut }: { signOut: () => Promise<void> }) => {
    return (
        <form
            action={async () => {
                await signOut();
            }}
            style={{
                width: "100%",
                display: "flex",
            }}
        >
            <Box
                className="logout-button"
                component="button"
                type="submit"
            >
                <LogoutIcon sx={{ width: 18, color: "#818181" }} />
                <Typography component="span" fontSize={15}>
                    Logout
                </Typography>
            </Box>
        </form>
    );
};
