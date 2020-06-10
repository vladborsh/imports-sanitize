import { getOptions } from '../src/lib/get-options';

describe('getOptions', () => {
    it('should parse options', () => {
        expect(getOptions(['node', 'script-name', '-p', './src'])).toEqual({ 'node': 'script-name', '-p': './src'})
    })
})