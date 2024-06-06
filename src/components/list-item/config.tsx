import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import SecurityIcon from '@mui/icons-material/Security';
export const SideBarListItem = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        path: "/dashboard"
    },
    {
        title: "Users",
        icon: <PeopleAltIcon />,
        path: "/users"
    },
    {
        title: "Leaves",
        icon: <ViewDayIcon />,
        path: "/leaves"
    },
    {
        title: "Roles",
        icon: <WorkIcon />,
        path: "/roles"
    },
    {
        title: "Permissions",
        icon: <SecurityIcon />,
        path: "/permissions"
    },
]