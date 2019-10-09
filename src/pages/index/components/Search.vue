<template>
  <div class="home-search">
    <div class="search">
      <form @submit.prevent="submit($event)">
        <p class="ipt-wrap">
          <button type="submit" class="btn btn-search">搜索</button>
          <input
            type="text"
            v-model="content"
            autocomplete="off"
            class="ipt-search"
            placeholder="搜索职位/公司"
          />
          <i class="icon-close"></i>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexSearch",
  data: function() {
    return {
      content: ""
    };
  },
  methods: {
    submit: function(event) {
      var formData = new FormData(event.target);
      console.log("提交的数据："+this.content);
      //axios
      this.$axios
        .post("/job_detail", {
          params: this.job
        })
        .then(res => {
          // success callback
        })
        .catch(err => {
          // error callback
        });
    }
  }
};
</script>

<style scoped>
/*! CSS Used from: file:///D:/%E5%89%8D%E7%AB%AF/Vue%E7%A7%BB%E5%8A%A8%E7%AB%AF/boss%E9%9D%99%E6%80%81%E9%A1%B5%E9%9D%A2/css/index.css */
button,
div,
form,
i,
input,
p {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
button,
input {
  outline: 0;
}
button,
input {
  font-family: arial, verdana, helvetica, Microsoft Yahei, sans-serif;
  -webkit-font-smoothing: antialiased;
}
button,
input[type="search"] {
  -webkit-appearance: none;
}
input::-webkit-input-placeholder {
  color: #c0c4cf;
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
.icon-close {
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
  vertical-align: top;
}
.icon-close:after,
.icon-close:before {
  content: "";
  position: absolute;
  width: 16px;
  height: 1px;
  background: #363636;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  left: 4px;
  top: 12px;
}
.icon-close:after {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.btn:active,
.btn:hover {
  -webkit-transition: all linear 0.2s;
  transition: all linear 0.2s;
}
.ipt-wrap {
  position: relative;
}
.btn {
  display: inline-block;
  height: 34px;
  line-height: 34px;
  border: 1px #5dd5c8 solid;
  font-size: 14px;
  color: #fff;
  background-color: #5dd5c8;
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
}
.btn:active {
  background-color: #5de3d3;
  border-color: #5de3d3;
  color: #fff;
}
.btn-search {
  display: inline-block;
  background-image: url(https://static.zhipin.com/zhipin-geek/v81/h5/wap/images/icons.png);
  background-repeat: no-repeat;
  background-size: 50% auto;
  -webkit-background-size: 50% auto;
}
.icon-close {
  display: inline-block;
  width: 23px;
  height: 23px;
  position: relative;
}
.icon-close:after,
.icon-close:before {
  content: "";
  position: absolute;
  width: 14px;
  height: 1px;
  background: #bbc5cc;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  left: 5px;
  top: 11px;
}
.icon-close:after {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
input[type="search"]::-ms-clear {
  display: none;
}
.home-search {
  position: relative;
}
.home-search .search {
  float: none;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 10;
  top: 0;
  margin-top: -58px;
}
.home-search .search .ipt-wrap {
  margin: 0 15px;
  padding-right: 70px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
}
.home-search .search .ipt-search {
  width: 100%;
  height: 37px;
  line-height: 32px;
  border-radius: 30px;
  border: none;
  font-size: 14px;
  color: #aeaeae;
  text-align: left;
  padding-left: 20px;
  background: #fff;
}
.home-search .icon-close {
  position: absolute;
  top: 7px;
  right: 80px;
  display: none;
}
.home-search .btn-search {
  background-color: #fff;
  color: #5bd4c7;
  font-size: 14px;
  position: absolute;
  border: none;
  width: 60px;
  right: 8px;
  background: 0 0;
}
</style>