"use client";

import { useState } from "react";
import type { Todo } from "@/features/todos/types/todo";
import { TodoList as TodoListView, type TodoListItemViewModel } from "@/shared/ui/organisms";

type Props = {
  initialTodos: Todo[];
};

export default function TodoList({ initialTodos }: Props) {
  const [todos, setTodos] = useState(initialTodos);

  const handleToggle = (id: number) => {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const items: TodoListItemViewModel[] = todos.map((todo) => ({
    id: todo.id,
    title: todo.title,
    checked: todo.isDone,
    onToggle: () => handleToggle(todo.id),
    ariaLabel: `${todo.title} を切り替え`,
    tagLabel: todo.tag ?? null,
    description: todo.description,
    meta: `${todo.author.name} / ${todo.createdAt.toLocaleString("ja-JP")}`,
  }));

  return <TodoListView items={items} emptyMessage="表示するTODOがありません" />;
}