<template>
  <div id="main">
    <div
      class="job-list"
      data-filter
      data-keyword="web前端"
      data-l3code="100901"
      data-rescount="1153"
      data-page="1"
      data-source
    >
      <ul>
        <!-- 遍历 -->
        <li class="item" v-for="li in list">
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

        <!-- <li class="item">
           href 
          <router-link
            to="/detail"
            ka="job_list_1"
            data-itemid="1"
            data-lid="pSsJRVYqyS.search.1"
            data-index="0"
          >
             <router-link to="/detail" tag="div"></router-link> 
             imgSrc 
            <img
              src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20180604/9226b67ad178646d51ddcc3bb6e6a895cfcd208495d565ef66e7dff9f98764da_s.jpg?x-oss-process=image/resize,w_120,limit_0"
            />
            <div class="text">
              <div class="title">
                 Job 
                <h4>WEB前端</h4>
                 Salary 
                <span class="salary">10-15K·13薪</span>
              </div>
               Business 
              <div class="name">汉堂</div>
              <div class="msg">
                 location 
                <em>广州</em>
                 Work Experience  
                <em>1-3年</em>
                 Education Background 
                <em>本科</em>
              </div>
            </div>
          </router-link>
        </li>-->
      </ul>
      <div
        class="loadmore"
        data-url="/wapi/zpgeek/mobile/jobs.json"
        ka="more-jobs"
        data-page="1"
        data-hasmore="true"
      >加载更多</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListMain",
  data: function() {
    return {
      list: [
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
  }
};
</script>

<style scoped>
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