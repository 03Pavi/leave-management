"use client"
import { Title } from '@/components/atoms/title/title'

import { Box, Button, Paper } from '@mui/material'
import React, { useState } from 'react'
import BasicModal from '@/components/atoms/modal'
import { SearchBar } from '@/components/atoms/search-bar'
import TableLayout from '@/components/table/Collapsible/table'
import './styles.css'
const Role = () => {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, value: string) => {
    setSearchValue(value as string)
  }
  //event for handleclic
  const handleCreateRole = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    setOpen(true)
  }
  return (
    <Box>
      <Box className="top-section-wrapper">
        <Title title="Role" />
        <Button onClick={handleCreateRole} variant="contained" size='large' sx={{ bgcolor: "var(--blue)" }} color='primary'>CREATE</Button>
      </Box>
      <Paper elevation={0}>
        <Box className="table-wrapper">
          <Box className="action-tab-container">
            <SearchBar onChange={handleSearch} delay={300} width='300' placeholder='Search by name' withClearIcon className='search-bar' />
          </Box>
          <TableLayout searchValue={searchValue} />
          <BasicModal open={open} setOpen={setOpen} />
        </Box>
      </Paper>
    </Box>
  )
}

export default Role
