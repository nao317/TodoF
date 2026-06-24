import { z } from "zod";

export const UserDtoScheme = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    profileUrl: z.string().optional().nullable(),
    backgroundUrl: z.string().optional().nullable(),
    createdAt: z.string(),
});

export type UserDto = z.infer<typeof UserDtoScheme>;
