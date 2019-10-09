<template>
  <div class="home-banner">
    <a href="#">
      <span>下载BOSS APP</span>
      <span>聊着找工作</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "IndexBanner"
};
</script>

<style scoped>
.home-banner {
    width: 100%;
    height: 196px;
    display: block;
    /* background: url(https://static.zhipin.com/zhipin-geek/v81/h5/wap/images/home-bg.png) center center no-repeat; */
    background: url("../../../assets/images/home-bg.png") center center no-repeat;
    color: #fff;
    text-align: center;
    -webkit-background-size: cover;
    background-size: cover;
}

.home-banner span {
    display: none;
}

.home-banner a {
    display: block;
    /* background: url(https://static.zhipin.com/zhipin-geek/v81/h5/wap/images/home-search-text.png) center 38px no-repeat; */
    background: url("../../../assets/images/home-search-text.png") center center no-repeat;
    background-size: 252px auto;
    -webkit-background-size: 252px auto;
    height: 138px;
}
</style>