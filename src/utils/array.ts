import { UserLinks } from '@/models/api/userLink';

export const reorderUserLinks = (list: UserLinks[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);

    return result;
};
