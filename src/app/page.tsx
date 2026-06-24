import Image from "next/image";
import styles from "./page.module.css";
import TodoList from "@/features/todos/components/client/TodoList";

export default function Home() {
  return (
    <TodoList />
  );
}
