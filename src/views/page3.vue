<template>
  <div id="page3" ref="pading">
    <div class="container">
      <div class="tietel mdui-center">
        <img
          class="mdui-img-fluid"
          src="./../assets/img/page3/biaoti@2x.png"
          alt=""
        />
      </div>

      <div class="userimg mdui-center">
        <img :src="this.$route.query.URL" alt="" />
      </div>
      <div class="foot mdui-center mdui-img-fluid">
        <img
          class="mdui-img-fluid"
          src="./../assets/img/page3/xiaobiaoti@2x.png"
          alt=""
        />
        <img
          class="mdui-img-fluid magnify"
          src="./../assets/img/page3/dibo@2x.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // ios适配
  mounted() {
    if (this.is_ios()) {
      console.log(this.is_ios());
      this.$nextTick(() => {
        // this.$refs.pading.style.paddingBottom = "34px";
        this.$refs.pading.style.paddingBottom = "0px";
      });
    }
  },
  methods: {
    is_ios() {
      var u = navigator.userAgent;
      return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    },
  },
};
</script>

<style lang="less" scoped>
#page3 {
  height: 100vh;
  background: url("./../assets/img/page3/BG.png") no-repeat center center;
  display: flex;
  justify-content: center;
  position: relative;
  display: flex;
  background-size: 100% 100%;
  background-attachment:fixed;
}

// #page3 {
//   background-position: center center;
//   background-repeat: no-repeat;
//   background-image: url("./../assets/img/page3/beijin.png");
//   background-size: 100vw auto;
//   height: 1000px;
//   background-attachment: fixed;
// }
.foot {
  width: 190.2px;
  padding-top: 10%;
  .magnify {
    padding-top:10px;
    transform: scale(2);
  }
}
.container {
  width: 93%;
  padding-top: 20%;
}

.tietel {
  width: 300px;
  padding-bottom: 10%;
}
.userimg {
  width: 230px;

  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #ccc;
    height: 300px;
  }
}
</style>