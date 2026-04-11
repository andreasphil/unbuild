<h1 align="center">
  Unbuild 🪴
</h1>

<p align="center">
  <strong>A template for build- and bundle-free web apps</strong>
</p>

Unbuild lets you enjoy many of the conveniences of modern SPA development with (almost) none of the complexity.

Optimized for prototyping and small side projects where simplicity and ease of development are important to keep them fun, and the problems solved by complex toolchains—automated testing, enforcing code style, highly optimized production code, etc.—aren't as big of a concern.

- ✌️ [Vue](https://vuejs.org) support with templates and composition API
- 🚀 Works with any static file server, no package manager or build process required
- 📦 Import external ESM and CSS dependencies from CDNs via [Import Maps](https://github.com/WICG/import-maps)
- 🌍 Use The Platform™—relies on established or polyfillable standards

## Usage

The easiest way to start a new project is to fetch the template folder using [`giget`](https://github.com/unjs/giget):

```sh
pnpx giget@latest gh:andreasphil/unbuild <project name>
```

You'll need a HTTP server for serving the project during development, since features such as JavaScript modules are not supported by the file protocol. Any server will do, though you might want one that routes any non-file request to `index.html` if you use a router such as [`vue-router`](https://router.vuejs.org). I like [`servor`](https://github.com/lukejacksonn/servor):

```sh
# --browse launches a browser, --reload reloads when files change
pnpx servor --browse --reload
```

### Files & folders

| Name                         | Notes                                                                                                                                                                                                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assets/`                    | This is where you should keep your static assets such as favicons, images, and the like.                                                                                                                |
| `scripts/`                   | For application scripts. `app.js` is imported by `index.html` and should serve as the entrypoint for the application.                                                                                   |
| `styles/`                    | For stylesheets. `styles.css` is imported by `index.html` and should serve as the entrypoint for the application.                                                                                       |
| `common/`                    | If you want to keep dependencies locally rather than serving them from a CDN, put them here.                                                                                                            |
| `index.html`                 | Entrypoint to the SPA. Use the [import map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) for declaring external dependencies and aliases. |
| `tsconfig.json`              | Enables some minimal editor support such as aliases and automatic type checking.                                                                                                                        |
| `LICENSE.md` and `README.md` | Replace these with your stuff.                                                                                                                                                                          |

## Development

Unbuild aims to make the contents of this folder easily served by any static file server without additional configuration.

This means:

- Project files use only features natively supported by modern web browsers---no bundling, transpiling, non-standard file formats, or language extensions.
- While support tools can be used to enhance development, they are not required to run, maintain, or modify the project.

Most "modern" web development workflows aren't designed for this approach, often assuming a Node.js environment and TypeScript. For example, importing dependencies from a CDN and linking them via import maps in `index.html` works perfectly fine in the browser, but may cause errors and missing autocompletions in editors.

Luckily there are a few tricks we can use to improve this experience:

- **Editor:** I recommend [Zed](https://zed.dev), because it has features such as linting and formatting included out of the box. If you use the `html` helper from [lib.js](./scripts/lib.js), Zed provides highlighting for templates. I also prefer the [oxc](https://github.com/oxc-project/oxc-zed) extension to the default formatter and linter.

- **Dependencies:** The most convenient way to use external dependencies is to link them in the import map in `index.html` from a CDN such as [esm.sh](https://esm.sh). This gives you access to virtually any Node module as well as code hosted on GitHub. Alternatively, just drop them in `common/` if they're simple and don't change often.

- **Aliases:** You can simplify local imports by mapping certain paths to aliases in the import map. Unbuild comes pre-configured with `scripts/` aliased to `@/` and `common/` aliased to `@common/`.

- **Autocompletions:** Node.js-based language tools don't support autocompletions based on import maps and URL imports. If you vendor your dependencies, your editor should be able to make sense of them and provide completions.

- **Type checking:** `// @ts-check` or a [`tsconfig.json`](./tsconfig.json) in combination with JSDoc comments can do basic type checking. To learn more: [TypeScript, Minus TypeScript on CSS-Tricks](https://css-tricks.com/typescript-minus-typescript/).

- **Deployment:** No `node_modules` or build process means you can literally just drop your project folder on any static file server that has an IP, and your app is ready.

- **Testing:** If you want to add unit tests, you can use [Node.js'](https://nodejs.org/api/test.html) built-in test runners for lightweight testing that doesn't require any additional setup or dependencies (beyond Node.js).

## Deployment

Deployment should work out of the box when linking the repository to a project on [Netlify](https://netlify.com) or deploying to GitHub pages.
