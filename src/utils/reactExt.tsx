// 该组件针对所有业务组件所需要的api进行统一扩展
import * as React from 'react'
// 统一集成通知方法
import { message, notification } from 'antd'

import * as api from '@services/api'

// 业务组件统一继承于这个组件
export class ComponentExt<P = {}, S = {}> extends React.Component<P, S> {
    readonly api = api
    readonly $message = message
    readonly $notification = notification
}

// store统一继承这个组件
export class StoreExt<P = {}, S = {}> extends React.Component<P, S> {
    readonly api = api
    readonly $message = message
    readonly $notification = notification
}


