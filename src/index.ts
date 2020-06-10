/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { writeFileSync, readFile, } from 'fs';
import { create as createHound } from 'filehound';
import { getOptions } from './lib/get-options';
import { REGEXP_LODASH_IMPORT, sanitizeImports } from './lib/sanitize-imports';

const PATH_ALIAS = '-p';
const EXTENSIONS = ['ts', 'tsx', 'js', 'jsx'];

let isAnyAffectedFile = false;

function processFile(file: string) {
    readFile(file, 'utf8', (err, data) => {
        if (err) {
            throw Error(err.message);
        }

        if (REGEXP_LODASH_IMPORT.test(data)) {
            if (!isAnyAffectedFile) {
                console.log('Fixed files:');
                isAnyAffectedFile = true;
            }
            console.log(file);
            writeFileSync(file, sanitizeImports(data));
        }
    });
}

createHound()
    .paths(getOptions()[PATH_ALIAS])
    .ext(EXTENSIONS)
    .find()
    .then((files: string[]) => files.forEach(processFile));
