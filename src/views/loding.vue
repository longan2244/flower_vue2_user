<template>
  <div id="loding">
    <img
      v-show="isshow"
      src="./../assets/img/page1/H5首页动画loop.gif"
      alt=""
      @load="ok"
    />
    <img v-show="!isshow" src="./../assets/img/lodin/loading_390.gif" alt="" />
    <!-- <div class="lodinqq">
      <img
        class="mdui-img-fluid"
        src="./../assets/img/lodin/loading tubiao-02.png"
        alt=""
      />
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: false,
    };
  },
  methods: {
    ok() {
      this.$router.push("/");
    },
  },
};
</script>


<style lang="less" scoped>
#loding {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  img {
    width: 100%;
  }
  // .lodinqq {
  //   width: 15%;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
    // img {
    //   animation: lodinqqkeyframes infinite 1s linear;
    // }
  }
//   @keyframes lodinqqkeyframes {
//     0% {
//       transform: rotate(0deg);
//     }
//     50% {
//       transform: rotate(180deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// }
</style>