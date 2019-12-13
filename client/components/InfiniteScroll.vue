<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li v-for="i of count" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 10,
      loading: false
    };
  },
  computed: {
    noMore() {
      return this.count >= 30;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 5;//add
        this.loading = false;
      }, 2000);
    }
  }
};
</script>

<style scoped>
/* 设置高度 px or rem 和 text-align*/
.infinite-list-wrapper{height:300px;text-align:center;}

.infinite-list-wrapper .list{padding:0;margin:0;list-style:none;}
.infinite-list-wrapper .list-item{display:flex;align-items:center;justify-content:center;height:50px;background:#fff6f6;color:#ff8484;}
.infinite-list-wrapper .list-item+.list-item{margin-top:10px;}
</style>