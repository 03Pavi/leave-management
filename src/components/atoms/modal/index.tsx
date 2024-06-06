import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Title } from '@/components/atoms/title/title';
import { Button, FormControl, FormHelperText, TextField, TextareaAutosize } from '@mui/material';
import "./styles.css"
import BasicSelect from '../select-menu';
interface Iprops {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 826,
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: "24px 24px 0px 24px",
};

export default function BasicModal({ open, setOpen }: Iprops) {
    const handleClose = () => setOpen(false);
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Title title='User data' />
                <Typography id="modal-modal-description" sx={{ mt: "8px" }}>
                    Provide basic user account information.
                </Typography>
                <Box className="input-field-wrapper">
                    <TextField id="outlined-basic1" className='input-field' label="First name" size='small' variant="outlined" fullWidth />
                    <TextField id="outlined-basic2" className='input-field' label="Last name" size='small' variant="outlined" fullWidth />
                    <BasicSelect minwidth={350} menuLabel='Role' menuList={[{ name: 'Admin', value: 'admin' }, { name: 'User', value: 'user' }]} />
                    <TextField id="outlined-basic3" className='input-field' label="Reporting Authority" size='small' variant="outlined" fullWidth />
                    <TextField id="outlined-basic4" label="Additional informations" size='small' variant="outlined" inputProps={{
                        style: {
                            height: "100px"
                        }
                    }} fullWidth />
                    <FormHelperText>Optional</FormHelperText>
                </Box>
                <Box className="modal-footer">
                    <Button onClick={handleClose} variant='text' id="alert-dialog-cancel-button">{'cancel'}</Button>
                    <Button onClick={handleClose} variant='text' id="alert-dialog-confirm-button">{"create"}</Button>
                </Box>
            </Box>
        </Modal>
    );
}
