/* eslint-disable no-underscore-dangle */

const boo = require('../dist/boo-boo.cjs');

const STRING__ = 'boo!';

describe('Should construct', () => {
    test('should construct with 1 parameter', (done) => {
        expect(new boo.Internal(STRING__)).toBeInstanceOf(Error);
        expect(new boo.Request(STRING__)).toBeInstanceOf(Error);
        expect(new boo.Timeout(STRING__)).toBeInstanceOf(Error);
        expect(new boo.Validation(STRING__)).toBeInstanceOf(Error);

        done();
    });
});
