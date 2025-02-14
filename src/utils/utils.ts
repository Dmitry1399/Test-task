import { User, Todo, UserWithTodos } from '../types/dtoType';

export const mergeUsersAndTodos = (usersData: User[], todosData: Todo[]): UserWithTodos[] => {
  return usersData.map((user) => {
    return {
      user: user,
      todos: todosData.filter((todo) => todo.userId === user.id),
    };
  });
};
