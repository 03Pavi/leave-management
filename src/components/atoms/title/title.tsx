import { Typography } from "@mui/material";
import "./styles.css";
export const Title = ({ title }: { title: string }) => {
    return <Typography className="title">{title}</Typography>;
};
