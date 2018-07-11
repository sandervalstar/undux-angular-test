# UnduxTest

This is a test project to try out [Undux](https://github.com/bcherny/undux) state management in Angular.

To try it out first run `npm install` and then follow the guide below before you try to run `npm start`. 

Because Undux is made for React and TypeScript 2.8+ this project only compiles if you make the following modifications to Undux:

* comment out `node_modules/undux/dist/src/react.js`
* replace `node_modules/undux/dist/src/react.d.ts` with the content below:

```typescript
// import * as React from 'react';
import { Store, StoreDefinition } from './';
// export declare type Diff<T, U> = Pick<T, Exclude<keyof T, keyof U>>;
// export declare function connect<StoreState extends object>(store: StoreDefinition<StoreState>): <Props, PropsWithStore extends {
//     store: Store<StoreState>;
// } & Props = {
//     store: Store<StoreState>;
// } & Props>(Component: React.ComponentType<PropsWithStore>) => React.ComponentClass<Pick<PropsWithStore, Exclude<keyof PropsWithStore, "store">>>;
// export declare function connectAs<Stores extends {
//     [alias: string]: StoreDefinition<any>;
// }>(stores: Stores): <Props extends object>(Component: React.ComponentType<{ [K in keyof Stores]: ReturnType<Stores[K]["toStore"]>; } & Props>) => React.ComponentClass<Pick<Props, Exclude<keyof Props, keyof Stores>>>;


export declare type Diff<T, U> = null;
export declare function connect<StoreState extends object>(store: StoreDefinition<StoreState>): any;
export declare function connectAs<Stores extends {
  [alias: string]: StoreDefinition<any>;
}>(stores: Stores): any;

```

