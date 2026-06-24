// /home/user/product/frontend/todof/src/external/repository/todoRepository.ts
import { z } from "zod";
import { TodoDtoScheme, type TodoDto } from "@/external/dto/todoDto";
import { apiFetch } from "@/shared/client/apiClient";

const TodoListSchema = z.array(TodoDtoScheme);

export const todoRepository = {
  async list(): Promise<TodoDto[]> {
    const json = await apiFetch("/api/todos");
    return TodoListSchema.parse(json);
  },

  async create(payload: Partial<TodoDto>): Promise<TodoDto> {
    const json = await apiFetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    return TodoDtoScheme.parse(json);
  },

  async toggle(id: number): Promise<TodoDto> {
    const json = await apiFetch(`/api/todos/${id}/toggle`, {
      method: "PATCH",
    });
    return TodoDtoScheme.parse(json);
  },
};