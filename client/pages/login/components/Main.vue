<template>
  <div class="main">
    <div class="sign-tab">
      <span class="link-signin" @click="addClassFun(0)" v-bind:class="{cur:0==showcur}">密码登录</span>
      <span class="link-sms" @click="addClassFun(1)" v-bind:class="{cur:1==showcur}">短信登录</span>
      <!-- <span class="link-scan">扫码登录</span> -->
    </div>

    <!-- 密码登录 -->
    <div class="login-pwd" v-show="show">
      <!-- 输入电话 -->
      <span class="ipt-wrap">
        <i class="icon-sign-phone"></i>
        <input type="tel" class="ipt-tel" placeholder="手机号" name="phone" autocomplete="off" />
      </span>

      <!-- 密码 -->
      <div class="form-row">
        <span class="ipt-wrap">
          <i class="icon-sign-pwd"></i>
          <input
            type="password"
            class="ipt ipt-sms required"
            placeholder="短信验证码"
            name="phoneCode"
            maxlength="20"
          />
        </span>
        <!-- 错误图标 -->
        <div class="tip-error"></div>
      </div>

      <!-- 滑动验证 -->
      <drag></drag>

      <!-- 登录按钮 -->
      <button type="submit" class="login">登录</button>

      <!-- 提示信息 -->
      <div class="text-tip">
        <div class="tip-error"></div>没有账号
        <router-link to="/register" class="link-register">立即注册</router-link>
      </div>
    </div>
    <!-- 短信登录 -->
    <div class="login-message" v-show="!show">
      <!-- 输入电话 -->
      <span class="ipt-wrap">
        <i class="icon-sign-phone"></i>
        <input type="tel" class="ipt-tel" placeholder="手机号" name="phone" autocomplete="off" />
      </span>

      <!-- 滑动验证 -->
      <drag></drag>

      <!-- 验证码 -->
      <div class="form-row">
        <span class="ipt-wrap">
          <i class="icon-sign-sms"></i>
          <input
            type="text"
            class="ipt ipt-sms required"
            placeholder="短信验证码"
            name="phoneCode"
            maxlength="6"
          />
          <input type="hidden" name="smsType" value="2" />
          <button type="button" class="btn btn-sms" data-url="/wapi/zppassport/send/smsCode">发送验证码</button>
        </span>
        <!-- 错误图标 -->
        <div class="tip-error"></div>
      </div>

      <!-- 登录按钮 -->
      <button type="submit" class="login">登录</button>

      <!-- 提示信息 -->
      <div class="text-tip">
        <div class="tip-error"></div>没有账号
        <router-link to="/register" class="link-register">立即注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Drag from './components/Drag'
export default {
  name: "LoginMain",
  components:{
        Drag,
  },
  data: function() {
    return {
      showcur: "0",
      show: "true",
      positionY: 0,
      isActive: true,
      isGo: false
    };
  },
  methods: {
    addClassFun: function(index) {
      this.showcur = index;
      if (index == 0) {
        this.show = true;
        // 初始化滑块
        this.isGo = false;
        this.isActive=true;
      } else {
        this.show = false;
        // 初始化滑块
        this.isGo = false;
        this.isActive=true;
      }
    }
    
  }
};
</script>

<style scoped>
/* 以下为用于滑动验证的css */
.back {
  transition: width 0.5s;
}
.back2 {
  transition: left 0.5s;
}
.button {
  position: relative;
}
._nc .icon-ok:before {
  content: "\e606";
}
._nc .stage1 .icon.yes {
  background-position: -60px 0;
}
.row-code ._nc .stage1 .icon-ok {
  color: #8d92a1;
  font-size: 22px;
  border: 1px solid #8d92a1;
  width: 46px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  left: 0;
}
._nc .stage1 .icon {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}

/*! 切换按钮 */
div,
span {
  padding: 0;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: none;
}
::selection {
  color: #fff;
  background: #00d7c6;
}
::-moz-selection {
  color: #fff;
  background: #00d7c6;
}
.sign-tab {
  font-size: 0;
  white-space: nowrap;
  padding-top: 4px;
  text-align: center;
  margin-bottom: 44px;
}
.sign-tab span {
  display: inline-block;
  width: 70px;
  font-size: 14px;
  color: #9fa3b0;
  margin: 0 28px -2px;
  height: 36px;
  border-bottom: 2px #f2f5f9 solid;
  cursor: pointer;
}
.sign-tab span:hover {
  color: #414a60;
}
.sign-tab span.cur {
  border-bottom-color: #62d5c8;
  font-size: 16px;
  color: #414a60;
  padding: 0 0 2px 0;
}
.sign-tab span.link-signin {
  margin-left: 0;
}
.sign-tab span.link-sms {
  text-align: center;
}
.sign-tab span.link-scan {
  margin-right: 0;
  text-align: right;
}
.sign-wrap-v2 .sign-tab {
  display: flex;
  justify-content: space-between;
  height: 22px;
  margin-bottom: 44px;
  padding: 0 0 15px;
  border-bottom: 2px solid #f2f5f9;
  line-height: 22px;
}
.sign-wrap-v2 .sign-tab span {
  width: 70px;
  height: 22px;
  line-height: 22px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f2f5f9;
  color: #9fa3b0;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
}
.sign-wrap-v2 .sign-tab span.cur {
  border-bottom-color: #53cac3;
  color: #414a60;
  font-size: 16px;
}
@media (max-width: 800px) {
  .page-sign .sign-tab {
    display: table;
    width: 100%;
    border-bottom-width: 0;
  }
  .page-sign .sign-tab span {
    display: table-cell;
    width: 50%;
    text-align: center;
    padding-top: 8px;
  }
  .page-sign .sign-tab .link-scan {
    display: none;
  }
  .sign-tab span {
    border-bottom: 2px #f2f5f9 solid;
  }
}
.link-signin {
  width: 50% !important;
  margin: 0 0 -4px 0 !important;
}
.link-sms {
  width: 50% !important;
  margin: 0 0 -4px 0 !important;
}

.main {
  box-shadow: none;
  width: auto;
  padding: 40px 15px 0;
  border-radius: 0;
}
.ipt-wrap {
  position: relative;
  display: block;
  margin: 0 0 30px 0;
}
.icon-sign-phone {
  background-position: 2px 1px;
  position: absolute;
  width: 20px;
  height: 20px;
  left: 9px;
  top: 11px;
  /* background-image: url(../images/icons-sign.png); */
  background-image: url("../../../assets/images/icons-sign.png");
  background-repeat: no-repeat;
  -webkit-transition: box-shadow linear 0.2s;
  transition: box-shadow linear 0.2s;
}
.icon-sign-pwd {
  background-position: 2px -91px;
}
.icon-sign-pwd {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 9px;
  top: 11px;
}
.icon-sign-pwd {
  background-image: url(../../../assets/images/icons-sign.png);
  background-repeat: no-repeat;
  -webkit-transition: box-shadow linear 0.2s;
  transition: box-shadow linear 0.2s;
}
.ipt-tel {
  min-height: 22px;
  line-height: 22px;
  border: 1px solid #e3e7ed;
  font-size: 13px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  min-width: 0;
  /* padding: 9px 18px 9px 95px; */
  /* 暂时不实现选择其他地区电话功能 */
  padding: 9px 18px 9px 38px;
  vertical-align: middle;
}
.ipt-tel:focus {
  border-color: #5dd5c8;
}
input::-webkit-input-placeholder {
  color: #9fa3af;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #9fa3af;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #9fa3af;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #9fa3af;
}

.form-row {
  position: relative;
  margin: 0 0 30px;
}
/*! CSS 滑动验证 */
button,
div,
input,
span {
  padding: 0;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: none;
}
button,
input {
  outline: 0;
}
img {
  border: none;
}
button,
input {
  font-family: arial, verdana, helvetica, "PingFang SC", "HanHei SC",
    STHeitiSC-Light, Microsoft Yahei, sans-serif;
  -webkit-font-smoothing: antialiased;
}
button,
input[type="text"] {
  -webkit-appearance: none;
}
.clear {
  clear: both;
  display: block;
  line-height: 0;
  font-size: 0;
  height: 0;
  visibility: hidden;
}
::selection {
  color: #fff;
  background: #00d7c6;
}
::-moz-selection {
  color: #fff;
  background: #00d7c6;
}
input::-webkit-input-placeholder {
  color: #9fa3af;
}
input:-ms-input-placeholder {
  color: #9fa3af;
}
input:-moz-placeholder {
  color: #9fa3af;
}
input::-moz-placeholder {
  color: #9fa3af;
}
.placeholder {
  color: #9fa3af !important;
}
#wrap ::-webkit-scrollbar-track-piece {
  background-color: #fff;
  border-radius: 0;
  -webkit-border-radius: 0;
}
#wrap ::-webkit-scrollbar {
  width: 4px;
}
#wrap ::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: #d1d4db;
  border-radius: 5px;
  -webkit-border-radius: 5px;
}
#wrap ::-webkit-scrollbar-thumb:hover {
  height: 50px;
  background-color: #bfc1c9;
  border-radius: 5px;
  -webkit-border-radius: 5px;
}
input::-ms-clear,
input::-ms-reveal {
  display: none;
}
.sign-form .title {
  font-weight: 400;
  font-size: 26px;
  line-height: 32px;
  color: #5dd5c8;
  position: relative;
  text-align: center;
}
.sign-wrap .row-code {
  min-height: 42px;
  background: #e8e8e8;
}
.sign-wrap-v2 .sign-form .title {
  display: none;
}
@media (max-width: 800px) {
  .page-sign .sign-form .title {
    padding: 30px 0 20px 0;
  }
  .page-sign .sign-register.sign-form .title {
    padding-bottom: 0;
  }
  .page-sign .row-code {
    display: table;
    width: 100%;
    height: 38px;
    background: 0 0;
  }
  .row-code ._nc .stage1 .slider {
    box-shadow: none;
  }
  .row-code ._nc .stage1 {
    height: 42px;
  }
  .row-code ._nc .stage1 .slider {
    left: 0;
    right: 0;
  }
  .row-code ._nc .stage1 .label,
  .row-code ._nc .stage1 .track div {
    height: 42px;
  }
  .row-code ._nc .stage1 .slider {
    height: 42px;
    line-height: 42px;
  }
  .row-code ._nc .stage1 .label,
  .row-code ._nc .stage1 .track div {
    font-size: 14px;
    line-height: 42px;
  }
  .row-code ._nc .stage1 .button {
    height: 42px;
    width: 48px;
  }
  .row-code.nc-container ._nc .icon-slide-arrow {
    border: 1px solid #ccc;
    width: 46px;
    height: 40px;
    left: 0;
    line-height: 40px;
    text-align: center;
  }
  .row-code ._nc .icon {
    line-height: 30px;
  }
  .row-code ._nc .stage1 .bg-green {
    background: #8d92a1;
    box-shadow: none;
  }
  .row-code ._nc .icon-slide-arrow {
    font-size: 22px;
  }
  .sign-wrap-v2 .sign-form .title {
    display: block;
  }
}
@media only screen and (-webkit-device-pixel-ratio: 2) and (max-device-height: 568px) and (min-device-width: 320px) {
  ._nc .stage1 .icon {
    bottom: 0 !important;
  }
}
/*! CSS Used from: Embedded */
.nc-iconfont {
  font-family: "nc-iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
._nc .icon-message:before {
  content: "\e603";
}
._nc .icon-refresh:before {
  content: "\e604";
}
._nc .icon-slide-arrow:before {
  content: "\e607";
}
._nc .icon-close-white:before {
  content: "\e609";
}
._nc {
  width: 100%;
  height: 100%;
  touch-action: none;
  font-size: 16px;
}
._nc * {
  padding: 0;
  margin: 0;
  border: none;
}
._nc .icon {
  line-height: normal;
  width: 30px;
  height: 30px;
}
._nc .icon-slide-arrow {
  font-size: 30px;
  color: #dbdbdb;
}
._nc .stage {
  position: relative;
  padding: 0 15px;
}
._nc .stage1 {
  height: 55px;
  position: relative;
}
._nc .stage1 .bg-green {
  background-color: #78c430;
}
._nc .stage1 .slider {
  position: absolute;
  height: 52px;
  box-shadow: 0 0 3px #999;
  background-color: #ddd;
  left: 15px;
  right: 15px;
}
._nc .stage1 .label {
  display: block;
  width: 100%;
  color: #aaa;
}
._nc .stage1 .track {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  overflow: hidden;
}
._nc .stage1 .track div {
  color: #fff;
}
._nc .stage1 .track div,
._nc .stage1 .label {
  line-height: 52px;
  height: 52px;
  text-align: center;
  font-size: 16px;
}
._nc .stage1 .button {
  position: absolute;
  left: 0;
  top: 0;
  width: 52px;
  height: 52px;
  background-color: #fff;
  cursor: pointer;
}
._nc .stage1 .icon {
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
}
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
  ._nc .stage1 .icon {
    bottom: 14px;
  }
}
._nc .stage1 .label {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, #4d4d4d),
    color-stop(0.4, #4d4d4d),
    color-stop(0.5, white),
    color-stop(0.6, #4d4d4d),
    color-stop(1, #4d4d4d)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: slidetounlock 3s infinite;
  -webkit-animation: slidetounlock 3s infinite;
  -webkit-text-size-adjust: none;
}
/*! CSS Used keyframes */
@keyframes slidetounlock {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
}
/*! CSS Used fontfaces */
@font-face {
  font-family: "nc-iconfont";
  src: url(//at.alicdn.com/t/font_skgl4wg07pgv6lxr.eot);
  src: url(//at.alicdn.com/t/font_skgl4wg07pgv6lxr.eot?#iefix)
      format("embedded-opentype"),
    url(//at.alicdn.com/t/font_skgl4wg07pgv6lxr.woff) format("woff"),
    url(//at.alicdn.com/t/font_skgl4wg07pgv6lxr.ttf) format("truetype"),
    url(//at.alicdn.com/t/font_skgl4wg07pgv6lxr.svg#iconfont) format("svg");
}

/* 验证码 */
.form-row .btn-sms {
  position: absolute;
  right: 1px;
  top: 3px;
  font-size: 14px;
  background-color: #fff;
  background-position: 0 -356px;
  min-width: 104px;
  color: #5dd5c8;
  border: 0;
}
.form-row .btn-sms {
  background-image: url(../../../assets/images/icons-sign.png);
  background-repeat: no-repeat;
  -webkit-transition: box-shadow linear 0.2s;
  transition: box-shadow linear 0.2s;
}
button,
div,
i,
input,
span {
  padding: 0;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: none;
}
button,
input {
  outline: 0;
}
button,
input {
  font-family: arial, verdana, helvetica, "PingFang SC", "HanHei SC",
    STHeitiSC-Light, Microsoft Yahei, sans-serif;
  -webkit-font-smoothing: antialiased;
}
button,
input[type="text"] {
  -webkit-appearance: none;
}
.btn:hover,
.ipt:hover {
  -webkit-transition: all linear 0.2s;
  transition: all linear 0.2s;
}
::selection {
  color: #fff;
  background: #00d7c6;
}
::-moz-selection {
  color: #fff;
  background: #00d7c6;
}
input::-webkit-input-placeholder {
  color: #9fa3af;
}
input:-ms-input-placeholder {
  color: #9fa3af;
}
input:-moz-placeholder {
  color: #9fa3af;
}
input::-moz-placeholder {
  color: #9fa3af;
}
.ipt {
  /* padding: 6px 12px 5px 7px; */
  padding: 9px 18px 9px 38px;
  min-height: 22px;
  line-height: 22px;
  border: 1px solid #e3e7ed;
  font-size: 13px;
  vertical-align: middle;
  min-width: 300px;
  box-sizing: border-box;
  width: 100%;
}
.btn:active,
.btn:hover,
.ipt:focus {
  -webkit-transition: all linear 0.2s;
  transition: all linear 0.2s;
}
.ipt:focus {
  border-color: #18c3b1;
  box-shadow: 1px 2px 3px #d7f4f1;
  border-color: #59cac2;
}
.ipt-wrap {
  position: relative;
}
.ipt-wrap .ipt {
  padding-right: 40px;
}
.btn {
  display: inline-block;
  min-width: 112px;
  box-sizing: content-box;
  height: 36px;
  line-height: 36px;
  border: 1px #5dd5c8 solid;
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  background: #5dd5c8;
  text-align: center;
  cursor: pointer;
}
.btn:hover {
  background-color: #6adbcf;
  color: #fff;
}
#wrap ::-webkit-scrollbar-track-piece {
  background-color: #fff;
  border-radius: 0;
  -webkit-border-radius: 0;
}
#wrap ::-webkit-scrollbar {
  width: 4px;
}
#wrap ::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: #d1d4db;
  border-radius: 5px;
  -webkit-border-radius: 5px;
}
#wrap ::-webkit-scrollbar-thumb:hover {
  height: 50px;
  background-color: #bfc1c9;
  border-radius: 5px;
  -webkit-border-radius: 5px;
}
input::-ms-clear,
input::-ms-reveal {
  display: none;
}
.sign-form .tip-error {
  text-align: center;
  color: #fc6c38;
  height: 29px;
  line-height: 18px;
  padding-top: 7px;
}
.sign-form .form-row {
  margin-top: 26px;
}
.sign-form .ipt {
  width: 286px;
  min-width: 0;
  padding: 9px 18px;
  border-color: #e3e7ed;
  vertical-align: middle;
}
.sign-form .ipt-wrap {
  position: relative;
  display: block;
}
.icon-sign-sms,
.sign-form .btn-sms {
  background-image: url(https://static.zhipin.com/zhipin-geek/v73/web/geek/images/icons-sign.png);
  background-repeat: no-repeat;
  -webkit-transition: box-shadow linear 0.2s;
  transition: box-shadow linear 0.2s;
}
.icon-sign-sms {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 9px;
  top: 11px;
}
.icon-sign-sms {
  background-position: 2px -141px;
}
.sign-form .ipt-sms {
  padding-left: 38px;
  width: 266px;
}
.sign-form .ipt:focus {
  box-shadow: 1px 2px 3px #d7f4f1;
  border-color: #59cac2;
}
.sign-form .btn-sms {
  position: absolute;
  right: 1px;
  top: 3px;
  font-size: 14px;
  background-color: #fff;
  background-position: 0 -356px;
  min-width: 104px;
  color: #5dd5c8;
  border: 0;
}
.sign-wrap-v2 .form-row {
  position: relative;
  margin: 0 0 30px;
}
.sign-wrap-v2 .sign-form .tip-error {
  display: none;
  position: absolute;
  left: 3px;
  top: 45px;
  height: 18px;
  padding: 0 0 0 27px;
  background: url(https://static.zhipin.com/zhipin-geek/v73/web/geek/images/icons.png)
    no-repeat 0 -1059px;
  background-size: 18px auto;
  color: #fc703e;
  text-align: left;
}
@media (max-width: 800px) {
  .page-sign .sign-form .tip-error {
    display: none;
  }
  .page-sign .form-row .ipt {
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
}
/* 注册按钮 */
.login {
  width: 100%;
  font-size: 16px;
  height: 42px;
  line-height: 42px;
  border: none;
  cursor: pointer;
  display: inline-block;
  min-width: 112px;
  box-sizing: content-box;
  color: #fff;
  letter-spacing: 1px;
  background: #5dd5c8;
  text-align: center;
}
/* 提示信息 */
.text-tip {
  line-height: 26px;
  font-size: 14px;
  padding: 24px 0 0 0;
  color: #9fa3b0;
  text-align: center;
  overflow: hidden;
}
.text-tip a {
  display: inline-block;
  margin-right: 6px;
  color: #8d92a1;
  margin: 0 6px 0 -4px;
  margin-right: 8px;
}
.text-tip a:visited {
  color: #18c3b1;
}
.text-tip .link-signin {
  color: #18c3b1;
}
.link-register {
  padding: 0 0 0 6px !important;
}
</style>