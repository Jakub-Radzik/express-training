import './App.css';
import { configure } from 'mobx';
import { Observer } from 'mobx-react';
import { Button, Grid, TextField } from '@mui/material';
import { useTodoStore } from './Context/TodoContext';
import { useState } from 'react';
import ListTodo from './Components/ListTodo';
import CompletedTodo from './Components/CompletedTodo';
import IncompletedTodo from './Components/IncompletedTodo';
configure({ useProxies: 'never' });

function App() {
  const todoStore = useTodoStore();
  const [value, setValue] = useState('');
  return (
    <Observer>
      {() => {
        return (
          <div className="App">
            <div className="input-todo">
              <TextField
                value={value}
                id="outlined-basic"
                label="Add Todo"
                variant="outlined"
                size="small"
                onChange={e => setValue(e.target.value.trim())}
              />
              <Button
                variant={'contained'}
                color={'primary'}
                onClick={() => {
                  if (value !== '') {
                    todoStore.addTodo(value);
                  }
                  setValue('');
                }}
              >
                Add
              </Button>
            </div>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <ListTodo />
              </Grid>
              <Grid item xs={3}>
                <CompletedTodo />
              </Grid>
              <Grid item xs={3}>
                <IncompletedTodo />
              </Grid>
            </Grid>
          </div>
        );
      }}
    </Observer>
  );
}

export default App;
