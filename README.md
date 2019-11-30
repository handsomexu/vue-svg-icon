# vue Svg组件
# Svg Icon 图标

全局 Svg Icon 图标组件。
默认在 @/icons 中注册到全局中，可以在项目中任意地方使用。所以图标均可在 @/icons/svg。可自行添加或者删除图标，所以图标都会被自动导入，无需手动操作。

### 使用方式
```
<!-- icon-name 为 icon 的名字; width为宽度; height为高度; class-name 为 icon 自定义 class-->
<svg-icon icon-name="password" width="100px" height="auto" class-name='custom-class' />
```
### 改变颜色
你可以改变父级的color或者直接改变fill的颜色即可。
### svg图标压缩
```
npm run svgo
```