const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('seventysix'))
        .toEqual('c75ce073a9814bd3d4400aef2f372de10906aae4c22c5043be46cf3c93684610');

    });

    it('produces the same hash with the same input arguments in any order', () =>{
        expect(cryptoHash('one', 'six', 'five'))
        .toEqual(cryptoHash('five', 'one', 'six'));
    });

    it('produces an unique hash when the property input has changed', () => {
        const seventysix = {};
        const originalHash = cryptoHash(seventysix);
        seventysix['a'] = 'a';

        expect(cryptoHash(seventysix)).not.toEqual(originalHash);
    });
});