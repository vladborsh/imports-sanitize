import { sanitizeImports } from '../src/lib/sanitize-imports';

describe('sanitizeImports', () => {
    const input = 
`import * as _ from 'lodash';
import { isEmpty, flatten } from 'lodash';

let i = isEmpty([]);
let x = flatten([]);
let j = _.isArray('');`;

    it(`should fix imports`, () => {
        expect(sanitizeImports(input)).toEqual(
`import isEmpty from 'lodash/isEmpty';
import flatten from 'lodash/flatten';
import isArray from 'lodash/isArray';

let i = isEmpty([]);
let x = flatten([]);
let j = isArray('');`
        );
    });
});