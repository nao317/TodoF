export interface User {
    id: number;
    name: string;
    email: string;
    profileUrl: string | null;
    backgroundUrl: string | null;
    createdAt: Date;
}
