<template>
  <div id="header">
    <h1 class="logo">
      <a href="/" ka="wap-header-home-logo">
        <span>BOSS直聘</span>
      </a>
    </h1>
    <div class="top-search">
      <p class="ipt-wrap">
        <a ka="wap-detail-search" href="/job_detail/" class="link-search">
          搜索职位
          <i class="icon-search"></i>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailSearch",
  data: function() {
    return {
      
    };
  },
};
</script>

<style scoped>
a,
div,
h1,
i,
p,
span {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
a {
  text-decoration: none;
  color: #414a60;
}
a:active,
a:focus,
a:hover {
  outline: 0;
}
a:active {
  color: #55cbc4;
  text-decoration: none;
  -webkit-transition: all linear 0.2s;
  transition: all linear 0.2s;
}
body ::-webkit-scrollbar-track-piece {
  background-color: #fff;
  border-radius: 0;
}
body ::-webkit-scrollbar {
  width: 4px;
}
body ::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: #ddd;
  border-radius: 4px;
}
body ::-webkit-scrollbar-thumb:hover {
  height: 50px;
  background-color: #ccc;
  border-radius: 4px;
}
.ipt-wrap {
  position: relative;
}
#header:after {
  content: "";
  display: block;
  overflow: hidden;
  visibility: hidden;
  clear: both;
}
.icon-search {
  display: inline-block;
  background-image: url(https://static.zhipin.com/zhipin-geek/v95/h5/wap/images/icons.png);
  background-repeat: no-repeat;
  background-size: 50% auto;
}
#header {
  width: 100%;
  background: #fff;
  position: relative;
}
.logo {
  float: left;
  padding: 6px 0 0 15px;
}
.logo a {
  display: block;
  width: 100px;
  height: 32px;
  background: url(https://static.zhipin.com/zhipin-geek/v95/h5/wap/images/logo.png)
    center center no-repeat;
  background-size: auto 17px;
}
.logo span {
  display: none;
}
.top-search {
  float: right;
  padding-top: 11px;
  padding-right: 20px;
  padding-bottom: 10px;
}
.top-search .ipt-wrap {
  position: relative;
}
.link-search {
  width: 120px;
  height: 26px;
  padding: 2px 13px;
  border: 1px #62d5c8 solid;
  border-radius: 15px;
  font-size: 13px;
  vertical-align: top;
}
.link-search {
  display: block;
  line-height: 22px;
  color: #c0c4cf;
}
.link-search .icon-search {
  position: absolute;
  right: 7px;
  top: 1px;
  width: 20px;
  height: 24px;
  background-position: center 4px;
  background-size: 17px auto;
}
</style>