/**
 * @author xuda
 * @date 2019/9/23 
 * @Description: 注册svg组件
*/
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg 组件

// 全局注册
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
