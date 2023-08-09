# vite-template-react-cordova-electron

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/), on top of the [Apache Cordova](https://cordova.apache.org) cross-platform framework with a pre-added [Electron](https://www.electronjs.org) platform for desktop deployment.

This setup allows for a quick and effortless deployment of your React web app to the Electron desktop wrapper. You may also add any other platform, such as Android or iOS, using Cordova.

```sh
npx degit https://github.com/Polarts/vite-template-react-cordova-electron.git my-app
```

## Setup

1. `npm install`
2. `cordova prepare`

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner
- `electron` - lauch electron without building

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
