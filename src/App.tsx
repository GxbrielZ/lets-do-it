import { useState } from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';;
import { Todo } from './types';;

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <h1>To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </>
  );
};

export default App;
