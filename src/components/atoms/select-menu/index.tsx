import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "./styles.css"
interface MenuProps {
    name: string;
    value: string
}
interface Iprops {
    menuLabel: string;
    minwidth?: number
    menuList: MenuProps[]
}
export default function BasicSelect({ menuLabel, menuList, minwidth }: Iprops) {
    const [Role, setRole] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setRole(event.target.value as string);
    };

    return (
        <Box minWidth={minwidth}>
            <FormControl className="select-menu-wrapper" size='small' fullWidth>
                <InputLabel id="demo-simple-select-label">{menuLabel}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Role}
                    label={menuLabel}
                    onChange={handleChange}
                    disableUnderline
                >
                    {
                        menuList.map((item, index) => <MenuItem value={item.value}>{item.name}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </Box>
    );
}