<template>
  <div class="main">
    <!-- 输入电话 -->
    <span class="ipt-wrap">
      <i class="icon-sign-phone"></i>
      <input
        type="tel"
        class="ipt-tel"
        placeholder="手机号"
        name="phone"
        autocomplete="off"
        v-model="tel"
      />
      <div class="tip-error" v-show="telIsError">{{textTel}}</div>
    </span>

    <!-- 滑动验证 -->
    <div class="form-row">
      <div class="row-code nc-container" id="row-code" style="display: block;">
        <div class="_nc">
          <div id="nc_1-stage-1" class="stage stage1" style="display: block;">
            <div class="slider">
              <div class="label">请向右滑动验证</div>
              <div class="track" v-bind:class="{'back': isGo}" ref="xtrack" style="width: 24px;">
                <div class="bg-green" style="width: 345px;">
                  <div v-show="!isActive">验证通过</div>
                </div>
              </div>
              <div class="button" style="left: 0px;background: transparent;" @touchstart="move">
                <div
                  class="icon nc-iconfont"
                  v-bind:class="{'icon-slide-arrow': isActive, 'icon-ok': !isActive, 'yes': !isActive,'back2': isGo }"
                  id="nc_1_n1t"
                  style="background: rgb(255, 255, 255);"
                ></div>
                <!-- icon nc-iconfont icon-slide-arrow -->
                <!-- icon nc-iconfont icon-ok yes -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 错误图标 -->
      <div class="tip-error" v-show="sliderIsError">请滑动完成验证</div>
    </div>

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
          v-model="sms"
        />
        <input type="hidden" name="smsType" value="2" />
        <!-- <button type="button" class="btn btn-sms" data-url="/wapi/zppassport/send/smsCode">发送验证码</button> -->
        <button type="button" class="btn btn-sms" @click="sendSms">{{textSendSms}}</button>
      </span>
      <!-- 错误图标 -->
      <div class="tip-error" v-show="smsIsError">{{textSms}}</div>
    </div>

    <!-- 注册按钮 -->
    <!-- <button type="submit" class="register" >注册</button> -->
    <button class="register" @click="register">注册</button>

    <!-- 提示信息 -->
    <div class="text-tip">
      <!-- <div class="tip-error"></div> -->
      <input
        type="checkbox"
        class="agree-policy"
        name="policy"
        v-bind:checked="checked"
        @click="CheckedAll"
      />我已同意
      <router-link to="/introduce" target="_blank">用户协议及隐私政策</router-link>
      <router-link to="/login" class="link-signin">直接登录</router-link>
    </div>

    <!-- 遮罩层 -->
    <div class="dialog-wrap dialog-prop-default" v-show="showDialog">
      <div class="dialog-layer"></div>
      <div class="dialog-container">
        <div class="dialog-title">
          <h3 class="title">提示</h3>
          <a href="javascript:;" class="close" @click="closeDialog">
            <i class="icon-close"></i>
          </a>
        </div>
        <div class="dialog-con">{{dialogText}}</div>
        <div class="dialog-footer">
          <div class="btns">
            <span class="btn btn-sure"  @click="closeDialog">知道了</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterMain",
  data: function() {
    return {
      positionY: 0,
      isActive: true,
      isGo: false,
      sliderIsError: 0,
      tel: "",
      textTel: "",
      telIsError: 0,
      sms: "",
      textSms: "",
      smsIsError: 0,
      checked: false,
      textSendSms: "发送验证码",
      numSms: 60,
      showDialog:false,
      dialogText:"",
    };
  },
  methods: {
    closeDialog(){
      this.showDialog=false;
    },
    sendSms() {
      if (this.tel == "") {
        this.textTel = "请填写手机号";
        this.telIsError = 1;
      } else {
        if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.tel)) {
          this.textTel = "请正确填写手机号";
          this.telIsError = 1;
        } else {
          this.telIsError = 0;
          if (this.isActive == true) {
            this.sliderIsError = 1;
          }else{
            // 判断手机号码是否重复
            if(this.tel=="18122103386"){
              this.showDialog=true;
              this.dialogText="账号已经存在";
            }else{
              this.numSms = 60;
              this.textSendSms = this.numSms + "s";
              var timer = setInterval(() => {
                this.numSms--;
                this.textSendSms = this.numSms + "s";
                // console.log(this.textSendSms);
                // 如果数值小于-1了，就停止计时
                if (this.numSms == 0) {
                  clearInterval(timer);
                  this.textSendSms = "再次发送验证码";
                }
              }, 1000);
            }
          }
        }
      }


    },
    CheckedAll() {
      this.checked = !this.checked; //选中切换
    },
    register() {
      console.log("注册按钮被点击  " + this.tel);
      if (this.tel == "") {
        this.textTel = "请填写手机号";
        this.telIsError = 1;
      } else {
        if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.tel)) {
          this.textTel = "请正确填写手机号";
          this.telIsError = 1;
        } else {
          this.telIsError = 0;
          if (this.isActive == true) {
            this.sliderIsError = 1;
          } else {
            this.sliderIsError = 0;
            if (this.sms == "") {
              this.textSms = "请填写验证码";
              this.smsIsError = 1;
            } else {
              if (!/^\d{6}$/.test(this.sms)) {
                this.textSms = "请正确填写验证码";
                this.smsIsError = 1;
              } else {
                this.smsIsError = 0;
                if (this.checked != true) {
                  alert("请阅读并同意BOSS直聘用户协议，方可注册");
                }else{
                  if(this.sms!="123456"){  //判断验证码是否正确，这里默认设为123456
                    this.showDialog=true;
                    this.dialogText="验证码不正确";
                  }
                }
              }
            }
          }
        }
      }

    },
    // mounted(){//这里必须是mouted钩子
    //   this.track = document.querySelector('.track');
    //   this.track.style.width = "24px";
    // },
    move(e) {
      this.isGo = false;
      let odiv = e.target; //获取目标元素

      //算出鼠标相对元素的位置
      let disX = e.changedTouches[0].clientX - odiv.offsetLeft;
      // let disY = e.clientY - odiv.offsetTop;
      document.ontouchmove = e => {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.changedTouches[0].clientX - disX;

        //绑定元素位置到positionX和positionY上面
        this.positionY = left;

        //移动当前元素
        if (left > 0) {
          if (left < 297) {
            odiv.style.left = left + "px";
            this.$refs.xtrack.style.width = left + "px";
          } else {
            odiv.style.left = 297 + "px";
            this.$refs.xtrack.style.width = 297 + "px";
            this.isActive = false;
            document.ontouchmove = null;
            document.ontouchend = null;
            // 清除错误图标
            this.sliderIsError = 0;
          }
        }
        // odiv.style.top = top + 'px';
      };
      document.ontouchend = e => {
        document.ontouchmove = null;
        document.ontouchend = null;

        this.positionY = 0;
        //移动当前元素(归零)
        odiv.style.left = 0 + "px";
        this.$refs.xtrack.style.width = 0 + "px";
        this.isGo = true;
      };
    }
  }
};
</script>

<style scoped>
/* 遮罩层 */
a,div,h3,i,span{padding:0;margin:0;-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:none;}
a{text-decoration:none;color:#414a60;}
a:active,a:focus,a:hover{outline:0;}
a:hover{color:#00d7c6;text-decoration:none;-webkit-transition:all linear .2s;transition:all linear .2s;}
.btn:hover{-webkit-transition:all linear .2s;transition:all linear .2s;}
::selection{color:#fff;background:#00d7c6;}
::-moz-selection{color:#fff;background:#00d7c6;}
.btn:active,.btn:hover{-webkit-transition:all linear .2s;transition:all linear .2s;}
.btn{display:inline-block;min-width:112px;box-sizing:content-box;height:36px;line-height:36px;border:1px #5dd5c8 solid;font-size:16px;color:#fff;letter-spacing:1px;background:#5dd5c8;text-align:center;cursor:pointer;}
.btn:hover{background-color:#6adbcf;color:#fff;}
.dialog-footer .btns .btn{height:32px;line-height:32px;min-width:42px;padding:0 25px;font-size:14px;}
.dialog-wrap{position:fixed;width:100%;height:100%;top:0;left:0;z-index:1010;}
.dialog-layer{position:fixed;left:0;top:0;width:100%;height:100%;background:#252830;background:rgba(37,40,48,.7);z-index:1002;}
.dialog-container{position:absolute;top:50%;left:50%;margin:-93px 0 0 -167px;background-color:#fff;z-index:1003;box-shadow:0 0 14px rgba(0,0,0,.11);}
.dialog-title{font-size:14px;line-height:26px;font-weight:400;}
.dialog-title .close{position:absolute;width:24px;height:24px;right:8px;top:8px;z-index:1;}
.icon-close{display:inline-block;width:24px;height:24px;position:relative;vertical-align:top;}
.icon-close:after,.icon-close:before{content:'';position:absolute;width:16px;height:1px;background:#d1d4db;-webkit-transform:rotate(45deg);transform:rotate(45deg);left:4px;top:12px;}
.icon-close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);}
.dialog-title .close:hover{background-color:#ddd;}
.dialog-title .close:hover .icon-close:after,.dialog-title .close:hover .icon-close:before{background:#363636;}
.dialog-prop-default .dialog-container{width:400px;padding:24px 30px;margin-left:-230px;}
.dialog-prop-default .dialog-container{margin-left:-230px;}
.dialog-prop-default .dialog-title h3.title{font-weight:400;}
.dialog-prop-default .dialog-footer .btns .btn:first-of-type{margin-left:0;}
.dialog-con{max-height:100%;}
.dialog-footer{margin-top:10px;position:relative;}
.dialog-footer .btns{text-align:right;}
.dialog-footer .btns .btn{margin:0 0 0 20px;-webkit-transition:none;transition:none;}
@media (max-width:374px){
.dialog-container{position:absolute;width:302px;margin:-93px 0 0 -151px;}
}
@media (max-width:800px){
 .dialog-prop-default .dialog-container{width:260px;margin-left:-160px;}
 .dialog-prop-default .dialog-footer .btns{text-align:center;}
 .dialog-prop-default .dialog-footer .btn:first-of-type{margin-left:0;}
}

/* 错误图标css */
div {
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
::-webkit-scrollbar-track-piece {
  background-color: #fff;
  border-radius: 0;
}
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: #d1d4db;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  height: 50px;
  background-color: #bfc1c9;
  border-radius: 5px;
}
.tip-error {
  text-align: center;
  color: #fc6c38;
  height: 29px;
  line-height: 18px;
  padding-top: 7px;
}
.tip-error {
  display: block;
  position: absolute;
  left: 3px;
  top: 45px;
  height: 18px;
  padding: 0 0 0 27px;
  /* background: url(https://static.zhipin.com/zhipin-geek/v73/web/geek/images/icons.png) no-repeat 0 -1059px; */
  background: url("../../../assets/images/icons.png") no-repeat 0 -1059px;
  background-size: 18px auto;
  color: #fc703e;
  text-align: left;
}
@media (max-width: 800px) {
  .page-sign .sign-form .tip-error {
    display: none;
  }
}

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
.register {
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
</style>