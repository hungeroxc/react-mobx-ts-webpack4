
// 该文件用于在ts中全局声明svg模块的引入方式，使用react组件的方式进行引入，这些组件都为无状态组件
declare interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGAElement>> {}

declare module '*.svg' {
    const content: SvgrComponent
    export default content
}

