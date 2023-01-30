import AddNewTodo from './add-new-todo';
import TodoList from './todo-list';
import React from 'react';

export default function Home() {
  return (
    <div>
      <AddNewTodo />
      {/* @ts-expect-error Server Component*/}
      <TodoList />
    </div>
  );
}
