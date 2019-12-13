<template>
  <div>
    <index-topbar></index-topbar>
    <index-banner></index-banner>
    <index-search></index-search>
    <index-main></index-main>
    <index-bar></index-bar>
  </div>
</template>

<script>
import IndexTopbar from "./components/Topbar";
import IndexBanner from "./components/Banner";
import IndexSearch from "./components/Search";
import IndexMain from "./components/Main";
import IndexBar from "./components/Bar";
export default {
  name: "Index",
  components: {
    IndexTopbar,
    IndexBanner,
    IndexSearch,
    IndexMain,
    IndexBar
  },
  beforeMount() {
    console.log("this.loadSession();");
    this.loadSession();
    // console.log("this.listXX();");
    // this.listXX();
  },
  methods: {
    loadSession() {
      // ajax请求
      this.$axios
        .get("/login/x")
        .then(response => {
          if (response.data.code == 1) {
            this.username = response.data.uname;
            // this.islog = true;
            this.$store.dispatch('changeShowTopBar',!true);
            this.$store.dispatch('changeShowBar',!true);
            // alert("成功！");
            // 改变样式：已经登录
            // this.$router.push("/find");
            console.log("TTTTTTTTTTT");
          } else {
            // this.islog = false;
            this.$store.dispatch('changeShowTopBar',!false);
            this.$store.dispatch('changeShowBar',!false);
            console.log("FFFFFFFFFFF");

            // this.$router.push("/nolog");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>