import { useState, useEffect } from 'react';
import { UserWithTodos } from '../types/dtoType';
import { mergeUsersAndTodos } from '../utils/utils';
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
  const [dataList, setDataList] = useState<UserWithTodos[]>([]);
  const [status, setStatus] = useState<Status>(Status.Idle);

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus(Status.Loading);
        const usersResponce = await axios.get(`${baseUrl}/users`);
        const todosResponce = await axios.get(`${baseUrl}/todos`);
        setDataList(mergeUsersAndTodos(usersResponce.data, todosResponce.data));
        setStatus(Status.Succes);
      } catch (error) {
        console.error(error);
        setStatus(Status.Error);
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
      <Table dataList={dataList} />
    </div>
  );
}

export default App;
