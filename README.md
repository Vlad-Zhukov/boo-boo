boo-boo
=======
> Opinionated enhanced errors for Node and browsers.

## API

### `new boo.Internal([messageOrError]),`<br>`new boo.Request([messageOrError]),`<br>`new boo.Timeout([messageOrError]),`<br>`new boo.Validation([messageOrError])`
A [`Boo`](#Boo) constructor, inherited from [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error). 
All variants create an instance of Boo with a different `name` property. See [`names`](#names) for all available names. 

__Arguments__
- `[messageOrError]` _(any|Error)_: Optional. Human-readable description that will be coerced to string. 
If the value is an instance of `Error`, its `message` parameter will be used instead.

__Examples__
```js
const err = new boo.Internal('boo!');
console.log(err.message); // 'boo!'

const err = new boo.Request(new TypeError('boo!'));
console.log(err.message); // 'boo!'
```

---

### `Boo`
__Properties__
- `name` _(String)_: Error name. See [`names`](#names) for all available names. 
- `message` _(String)_: Optional. Human-readable description of the error.
- `stack` _(String)_: Stack trace.
- `isBoo` _(Boolean)_: A readonly property to simplify error instances checking of [`Boo`](#Boo) 
(i.e. `err instanceof boo.Internal`). Always returns `true`;

__Methods__
- `toString()` → _String_: Overrides the default 
[Error.prototype.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toString) 
method with additional data.
- `toJSON()` → _Object_: A plain object representation of that Boo error. It is required for [`JSON.stringify()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). 
The resulting object contains `name`, `message` and `stack` properties (if exist).

---

### `names`
A plain object of names used by [`Boo`](#Boo) constructors: `Internal`, `Request`, `Timeout` and `Validation`. 
The list can be supplemented, PRs are welcome.

__Examples__
```js
const err = new boo.Internal();
console.log(err.name === boo.names.Internal); // true
```
