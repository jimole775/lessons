Using CSS Modules with TypeScript is not as obvious as with JavaScript. The reason is that TypeScript has special treatment for imports and if you try to use CSS Modules the same way you did in JavaScript:

``` js
import s from './Button.css';
```

You’ll get an error: “Cannot find module ‘./Button.css’”. There are several ways to fix that.

The easy way
You can bypass TypeScript import magic by using require instead of import:

``` js
const s = require('./Button.css');
```

It’s processed by webpack as usual but you won’t have type check and autocomplete for CSS class names.

The better way
To use import you need typings for CSS. For example, you have Button.csslike this:

``` js
.foo {
  color: chocolate;
}
.barBaz {
  color: tomato;
}
```

Now you need Button.css.d.ts like this:

``` js
export const foo: string;
export const barBaz: string;
```

typings-for-css-modules-loader is a drop-in replacement for css-loader that generates typings for CSS on the fly. Let’s install it:

``` bash
npm install --save-dev typings-for-css-modules-loader
```

Then update your webpack config:
``` yml
module: {
  rules: [
    {
      test: /\.css$/,
      include: path.join(__dirname, 'src/components'),
      use: [
        'style-loader',
        {
          loader: 'typings-for-css-modules-loader',
          options: {
            modules: true,
            namedExport: true
          }
        }
      ]
    }
  ]
}
```
Now you can import styles like this:

``` js
import * as s from './Button.css';
```