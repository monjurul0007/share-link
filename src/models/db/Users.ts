import { UserLink } from '../Links';

export interface IUser {
    name: string;
    firstName?: string;
    lastName?: string;
    email: string;
    image: string;
    id: string;
    links?: UserLink[];
}
