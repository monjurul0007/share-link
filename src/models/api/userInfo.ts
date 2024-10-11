import { z } from 'zod';

export const UserInfoReqSchema = z.object({
    id: z.string(),
    firstName: z.string().min(1, 'First Name is required.'),
    lastName: z.string().min(1, 'Last Name is required.'),
    email: z.string().email(),
});

export type UserInfoReq = z.infer<typeof UserInfoReqSchema>;
