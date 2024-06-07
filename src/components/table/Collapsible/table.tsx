import * as React from 'react';
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./styles.css"
import Row from './history-row';
export function createData(
    name: string,
    action: JSX.Element, // Change action type to JSX.Element
) {
    return {
        name,
        action,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}


const rows = [
    createData('Software Engineer',
        <Box className="toolbox-wrapper">
            <Box className="toolbox-items-list">
                <Box className="toolbox"><ModeEditOutlineOutlinedIcon /></Box>
                <Box className="toolbox"><DeleteOutlineSharpIcon /></Box>
                <Box className="toolbox"><MoreVertIcon /></Box>
            </Box>
        </Box>),
    createData('Product Manager',
        <Box className="toolbox-wrapper">
            <Box className="toolbox-items-list">
                <Box className="toolbox"><ModeEditOutlineOutlinedIcon /></Box>
                <Box className="toolbox"><DeleteOutlineSharpIcon /></Box>
                <Box className="toolbox"><MoreVertIcon /></Box>
            </Box>
        </Box>),
];


export default function CollapsibleTable({ searchValue }: { searchValue: string }) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow sx={{ bgcolor: "var(--dark-gray)" }}>
                        <TableCell>Name</TableCell>
                        <TableCell sx={{paddingRight:"50px"}} align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
