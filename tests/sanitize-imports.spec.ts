import { sanitizeImports } from '../src/lib/sanitize-imports';

describe('sanitizeImports', () => {
    const input = 
`import * as _ from 'lodash';
import { isEmpty, flatten } from 'lodash';
import { reduce } from 'lodash-es';

let i = isEmpty([]);
let x = flatten([]);
let j = _.isArray('');
let m = reduce([1, 3, 4], (acc, v) => acc + v)`;

    it(`should fix imports`, () => {
        expect(sanitizeImports(input)).toEqual(
`import isEmpty from 'lodash/isEmpty';
import flatten from 'lodash/flatten';
import reduce from 'lodash/reduce';
import isArray from 'lodash/isArray';

let i = isEmpty([]);
let x = flatten([]);
let j = isArray('');
let m = reduce([1, 3, 4], (acc, v) => acc + v)`
        );
    });

    it(`should fix imports`, () => {
        expect(sanitizeImports('let i = isEmpty([]);')).toEqual(`let i = isEmpty([]);`);
    });
});