import { useState, useEffect } from 'react';
import { User } from '../types/userType';
import { Todo } from '../types/todoType';
import { Table } from './Table';
import NotFound from './NotFound';
import axios from 'axios';

const baseUrl: string = 'https://jsonplaceholder.typicode.com';

enum Status {
  Idle,
  Error,
  Succes,
  Loading,
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [status, setStatus] = useState<Status>(Status.Idle);

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus(Status.Loading);
        const usersResponce = await axios.get(`${baseUrl}/users@#@@`);
        const todosResponce = await axios.get(`${baseUrl}/todos`);
        setUsers(usersResponce.data);
        setTodos(todosResponce.data);
        setStatus(Status.Succes);
      } catch (error) {
        console.error(error);
        setStatus(Status.Error)
      }
    }

    fetchData();
  }, []);

  if (status === Status.Error) {
    return <NotFound />;
  }
  if (status === Status.Loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-primary text-white min-h-screen">
      <h1 className="font-inter text-white text-2xl sm:text-5xl font-bold mb-2 text-left w-full">
        User To-Do Table
      </h1>
      <p className="font-inter text-white-600/30 dark:text-gray-400/45 text-base mb-6 font-normal text-xs sm:text-[16px] text-left w-full">
        User task table for effective planning.
      </p>
      <Table users={users} todos={todos} />
    </div>
  );
}

export default App;
