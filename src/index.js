/**
 * @param name {String}
 * @returns {Boo}
 */
function createBoo(name) {
    return class Boo extends Error {
        /**
         * @param messageOrError {any|Error}
         */
        constructor(messageOrError) {
            let message;
            if (messageOrError instanceof Error) {
                message = messageOrError.message;
                // TODO: inherit stack
            }
            // Ignore undefined and null
            else if (messageOrError != null) {
                message = String(messageOrError);
            }

            super(name + message ? `: ${message}` : '');
            super.name = name;

            this.message = message;
            this.name = name;

            if (typeof Error.captureStackTrace === 'function') {
                Error.captureStackTrace(this, Boo);
            }
        }

        // eslint-disable-next-line class-methods-use-this
        get isBoo() {
            return true;
        }

        toString() {
            const obj = Object(this);
            if (obj !== this) throw new TypeError();

            let result = this.name;
            if (this.message) result += `: ${this.message}`;
            if (this.stack) result += `\n${this.stack}`;
            return result;
        }

        toJSON() {
            const obj = Object(this);
            if (obj !== this) throw new TypeError();

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
    Internal: 'Boo/Internal',
    Request: 'Boo/Request',
    Timeout: 'Boo/Timeout',
    Validation: 'Boo/Validation',
};

const boo = {
    Internal: createBoo(names.Internal),
    Request: createBoo(names.Request),
    Timeout: createBoo(names.Timeout),
    Validation: createBoo(names.Validation),

    names,
};

export default Object.freeze(boo);
