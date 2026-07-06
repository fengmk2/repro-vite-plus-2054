# repro-vite-plus-2054

Minimal reproduction for [voidzero-dev/vite-plus#2054](https://github.com/voidzero-dev/vite-plus/issues/2054).

This project was generated with `vp create vite:application` and then reduced to a small script that imports `vite/rolldown`. The workspace enables pnpm's global virtual store so `@voidzero-dev/vite-plus-core` is resolved from pnpm's store realpath instead of the project-local `node_modules/.pnpm` path.

## Create command

```sh
vp create vite:application --directory vite-plus-repro-2054 --package-manager pnpm --no-interactive --no-git --no-hooks --no-agent --no-editor
```

## Reproduce

```sh
vp install
vpr repro
```

## Expected result

The repro fails while loading Rolldown's native binding:

```txt
Cannot find module 'vite-plus/binding'
```

The script prints the resolved `vite` package path first. With `enableGlobalVirtualStore: true`, it should point into pnpm's global store, e.g. `~/Library/pnpm/store/...` on macOS.
