import Welcome from "@/components/welcome/welcome"
import Dashboard from "@/layout/Layout"
import { DASHBOARD_DESCRIPTION, DASHBOARD_HEADING } from "@/lib/constants";
import { Box, Typography } from "@mui/material";
import { Metadata } from "next";
import "./styles.css"
export const metadata: Metadata = {
  title: 'Dashboard',
  icons: {
    icon: '/leave-management-solutions.png',
  }
};
export default async function Page() {
  return (
    <Dashboard>
      <Box className="dashboard">
        <Typography className="heading">
          {DASHBOARD_HEADING}
        </Typography>
        <Typography className="sub-heading">
          {DASHBOARD_DESCRIPTION}
        </Typography>
      </Box>
    </Dashboard>
  )
}