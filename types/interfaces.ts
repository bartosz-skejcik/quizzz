export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    full_name: string;
    role: Role;
}

export enum Role {
    ADMIN = "ADMIN",
    CLIENT = "CLIENT",
}
