import boo from '../../src/index';

const NUMBER__ = 12345;
const STRING__ = 'boo!';
const OBJECT__ = {};
const UNDEFINED__ = undefined;
const SYMBOL__ = Symbol(STRING__);

describe('Should construct', () => {
    const err = new TypeError(STRING__);

    test('Internal', (done) => {
        expect(new boo.Internal(STRING__)).toBeInstanceOf(Error);
        expect(new boo.Internal(NUMBER__)).toBeInstanceOf(Error);
        expect(new boo.Internal(SYMBOL__)).toBeInstanceOf(Error);
        expect(new boo.Internal(null)).toBeInstanceOf(Error);
        expect(new boo.Internal()).toBeInstanceOf(Error);
        expect(new boo.Internal(err)).toBeInstanceOf(Error);

        done();
    });

    test('Request', (done) => {
        expect(new boo.Request(STRING__)).toBeInstanceOf(Error);
        expect(new boo.Request(NUMBER__)).toBeInstanceOf(Error);
        expect(new boo.Request(SYMBOL__)).toBeInstanceOf(Error);
        expect(new boo.Request(null)).toBeInstanceOf(Error);
        expect(new boo.Request()).toBeInstanceOf(Error);
        expect(new boo.Request(err)).toBeInstanceOf(Error);

        done();
    });

    test('Timeout', (done) => {
        expect(new boo.Timeout(STRING__)).toBeInstanceOf(Error);
        expect(new boo.Timeout(NUMBER__)).toBeInstanceOf(Error);
        expect(new boo.Timeout(SYMBOL__)).toBeInstanceOf(Error);
        expect(new boo.Timeout(null)).toBeInstanceOf(Error);
        expect(new boo.Timeout()).toBeInstanceOf(Error);
        expect(new boo.Timeout(err)).toBeInstanceOf(Error);

        done();
    });

    test('Validation', (done) => {
        expect(new boo.Validation(STRING__)).toBeInstanceOf(Error);
        expect(new boo.Validation(NUMBER__)).toBeInstanceOf(Error);
        expect(new boo.Validation(SYMBOL__)).toBeInstanceOf(Error);
        expect(new boo.Validation(null)).toBeInstanceOf(Error);
        expect(new boo.Validation()).toBeInstanceOf(Error);
        expect(new boo.Validation(err)).toBeInstanceOf(Error);

        done();
    });
});

describe('Should have a message', () => {
    const err = new TypeError(STRING__);

    test('Internal', (done) => {
        expect(new boo.Internal(STRING__).message).toBe(STRING__);
        expect(new boo.Internal(NUMBER__).message).toBe(String(NUMBER__));
        expect(new boo.Internal().message).toBeUndefined();
        expect(new boo.Internal(null).message).toBeUndefined();
        expect(new boo.Internal(OBJECT__).message).toBe(String(OBJECT__));
        expect(new boo.Internal(err).message).toBe(STRING__);

        done();
    });

    test('Request', (done) => {
        expect(new boo.Request().message).toBeUndefined();
        expect(new boo.Request(null).message).toBeUndefined();
        expect(new boo.Request(STRING__).message).toBe(STRING__);
        expect(new boo.Request(NUMBER__).message).toBe(String(NUMBER__));
        expect(new boo.Request(OBJECT__).message).toBe(String(OBJECT__));
        expect(new boo.Request(err).message).toBe(STRING__);

        done();
    });

    test('Timeout', (done) => {
        expect(new boo.Timeout().message).toBeUndefined();
        expect(new boo.Timeout(null).message).toBeUndefined();
        expect(new boo.Timeout(STRING__).message).toBe(STRING__);
        expect(new boo.Timeout(NUMBER__).message).toBe(String(NUMBER__));
        expect(new boo.Timeout(OBJECT__).message).toBe(String(OBJECT__));
        expect(new boo.Timeout(err).message).toBe(STRING__);

        done();
    });

    test('Validation', (done) => {
        expect(new boo.Validation().message).toBeUndefined();
        expect(new boo.Validation(null).message).toBeUndefined();
        expect(new boo.Validation(STRING__).message).toBe(STRING__);
        expect(new boo.Validation(NUMBER__).message).toBe(String(NUMBER__));
        expect(new boo.Validation(OBJECT__).message).toBe(String(OBJECT__));
        expect(new boo.Validation(err).message).toBe(STRING__);

        done();
    });
});

describe('Should have a name', () => {
    test('it should be a string', (done) => {
        expect(new boo.Internal().name).toMatch(/Internal/);
        expect(new boo.Request().name).toMatch(/Request/);
        expect(new boo.Timeout().name).toMatch(/Timeout/);
        expect(new boo.Validation().name).toMatch(/Validation/);

        done();
    });

    test('it should be equal to one of exported names', (done) => {
        expect(new boo.Internal().name).toBe(boo.names.Internal);
        expect(new boo.Request().name).toBe(boo.names.Request);
        expect(new boo.Timeout().name).toBe(boo.names.Timeout);
        expect(new boo.Validation().name).toBe(boo.names.Validation);

        done();
    });
});
