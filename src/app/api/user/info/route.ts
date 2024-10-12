import { updateUserInfo } from '@/controller/userController';

export const PUT = async (request: Request) => {
    const body = await request.formData();

    return await updateUserInfo(body);
};
