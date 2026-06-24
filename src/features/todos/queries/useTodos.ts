// /home/user/product/frontend/todof/src/features/todos/queries/useTodos.ts
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { todoRepository } from "@/external/repository/todoRepository";

export function useTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => todoRepository.list(),
  });
}

export function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: todoRepository.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
}

export function useToggleTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: todoRepository.toggle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
}