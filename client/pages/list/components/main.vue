<template>
  <div id="main">
    <div class="job-list infinite-list-wrapper" style="overflow:auto">
      <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
        <!-- 遍历 -->
        <li class="item" v-for="li of list">
          <!-- href -->
          <router-link :to="li.href">
            <!-- imgSrc -->
            <img v-bind:src="li.imgSrc" />
            <div class="text">
              <div class="title">
                <!-- Job -->
                <h4>{{li.Job}}</h4>
                <!-- Salary -->
                <span class="salary">{{li.Salary}}</span>
              </div>
              <!-- Business -->
              <div class="name">{{li.Business}}</div>
              <div class="msg">
                <!-- location -->
                <em>{{li.location}}</em>
                <!-- Work Experience  -->
                <em>{{li.WorkExperience}}</em>
                <!-- Education Background -->
                <em>{{li.EducationBackground}}</em>
              </div>
            </div>
          </router-link>
        </li>

        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListMain",
  data() {
    return {
      //
      start: 10,
      long: 5,
      //
      count: 10,
      loading: false,
      list: [],
      list3: [
        {
          href: "/detail",
          imgSrc: "./static/images/001.jpg",
          Job: "WEB前端",
          Salary: "10-15K·13薪",
          Business: "汉堂",
          location: "广州",
          WorkExperience: "1-3年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/002.jpg",
          Job: "WEB前端",
          Salary: "15-30K",
          Business: "广州视臻",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/003.jpg",
          Job: "WEB前端",
          Salary: "12-22K",
          Business: "上海易立德",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "大专"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/004.jpg",
          Job: "WEB前端",
          Salary: "17-28K",
          Business: "绛门科技",
          location: "广州",
          WorkExperience: "5-10年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/005.jpg",
          Job: "WEB前端",
          Salary: "15-30K",
          Business: "视源股份(CVTE)",
          location: "广州",
          WorkExperience: "经验不限",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/006.jpg",
          Job: "WEB前端",
          Salary: "15-30K",
          Business: "广州视睿",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/007.jpg",
          Job: "WEB前端",
          Salary: "11-22K",
          Business: "滴普科技",
          location: "广州",
          WorkExperience: "1-3年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/008.jpg",
          Job: "WEB前端",
          Salary: "10-15K",
          Business: "健客网",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/009.jpg",
          Job: "高级web前端",
          Salary: "15-20K",
          Business: "健客网",
          location: "广州",
          WorkExperience: "5-10年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/010.jpg",
          Job: "Web前端",
          Salary: "11-16K",
          Business: "优托邦utopa",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "本科"
        }
      ],
      list2: [
        {
          href: "/detail",
          imgSrc: "./static/images/001.jpg",
          Job: "WEB前端",
          Salary: "10-15K·13薪",
          Business: "汉堂",
          location: "广州",
          WorkExperience: "1-3年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/002.jpg",
          Job: "WEB前端",
          Salary: "15-30K",
          Business: "广州视臻",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/003.jpg",
          Job: "WEB前端",
          Salary: "12-22K",
          Business: "上海易立德",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "大专"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/004.jpg",
          Job: "WEB前端",
          Salary: "17-28K",
          Business: "绛门科技",
          location: "广州",
          WorkExperience: "5-10年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/005.jpg",
          Job: "WEB前端",
          Salary: "15-30K",
          Business: "视源股份(CVTE)",
          location: "广州",
          WorkExperience: "经验不限",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/006.jpg",
          Job: "WEB前端",
          Salary: "15-30K",
          Business: "广州视睿",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/007.jpg",
          Job: "WEB前端",
          Salary: "11-22K",
          Business: "滴普科技",
          location: "广州",
          WorkExperience: "1-3年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/008.jpg",
          Job: "WEB前端",
          Salary: "10-15K",
          Business: "健客网",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/009.jpg",
          Job: "高级web前端",
          Salary: "15-20K",
          Business: "健客网",
          location: "广州",
          WorkExperience: "5-10年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/010.jpg",
          Job: "Web前端",
          Salary: "11-16K",
          Business: "优托邦utopa",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/011.jpg",
          Job: "web前端",
          Salary: "17-22K·13薪",
          Business: "广州视睿",
          location: "广州",
          WorkExperience: "经验不限",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/012.jpg",
          Job: "Web前端开发",
          Salary: "15-30K",
          Business: "网易",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/013.jpg",
          Job: "web前端",
          Salary: "15-30K",
          Business: "视源股份(CVTE)",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/014.png",
          Job: "Web前端",
          Salary: "8-12K",
          Business: "中科汇",
          location: "广州",
          WorkExperience: "1-3年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/015.jpg",
          Job: "web前端",
          Salary: "7-14K",
          Business: "树树科技",
          location: "广州",
          WorkExperience: "1-3年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/016.jpg",
          Job: "web前端",
          Salary: "10-17K",
          Business: "得逸信息",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "大专"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/017.jpg",
          Job: "web前端",
          Salary: "10-15K",
          Business: "高新兴科技集团",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/018.jpg",
          Job: "Web前端",
          Salary: "10-15K",
          Business: "优托邦utopa",
          location: "广州",
          WorkExperience: "1-3年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/019.jpg",
          Job: "web前端",
          Salary: "12-20K",
          Business: "华创科技",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/020.jpg",
          Job: "web前端",
          Salary: "11-16K",
          Business: "广州智数",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/021.jpg",
          Job: "web前端",
          Salary: "8-13K",
          Business: "三盟科技",
          location: "广州",
          WorkExperience: "5-10年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/022.jpg",
          Job: "WEB前端工程师（广州）",
          Salary: "12-15K·13薪",
          Business: "纬创软件",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/023.jpg",
          Job: "Web前端开发工程师",
          Salary: "12-20K",
          Business: "网易",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/024.jpg",
          Job: "中级web前端工程师",
          Salary: "15-18K·13薪",
          Business: "星火教育",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/025.jpg",
          Job: "web前端",
          Salary: "10-15K",
          Business: "双梧科技",
          location: "广州",
          WorkExperience: "1-3年",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/026.jpg",
          Job: "web前端开发工程师",
          Salary: "11-20K",
          Business: "佰钧成",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "大专"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/027.png",
          Job: "web前端",
          Salary: "12-18K",
          Business: "云智网络",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "大专"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/028.jpg",
          Job: "web前端",
          Salary: "10-15K",
          Business: "季泉",
          location: "广州",
          WorkExperience: "1年以内",
          EducationBackground: "本科"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/029.jpg",
          Job: "高级web前端工程师",
          Salary: "10-15K",
          Business: "东风日产数据服务",
          location: "广州",
          WorkExperience: "3-5年",
          EducationBackground: "大专"
        },

        {
          href: "/detail",
          imgSrc: "./static/images/030.jpg",
          Job: "web前端",
          Salary: "8-16K",
          Business: "瑞泰信息技术",
          location: "广州",
          WorkExperience: "1年以内",
          EducationBackground: "大专"
        }
      ]
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
  created() {
    /*
          第二个生命周期函数
          在created中，data和methods都已经初始化好
          如果要调用methods中的方法或者data中的数据，最早只能在created中操作
      */
    // this.list = this.list3;
    // 初始化data的axios
    this.$axios
      .get("/list/first")
      .then(response => {
        console.log("response.data: " + response.data);
        // this.list=response;
        // this.list = this.list.concat(res.result.list);
        this.list = this.list.concat(response.data);
        console.log(this.list);
      })
      .catch(function(error) {
        console.log(error);
      });

    console.log("初始化data"); //ok
  },
  beforeMount() {
    console.log("this.loadSession();");
    this.loadSession();
    // console.log("this.listXX();");
    // this.listXX();
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 5;
        this.start += 5;

        //params参数必写 , 如果没有参数传{}也可以
        // params: {d: 12345，name: user}
        // var params={start:this.start,long:this.long};

        this.$axios
          .get("/list/list", { params: { start: this.start, long: this.long } })
          .then(response => {
            console.log("response.data: " + response.data);
            // this.list=response;
            // this.list = this.list.concat(res.result.list);
            this.list = this.list.concat(response.data);
            console.log(this.list);
          })
          .catch(function(error) {
            console.log(error);
          });

        this.loading = false;
      }, 2000);
    },

    loadSession() {
      // ajax请求
      this.$axios
        .get("/login/x")
        .then(response => {
          if (response.data.code == 1) {
            this.username = response.data.uname;
            // this.islog = true;
            // alert("成功！");
            // 改变样式：已经登录
            // this.$router.push("/find");
            console.log("TTTTTTTTTTT");
          } else {
            // this.islog = false;
            console.log("FFFFFFFFFFF");

            // this.$router.push("/nolog");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    listXX() {
      // ajax请求
      this.$axios
        .get("/list/list")
        .then(response => {
          console.log(response);
          // this.list=response;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
/* 设置高度 px or rem 和 text-align*/
.infinite-list-wrapper {
  height: 573px;
  text-align: center;
}
.infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #fff6f6;
  color: #ff8484;
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}

/*! CSS Used from: https://static.zhipin.com/zhipin-geek/v92/h5/wap/css/main.css */
a,
div,
em,
h4,
li,
span,
ul {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
li,
ul {
  list-style: none;
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
#main:after {
  content: "";
  display: block;
  overflow: hidden;
  visibility: hidden;
  clear: both;
}
#main {
  position: relative;
}
.loadmore {
  text-align: center;
  line-height: 50px;
  color: #9fa3af;
  cursor: pointer;
  display: none;
}
.job-list li:after {
  content: "";
  display: block;
  overflow: hidden;
  visibility: hidden;
  clear: both;
}
.loadmore {
  display: block;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  background-color: #fff;
  text-align: center;
  color: #aaa;
  margin-bottom: 10px;
}
.loadmore:active {
  background-color: #f1f1f1;
}
.job-list ul .item {
  height: 91px;
  position: relative;
}
.job-list ul .item > a {
  display: block;
  height: 100%;
}
.job-list ul .item:first-child a:after {
  background-color: #fff;
}
.job-list ul .item > a:after {
  content: "";
  position: absolute;
  left: 18px;
  right: 18px;
  top: 0;
  height: 1px;
  background: #e5e9f3;
  overflow: hidden;
  transform: scaleY(0.5);
}
.job-list ul .item:active {
  background-color: #f4f7f9;
}
.job-list ul .item img {
  width: 59px;
  height: 59px;
  display: block;
  border: none;
  margin-left: 18px;
  margin-top: 16px;
  float: left;
  border-radius: 5px;
}
.job-list .text {
  margin-left: 96px;
  position: relative;
}
.job-list .text h4 {
  width: 144px;
  font-size: 15px;
  color: #414a60;
  line-height: 15px;
  font-weight: 400;
  padding-top: 18px;
  margin-right: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.job-list .text .salary {
  font-style: normal;
  font-size: 19px;
  color: #fc6c38;
  position: absolute;
  right: 19px;
  top: 18px;
  line-height: 15px;
}
.job-list .text .name {
  font-size: 12px;
  color: #414a60;
  line-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 19px;
}
.job-list .text .msg {
  line-height: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 19px;
}
.job-list .text .msg em {
  font-style: normal;
  font-size: 12px;
  color: #8892ac;
  margin-right: 14px;
  display: inline-block;
}
.job-list .loadmore {
  font-size: 14px;
  color: #8b96a6;
  line-height: 48px;
  display: block;
}
</style>