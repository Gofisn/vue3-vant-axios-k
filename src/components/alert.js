import Alert from './Alert.vue'
import Vue from 'vue'
let AlertConstructor = Vue.extend(Alert)
let instance
let seed = 1
let index = 2000
const install = () => {
  Object.defineProperty(Vue.prototype, '$alert', {
    get () {
      let id = 'message_' + seed++
      const alertMsg = options => {
        instance = new AlertConstructor({
          propsData: options
        })
        index++
        instance.id = id
        instance.vm = instance.$mount()
        document.body.appendChild(instance.vm.$el)
        instance.vm.$el.style.zIndex = index
        return instance.vm
      }
      return alertMsg
    }
  })
}
export default install

