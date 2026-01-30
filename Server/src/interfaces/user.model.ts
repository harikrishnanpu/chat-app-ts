export enum UserAccountType {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  is_online: boolean;
  is_blocked: boolean;
  last_seen: Date;
  block_count: number;
  account_type: UserAccountType;
  createdAt?: Date;
  updatedAt?: Date;
}
