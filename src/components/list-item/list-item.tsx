import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/navigation';
import "./styles.css";

interface IProps {
    Title: string;
    Icon: React.ReactNode;
    Path: string;
    URL: string;
}

const ListItem = ({ URL, Path, Title, Icon }: IProps) => {
    const router = useRouter();
    const isActive = URL === Path;
    const listItemClassName = isActive ? 'active-list-item' : '';

    const handleClick = () => {
        router.push(Path);
    };

    return (
        <ListItemButton
            component="a"
            className={listItemClassName}
            sx={{ color: "#424242" }}
            onClick={handleClick}
        >
            <ListItemIcon className={listItemClassName}>
                {Icon}
            </ListItemIcon>
            <ListItemText>
                <Typography component="span" sx={{ fontSize: "14px", fontWeight: isActive ? 600 : "normal" }}>
                    {Title}
                </Typography>
            </ListItemText>
        </ListItemButton>
    );
};

export default ListItem;
