<h1 align="center">
  Unbuild 🪴
</h1>

<p align="center">
  <strong>A template for build- and bundle-free web apps</strong>
</p>

Optimized for prototyping and small side projects where simplicity and ease of development are important to keep them fun, and the problems solved by complex toolchains—automated testing, enforcing code style, highly optimized production code, etc.—aren't as big of a concern.

Unbuild lets you enjoy many of the conveniences of modern SPA development with (almost) none of the complexity:

- ⚛️ [Vue](https://vuejs.org) support with templates and composition API
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

You'll need a HTTP server for serving the project during development, since features such as JavaScript modules are not supported by the file protocol. Any server will do, though you might want one that routes any non-file request to `index.html` if you use a router such as [`vue-router`](https://router.vuejs.org). I like [`servor`](https://github.com/lukejacksonn/servor):

```sh
# --browse launches a browser, --reload reloads when files change
npx servor --browse --reload
```

## Files & folders

- `assets/`: This is where you should keep your static assets such as favicons, images, and the like.
- `scripts/`: For application scripts. `app.js` is imported by `index.html` and should serve as the entrypoint for the application.
- `styles/`: For stylesheets. `styles.css` is imported by `index.html` and should serve as the entrypoint for the application.
- `index.html`: Entrypoint to the SPA. Use the [import map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) for declaring external dependencies and aliases.
- `jsconfig.json`: Enables some minimal editor support such as aliases and automatic type checking.
- `LICENSE.md` and `README.md`: Replace these with your stuff.

## Development workflow

- **Editor:** I recommend [Visual Studio Code](https://code.visualstudio.com), because it has features such as linting and formatting included out of the box. The [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) extension additionally provides highlighting for templates. I also prefer the [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension to the default formatter.

- **Dependencies:** The most convenient way to use external dependencies is to link them in the import map in `index.html` from a CDN such as [esm.sh](https://esm.sh). This gives you access to virtually any NPM module as well as code hosted on GitHub.

- **Aliases:** You can simplify local imports by mapping certain paths to aliases in the import map. Unbuild comes pre-configured with `./scripts/` aliased to `$/`.

- **Type checking:** `// @ts-check` or a [`jsconfig.json`](./jsconfig.json) in combination with JSDoc comments can do basic type checking. To learn more: [TypeScript, Minus TypeScript on CSS-Tricks](https://css-tricks.com/typescript-minus-typescript/).

- **Deployment:** No `node_modules` or build process means you can literally just drop your project folder on any static file server that has an IP, and your app is ready. I like [Netlify Drop](http://app.netlify.com/drop).

- **Testting:** If you want to add unit tests, you can use [Node's](https://nodejs.org/api/test.html) or [Deno's](https://docs.deno.com/runtime/manual/basics/testing/) built-in test runners for lightweight testing that doesn't require any additional setup or dependencies (beyond Node or Deno itself).
