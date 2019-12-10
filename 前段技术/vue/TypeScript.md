<center><h1>vue-cli3 引入typescript</h1></center>

|作者|日期|
|----|---|
|吴云龙|2019年12月10日|

#### 根目录加入 tsconfig.json
```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "importHelpers": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "baseUrl": ".",
    "types": [
      "webpack-env",
      "mocha",
      "chai"
    ],
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

#### src目录加入 typescript 相关的描述文件
你也可以根据自己的需要，加入自己的 ***.d.ts

* shims-tsx.d.ts

```typescript
import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
```

* shims-vue.d.ts

```typescript
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
```

#### 修改package.json文件。增加几个依赖。

* "@vue/cli-plugin-typescript": "^4.1.1",
* "@vue/eslint-config-typescript": "^4.0.0",
* "typescript": "^3.7.3",

如果你需要在vue文件中使用 classComponents语法，那么需要引入新的依赖：

* "vue-class-component": "^7.0.2",
* "vue-property-decorator": "^8.3.0",

#### 如果加入了eslint，那么修改eslint相关配置

在extends中增加 vue/typescript的相关语法

```javascript
module.exports = {
    root: true,
    	env: {
    		node: true
    	},
    	extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
    	rules: {}
}
	
```
