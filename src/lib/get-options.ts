export function getOptions() {
    return process.argv.reduce((opt, key, i) => {
        if (i % 2) {
            opt[process.argv[i - 1]] = key;
        } else {
            opt[key] = undefined;
        }

        return opt;
    }, {});
}
