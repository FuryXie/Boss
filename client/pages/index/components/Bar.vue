<template>
  <div class="download-bar">
    <!-- <a href="/register" ka="footer-signup"> -->
    <router-link to="/register" tag="div">
      <span class="btn-down">立即注册</span>
      <div class="logo-text">
        <img src="../../../assets/images/logo-x.png" />
        <p>
          找工作要跟
          <br />老板谈
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "IndexBar"
};
</script>

<style scoped>
a,
div,
p,
span {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
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
img {
  border: none;
}
img, object, input, textarea, button, select {
    vertical-align: bottom;
}
body ::-webkit-scrollbar-track-piece {
  background-color: #fff;
  border-radius: 0;
  -webkit-border-radius: 0;
}
body ::-webkit-scrollbar {
  width: 4px;
}
body ::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: #ddd;
  border-radius: 4px;
  -webkit-border-radius: 4px;
}
body ::-webkit-scrollbar-thumb:hover {
  height: 50px;
  background-color: #ccc;
  border-radius: 4px;
  -webkit-border-radius: 4px;
}
.download-bar {
  width: 100%;
  height: 56px;
  background: -webkit-gradient(
    linear,
    center top,
    center bottom,
    from(#22dccf),
    to(#19c7c6)
  );
  position: fixed;
  bottom: 0;
  left: 0;
  transition: height 0.5s;
  -webkit-transition: height 0.5s;
}
.download-bar a {
  display: block;
}
.download-bar .btn-down {
  float: right;
  margin-right: 18px;
  width: 81px;
  height: 32px;
  background-color: #fff;
  color: #5dd5ca;
  font-size: 14px;
  border-radius: 30px;
  text-align: center;
  line-height: 32px;
  margin-top: 12px;
}
.download-bar .logo-text {
  margin-left: 18px;
  margin-right: 105px;
  color: #fff;
  font-size: 14px;
}
.download-bar .logo-text img {
  width: 42px;
  height: 42px;
  margin-top: 7px;
  margin-right: 10px;
}
.download-bar .logo-text p {
  display: inline-block;
  line-height: 18px;
  vertical-align: 5px;
}
</style>