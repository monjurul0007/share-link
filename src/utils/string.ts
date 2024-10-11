export function divideString(input: string): [string, string] {
    const words = input.trim().split(' ');

    if (words.length === 1) {
        return ['', words[0]];
    }

    const lastWord = words.pop()!;
    const firstPart = words.join(' ');

    return [firstPart, lastWord];
}
