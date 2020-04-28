<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <Button type="primary" @click="showMsg">默认按钮</Button>
    <ul>
      <li>0</li>
    </ul>
  </div>
</template>

<script>
import { getData, getData1, getData2 } from "@/assets/js/ajax";
import { Button } from "vant";
export default {
  name: "about",
  data() {
    return {
      content: {}
    };
  },
  components: {
    Button
  },
  created() {
    // this.getAboutData();
    // console.log(getData);
  },
  methods: {
    getAboutData() {
      getData("", res => {
        if (res.status === 200) {
          this.content = res.data;
        }
      });
    },
    showMsg() {
      this.$confirm({
        title: "自定义标题",
        message: "自定义消息自定义消息自定义消息自定义消息自定义消息",
        cancelText: "cancel",
        confirmText: "ok",
        confirm: () => {
          console.log('confirm')
        },
        cancel: () => {
          console.log('cancel')
        }
      });
    }
  }
};
</script>
<style lang="less" scope src="../assets/css/style.less">
</style>
