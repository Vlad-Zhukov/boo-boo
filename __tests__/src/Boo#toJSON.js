/* eslint-disable no-underscore-dangle */

import boo from '../../src/boo-boo';

const STRING__ = 'boo!';

describe('Boo#toJSON()', () => {
    it('should return an object', () => {
        const database = new boo.Database(STRING__).toJSON();
        const external = new boo.External(STRING__).toJSON();
        const internal = new boo.Internal(STRING__).toJSON();
        const request = new boo.Request(STRING__).toJSON();
        const timeout = new boo.Timeout(STRING__).toJSON();
        const validation = new boo.Validation(STRING__).toJSON();

        expect(database).toMatchObject({name: boo.names.Database, message: STRING__});
        expect(database.stack).toBeDefined();

        expect(external).toMatchObject({name: boo.names.External, message: STRING__});
        expect(external.stack).toBeDefined();

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
