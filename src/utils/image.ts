export const generateImageLink = (buffer?: Buffer) => {
    return buffer ? `data:image/png;base64,${buffer}` : undefined;
};
