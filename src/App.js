import './App.css';
import { Title, Text, Box } from '@mantine/core';
import Messages from './messages';

function App() {
  return (
    <div>
      <Box
      sx={(theme) => ({
        padding: theme.spacing.xl,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
      })
      }
      >
      <Title order={1} style={{ fontSize: '60px'}}>Elon Musk's Texts</Title>
      <Text style={{ marginBottom: '2rem'}}>The private exchanges of the man who almost bought Twitter.</Text>
      <Messages/>
      </Box>

    </div>
  );
}

export default App;
