/* eslint-disable no-underscore-dangle */

import boo from '../../src/boo-boo';

const STRING__ = 'boo!';

describe('Boo#toString()', () => {
    it('should return a string', () => {
        const database = new boo.Database(STRING__).toString();
        const external = new boo.External(STRING__).toString();
        const internal = new boo.Internal(STRING__).toString();
        const request = new boo.Request(STRING__).toString();
        const timeout = new boo.Timeout(STRING__).toString();
        const validation = new boo.Validation(STRING__).toString();

        expect(database).toMatch(new RegExp(`^${boo.names.Database}: ${STRING__}`));
        expect(external).toMatch(new RegExp(`^${boo.names.External}: ${STRING__}`));
        expect(internal).toMatch(new RegExp(`^${boo.names.Internal}: ${STRING__}`));
        expect(request).toMatch(new RegExp(`^${boo.names.Request}: ${STRING__}`));
        expect(timeout).toMatch(new RegExp(`^${boo.names.Timeout}: ${STRING__}`));
        expect(validation).toMatch(new RegExp(`^${boo.names.Validation}: ${STRING__}`));
    });
});
