import { UserLinks } from '../api/userLink';

export interface IUser {
    name: string;
    firstName?: string;
    lastName?: string;
    email: string;
    image: string;
    id: string;
    links?: UserLinks[];
    imageData?: Buffer;
}
