import { nanoid } from 'nanoid';
import { Todo } from '../Types/Todo';

export type TodoStore = {
  todoList: Todo[];
  addTodo: (text: string) => void;
  complete: (el: Todo) => void;
  incomplete: (el: Todo) => void;
};

export const createTodoStore: () => TodoStore = () => {
  return {
    todoList: [],
    addTodo(text: string) {
      const todo: Todo = {
        id: nanoid(),
        content: text,
        done: false,
      };
      this.todoList.push(todo);
    },
    complete(el: Todo) {
      this.todoList = this.todoList.filter(e => {
        if (e.id === el.id) {
          e.done = true;
          return e;
        } else {
          return e;
        }
      });
    },
    incomplete(el: Todo) {
      this.todoList = this.todoList.filter(e => {
        if (e.id === el.id) {
          e.done = false;
          return e;
        } else {
          return e;
        }
      });
    },
  };
};
