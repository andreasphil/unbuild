<h1 align="center">
  Unbuild 🪴
</h1>

<p align="center">
  <strong>A template for build- and bundle-free web apps</strong>
</p>

Optimized for prototyping and small side projects where simplicity and ease of development are important to keep them fun, and the problems solved by complex toolchains – automated testing, enforcing code style, highly optimized production code, etc. – aren't as big of a concern.

Unbuild lets you enjoy many of the conveniences of modern SPA development with (almost) none of the complexity:

- ⚛️ [Preact](https://preactjs.com) support with JSX-like syntax thanks to [htm](https://github.com/developit/htm)
- 🚀 Works with any static file server, no `npm` or build process required
- 📦 Import external ESM and CSS dependencies from CDNs via [Import Maps](https://github.com/WICG/import-maps)
- 🌍 Use The Platform™ - relies on established or polyfillable standards

## Getting started

The easiest way to start a new project is to fetch the template folder using [`degit`](https://github.com/Rich-Harris/degit):

```sh
mkdir app-name
cd app-name
npx degit https://github.com/andreasphil/unbuild
```

You'll need a HTTP server for serving the project during development, since features such as JavaScript modules are not supported by the file protocol. Any server will do, though you might want one that routes any non-file request to `index.html` if you use a router such as [`preact-iso`](https://github.com/preactjs/wmr/tree/main/packages/preact-iso). I like [`servor`](https://github.com/lukejacksonn/servor):

```sh
# --browse launches a browser, --reload reloads when files change
npx servor --browse --reload
```

## Files & folders

- `assets/`: This is where you should keep your static assets such as favicons, images, and the like.
- `scripts/`: For application scripts. `app.js` is imported by `index.html` and should serve as the entrypoint for the application.
- `styles/`: For stylesheets. `styles.css` is imported by `index.html` and should serve as the entrypoint for the application.
- `import-map.json`: Use this to tell the browser how to resolve modules such as dependencies. You can learn more about import maps [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps).
- `index.html`: Entrypoint to the SPA.
- `lib.js`: Contains utilities provided by Unbuild. For now, this is only a function called `html`, which will let you write JSX-like syntax thanks to [htm](https://github.com/developit/htm). I recommend leaving this file as it is for easy updates should it change in future versions of Unbuild.
- `LICENSE.md` and `README.md`: Replace these with your stuff.

## Development workflow

- **Editor:** I recommend [Visual Studio Code](https://code.visualstudio.com), because it has features such as linting and formatting included out of the box. The [lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html) extension additionally provides highlighting for htm blocks. I also prefer the [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension to the default formatter.

- **Dependencies:** The most convenient way to use external dependencies is to link them in the import map in `import-map.json` from a CDN such as [unpkg](https://unpkg.com), [Skypack](https://www.skypack.dev), [jsDelivr](https://www.jsdelivr.com), or [esm.sh](https://esm.sh). All of them should give you access to almost any NPM module.

  - jsDeliver also allows you to hotlink files from GitHub repositories – just make sure to link the ESM version
  - [JSPM](https://generator.jspm.io) has a convenient import map generator that's worth a try

- **Aliases:** You can simplify local imports by mapping certain paths to aliases in `import-map.json`. Unbuild comes pre-configured with `./lib.js` aliased to `unbuild`, and `./scripts/` aliased to `$/`.

- **Type checking:** `// @ts-check` in combination with JSDoc comments can do basic type checking. To learn more: [TypeScript, Minus TypeScript on CSS-Tricks](https://css-tricks.com/typescript-minus-typescript/)

- **Deployment:** No `node_modules` or build process means you can literally just drop your project folder on any static file server that has an IP, and your app is ready. [Netlify Drop](http://app.netlify.com/drop) is probably the easiest.

## Credits

Favicons generated with [IconKitchen](https://icon.kitchen/). Thanks 🙏
