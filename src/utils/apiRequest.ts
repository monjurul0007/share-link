import { ZodError, ZodSchema } from 'zod';

const constructErrorObj = (
    message: string,
    path: (string | number)[],
): Record<string | number, unknown> => {
    if (path.length === 0) {
        return { message };
    }

    const obj = constructErrorObj(message, path.slice(1));

    return { [path[0]]: obj };
};

export const validateRequest = <T>(schema: ZodSchema<T>, requestBody: unknown) => {
    try {
        schema.parse(requestBody);
    } catch (e) {
        const errorResponse: Record<string | number, unknown> = {};
        const errors = (e as ZodError).errors;

        errors.forEach((error) => {
            errorResponse[error.path[0]] = {
                ...(errorResponse[error.path[0]] as object),
                ...constructErrorObj(error.message, error.path.slice(1)),
            };
        });

        return Object.keys(errors).length > 0 ? errorResponse : null;
    }
};
