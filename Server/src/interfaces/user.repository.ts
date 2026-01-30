import type { IUser } from '../interfaces/user.model.js';

export interface IUserRepository { 
    createUser(user: IUser):{};
    findByEmail(email: string):{ };
    findById(id: string): { };
    updateUser(id: string, user: Partial<IUser>): { };
    blockUser(id: string): {};
}