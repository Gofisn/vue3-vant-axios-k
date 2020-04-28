import Confirm from "./Confirm.vue";
export default {
  install(Vue) {
    function confirm(data = {}) {
      const { ...restProps } = data;
      const ConfirmConstructor = Vue.extend(Confirm);
      const instance = new ConfirmConstructor({
        el: document.createElement("div"),
        propsData: {
          ...restProps,
        },
      });
      document.querySelector("body").appendChild(instance.$el);
    }

    Vue.prototype.$confirm = confirm;

    return confirm;
  },
};

// import Vue from 'vue'
// let ConfirmConstructor = Vue.extend(Confirm)
// let instance
// let seed = 1
// let index = 1000
// const install = () => {
//     Object.defineProperty(Vue.prototype, '$confirm', {
//         get() {
//             let id = 'message_' + seed++
//             const confirmMsg = options => {
//                 instance = new ConfirmConstructor({
//                     propsData: options
//                 })
//                 index++
//                 instance.id = id
//                 instance.vm = instance.$mount()
//                 document.body.appendChild(instance.vm.$el)
//                 instance.vm.$el.style.zIndex = index
//                 return instance.vm
//             }
//             return confirmMsg
//         }
//     })
// }
// export default install