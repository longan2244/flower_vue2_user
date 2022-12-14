<template>
  <div id="test">
    <div class="heads" v-show="!show">
      <img
        class="mdui-img-fluid"
        src="./../assets/img/pagetest/biaoti@2x.png"
        alt=""
      />
    </div>
    <div class="bodys">
      <div class="date">
        <div class="datepng">
          <img
            class="mdui-img-fluid"
            src="./../assets/img/pagetest/YMD@2x.png"
            alt=""
          />
        </div>
        <div class="dateinputbox">
          <div
            class="dateinputbox"
            type="text"
            style="color: red"
            @click="showKeyboard = true"
          >
            <ul class="dateinputbox-ul">
              <li v-for="(item, index) in value" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
          <!-- 数字键盘 -->
          <van-number-keyboard
            v-model="value"
            :show="showKeyboard"
            maxlength="8"
            @blur="showKeyboard = false"
          />
        </div>
        <div class="dateprompt">
          <img
            class="mdui-img-fluid"
            src="./../assets/img/pagetest/YMDline@2x.png"
            alt=""
          />
        </div>
      </div>
      <div class="PhoneNumber">
        <div class="PhoneNumberpng">
          <img
            class="mdui-img-fluid"
            src="./../assets/img/pagetest/phone@2x.png"
            alt=""
          />
        </div>
        <div class="PhoneNumberinput mdui-center" @click="show = true">
          <!-- 键盘 -->
          <ul class="PhoneNumberinput-ul">
            <li v-for="(item, index) in value2" :key="index">{{ item }}</li>
          </ul>
          <van-number-keyboard
            v-model="value2"
            :show="show"
            :maxlength="4"
            @blur="show = false"
          />
        </div>
        <div class="PhoneNumberrompt mdui-center">
          <img
            class="mdui-img-fluid"
            src="./../assets/img/pagetest/phoneline@2x.png"
            alt=""
          />
        </div>
      </div>
      <div class="gobut" @click="goimgurl">
        <img
          class="mdui-img-fluid"
          src="./../assets/img/pagetest/blackbutton@2x.png"
          alt=""
        />
      </div>

      <div>
        <img class="hide" :src="imgurl" @load="loadImg" alt="" />
      </div>
    </div>
    <!-- 测试 -->
  </div>
</template>

<script>
import lds from "lodash/throttle";
import { getimgid } from "@/api/getimgid.js";
import nprogress from "nprogress";
import "../../node_modules/nprogress/nprogress.css";
export default {
  data() {
    return {
      value: "", //生日
      showKeyboard: false,
      show: false,
      value2: "", //手机号
      imgurl: "", //图片地址
    };
  },
  methods: {

//苹果处理











    goimgurl: lds(async function () {
      let pattern = /^\d{1,4}()(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31)$/;
      if (this.value.length < 8 || this.value2.length < 4) {
        return alert("请正确填写信息_NO_length");
      }
      if (!pattern.test(this.value)) {
        return alert("请正确填写生日信息_NO_test");
      }
      //生成UID
      let uid = this.value - this.value2 * 2;
      // if (uid < 0) {
      //   uid = this.value2;
      //   return alert("错误联系管理员l0");
      // }
      try {
        nprogress.start();
        let { data: res } = await getimgid(uid);
        if (!res.status) {
          return alert("错误联系管理员t0");
        }
        this.imgurl = res.data.imgurl; //设置图片Url
      } catch (error) {
        return alert(error);
      }
    }, 500),
    loadImg() {
      nprogress.done();
      this.$router.push({
        path: "/page3",
        query: {
          URL: this.imgurl,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.hide {
  visibility: hidden;
  height: 0;
  width: 0;
  position: absolute;
}
#test {
  width: 100vw;
  height: 100vh;
  background: url("./../assets/img/pagetest/生成页面750_1624.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 18%;
  padding-bottom: 26%;
}
.heads {
  width: 322px;
  height: 128px;
}
.bodys {
  padding-top: 40px;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  flex-flow: column;
  .date {
    width: 142px;
    .datepng {
      height: 34.1px;
    }
    .dateinputbox {
      height: 37.9px;
      // background-color: red;
    }
    .dateprompt {
      height: 11.5px;
    }
    .dateinputbox-ul {
      height: 100%;
      flex: 1;
      display: flex;
      li {
        text-align: center;
        line-height: 1.30667rem;
        font-size: 20px;
        font-weight: 700;
        color: white;
        width: 12%;
      }
      .dateinputbox-ul::after {
        content: "1";
      }
      // li:nth-child(4) {
      //   margin-right: 10px;
      // }
    }
  }
  .PhoneNumber {
    padding-top: 21px;
    width: 246px;
    .PhoneNumberinput {
      height: 37.7px;
      width: 64px;
      .PhoneNumberinput-ul {
        height: 100%;
        flex: 1;
        display: flex;
        li {
          // flex: 1;
          text-align: center;
          line-height: 1.30667rem;
          font-size: 20px;
          font-weight: 700;
          color: white;
          width: 25%;
        }
      }
    }
    .PhoneNumberrompt {
      width: 64.1px;
    }
  }
}
.gobut {
  padding-top: 39px;
  width: 238.7px;
}

.gobut:hover {
  content: url("./../assets/img/pagetest/lightbutton@2x.png");
}
.van-password-input {
  margin: 0;
  height: 100%;
}
.van-password-input__security {
  height: 100%;
  border: "";
}

.van-password-input__security li {
  background-color: transparent;
}
.van-hairline--surround::after {
  border: "";
}
</style>