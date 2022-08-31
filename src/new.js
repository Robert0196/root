
import Box from '@mui/material/Box';
import { useLocation } from "react-router-dom";


function New() {
  const stolmlodych = useLocation().search.substring(1);
  let krzeslaArray = []

  for (let i = 0; i < stolmlodych; i++) {
    krzeslaArray.push(
      <Box key={i} sx={{ width: 300 / (stolmlodych - ((1 / 10) * 300 / stolmlodych)), height: 10 }}>
      </Box>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          WedGuests
        </p>

        {krzeslaArray}
        <Box
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

        {/* <Stack direction="column" spacing={2}>
          <Button variant="contained" endIcon={<CreateIcon />}>
            Utwórz projekt
          </Button>
          <Button variant="contained" endIcon={<NoteAddIcon />}>
            Kontynuuj projekt
          </Button>
        </Stack>
        <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default New;
