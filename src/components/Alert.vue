<template>
  <div
    class="alert-wrap pt-4 pb-4"
    :show="isAutoClose"
    :variant="type"
    dismissible
    :fade="true"
    @dismiss-count-down="countDownChanged"
    @dismissed="dismiss"
  >{{msg}}</div>
</template>
<script>
export default {
  /**
   * 参考: https://bootstrap-vue.js.org/docs/components/alert
   * @param {string|number} msg 弹框内容
   * @param {tstring} type 弹出框类型 对应bootstrap-vue中variant 可选值有：'primary'、'secondary'、'success'、'danger'、'warning'、'info'、'light'、'dark'默认值为 'info'
   * @param {boolean} autoClose 是否自动关闭弹出框
   * @param {number} duration 弹出框存在时间(单位：秒)
   * @param {function} closed 弹出框关闭，手动及自动关闭都会触发
   */
  props: {
    msg: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3
    },
    closed: {
      type: Function,
      default: null
    }
  },
  methods: {
    dismiss() {
      this.duration = 0;
    },
    countDownChanged(duration) {
      this.duration = duration;
    }
  },
  computed: {
    isAutoClose() {
      if (this.autoClose) {
        return this.duration;
      } else {
        return true;
      }
    }
  },
  watch: {
    duration() {
      if (this.duration === 0) {
        if (this.closed) this.closed();
      }
    }
  }
};
</script>
<style scoped>
.alert-wrap {
  position: fixed;
  width: 600px;
  top: 80px;
  left: 50%;
  z-index: 2000;
  font-size: 20px;
}
</style>