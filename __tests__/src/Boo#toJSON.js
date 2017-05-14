/* eslint-disable no-underscore-dangle */

import boo from '../../src/boo-boo';

const STRING__ = 'boo!';

describe('Boo#toJSON()', () => {
    it('should return an object', () => {
        const internal = new boo.Internal(STRING__).toJSON();
        const request = new boo.Request(STRING__).toJSON();
        const timeout = new boo.Timeout(STRING__).toJSON();
        const validation = new boo.Validation(STRING__).toJSON();

        expect(internal).toMatchObject({name: boo.names.Internal, message: STRING__});
        expect(internal.stack).toBeDefined();

        expect(request).toMatchObject({name: boo.names.Request, message: STRING__});
        expect(request.stack).toBeDefined();

        expect(timeout).toMatchObject({name: boo.names.Timeout, message: STRING__});
        expect(timeout.stack).toBeDefined();

        expect(validation).toMatchObject({name: boo.names.Validation, message: STRING__});
        expect(validation.stack).toBeDefined();
    });
});
