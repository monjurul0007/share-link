import { z } from 'zod';

const linkSchema = z
    .object({
        id: z.string(),
        name: z.enum(['Github', 'Youtube', 'LinkedIn', 'Twitter']),
        url: z.string(),
    })
    .superRefine((data, ctx) => {
        const validPrefixes = {
            Github: 'https://github.com',
            Youtube: 'https://youtube.com',
            LinkedIn: 'https://linkedin.com',
            Twitter: 'https://twitter.com',
        };

        const validPrefix = validPrefixes?.[data.name];
        if (!data.url.startsWith(validPrefix)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `URL must start with ${validPrefix}`,
                path: ['url'],
            });
        }
    });

export const UserLinkReqSchema = z.object({
    id: z.string(),
    links: z.array(linkSchema),
});

export type UserLinks = z.infer<typeof linkSchema>;
export type UserLinkReq = z.infer<typeof UserLinkReqSchema>;
