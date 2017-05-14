/* eslint-disable no-underscore-dangle */

import boo from '../../src/boo-boo';

const NUMBER__ = 12345;
const STRING__ = 'boo!';
const OBJECT__ = {};

describe('Boo#message', () => {
    const err = new TypeError(STRING__);

    test('boo.Database', () => {
        expect(new boo.Database(STRING__).message).toBe(STRING__);
        expect(new boo.Database(NUMBER__).message).toBe(String(NUMBER__));
        expect(new boo.Database().message).toBeUndefined();
        expect(new boo.Database(null).message).toBeUndefined();
        expect(new boo.Database(OBJECT__).message).toBe(String(OBJECT__));
        expect(new boo.Database(err).message).toBe(STRING__);
    });

    test('boo.External', () => {
        expect(new boo.External(STRING__).message).toBe(STRING__);
        expect(new boo.External(NUMBER__).message).toBe(String(NUMBER__));
        expect(new boo.External().message).toBeUndefined();
        expect(new boo.External(null).message).toBeUndefined();
        expect(new boo.External(OBJECT__).message).toBe(String(OBJECT__));
        expect(new boo.External(err).message).toBe(STRING__);
    });

    test('boo.Internal', () => {
        expect(new boo.Internal(STRING__).message).toBe(STRING__);
        expect(new boo.Internal(NUMBER__).message).toBe(String(NUMBER__));
        expect(new boo.Internal().message).toBeUndefined();
        expect(new boo.Internal(null).message).toBeUndefined();
        expect(new boo.Internal(OBJECT__).message).toBe(String(OBJECT__));
        expect(new boo.Internal(err).message).toBe(STRING__);
    });

    test('boo.Request', () => {
        expect(new boo.Request().message).toBeUndefined();
        expect(new boo.Request(null).message).toBeUndefined();
        expect(new boo.Request(STRING__).message).toBe(STRING__);
        expect(new boo.Request(NUMBER__).message).toBe(String(NUMBER__));
        expect(new boo.Request(OBJECT__).message).toBe(String(OBJECT__));
        expect(new boo.Request(err).message).toBe(STRING__);
    });

    test('boo.Timeout', () => {
        expect(new boo.Timeout().message).toBeUndefined();
        expect(new boo.Timeout(null).message).toBeUndefined();
        expect(new boo.Timeout(STRING__).message).toBe(STRING__);
        expect(new boo.Timeout(NUMBER__).message).toBe(String(NUMBER__));
        expect(new boo.Timeout(OBJECT__).message).toBe(String(OBJECT__));
        expect(new boo.Timeout(err).message).toBe(STRING__);
    });

    test('boo.Validation', () => {
        expect(new boo.Validation().message).toBeUndefined();
        expect(new boo.Validation(null).message).toBeUndefined();
        expect(new boo.Validation(STRING__).message).toBe(STRING__);
        expect(new boo.Validation(NUMBER__).message).toBe(String(NUMBER__));
        expect(new boo.Validation(OBJECT__).message).toBe(String(OBJECT__));
        expect(new boo.Validation(err).message).toBe(STRING__);
    });
});
