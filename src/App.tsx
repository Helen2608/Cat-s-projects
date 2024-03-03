import PetsIcon from '@mui/icons-material/Pets';
import { Container, IconButton, List, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import ListItem from './list-item';
// type WeatherQueryParam = {
//   API_KEY: string;
//   lat: string;
//   lon: string;
//   units: string;
// };

// const queryParams: WeatherQueryParam = {
//   API_KEY: '6a18b1317bbd8db3f782b585670f8a4a',
//   lat: '51.5072',
// lon: "0.1276",
// units: 'metric',
// };

// type Person ={
// name: string;
// surname: string,
// age: number;
// }

// const elena:Person= {
//   name: 'Elena',
// surname: 'Prytova',
// age: 34,
// }

// const elenaFavoriteNumbers = [5, 3, 7, 25, 50];

// const greetingWithFavoriteNumbers = (p: Person, n: number[]) =>
//   `Hello my name is ${p.name} ${p.surname}, I am ${p.age} years old. My favorite numbers is ${n}`;

const App = () => {
  const [input, setInput] = useState('');

  const [items, setItems] = useState<string[]>([]);

  return (
    <Container maxWidth={'sm'} disableGutters>
      <Stack direction={'row'} sx={{ paddingTop: '150px' }} justifyContent={'center'}>
        <TextField
          label={'Enter some items to buy'}
          fullWidth
          onChange={({ target: { value } }) => setInput(value)
          }
          value={input}
        />
        <IconButton sx={{ color: 'skyblue', width: "150px" }} onClick={() => 
      input.trim().length && setItems([...items, input.trim()])
          }> 
        
          <PetsIcon fontSize='large' />
        </IconButton>
      </Stack>
      <List>
        {items.map((value, index) => (<ListItem item={value} key = {index} />))}
      </List>
    </Container>
  );
};
export default App;

 
 
 


  
