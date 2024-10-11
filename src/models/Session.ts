import { Session } from 'next-auth';

export interface CustomSession extends Session {
    id: string;
}
