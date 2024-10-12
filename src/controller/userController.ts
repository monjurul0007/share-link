import { UserInfoReq, UserInfoReqSchema } from '@/models/api/userInfo';
import { UserLinkReq, UserLinkReqSchema } from '@/models/api/userLink';
import { updateInfo, updateLinks, uploadImage } from '@/services/userService';
import { validateRequest } from '@/utils/apiRequest';
import { errorResponse, successResponse } from '@/utils/apiResponse';

export const updateUserInfo = async (req: FormData) => {
    const id = req.get('id');
    const firstName = req.get('firstName');
    const lastName = req.get('lastName');
    const email = req.get('email');
    const image = req.get('image');

    const userInfo: Record<string, string> = {};
    if (id) {
        userInfo['id'] = id as string;
    }
    if (firstName) {
        userInfo['firstName'] = firstName as string;
    }
    if (lastName) {
        userInfo['lastName'] = lastName as string;
    }
    if (email) {
        userInfo['email'] = email as string;
    }

    const validationErrors = validateRequest(UserInfoReqSchema, userInfo);
    if (validationErrors) {
        return new Response(JSON.stringify(validationErrors), { status: 400 });
    }

    try {
        if (image) {
            await uploadImage(id as string, image);
        }

        await updateInfo(userInfo as UserInfoReq);
    } catch (e) {
        console.error(e);

        return errorResponse('User info update failed!', 500);
    }

    return successResponse('User updated successfully!');
};

export const updateUserLink = async (req: UserLinkReq) => {
    const validationErrors = validateRequest(UserLinkReqSchema, req);
    if (validationErrors) {
        return new Response(JSON.stringify(validationErrors), { status: 400 });
    }

    try {
        await updateLinks(req);
    } catch (e) {
        console.error(e);

        return errorResponse('User info update failed!', 500);
    }

    return successResponse('User updated successfully!');
};
