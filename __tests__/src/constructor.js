import boo from '../../src/index';

const __NUMBER__ = 12345;
const __STRING__ = 'boo!';
const __OBJECT__ = {};
const __UNDEFINED__ = undefined;
const __SYMBOL__ = Symbol(__STRING__);

describe('Should construct', () => {
    const err = new TypeError(__STRING__);

    test('Internal', (done) => {
        expect(new boo.Internal(__STRING__)).toBeInstanceOf(Error);
        expect(new boo.Internal(__NUMBER__)).toBeInstanceOf(Error);
        expect(new boo.Internal(__SYMBOL__)).toBeInstanceOf(Error);
        expect(new boo.Internal(null)).toBeInstanceOf(Error);
        expect(new boo.Internal()).toBeInstanceOf(Error);
        expect(new boo.Internal(err)).toBeInstanceOf(Error);

        done();
    });

    test('Request', (done) => {
        expect(new boo.Request(__STRING__)).toBeInstanceOf(Error);
        expect(new boo.Request(__NUMBER__)).toBeInstanceOf(Error);
        expect(new boo.Request(__SYMBOL__)).toBeInstanceOf(Error);
        expect(new boo.Request(null)).toBeInstanceOf(Error);
        expect(new boo.Request()).toBeInstanceOf(Error);
        expect(new boo.Request(err)).toBeInstanceOf(Error);

        done();
    });

    test('Timeout', (done) => {
        expect(new boo.Timeout(__STRING__)).toBeInstanceOf(Error);
        expect(new boo.Timeout(__NUMBER__)).toBeInstanceOf(Error);
        expect(new boo.Timeout(__SYMBOL__)).toBeInstanceOf(Error);
        expect(new boo.Timeout(null)).toBeInstanceOf(Error);
        expect(new boo.Timeout()).toBeInstanceOf(Error);
        expect(new boo.Timeout(err)).toBeInstanceOf(Error);

        done();
    });

    test('Validation', (done) => {
        expect(new boo.Validation(__STRING__)).toBeInstanceOf(Error);
        expect(new boo.Validation(__NUMBER__)).toBeInstanceOf(Error);
        expect(new boo.Validation(__SYMBOL__)).toBeInstanceOf(Error);
        expect(new boo.Validation(null)).toBeInstanceOf(Error);
        expect(new boo.Validation()).toBeInstanceOf(Error);
        expect(new boo.Validation(err)).toBeInstanceOf(Error);

        done();
    });
});

describe('Should have a message', () => {
    const err = new TypeError(__STRING__);

    test('Internal', (done) => {
        expect((new boo.Internal(__STRING__)).message).toBe(__STRING__);
        expect((new boo.Internal(__NUMBER__)).message).toBe(String(__NUMBER__));
        expect((new boo.Internal()).message).toBeUndefined();
        expect((new boo.Internal(null)).message).toBeUndefined();
        expect((new boo.Internal(__OBJECT__)).message).toBe(String(__OBJECT__));
        expect((new boo.Internal(err)).message).toBe(__STRING__);

        done();
    });

    test('Request', (done) => {
        expect((new boo.Request()).message).toBeUndefined();
        expect((new boo.Request(null)).message).toBeUndefined();
        expect((new boo.Request(__STRING__)).message).toBe(__STRING__);
        expect((new boo.Request(__NUMBER__)).message).toBe(String(__NUMBER__));
        expect((new boo.Request(__OBJECT__)).message).toBe(String(__OBJECT__));
        expect((new boo.Request(err)).message).toBe(__STRING__);

        done();
    });

    test('Timeout', (done) => {
        expect((new boo.Timeout()).message).toBeUndefined();
        expect((new boo.Timeout(null)).message).toBeUndefined();
        expect((new boo.Timeout(__STRING__)).message).toBe(__STRING__);
        expect((new boo.Timeout(__NUMBER__)).message).toBe(String(__NUMBER__));
        expect((new boo.Timeout(__OBJECT__)).message).toBe(String(__OBJECT__));
        expect((new boo.Timeout(err)).message).toBe(__STRING__);

        done();
    });

    test('Validation', (done) => {
        expect((new boo.Validation()).message).toBeUndefined();
        expect((new boo.Validation(null)).message).toBeUndefined();
        expect((new boo.Validation(__STRING__)).message).toBe(__STRING__);
        expect((new boo.Validation(__NUMBER__)).message).toBe(String(__NUMBER__));
        expect((new boo.Validation(__OBJECT__)).message).toBe(String(__OBJECT__));
        expect((new boo.Validation(err)).message).toBe(__STRING__);

        done();
    });
});

describe('Should have a name', () => {
    test('it should be a string', (done) => {
        expect((new boo.Internal()).name).toMatch(/Internal/);
        expect((new boo.Request()).name).toMatch(/Request/);
        expect((new boo.Timeout()).name).toMatch(/Timeout/);
        expect((new boo.Validation()).name).toMatch(/Validation/);

        done();
    });

    test('it should be equal to one of exported names', (done) => {
        expect((new boo.Internal()).name).toBe(boo.names.Internal);
        expect((new boo.Request()).name).toBe(boo.names.Request);
        expect((new boo.Timeout()).name).toBe(boo.names.Timeout);
        expect((new boo.Validation()).name).toBe(boo.names.Validation);

        done();
    });
});
