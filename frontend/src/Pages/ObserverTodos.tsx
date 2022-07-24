import { Button, Grid, TextField } from '@mui/material';
import { Observer } from 'mobx-react';
import { useState } from 'react';
import CompletedTodo from '../Components/CompletedTodo';
import IncompletedTodo from '../Components/IncompletedTodo';
import ListTodo from '../Components/ListTodo';
import { useTodoStore } from '../Context/TodoContext';

export const ObserverTodos = () => {
  const todoStore = useTodoStore();
  const [value, setValue] = useState('');
  return (
    <Observer>
      {() => {
        return (
          <>
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
          </>
        );
      }}
    </Observer>
  );
};
