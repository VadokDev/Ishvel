import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import { useState } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddImageUrl = ({ open, handleClose, handleOpen, ImageInput }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Grid>
          <Grid item>
            <ImageInput />
          </Grid>
          <Grid item>
            <Button onClick={handleClose}>Añadir imágen</Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default AddImageUrl;
