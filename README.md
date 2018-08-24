### 项目介绍

一个 ts+react 的项目开发架子

### 项目启动

-   `npm i`
-   `npm run dev`
-   如果用的是 vscode，那么可以安装`stylelint`、`tslint`以及`Prettier`进行代码格式校验和自动格式化(需要 .vscode 目录)，如果不是或者不需要则可以删除.vscode 文件夹

### 注意事项

.vscode 文件只适用于在 vscode 开发工具下使用，因为我在 vscode 中做了一些 `Prettier` 对`*.tsx`和`*.scss`文件的格式化配置，所以也一并推送上来，如果你使用的不是 vscode，那么可以删除这个文件夹针对自己的开发环境进行配置

### 已经集成

-   react - 16.4.x
-   react-router-dom - 4+
-   [mobx - 5+](https://github.com/mobxjs/mobx)
    -   状态管理库
-   typescript - 3.0.x
-   webpack - 4.16.x
-   [ant design](https://ant.design/index-cn)
-   [axios](https://github.com/axios/axios)
-   [react-loadable](https://github.com/jamiebuilds/react-loadable)
    -   异步组件加载
-   [@svgr/webpack](https://github.com/smooth-code/svgr)
    -   使 svg 可以以组件的方式引入
-   [typings-for-css-modules-loader](https://github.com/Jimdo/typings-for-css-modules-loader)
    -   用于替代`css-loader`的 css module 功能，并动态生成`.scss`的`.d.ts`文件

### 组件写法实例

```jsx
import * as React from 'react'

// 引入对应scss文件
import * as style from './index.scss'
// 引入扩展后的Component
import { ComponentExt } from '@utils/reactExt'

// 接口
interface IProps {
    //xxx
}

class XXX extends ComponentExt {
    // your code
}
```

### 新增 store

-   新增 store 写法和新增组件写法类似，但是需要  继承的是`StoreExt`

```jsx
class XXXStore extends StoreExt {}
```

-   编写 store 的`.d.ts`文件
    要想在组件中使用 store 的属性，那么也需要对这些属性进行 ts 类型校验，这时候就需要编写 store 的.d.ts 文件，实例如下

```jsx
import { GlobalStore as GlobalStoreModel } from './index'

export as namespace IGlobalStore

export interface GlobalStore extends GlobalStoreModel {}
```

然后再通过全局的`typings`文件将导出的`interface`引入

```jsx
declare interface IStore {
    globalStore: IGlobalStore.GlobalStore;
    // 可以继续添加
}
```

        
