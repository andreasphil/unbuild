<h1 align="center">
  Minipack 🦔
</h1>

<p align="center">
  <strong>Utilities for managing dependencies without build tools</strong>
</p>

> [!NOTE]
>
> Work in progress. Things are most certainly incomplete and/or broken, and will definitely change.

Minipack is a lightweight bash script designed to download, unpack, and manage dependencies from various sources like npm, GitHub, and tarball URLs. It simplifies handling vendor dependencies by automating extraction, organization, and cleanup tasks. It doesn't do anything complicated that you couldn't also do manually—it just makes it a bit more convenient.

Minipack is meant for [small, self-contained web apps](https://github.com/andreasphil/unbuild) that work without bundling or other build processes.

- ⛴️ Supports npm, GitHub, and generic tarball URLs
- 📦 File extraction with configurable patterns
- ✅ Simple but effective caching to avoid re-downloading existing dependencies

## Installation

Minipack depends on [fd](https://github.com/sharkdp/fd), [Gum](https://github.com/charmbracelet/gum), [httpie](https://github.com/httpie/cli), and [jq](https://github.com/jqlang/jq), so those need to be installed first:

```sh
brew install fd gum httpie jq
```

You can use the [install script](./install) to initialize an auto-updating version of Minipack in the current working directory:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/andreasphil/minipack/refs/heads/main/install)"
```

Alternatively, you can clone Minipack from GitHub:

```sh
git clone https://github.com/andreasphil/minipack.git
```

## Usage

Minipack is a set of utilities you can import and compose in a script to describe your dependencies. This will produce a CLI tool which will manage those dependencies for you when run.

To get started, create a minimal Minipack script in your app folder. The name doesn't matter, let's call it `deps`:

```bash
# Make Minipack available in the current scope
source path/to/minipack/pack

# Add your dependencies below 👇
# ...
```

Then make it executable and run:

```sh
chmod +x deps
./deps
```

### GitHub tags

Downloads a repository at a specific tag from GitHub.

```bash
# get_from_github <username/repository> <tag>
get_from_github user/repo v1.0.0
```

### npm packages

Resolves an npm specifier to a specific package version, and downloads it from npm. The package can be anything that you can `npm install`.

```bash
# get_from_npm <package>
get_from_npm vue@latest
```

### Generic tarballs

Downloads and unpacks any tarball. The identifier will be used for naming the output folder.

```bash
# get_tar <identifier> <url>
get_tar example https://example.com/file.tar.gz
```

### Selecting files to keep

In many cases, the downloaded dependency will include more files than you need. This can be annoying, so you can provide a glob as the last argument for each dependency. Minipack will only vendor files that match one of those globs.

```bash
# Please refer to the documentation of fd to learn more about possible patterns
get_from_npm vue@latest "**/{*LICENSE*,dist/vue.esm-browser.js,dist/vue.esm-browser.prod.js}"
```

### Options

You can configure Minipack with the following options:

- `reload`: If enabled, will download all dependencies even if they already exist locally
- `output: string`: Set where dependencies will be stored. Default: `vendor`

```sh
deps --reload --out dependencies
```
