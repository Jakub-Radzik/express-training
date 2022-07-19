import { useLocalObservable } from 'mobx-react';
import { createContext, FC, ReactNode, useContext } from 'react';
import { createTodoStore, TodoStore } from '../Store/store';

export const TodoContext = createContext<TodoStore>({
  todoList: [],
  addTodo: text => null,
  complete: el => null,
  incomplete: el => null,
});

type TodoProviderProps = {
  children: ReactNode;
};

export const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  const todoStore = useLocalObservable(createTodoStore);
  return (
    <TodoContext.Provider value={todoStore}> {children} </TodoContext.Provider>
  );
};

export const useTodoStore = () => useContext(TodoContext);
