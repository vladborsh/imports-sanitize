export const REGEXP_LODASH_IMPORT = /import.+'lodash';\n/gi;
export const REGEXP_LODASH_ES_IMPORT = /import.+'lodash-es';\n/gi;

export function sanitizeImports(source: string): string {
    const importedLodashModuleList = [
        ...(source.match(
            /[\s{](\w+\b(?<!\bas)(?<!\b_))[, }](?=.+'lodash';)/g
        ) || []),
        ...(source.match(
            /[\s{](\w+\b(?<!\bas)(?<!\b_))[, }](?=.+'lodash-es';)/g
        ) || []),
    ]
        .map((str: string) => str.replace(/\W/g, ''))
        .filter((str: string) => str !== 'import');

    const lodashFunctionsByUnderscore = (
        source.match(/_\.\w+/g) || []
    ).map((str: string) => str.replace(/_\.(\w)/, '$1'));

    const fnList = [
        ...new Set([
            ...importedLodashModuleList,
            ...lodashFunctionsByUnderscore,
        ]),
    ];

    return source
        .replace(REGEXP_LODASH_IMPORT, '')
        .replace(REGEXP_LODASH_ES_IMPORT, '')
        .replace(
            /^/,
            fnList.length
                ? fnList
                    .map((fn) => `import ${fn} from 'lodash/${fn}';\n`)
                    .join('')
                : ''
        )
        .replace(/_\.(\w+)/g, (match, p1: string) => p1);
}
