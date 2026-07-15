import React from "react";
import TodoListItem, { type TodoListItemViewModel } from "@/shared/ui/molecules/TodoListItem";
import styles from "@/shared/ui/organisms/TodoList.module.css";

type Props = {
  items: TodoListItemViewModel[];
  emptyMessage?: string;
};

export default function TodoList({ items, emptyMessage = "項目がありません" }: Props) {
  if (!items.length) {
    return <p className={styles.empty}>{emptyMessage}</p>;
  }

  return (
    <div className={styles.root}>
      {items.map((item) => (
        <TodoListItem key={item.id} {...item} />
      ))}
    </div>
  );
}
