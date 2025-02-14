import React from 'react';
import { TableRow } from './TableRow';
import { UserWithTodos } from '../types/dtoType';

export const Table: React.FC<{ dataList: UserWithTodos[] }> = ({ dataList }) => {
  return (
    <div className="overflow-x-auto w-full rounded-xl border-1 border-gray-600">
      <table className="min-w-full rounded-lg mx-auto">
        <thead>
          <tr className="bg-opacity">
            <th className="font-inter font-semibold text-[10px] sm:text-[12px] leading-[12px] text-white opacity-30 py-2 px-2 sm:px-4 text-left w-1/12">
              #
            </th>
            <th className="font-inter font-semibold text-[10px] sm:text-[12px] leading-[12px] text-white opacity-30 py-2 px-2 sm:px-4 text-left w-8/12">
              USERNAME
            </th>
            <th className="font-inter font-semibold text-[10px] sm:text-[12px] leading-[12px] text-white opacity-30 py-2 px-2 sm:px-4 text-left w-3/12">
              TO-DO COUNT
            </th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((userWithTodos: UserWithTodos, index: number) => (
            <TableRow
              key={userWithTodos.user.id}
              index={index}
              email={userWithTodos.user.email}
              name={userWithTodos.user.username}
              todos={userWithTodos.todos.length}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
