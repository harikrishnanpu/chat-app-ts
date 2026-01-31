


export type User = {
    _id: string;
    name: string;
    email: string;
    createdAt: string;
}

export type AuthIntialState = {
    isAuthenticated: boolean,
    user: User | null
}