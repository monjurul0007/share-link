import { UserInfoReq, UserInfoReqSchema } from '@/models/api/userInfo';
import { updateInfo } from '@/services/userService';
import { validateRequest } from '@/utils/apiRequest';
import { errorResponse, successResponse } from '@/utils/apiResponse';

export const updateUserInfo = async (req: UserInfoReq) => {
    const validationErrors = validateRequest(UserInfoReqSchema, req);
    if (validationErrors) {
        return new Response(JSON.stringify(validationErrors), { status: 400 });
    }

    try {
        await updateInfo(req);
    } catch (e) {
        console.error(e);

        return errorResponse('User info update failed!', 500);
    }

    return successResponse('User updated successfully!');
};
