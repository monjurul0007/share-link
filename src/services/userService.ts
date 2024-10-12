import { getDB } from '@/lib/mongodb';
import { UserInfoReq } from '@/models/api/userInfo';
import { UserLinkReq } from '@/models/api/userLink';
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

export const updateLinks = async (data: UserLinkReq) => {
    const db = await getDB();
    const userRepository = new UserRepository(db);

    await userRepository.updateById(data.id, {
        links: data.links,
    });
};

export const uploadImage = async (id: string, file: FormDataEntryValue) => {
    if (!(file instanceof File)) {
        throw new Error('The provided file is not a valid File object.');
    }

    const bufferData = await file.arrayBuffer();
    const buffer = Buffer.from(bufferData);

    const db = await getDB();
    const userRepository = new UserRepository(db);

    await userRepository.updateById(id, {
        imageData: buffer,
    });
};
