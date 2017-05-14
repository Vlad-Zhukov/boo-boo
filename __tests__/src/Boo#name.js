/* eslint-disable no-underscore-dangle */

import boo from '../../src/boo-boo';

describe('Boo#name', () => {
    const database = new boo.Database();
    const external = new boo.External();
    const internal = new boo.Internal();
    const request = new boo.Request();
    const timeout = new boo.Timeout();
    const validation = new boo.Validation();

    it('should be a string', () => {
        expect(database.name).toMatch(/Database/);
        expect(external.name).toMatch(/External/);
        expect(internal.name).toMatch(/Internal/);
        expect(request.name).toMatch(/Request/);
        expect(timeout.name).toMatch(/Timeout/);
        expect(validation.name).toMatch(/Validation/);
    });

    it('should be equal to a corresponding name', () => {
        expect(database.name).toBe(boo.names.Database);
        expect(external.name).toBe(boo.names.External);
        expect(internal.name).toBe(boo.names.Internal);
        expect(request.name).toBe(boo.names.Request);
        expect(timeout.name).toBe(boo.names.Timeout);
        expect(validation.name).toBe(boo.names.Validation);
    });
});
