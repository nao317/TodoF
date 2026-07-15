import type { Todo } from "@/features/todos/types/todo";

export const mockTodos: Todo[] = [
  {
    id: 1,
    title: "README を整える",
    author: {
      id: 1,
      name: "Taro Yamada",
      email: "taro@example.com",
      profileUrl: null,
      backgroundUrl: null,
      createdAt: new Date("2026-07-10T09:00:00.000Z"),
    },
    tag: "docs",
    parent: null,
    children: null,
    isDone: false,
    description: "初回導線を分かりやすくする",
    imageUrl: null,
    createdAt: new Date("2026-07-10T10:00:00.000Z"),
  },
  {
    id: 2,
    title: "Todo 一覧の表示確認",
    author: {
      id: 2,
      name: "Hanako Sato",
      email: "hanako@example.com",
      profileUrl: null,
      backgroundUrl: null,
      createdAt: new Date("2026-07-11T09:00:00.000Z"),
    },
    tag: "ui",
    parent: null,
    children: null,
    isDone: true,
    description: "チェックボックスの切り替えを確認する",
    imageUrl: null,
    createdAt: new Date("2026-07-11T11:00:00.000Z"),
  },
];