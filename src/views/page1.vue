<template>
  <div id="page1">
    <div class="loding" ref="abs"></div>
    <div>
      <img class="head" src="./../assets/img/page1/biaoti@2x.png" alt="" />
    </div>
    <div>
      <img
        class="go"
        @click="go"
        ref="but"
        src="./../assets/img/page1/blackbuttun@2x.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  created() {},
  methods: {
    go() {
      this.$router.push("/page2");
    },
    // op() {
    //   console.log("加载完毕");
    // },
  },
};
</script>
<style lang="less" scoped>
#page1 {
  width: 100vw;
  height: 100vh;
  background: url("./../assets/img/page1/H5首页动画loop.gif") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 18%;
  padding-bottom: 26%;
}
.head {
  width: 245.92px;
  // height: 215.69px;
}
.go {
  width: 175.14px;
  // height: 83.97px;
}
.go:hover {
  content: url("./../assets/img/page1/lightbutton@2x.png");
}
</style>