"use client"
import React, { useState } from 'react'
import { Title } from '@/components/atoms/title/title'
import TableLayout from '@/components/table/table'
import { Box, Button, Paper } from '@mui/material'
import { SearchBar } from '@/components/atoms/search-bar'
import SelectMenu from '@/components/atoms/select-menu'
import "./styles.css"
import BasicModal from '@/components/atoms/modal'

const User = () => {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, value: string) => {
    setSearchValue(value as string)
  }
  //event for handleclic


  const handleCreateUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
    e.stopPropagation()
    setOpen(true)
  }
  return (
    <>
      <Box className="top-section-wrapper">
        <Title title="Users" />
        <Button onClick={handleCreateUser} variant="contained" size='large' sx={{ bgcolor: "var(--blue)" }} color='primary'>CREATE</Button>
      </Box>
      <Paper elevation={0}>
        <Box className="table-wrapper">
          <Box className="action-tab-container">
            <SearchBar onChange={handleSearch} delay={300} width='300' placeholder='Search by name' withClearIcon className='search-bar' />
            <SelectMenu minwidth={80} menuLabel='Role' menuList={[{ name: 'Admin', value: 'admin' }, { name: 'User', value: 'user' }]} />
            <SelectMenu minwidth={200} menuLabel='Reporting Authority' menuList={[{ name: 'Admin', value: 'admin' }, { name: 'User', value: 'user' }]} />
            <Button variant="text" size='large' disableElevation color='inherit' disabled>CLEAR</Button>
          </Box>
          <TableLayout searchValue={searchValue} />
          <BasicModal open={open} setOpen={setOpen} />
        </Box>
      </Paper>
    </>
  )
}

export default User
