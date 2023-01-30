import Todo from './todo';
import React from 'react';

const getTodos = async () => {
  let todos = await fetch('http://localhost:3001/api/todo/list');
  return todos.json();
};

interface TodoTyps {
  id: string;
  name: string;
  isDone: boolean;
}

export default async function TodoList(): Promise<any> {
  const { todos } = await getTodos();

  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos &&
          todos.map((t: TodoTyps) => {
            return (
              <li key={t.id} style={{ padding: '5px 0' }}>
                <Todo todo={t} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
