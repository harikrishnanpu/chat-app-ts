import type { IUser } from "../interfaces/user.model.js";
import type { IUserRepository } from "../interfaces/user.repository.js";
import UserModel from "../models/userModel.js";



export class UserMongoRepository implements IUserRepository {
  async createUser(user: Partial<IUser>): Promise<IUser> {
    return await UserModel.create(user);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await UserModel.findOne({ email }).lean();
  }
    
    async findById(id: string): Promise<IUser | null> {
        return await UserModel.findById(id).lean();
    }

    async updateUser(id: string, updateData: Partial<IUser>): Promise<IUser | null> {
        return await UserModel.findByIdAndUpdate(id, updateData, { new: true }).lean();
    }

    async blockUser(id: string): Promise<IUser | null> {
        return await UserModel.findByIdAndUpdate(id, { is_blocked: true }, { new: true }).lean();
    }
    
}

