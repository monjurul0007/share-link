import { updateUserInfo } from '@/controller/userController';
import { UserInfoReq } from '@/models/api/userInfo';

export const POST = async (request: Request) => {
    const body = (await request.json()) as UserInfoReq;

    return await updateUserInfo(body);
};
