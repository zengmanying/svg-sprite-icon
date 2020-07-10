import SvgIcon from './components/icon/icon.vue'// svg组件

SvgIcon.install = Vue => {
  Vue.component(SvgIcon.name, SvgIcon)
}

export default SvgIcon
