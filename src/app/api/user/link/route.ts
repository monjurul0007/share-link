import { updateUserLink } from '@/controller/userController';
import { UserLinkReq } from '@/models/api/userLink';

export const PUT = async (request: Request) => {
    const body = (await request.json()) as UserLinkReq;

    return await updateUserLink(body);
};
