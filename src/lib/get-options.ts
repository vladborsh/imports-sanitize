export function getOptions(argv: string[]): Record<string, string> {
    return argv.reduce((opt, key, i) => {
        if (i % 2) {
            opt[argv[i - 1]] = key;
        } else {
            opt[key] = undefined;
        }

        return opt;
    }, {});
}
