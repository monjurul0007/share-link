export const successResponse = (
    message: string,
    data: Record<string, unknown> = {},
    status = 200,
) => {
    const responseBody = { ...data };

    if (message.trim()) {
        responseBody['message'] = message;
    }

    return new Response(JSON.stringify(responseBody), { status });
};

export const errorResponse = (
    message: string,
    status = 400,
    errors: Record<string, unknown> = {},
) => {
    return new Response(JSON.stringify({ message, errors }), { status });
};
