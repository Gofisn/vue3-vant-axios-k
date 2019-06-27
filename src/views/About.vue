<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button type="primary">默认按钮</Button>
    <ul>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
    </ul>
  </div>
</template>

<script>
import { getData,getData1,getData2 } from "@/assets/js/ajax";
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
    this.getAboutData();
    console.log(getData);
  },
  methods: {
    getAboutData() {
      getData("",res => {
        if (res.status === 200) {
          this.content = res.data;
        }
      });
     
    }
  }
};
</script>
<style lang="less" scope src="../assets/css/style.less">
</style>
