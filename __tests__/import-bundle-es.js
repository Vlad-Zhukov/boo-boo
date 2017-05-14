/* eslint-disable no-underscore-dangle */

import boo from '../dist/boo-boo.es';

const STRING__ = 'boo!';

describe('import-bundle-es', () => {
    it('should construct with 1 parameter', () => {
        expect(new boo.Internal(STRING__)).toBeInstanceOf(Error);
        expect(new boo.Request(STRING__)).toBeInstanceOf(Error);
        expect(new boo.Timeout(STRING__)).toBeInstanceOf(Error);
        expect(new boo.Validation(STRING__)).toBeInstanceOf(Error);
    });
});
