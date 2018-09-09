# UnduxTest

This is a test project to try out [Undux](https://github.com/bcherny/undux) state management in Angular.

To try it out first run `npm install` and then follow the guide below before you try to run `npm start`.

- remove `node_modules/undux/dist/src/react`
- In `node_modules/undux/dist/src/react.d.ts` comment out the last line:
  - `// export * from './react';`
- In `node_modules/undux/dist/src/react.js` comment out the last line:
  - `// __export(require("./react"));`
