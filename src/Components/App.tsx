import { useState, useEffect } from 'react'
import { User } from '../types/userType';
import { Todo } from '../types/todoType';
import { Table } from './Table';

const baseUrl: string = 'https://jsonplaceholder.typicode.com';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch(`${baseUrl}/users`)
      .then((response): Promise<User[]> => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));

    fetch(`${baseUrl}/todos`)
      .then((response): Promise<Todo[]> => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error));
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-primary text-white min-h-screen">
      <h1 className="font-inter text-white text-2xl sm:text-5xl font-bold mb-2 text-left w-full">User To-Do Table</h1>
      <p className="font-inter text-white-600/30 dark:text-gray-400/45 text-base mb-6 font-normal text-xs sm:text-[16px] text-left w-full">
        User task table for effective planning.
      </p>
      <Table users={users} todos={todos}/>
    </div>
  );
}

export default App;
