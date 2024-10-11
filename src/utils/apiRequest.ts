import { ZodError, ZodSchema } from 'zod';

export const validateRequest = <T>(schema: ZodSchema<T>, requestBody: unknown) => {
    try {
        schema.parse(requestBody);
    } catch (e) {
        const errorResponse: Record<string, string> = {};
        const errors = (e as ZodError).errors;

        errors.forEach((error) => {
            error.path.forEach((item) => {
                errorResponse[item] = error.message;
            });
        });

        return Object.keys(errors).length > 0 ? errorResponse : null;
    }
};
