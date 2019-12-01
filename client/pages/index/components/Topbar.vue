<template>
  <div class="top-bar" v-if="this.$store.state.showTopBar">
    <a href="javascript:;" class="top-bar-close" @click="closeTopbar"></a>
    <a
      href="http://m.zhipin.com/d/v2/?type=ck&pkn=main-m&sid=chanpin_m_77"
      class="top-bar-body"
      ka="topbar-download-app"
    >
      <span class="top-bar-text">下载APP,及时回复BOSS信息，不遗漏每一个机会</span>
      <span class="top-bar-btn">去下载</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "IndexTopbar",
  data: function() {
    return {
      show: true
    };
  },

  methods: {

    closeTopbar: function(){
      this.$store.dispatch('changeShowTopBar',false);
    },

    // closeTopbar: function() {
    //   this.show = !this.show;
    // }
  }
};
</script>

<style scoped>
.top-bar {
  width: 100%;
  height: 35px;
  background: rgba(255, 245, 237, 1);
  display: flex;
  align-items: center;
}

.top-bar-close {
  display: block;
  position: relative;
  width: 24px;
  height: 24px;
  margin-left: 8px;
}

.top-bar-close::after,
.top-bar-close::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 2px;
  top: 50%;
  left: 50%;
  margin: -1px 0 0 -7px;
  background: #ffcb7f;
}

.top-bar-close::before {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.top-bar-close::after {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.top-bar-body {
  flex: 1;
  font-size: 12px;
  color: #f8a120;
  line-height: 36px;
  height: 35px;
  display: flex;
  padding-right: 15px;
  white-space: nowrap;
  align-items: center;
}

.top-bar-text {
  flex: 1;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.top-bar-btn {
  display: block;
  padding: 0 8px;
  height: 22px;
  line-height: 22px;
  font-size: 12px;
  color: #fff;
  background: #ffaa32;
  box-shadow: 0 2px 4px 0 rgba(248, 161, 32, 0.38);
  border-radius: 11px;
}

.top-bar-body span:active {
  opacity: 0.6;
}
</style>