import * as React from 'react';
import TextField from '@mui/material/TextField';
import CreateIcon from '@mui/icons-material/Create';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import './newButton.css';
import {useRef} from 'react';


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

export default function UtworzModal(akcja) {
  const ref = useRef()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 const handleSend = () => {
    console.log( ref.current.lastChild.firstChild.value )
    setOpen(false);
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Liczba osób przy stole Pary Młodej:
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <TextField
                id="outlined-number"
                label="Liczba osób"
                type="number"
                ref={ref}
              />
            </Typography>
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleSend}>
              Utwórz projekt
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
