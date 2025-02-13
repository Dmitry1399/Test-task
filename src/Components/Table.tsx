import React from 'react';
import img from '../assets/img.svg'
import { User } from '../types/userType';
import { Todo } from '../types/todoType';

interface TableProps {
  users: User[];
  todos: Todo[];
}
export const Table: React.FC<TableProps> = ({users, todos}) => {
  return (
    <div className="overflow-x-auto w-full rounded-xl border-1 border-gray-600">
      <table className="min-w-full rounded-lg mx-auto">
        <thead>
          <tr className="bg-opacity">
            <th className="font-inter font-semibold text-[10px] sm:text-[12px] leading-[12px] text-white opacity-30 py-2 px-2 sm:px-4 text-left w-1/12">#</th>
            <th className="font-inter font-semibold text-[10px] sm:text-[12px] leading-[12px] text-white opacity-30 py-2 px-2 sm:px-4 text-left w-8/12">USERNAME</th>
            <th className="font-inter font-semibold text-[10px] sm:text-[12px] leading-[12px] text-white opacity-30 py-2 px-2 sm:px-4 text-left w-3/12">TO-DO COUNT</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="border-b border-gray-600">
              <td className="py-1 px-2 sm:px-4 w-1/12">{index + 1}</td>
              <td className="py-1 px-2 sm:px-4 w-9/12 flex items-center">
                <img src={img} alt="user-photo" className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full mr-2"></img>
                <div>
                  <span className="font-inter font-medium text-white text-[12px] sm:text-[16px] leading-[12px] sm:leading-[19.36px]">
                    {user.name}
                  </span>
                  <br />
                  <span className="font-inter font-medium text-[10px] sm:text-[12px] leading-[10px] sm:leading-[14.52px] text-white opacity-40">
                    {user.email}
                  </span>
                </div>
              </td>
              <td className="py-2 px-2 sm:px-4 w-2/12">{todos.filter(todo => todo.userId === user.id).length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

