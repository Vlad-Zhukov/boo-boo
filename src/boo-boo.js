const __DEV__ = process != null && process.env != null && process.env.NODE_ENV !== 'production';

/**
 * @param name {String}
 * @returns {Boo}
 */
function createBoo(name) {
    return class Boo extends Error {
        /**
         * @param messageOrError {*|Error}
         */
        constructor(messageOrError) {
            let message;
            // Ignore undefined and null
            if (messageOrError != null) {
                if (messageOrError instanceof Error) {
                    message = messageOrError.message;
                    // TODO: inherit stack
                }
                else {
                    message = String(messageOrError);
                }
            }

            super(name + message ? `: ${message}` : '');
            super.name = name;

            this.message = message;
            this.name = name;

            if (__DEV__ && typeof Error.captureStackTrace === 'function') {
                Error.captureStackTrace(this, Boo);
            }

            Object.defineProperty(this, 'isBoo', {
                enumerable: false,
                configurable: false,
                writable: false,
                value: true,
            });
        }

        toString() {
            if (Object(this) !== this) throw new TypeError();

            let result = this.name;
            if (this.message) result += `: ${this.message}`;
            if (this.stack) result += `\n${this.stack}`;
            return result;
        }

        toJSON() {
            if (Object(this) !== this) throw new TypeError();

            const result = {
                name: this.name,
            };
            if (this.message) result.message = this.message;
            if (this.stack) result.stack = this.stack;
            return result;
        }
    };
}

const names = {
    Database: 'Boo/Database',
    External: 'Boo/External',
    Internal: 'Boo/Internal',
    Request: 'Boo/Request',
    Timeout: 'Boo/Timeout',
    Validation: 'Boo/Validation',
};

const boo = {
    Database: createBoo(names.Database),
    External: createBoo(names.External),
    Internal: createBoo(names.Internal),
    Request: createBoo(names.Request),
    Timeout: createBoo(names.Timeout),
    Validation: createBoo(names.Validation),

    names,
};

export default Object.freeze(boo);
