<template>
  <div class="main">
    <div class="job-category">
      <template>
        <dl v-for="job of jobs" :key="job.id">
          <dt>
            <img v-bind:src="job.img"/>

            <div class="sub-name">
              <h4>{{job.name}}</h4>
            </div>
          </dt>
          <dd>
            <template v-for="test of job.link">
              <!-- <a :href="test.href">{{test.names}}</a> -->
              <router-link :to="test.href">{{test.names}}</router-link>
            </template>
          </dd>
        </dl>
      </template>
    </div>
    <!-- <div class="job-category">

      <dl>
        <dt>
          <img src="../../../assets/images/technology.png" />
          <div class="sub-name">
            <h4>技术</h4>
          </div>
        </dt>
        <dd>
          <a href="/c101010100-p100101/">Java</a>
          <a href="/c101010100-p100103/">PHP</a>
          <a href="/c101010100-p100901/">Web前端</a>
          <a href="/c101010100-p100104/">数据挖掘</a>
          <a href="/c101010100-p100102/">C++</a>
          <a href="/c101010100-p100109/">Python</a>
          <a href="/c101010100-p100202/">Android</a>
          <a href="/c101010100-p100203/">iOS</a>
        </dd>
      </dl>

      <dl>
        <dt>
          <img src="../../../assets/images/product.png" />
          <div class="sub-name">
            <h4>产品</h4>
          </div>
        </dt>
        <dd>
          <a href="/c101010100-p110101/">产品经理</a>
          <a href="/c101010100-p110104/">产品助理</a>
          <a href="/c101010100-p110102/">网页产品经理</a>
          <a href="/c101010100-p110105/">数据产品经理</a>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../../../assets/images/designer.png" />
          <div class="sub-name">
            <h4>设计</h4>
          </div>
        </dt>
        <dd>
          <a href="/c101010100-p120105/">UI设计师</a>
          <a href="/c101010100-p120106/">平面设计师</a>
          <a href="/c101010100-p120201/">交互设计师</a>
          <a href="/c101010100-p120402/">设计总监</a>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../../../assets/images/market.png" />
          <div class="sub-name">
            <h4>市场</h4>
          </div>
        </dt>
        <dd>
          <a href="/c101010100-p140101/">市场营销</a>
          <a href="/c101010100-p140107/">商务渠道</a>
          <a href="/c101010100-p140203/">品牌公关</a>
          <a href="/c101010100-p140401/">市场总监</a>
          <a href="/c101010100-p170204/">策划经理</a>
          <a href="/c101010100-p140109/">活动策划</a>
          <a href="/c101010100-p140105/">SEO</a>
          <a href="/c101010100-p140106/">SEM</a>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../../../assets/images/operate.png" />
          <div class="sub-name">
            <h4>运营</h4>
          </div>
        </dt>
        <dd>
          <a href="/c101010100-p130101/">用户运营</a>
          <a href="/c101010100-p130102/">产品运营</a>
          <a href="/c101010100-p130111/">新媒体运营</a>
          <a href="/c101010100-p130402/">运营总监</a>
          <a href="/c101010100-p130106/">商家运营</a>
          <a href="/c101010100-p130117/">电商运营</a>
          <a href="/c101010100-p170102/">编辑</a>
          <a href="/c101010100-p130304/">客服经理</a>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../../../assets/images/senior.png" />
          <div class="sub-name">
            <h4>职能/高级管理</h4>
          </div>
        </dt>
        <dd>
          <a href="/c101010100-p150101/">人力资源</a>
          <a href="/c101010100-p150204/">行政</a>
          <a href="/c101010100-p150303/">财务</a>
          <a href="/c101010100-p150301/">会计</a>
          <a href="/c101010100-p150103/">HRBP</a>
        </dd>
      </dl>
    </div> -->
    <div class="report-tips-wrap">
      <div class="report-tips">
        <p>违法和不良信息举报邮箱：jubao@kanzhun.com</p>
        <p>企业服务热线和举报投诉：400 065 5799</p>
        <p>
          <a
            href="/web/common/protocol/hr-service.html"
            ka="link-hr-service"
            target="_blank"
          >人力资源服务许可证</a>
        </p>
      </div>
    </div>
    <div class="btns">
      <a href="/c101010100/" class="btn btn-all">查看全部职位</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexMain",
  data: function() {
    return {
      jobs: [
        {
          id:1,
          name: "技术",
          // require('./assets/logo.png')
          // img: "require('../../../assets/images/technology.png')",
          img: "./static/images/technology.png",
          link: [
            {
              names: "Java",
              href: "/c101010100-p100101/"
            },
            {
              names: "PHP",
              href: "/c101010100-p100103/"
            },
            {
              names: "Web前端",
              href: "/list/"
            },
            {
              names: "数据挖掘",
              href: "/c101010100-p100104/"
            },
            {
              names: "C++",
              href: "/c101010100-p100102/"
            },
            {
              names: "Python",
              href: "/c101010100-p100109/"
            },
            {
              names: "Android",
              href: "/c101010100-p100202/"
            },
            {
              names: "iOS",
              href: "/c101010100-p100203/"
            }
          ]
        },
        {
          id:2,
          name: "产品",
          // img: "../../../assets/images/product.png",
          img: "./static//images/product.png",
          link: [
            {
              names: "产品经理",
              href: "/c101010100-p110101/"
            },
            {
              names: "产品助理",
              href: "/c101010100-p110104/"
            },
            {
              names: "网页产品经理",
              href: "/c101010100-p110102/"
            },
            {
              names: "数据产品经理",
              href: "/c101010100-p110105/"
            }
          ]
        },
        {
          id:3,
          name: "设计",
          // img: "../../../assets/images/designer.png",
          img: "./static/images/designer.png",
          link: [
            {
              names: "UI设计师",
              href: "/c101010100-p120105/"
            },
            {
              names: "平面设计师",
              href: "/c101010100-p120106/"
            },
            {
              names: "交互设计师",
              href: "/c101010100-p120201/"
            },
            {
              names: "设计总监",
              href: "/c101010100-p120402/"
            }
          ]
        },
        {
          id:4,
          name: "市场",
          // img: "../../../assets/images/market.png",
          img: "./static//images/market.png",
          link: [
            {
              names: "市场营销",
              href: "/c101010100-p140101/"
            },
            {
              names: "商务渠道",
              href: "/c101010100-p140107/"
            },
            {
              names: "品牌公关",
              href: "/c101010100-p140203/"
            },
            {
              names: "市场总监",
              href: "/c101010100-p140401/"
            },
            {
              names: "策划经理",
              href: "/c101010100-p170204/"
            },
            {
              names: "活动策划",
              href: "/c101010100-p140109/"
            },
            {
              names: "SEO",
              href: "/c101010100-p140105/"
            },
            {
              names: "SEM",
              href: "/c101010100-p140106/"
            }
          ]
        },
        {
          id:5,
          name: "运营",
          // img: "../../../assets/images/operate.png",
          img: "./static/images/operate.png",
          link: [
            {
              names: "用户运营",
              href: "/c101010100-p130101/"
            },
            {
              names: "产品运营",
              href: "/c101010100-p130102/"
            },
            {
              names: "新媒体运营",
              href: "/c101010100-p130111/"
            },
            {
              names: "运营总监",
              href: "/c101010100-p130402/"
            },
            {
              names: "商家运营",
              href: "/c101010100-p130117/"
            },
            {
              names: "电商运营",
              href: "/c101010100-p130117/"
            },
            {
              names: "编辑",
              href: "/c101010100-p170102/"
            },
            {
              names: "客服经理",
              href: "/c101010100-p130304/"
            }
          ]
        },
        {
          id:6,
          name: "职能/高级管理",
          // img: "../../../assets/images/senior.png",
          img: "./static/images/senior.png",
          link: [
            {
              names: "人力资源",
              href: "/c101010100-p150101/"
            },
            {
              names: "行政",
              href: "/c101010100-p150204/"
            },
            {
              names: "财务",
              href: "/c101010100-p150303/"
            },
            {
              names: "会计",
              href: "/c101010100-p150301/"
            },
            {
              names: "HRBP",
              href: "/c101010100-p150103/"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
/*! CSS Used from: file:///D:/%E5%89%8D%E7%AB%AF/Vue%E7%A7%BB%E5%8A%A8%E7%AB%AF/boss%E9%9D%99%E6%80%81%E9%A1%B5%E9%9D%A2/css/index.css */
a,
dd,
div,
dl,
h4,
p {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
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
img {
  border: none;
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
.btn:active,
.btn:hover {
  -webkit-transition: all linear 0.2s;
  transition: all linear 0.2s;
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
.main:after {
  content: "";
  display: block;
  overflow: hidden;
  visibility: hidden;
  clear: both;
}
.main {
  position: relative;
}
.job-category dl {
  padding-top: 18px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f5f8f9;
}
.job-category dl:last-of-type {
  border-bottom: none;
}
.job-category dd,
.job-category dt {
  margin: 0 15px;
  color: #525252;
  font-size: 18px;
}
.job-category dt {
  margin-bottom: 18px;
  color: #404855;
  font-size: 13px;
  overflow: hidden;
}
.job-category .sub-name {
  margin: 0 48px 0 65px;
}
.job-category dt h4 {
  font-size: 15px;
  margin-top: 20px;
}
.job-category dt img {
  width: 50px;
  height: 50px;
  margin-right: 15px;
  vertical-align: middle;
  float: left;
}
.job-category dd a {
  padding: 8px 17px;
  font-size: 13px;
  color: #7e8793;
  line-height: 13px;
  background: #f5f8f9;
  border-radius: 100px;
  margin: 0 8px 8px 0;
  display: inline-block;
}
.job-category dd a:hover {
  background-color: #cceeeb;
}
.btn-all {
  display: block;
  height: 51px;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  border: 0;
  width: 100%;
  background-color: #fff;
}
.report-tips-wrap {
  padding: 20px 0;
  text-align: center;
}
.report-tips-wrap .report-tips {
  display: inline-block;
  line-height: 18px;
  color: #919aa7;
  font-size: 12px;
  text-align: start;
}
.report-tips-wrap .report-tips a {
  color: #919aa7;
}
</style>