boo-boo · [![npm](https://badge.fury.io/js/boo-boo.svg)](https://www.npmjs.com/package/boo-boo)
=======
> Opinionated better errors for Node.js, browsers and React Native.

## API

### `new boo.Internal([messageOrError])`<br>`new boo.Request([messageOrError])`<br>`new boo.Timeout([messageOrError])`<br>`new boo.Validation([messageOrError])`
A [`Boo`](#boo) constructor, inherited from [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error). 
Each variant creates an instance of Boo with a specific `name` property. See [`names`](#names) for all available names. 

__Arguments__
- `[messageOrError]` _(any|Error)_: Optional. Human-readable description that will be coerced to a string. 
If the value is an instance of `Error`, its `message` property will be taken instead.

__Examples__
```js
const err = new boo.Internal('boo!');
console.log(err.message); // 'boo!'

const err = new boo.Request(new TypeError('boo!'));
console.log(err.message); // 'boo!'
```

---

### `Boo`
An instance of `Boo` created by one of constructors above.

__Properties__
- `name` _(String)_: Error name. See [`names`](#names) for all available names. 
- `message` _(String)_: Optional. Human-readable description of the error.
- `stack` _(String)_: Stack trace.
- `isBoo` _(Boolean)_: A readonly property to simplify error instance checking of [`Boo`](#boo).
It replaces a somewhat ugly and counter-intuitive `err instanceof boo.Internal` with `err.isBoo`. Always returns `true`.

__Methods__
- `toString()` → _String_: Overrides the default [`Error.prototype.toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toString) 
method in order to provide additional data.
- `toJSON()` → _Object_: A plain object representation that is required for [`JSON.stringify()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). 
The resulting object contains `name`, `message` and `stack` properties (if exist).

---

### `names`
A plain object of names used by [`Boo`](#boo) constructors: `Internal`, `Request`, `Timeout` and `Validation`. 
This list can be supplemented, PRs are welcome.

__Examples__
```js
const err = new boo.Internal();
console.log(err.name === boo.names.Internal); // true
```
