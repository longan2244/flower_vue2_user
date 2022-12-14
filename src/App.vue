<template>
  <div id="app">
    <audio
      preload="auto"
      loop
      id="audio"
      :src="require('./assets/medias/music.mp3')"
    ></audio>
    <div @click="forbug" :class="!isOff ? 'isOff' : 'isOn'"></div>
    <router-view></router-view>
    <div class="iphoneXBottom"></div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/views/Footer.vue";
export default {
  data() {
    return {
      isOff: true,
    };
  },
  component: {
    Footer,
  },
  mounted() {
    // 自动播放音乐效果，解决微信自动播放问题
    document.addEventListener("touchstart", this.audioAutoPlay, false);
    document.addEventListener("WeixinJSBridgeReady", this.audioAutoPlay, false);
    let oAudio = document.querySelector("#audio");
    oAudio.onended = function () {
      //播放完毕，重新循环播放
      oAudio.load();
      oAudio.play();
    };
  },
  methods: {
    forbug() {
      for (let index = 0; index < 2; index++) {
        this.changeOn();
      }
      this.isOff = !this.isOff;
    },
    changeOn() {
      let oAudio = document.querySelector("#audio");
      if (this.isOff) {
        oAudio.play(); //让音频文件开始播放
      } else {
        oAudio.pause(); //让音频文件暂停播放
      }
      this.isOff = !this.isOff;
    },
    audioAutoPlay() {
      let audio = document.getElementById("audio");
      this.isOff = false;
      audio.play();
      document.removeEventListener("touchstart", this.audioAutoPlay);
    },
  },
};
</script>
<style lang="less">
// /* 适配iphoneX iphoneXS */
// @media screen and (device-width:375px) and (device-height:812px){
//     .footer {
//       margin-bottom:34px;
//     }
// }
// /* 适配iphoneXR iphoneXSMax */
// @media screen and (device-width:414px) and (device-height:896px){
//     .footer {
//       margin-bottom:34px;
//     }
// }

#app {
  .isOn {
    width: 30px;
    height: 30px;
    position: fixed;
    z-index: 2000;
    top: 30px;
    right: 30px;
    -webkit-animation: rotating 1.2s linear infinite;
    animation: rotating 1.2s linear infinite;
    background: url("./assets/medias/music.png") 0 0 no-repeat;
    background-size: 100%;
  }
  @keyframes rotating {
    from {
      -webkit-transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rotating {
    from {
      -webkit-transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  .isOff {
    width: 30px;
    height: 30px;
    position: fixed;
    z-index: 2000;
    top: 30px;
    right: 30px;
    // -webkit-animation: rotating 1.2s linear infinite;
    // animation: rotating 1.2s linear infinite;
    background: url("./assets/medias/music.png") 0 0 no-repeat;
    background-size: 100%;
    
  }
}
.iphoneXBottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: env(safe-area-inset-bottom);
  background: #fff;
  z-index: 500;
}
</style>