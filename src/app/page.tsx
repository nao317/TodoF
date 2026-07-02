import Image from "next/image";
import styles from "./page.module.css";
import TodoList from "@/features/todos/components/client/TodoList";
import Button from '@/shared/ui/atoms/Button'
export default function Home() {
  return (
    <div>
      <TodoList />
      <Button>
        aaa
      </Button>
    </div>
  );
}
