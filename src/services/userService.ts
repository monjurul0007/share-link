import { getDB } from '@/lib/mongodb';
import { UserInfoReq } from '@/models/api/userInfo';
import { IUser } from '@/models/db/Users';
import UserRepository from '@/repositories/userRepository';

export const createNewUser = async (user: IUser) => {
    const db = await getDB();
    const userRepository = new UserRepository(db);

    return await userRepository.create(user);
};

export const getUserById = async (id: string) => {
    const db = await getDB();
    const userRepository = new UserRepository(db);
    const user = await userRepository.fetchById(id);

    return user;
};

export const updateInfo = async (data: UserInfoReq) => {
    const db = await getDB();
    const userRepository = new UserRepository(db);

    await userRepository.updateById(data.id, {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
    });
};
