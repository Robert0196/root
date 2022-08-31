import logo from './logo.svg';
import './App.css';

import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import NewButton from './newButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          WedGuests
        </p>
        <Stack direction="column" spacing={2}>
          <NewButton />
          <Button variant="contained" endIcon={<NoteAddIcon />}>
            Kontynuuj projekt
          </Button>
        </Stack>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
