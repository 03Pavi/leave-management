"use client"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { columns } from './Column';
import { Box } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./styles.css"

interface IProps {
    searchValue: string
}

interface Data {
    name: string;
    role: string;
    authority: string | null;
    actions: string;
}

function createData(
    name: string,
    role: string,
    authority: string | null,
    actions: string,
): Data {
    return { name, role, authority, actions };
}

const rows = [
    createData('Alice Johnson', 'Software Engineer', 'Bob Smith', 'Edit/Delete'),
    createData('Bob Smith', 'Engineering Manager', 'Catherine Lee', 'Edit/Delete'),
    createData('Catherine Lee', 'Director of Engineering', 'Daniel Brown', 'Edit/Delete'),
    createData('Daniel Brown', 'VP of Technology', 'Eleanor Harris', 'Edit/Delete'),
    createData('Eleanor Harris', 'Chief Technology Officer', 'Frank Wilson', 'Edit/Delete'),
    createData('Frank Wilson', 'Chief Executive Officer', null, 'Edit/Delete'),
    createData('Grace Kim', 'Product Manager', 'Helen Martinez', 'Edit/Delete'),
    createData('Helen Martinez', 'Senior Product Manager', 'Catherine Lee', 'Edit/Delete'),
    createData('Ian Clark', 'Data Analyst', 'Jenny Park', 'Edit/Delete'),
    createData('Jenny Park', 'Data Science Manager', 'Catherine Lee', 'Edit/Delete')
];

export default function StickyHeadTable({ searchValue }: IProps) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }} elevation={0}>
            <TableContainer sx={{
                maxHeight: 600,
            }}>
                <Table stickyHeader aria-label="sticky table"
                    sx={{
                        borderTop: "1px solid #E0E0E0",
                        borderBottom: "1px solid  #E0E0E0",
                    }}>
                    <TableHead >
                        <TableRow >
                            {columns.map((column) => (
                                <TableCell
                                    sx={{ bgcolor: "var(--dark-gray)" }}
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow role="checkbox" tabIndex={-1} key={row.role}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <>
                                                    {column.id !== "actions" ?
                                                        <TableCell key={column.id} align={column.align}>
                                                            {value===null?"---":value}
                                                        </TableCell> :
                                                        <TableCell key={column.id} align={column.align}>
                                                            <Box className="toolbox-list">
                                                                <Box className="toolbox"><ModeEditOutlineOutlinedIcon /></Box>
                                                                <Box className="toolbox"><DeleteOutlineSharpIcon /></Box>
                                                                <Box className="toolbox"><MoreVertIcon /></Box>
                                                            </Box>
                                                        </TableCell>}
                                                </>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
