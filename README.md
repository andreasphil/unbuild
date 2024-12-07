<h1 align="center">
  Unbuild 🪴
</h1>

<p align="center">
  <strong>A template for build- and bundle-free web apps</strong>
</p>

Unbuild lets you enjoy many of the conveniences of modern SPA development with (almost) none of the complexity.

Optimized for prototyping and small side projects where simplicity and ease of development are important to keep them fun, and the problems solved by complex toolchains—automated testing, enforcing code style, highly optimized production code, etc.—aren't as big of a concern.

- ⚛️ [Vue](https://vuejs.org) support with templates and composition API
- 🚀 Works with any static file server, no `npm` or build process required
- 📦 Import external ESM and CSS dependencies from CDNs via [Import Maps](https://github.com/WICG/import-maps)
- 🌍 Use The Platform™ - relies on established or polyfillable standards

## Usage

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

### Files & folders

| Name                         | Notes                                                                                                                                                                                                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assets/`                    | This is where you should keep your static assets such as favicons, images, and the like.                                                                                                                |
| `scripts/`                   | For application scripts. `app.js` is imported by `index.html` and should serve as the entrypoint for the application.                                                                                   |
| `styles/`                    | For stylesheets. `styles.css` is imported by `index.html` and should serve as the entrypoint for the application.                                                                                       |
| `vendor/`                    | If you want to keep dependencies locally rather than serving them from a CDN, put them here.                                                                                                            |
| `index.html`                 | Entrypoint to the SPA. Use the [import map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) for declaring external dependencies and aliases. |
| `jsconfig.json`              | Enables some minimal editor support such as aliases and automatic type checking.                                                                                                                        |
| `LICENSE.md` and `README.md` | Replace these with your stuff.                                                                                                                                                                          |

## Development

Unbuild's philosophy is that it should be possible to take the contents of this folder, serve it with any static file server, and it just works.

That means: the project files themselves rely only things that natively work in any web browser—no bundling, transpiling, non-standard file formats, language extensions, etc.

It does not mean not using any support at all, but rather decupling the support from the project itself such that it makes development more convenient. But it is never required to run, maintain, or change the project.

Most development workflows aren't really designed for this approach. They typically assume some kind of Node.js environment and often also TypeScript. Importing your dependencies from a CDN, for example, and linking them via import maps in `index.html`, works perfectly fine for the browser. But will give you a bunch of errors and missing autocompletions in VS Code.

Luckily there are a few tricks we can use to improve this experience:

- **Editor:** I recommend [Visual Studio Code](https://code.visualstudio.com), because it has features such as linting and formatting included out of the box. If you use the `html` helper from [lib.js](./scripts/lib.js), VS Code provides highlighting for templates. I also prefer the [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension to the default formatter.

- **Dependencies:** The most convenient way to use external dependencies is to link them in the import map in `index.html` from a CDN such as [esm.sh](https://esm.sh). This gives you access to virtually any NPM module as well as code hosted on GitHub. Alternatively, [Minipack](https://github.com/andreasphil/minipack) is a small (experimental!) tool you can use to vendor dependencies.

- **Aliases:** You can simplify local imports by mapping certain paths to aliases in the import map. Unbuild comes pre-configured with `./scripts/` aliased to `@/` and `./vendor/` aliased to `@vendor/`.

- **Autocompletions:** VS Code and Node.js-based language tools don't support autocompletions based on import maps and URL imports. But Deno implements many web standards, and therefore handles frontend projects pretty well. If you create a `deno.json` with the exact same [imports](https://docs.deno.com/runtime/fundamentals/configuration/#dependencies) as in `index.html`, you should get decent autocompletions even for dependencies from CDNs. Note that this requires the Deno extension for VS Code.

- **Type checking:** `// @ts-check` or a [`jsconfig.json`](./jsconfig.json) in combination with JSDoc comments can do basic type checking. To learn more: [TypeScript, Minus TypeScript on CSS-Tricks](https://css-tricks.com/typescript-minus-typescript/).

- **Deployment:** No `node_modules` or build process means you can literally just drop your project folder on any static file server that has an IP, and your app is ready.

- **Testing:** If you want to add unit tests, you can use [Node.js's](https://nodejs.org/api/test.html) or [Deno's](https://docs.deno.com/runtime/manual/basics/testing/) built-in test runners for lightweight testing that doesn't require any additional setup or dependencies (beyond Node.js or Deno itself).

## Deployment

Deployment should work out of the box when linking the repository to a project on [Netlify](https://netlify.com) or deploying to GitHub pages.
