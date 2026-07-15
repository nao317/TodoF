import TodoList from "@/features/todos/components/client/TodoList";
import { mockTodos } from "@/mock/todos";

export default function Home() {
  return (
    <main>
      <TodoList initialTodos={mockTodos} />
    </main>
  );
}
