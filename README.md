# Hawk JSX

A minimal JSX library for static HTML templating on both client and server.

[![NPM Version](https://badgen.net/npm/v/hawk-jsx)](https://www.npmjs.com/package/hawk-jsx)
[![License](https://badgen.net/static/license/MIT/blue)](https://opensource.org/license/mit)

## Installation

```console
npm install hawk-jsx
```

### TypeScript

Type definitions are included.

To use this library with TypeScript's JSX transpilation, specify these settings in your tsconfig.json:
```json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "hawk-jsx"
    }
}
```

### Other Runtimes

This library implements the `jsx` format currently supported by React and TypeScript. It is not compatible with other JSX runtimes that use the older `React.createElement()` syntax.

There may be a JSX plugin for your preferred bundler that supports the modern React JSX syntax. To use this package, set `"jsxImportSource": "hawk-jsx"` or the equivalent setting there.

## Usage

Once your transpiler or bundler is configured as above, you can write and render JSX like so:
```javascript
// server/index.jsx
import { renderHtmlElementString } from "hawk-jsx";

const name = "John Doe";
const div = <div>Hello {name}!</div>;

const htmlString = renderHtmlElementString(div);
console.log(htmlString);
// "<div>Hello John Doe!</div>"
```

In the browser, you can instead create HTML elements directly:
```javascript
// client/index.jsx
import { renderHtmlDomNodes } from "hawk-jsx";

const name = "John Doe";
const div = <div>Hello {name}!</div>;

const nodes = renderHtmlDomNodes(div);
console.log(nodes);
// [ HTMLDivElement ]
document.body.append(...nodes);
```

## Contributing

Pull requests are welcome.

## License

[MIT](LICENSE)