/* eslint-disable no-underscore-dangle */

import boo from '../../src/boo-boo';

const NUMBER__ = 12345;
const STRING__ = 'boo!';
const SYMBOL__ = Symbol(STRING__);

describe('Boo#constructor()', () => {
    const err = new TypeError(STRING__);

    test('boo.Database', () => {
        expect(new boo.Database(STRING__)).toBeInstanceOf(Error);
        expect(new boo.Database(NUMBER__)).toBeInstanceOf(Error);
        expect(new boo.Database(SYMBOL__)).toBeInstanceOf(Error);
        expect(new boo.Database(null)).toBeInstanceOf(Error);
        expect(new boo.Database()).toBeInstanceOf(Error);
        expect(new boo.Database(err)).toBeInstanceOf(Error);
    });

    test('boo.External', () => {
        expect(new boo.External(STRING__)).toBeInstanceOf(Error);
        expect(new boo.External(NUMBER__)).toBeInstanceOf(Error);
        expect(new boo.External(SYMBOL__)).toBeInstanceOf(Error);
        expect(new boo.External(null)).toBeInstanceOf(Error);
        expect(new boo.External()).toBeInstanceOf(Error);
        expect(new boo.External(err)).toBeInstanceOf(Error);
    });

    test('boo.Internal', () => {
        expect(new boo.Internal(STRING__)).toBeInstanceOf(Error);
        expect(new boo.Internal(NUMBER__)).toBeInstanceOf(Error);
        expect(new boo.Internal(SYMBOL__)).toBeInstanceOf(Error);
        expect(new boo.Internal(null)).toBeInstanceOf(Error);
        expect(new boo.Internal()).toBeInstanceOf(Error);
        expect(new boo.Internal(err)).toBeInstanceOf(Error);
    });

    test('boo.Request', () => {
        expect(new boo.Request(STRING__)).toBeInstanceOf(Error);
        expect(new boo.Request(NUMBER__)).toBeInstanceOf(Error);
        expect(new boo.Request(SYMBOL__)).toBeInstanceOf(Error);
        expect(new boo.Request(null)).toBeInstanceOf(Error);
        expect(new boo.Request()).toBeInstanceOf(Error);
        expect(new boo.Request(err)).toBeInstanceOf(Error);
    });

    test('boo.Timeout', () => {
        expect(new boo.Timeout(STRING__)).toBeInstanceOf(Error);
        expect(new boo.Timeout(NUMBER__)).toBeInstanceOf(Error);
        expect(new boo.Timeout(SYMBOL__)).toBeInstanceOf(Error);
        expect(new boo.Timeout(null)).toBeInstanceOf(Error);
        expect(new boo.Timeout()).toBeInstanceOf(Error);
        expect(new boo.Timeout(err)).toBeInstanceOf(Error);
    });

    test('boo.Validation', () => {
        expect(new boo.Validation(STRING__)).toBeInstanceOf(Error);
        expect(new boo.Validation(NUMBER__)).toBeInstanceOf(Error);
        expect(new boo.Validation(SYMBOL__)).toBeInstanceOf(Error);
        expect(new boo.Validation(null)).toBeInstanceOf(Error);
        expect(new boo.Validation()).toBeInstanceOf(Error);
        expect(new boo.Validation(err)).toBeInstanceOf(Error);
    });
});
