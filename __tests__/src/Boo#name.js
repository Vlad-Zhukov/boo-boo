/* eslint-disable no-underscore-dangle */

import boo from '../../src/boo-boo';

describe('Boo#name', () => {
    it('should be a string', () => {
        expect(new boo.Internal().name).toMatch(/Internal/);
        expect(new boo.Request().name).toMatch(/Request/);
        expect(new boo.Timeout().name).toMatch(/Timeout/);
        expect(new boo.Validation().name).toMatch(/Validation/);
    });

    it('should be equal to one of exported names', () => {
        expect(new boo.Internal().name).toBe(boo.names.Internal);
        expect(new boo.Request().name).toBe(boo.names.Request);
        expect(new boo.Timeout().name).toBe(boo.names.Timeout);
        expect(new boo.Validation().name).toBe(boo.names.Validation);
    });
});
