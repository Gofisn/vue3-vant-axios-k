<template>
  <div
    class="Confirm"
    v-if="show"
    :message="message"
    :confirm-title="confirmText"
    :cancel-title="cancelText"
    :title="title"
  >
    <div class="main_box">
      <div class="title">{{title}}</div>
      <div class="message">{{message}}</div>
      <div class="btn_box">
        <div class="btn" @click="cancelClick">{{cancelText}}</div>
        <div class="btn" @click="confirmClick">{{confirmText}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Confirm",
  props: {
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },

    cancelText: {
      type: String,
      default: "cancel"
    },
    confirmText: {
      type: String,
      default: "ok"
    },
    cancel: {
      type: Function,
      default: null
    },
    confirm: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      show: false
    };
  },
  created() {
    this.show = true;
  },
  methods: {
    confirmClick() {
      this.show = false;
      if (this.confirm) {
        this.confirm();
      }
    },
    cancelClick() {
      this.show = false;
      if (this.cancel) {
        this.cancel();
      }
    }
  }
};
</script>
<style lang="less" scoped>
.Confirm {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  justify-content: center;
  align-items: center;
  .main_box {
    width: 500px;
    background: #fff;
    border-radius: 20px;
    text-align: center;
    .title {
      color: #333;
      font-size: 36px;
      font-weight: bold;
      padding: 30px;
      padding-bottom: 0;
    }
    .message {
      font-size: 28px;
      color: #999;
      line-height: 40px;
      padding: 30px;
    }
    .btn_box {
      width: 100%;
      display: flex;
      border-top: 1px solid #ccc;
      line-height: 90px;
      .btn {
        flex: 1;
        text-align: center;
        font-size: 36px;
        color: #666;
        &:nth-of-type(1) {
          border-right: 1px solid #ccc;
        }
      }
    }
  }
}
</style>

