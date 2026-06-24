import { TodoDto } from "@/external/dto/todoDto";
import { User } from "@/features/profiles/types/user";
export interface Todo {
    id: number;
    title: string;
    author: User;
    tag?: string | null;
    parent?: string | null;
    children: string[] | null;
    isDone: boolean;
    description: string | null;
    imageUrl: string[] | null;
    createdAt: Date;
}

export function fromDto(dto: TodoDto): Todo {
    return {
        id: dto.id,
        title: dto.title,
        author: {
            id: dto.author.id,
            name: dto.author.name,
            email: dto.author.email,
            profileUrl: dto.author.profileUrl ?? null,
            backgroundUrl: dto.author.backgroundUrl ?? null,
            createdAt: new Date(dto.author.createdAt),
        },
        tag: dto.tag ?? null,
        parent: dto.parent ?? null,
        children: dto.children ?? null,
        isDone: dto.isDone,
        description: dto.description ?? null,
        imageUrl: dto.imageUrl ?? null,
        createdAt: new Date(dto.createdAt),
    };
}
