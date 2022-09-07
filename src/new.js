
import Box from '@mui/material/Box';
import * as React from 'react';
import { useLocation } from "react-router-dom";
import './index.css';
import NowyStol from './nowyStol';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import RectangleIcon from '@mui/icons-material/Rectangle';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import './newButton.css';
import { useRef } from 'react';
import Draggable from 'react-draggable';
import EditIcon from '@mui/icons-material/Edit';

let stolyTemp = []

let start_time;
function start() {
  start_time = new Date();
}
function end() {
  const now = new Date();
  if (now - start_time < 500) {
    console.log("double click");
  }
}

const actions = [
  { icon: <DeleteForeverIcon />, name: 'Usuń stół' },
  { icon: <CircleIcon />, name: 'Stół okrągły', typ: 'okragly' },
  { icon: <RectangleIcon />, name: 'Stół prostokątny', typ: 'prostokatny' },
];

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
let indexStolu = 0
let stolyGraf = []

function New() {
  const ref = useRef()
  const [stoly, setStoly] = React.useState([])
  const [stolyMapa, setStolyMapa] = React.useState([])
  const [nowyStol, setNowyStol] = React.useState(null)
  const [open, setOpen] = React.useState(false);
  const [openStolik, setOpenStolik] = React.useState(false);
  const [typStolu, setTyp] = React.useState(null);
  const [kategoria, setKategoria] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleOpenStolik = () => setOpenStolik(true);
  const handleClose = () => setOpen(false);
  const handleCloseStolik = () => setOpenStolik(false);

  const otworzNowyStol = (typStolu) => {
    setOpen(true)
    setTyp(typStolu)
    console.log(typStolu)
  }

  const stolGraficznie = (typStolu, liczbaOsob, kategoria, index) => {
    if (typStolu === 'okragly') {
      const stolFinal =
        <Draggable key={index}>
          <Box className={"stolOkragly" + index}
            sx={{
              // position: "absolute",
              // margin: 5,
              borderRadius: "50%",
              width: 150,
              height: 150,
              backgroundColor: 'primary.dark',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Button sx={{
              // transform: "rotate(90deg)",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: 12,
              fontWeight: "bold",
              backgroundColor: "primary.main",
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },

            }}
              onClick={handleOpenStolik}>
              <EditIcon />
            </Button>


          </Box>
        </Draggable>
      return stolFinal
    } else if (typStolu === 'prostokatny') {
      const stolFinal =
        <Draggable key={index}>
          <div>
            <Box className={"stolProstokatny" + index}
              sx={{
                // transform: "rotate(90deg)",
                // position: "absolute",
                // top: "50%",
                // left: "50%",
                //transform: "translate(-50%, -50%)",
                width: 300,
                height: 75,
                backgroundColor: 'primary.dark',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
            </Box>
            <Button sx={{
              // transform: "rotate(90deg)",
              position: "absolute",
              top:0,
              right:0,

              color: "white",
              fontSize: 12,
              fontWeight: "bold",
              backgroundColor: "primary.dark",
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },

            }}
              onClick={handleOpenStolik}
            >
              <EditIcon />
            </Button>

          </div>
        </Draggable>
      return stolFinal
    }
  }

  const dodanieStolu = () => {
    console.log(ref.current.lastChild.firstChild.value)
    const stol = { typ: typStolu, liczbaOsob: ref.current.lastChild.firstChild.value, kategoria: kategoria, index: indexStolu }
    stolyGraf.push(stolGraficznie(typStolu, ref.current.lastChild.firstChild.value, kategoria, indexStolu))
    setNowyStol(stolGraficznie(typStolu, ref.current.lastChild.firstChild.value, kategoria, indexStolu))
    indexStolu++
    stolyTemp.push(stol)
    setStoly(stolyTemp)
    setStolyMapa(current => [...current, stolGraficznie(typStolu, ref.current.lastChild.firstChild.value, kategoria, indexStolu)])
    console.log(stolyMapa)
    console.log(stoly)
    setOpen(false);
  }
  const usunStol = (index) => {
    stoly.splice(index, 1)
  }


  const stolmlodych = useLocation().search.substring(1);
  let krzeslaArray = []

  for (let i = 0; i < stolmlodych; i++) {
    krzeslaArray.push(
      <Box className="krzesla" key={i} sx={{
        width: 300 / stolmlodych - ((1 / 10) * 300 / stolmlodych),
        height: 10,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
      </Box>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          WedGuests
        </p>
        <div className="stol-mlodych">
          <div className="krzesla-mlodych">
            {krzeslaArray}
          </div>
          <Box className="stol"
            sx={{
              width: 300,
              height: 75,
              backgroundColor: 'primary.dark',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
        </div>
        {stolyMapa}
        {/* {nowyStol} */}
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
          <SpeedDial
            ariaLabel="Okno szybkiego wyboru"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                tooltipOpen
                onClick={action.name === 'Usuń stół' ? usunStol : () => otworzNowyStol(action.typ)}
              />
            ))}
          </SpeedDial>
        </Box>
      </header>
      {/* <NowyStol /> */}
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
              Liczba osób przy stole:
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <TextField
                id="outlined-number"
                label="Liczba osób"
                type="number"
                ref={ref}
              />
            </Typography>
            <Button variant="contained" endIcon={<AddIcon />} onClick={dodanieStolu}>
              Dodaj
            </Button>
          </Box>
        </Fade>
      </Modal>


      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openStolik}
        onClose={handleCloseStolik}
        closeAfterTransition
      >
        <Fade in={openStolik}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Osoby przy stole:
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            </Typography>
            <Button variant="contained" endIcon={<AddIcon />} onClick={console.log("test")}>
              Zatwierdź
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default New;
