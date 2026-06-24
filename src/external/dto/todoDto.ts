// todo list の型バリデーション

import { z } from "zod";
import { UserDtoScheme } from "@/external/dto/userDto";
export const TodoDtoScheme = z.object ({
    id: z.number(),
    title: z.string().min(1),
    author: UserDtoScheme,
    tag: z.string().optional().nullable(),
    parent: z.string().optional().nullable(),
    children: z.array(z.string()).optional(),
    isDone: z.boolean(),
    description: z.string().optional().nullable(),
    imageUrl: z.array(z.string()).optional(),
    createdAt: z.string(),
});

export type TodoDto = z.infer<typeof TodoDtoScheme>;
