<template>
  <div id="header">
        <div class="serach-bar">
            <div class="top-search">
                <form action="/job_detail/" method="get">
                    <input name="city" value="101280100" type="hidden">
                    <input name="source" value="10" type="hidden">
                    <p class="ipt-wrap">
                        <a href="/" class="icon-home"><img src="https://static.zhipin.com/zhipin-geek/v89/h5/wap/images/icon-home.png"></a>
                        <a class="city-text">广州</a>
                        <input type="search" ka="search-keyword" name="query" autocomplete="off" class="ipt-search" value="web前端" placeholder="搜索职位">
                        <button type="submit" class="btn btn-search" ka="search-btn">搜索</button>
                        <i class="icon-close" style="display: inline;"></i>
                    </p>
                </form>
                <div class="city-list-win">
                    <div class="city-list-title">
                        <a class="back">	</a>
                        选择城市
                    </div>
                    <div class="city-box" style="touch-action: none;">
                        <div class="scroller" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
                            <ul>
                                <li class="selected">热门城市</li>
                                        <li>北京</li>
                                        <li>上海</li>
                                        <li>天津</li>
                                        <li>重庆</li>
                                        <li>黑龙江</li>
                                        <li>吉林</li>
                                        <li>辽宁</li>
                                        <li>内蒙古</li>
                                        <li>河北</li>
                                        <li>山西</li>
                                        <li>陕西</li>
                                        <li>山东</li>
                                        <li>新疆</li>
                                        <li>青海</li>
                                        <li>甘肃</li>
                                        <li>宁夏</li>
                                        <li>河南</li>
                                        <li>江苏</li>
                                        <li>湖北</li>
                                        <li>浙江</li>
                                        <li>安徽</li>
                                        <li>福建</li>
                                        <li>江西</li>
                                        <li>湖南</li>
                                        <li>贵州</li>
                                        <li>四川</li>
                                        <li>广东</li>
                                        <li>云南</li>
                                        <li>广西</li>
                                        <li>海南</li>
                                        <li>台湾</li>
                                        <li>西藏</li>
                                        <li>香港</li>
                                        <li>澳门</li>
                            </ul>
                        </div>
                    <div class="iScrollVerticalScrollbar iScrollLoneScrollbar" style="overflow: hidden; pointer-events: none; transform: translateZ(0px); transition-duration: 0ms; opacity: 0;"><div class="iScrollIndicator" style="transition-duration: 0ms; display: none; height: 8px; transform: translate(0px, -8px) translateZ(0px); transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);"></div></div></div>
                    <div class="city-child-box" style="touch-action: none;">
                        <div class="scroller" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
                            <ul>
                                <li class="child-li selected">
                                    <ul>
                                                <li><a href="/c100010000-p100901/">全国</a></li>
                                                <li><a href="/c101010100-p100901/">北京</a></li>
                                                <li><a href="/c101020100-p100901/">上海</a></li>
                                                <li><a href="/c101280100-p100901/">广州</a></li>
                                                <li><a href="/c101280600-p100901/">深圳</a></li>
                                                <li><a href="/c101210100-p100901/">杭州</a></li>
                                                <li><a href="/c101030100-p100901/">天津</a></li>
                                                <li><a href="/c101110100-p100901/">西安</a></li>
                                                <li><a href="/c101190400-p100901/">苏州</a></li>
                                                <li><a href="/c101200100-p100901/">武汉</a></li>
                                                <li><a href="/c101230200-p100901/">厦门</a></li>
                                                <li><a href="/c101250100-p100901/">长沙</a></li>
                                                <li><a href="/c101270100-p100901/">成都</a></li>
                                                <li><a href="/c101180100-p100901/">郑州</a></li>
                                                <li><a href="/c101040100-p100901/">重庆</a></li>
                                    </ul>
                                </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101010100-p100901/">北京</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101020100-p100901/">上海</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101030100-p100901/">天津</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101040100-p100901/">重庆</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101050100-p100901/">哈尔滨</a></li>
                                                        <li><a href="/c101050200-p100901/">齐齐哈尔</a></li>
                                                        <li><a href="/c101050300-p100901/">牡丹江</a></li>
                                                        <li><a href="/c101050400-p100901/">佳木斯</a></li>
                                                        <li><a href="/c101050500-p100901/">绥化</a></li>
                                                        <li><a href="/c101050600-p100901/">黑河</a></li>
                                                        <li><a href="/c101050700-p100901/">伊春</a></li>
                                                        <li><a href="/c101050800-p100901/">大庆</a></li>
                                                        <li><a href="/c101050900-p100901/">七台河</a></li>
                                                        <li><a href="/c101051000-p100901/">鸡西</a></li>
                                                        <li><a href="/c101051100-p100901/">鹤岗</a></li>
                                                        <li><a href="/c101051200-p100901/">双鸭山</a></li>
                                                        <li><a href="/c101051300-p100901/">大兴安岭</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101060100-p100901/">长春</a></li>
                                                        <li><a href="/c101060200-p100901/">吉林</a></li>
                                                        <li><a href="/c101060300-p100901/">四平</a></li>
                                                        <li><a href="/c101060400-p100901/">通化</a></li>
                                                        <li><a href="/c101060500-p100901/">白城</a></li>
                                                        <li><a href="/c101060600-p100901/">辽源</a></li>
                                                        <li><a href="/c101060700-p100901/">松原</a></li>
                                                        <li><a href="/c101060800-p100901/">白山</a></li>
                                                        <li><a href="/c101060900-p100901/">延边</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101070100-p100901/">沈阳</a></li>
                                                        <li><a href="/c101070200-p100901/">大连</a></li>
                                                        <li><a href="/c101070300-p100901/">鞍山</a></li>
                                                        <li><a href="/c101070400-p100901/">抚顺</a></li>
                                                        <li><a href="/c101070500-p100901/">本溪</a></li>
                                                        <li><a href="/c101070600-p100901/">丹东</a></li>
                                                        <li><a href="/c101070700-p100901/">锦州</a></li>
                                                        <li><a href="/c101070800-p100901/">营口</a></li>
                                                        <li><a href="/c101070900-p100901/">阜新</a></li>
                                                        <li><a href="/c101071000-p100901/">辽阳</a></li>
                                                        <li><a href="/c101071100-p100901/">铁岭</a></li>
                                                        <li><a href="/c101071200-p100901/">朝阳</a></li>
                                                        <li><a href="/c101071300-p100901/">盘锦</a></li>
                                                        <li><a href="/c101071400-p100901/">葫芦岛</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101080100-p100901/">呼和浩特</a></li>
                                                        <li><a href="/c101080200-p100901/">包头</a></li>
                                                        <li><a href="/c101080300-p100901/">乌海</a></li>
                                                        <li><a href="/c101080400-p100901/">通辽</a></li>
                                                        <li><a href="/c101080500-p100901/">赤峰</a></li>
                                                        <li><a href="/c101080600-p100901/">鄂尔多斯</a></li>
                                                        <li><a href="/c101080700-p100901/">呼伦贝尔</a></li>
                                                        <li><a href="/c101080800-p100901/">巴彦淖尔</a></li>
                                                        <li><a href="/c101080900-p100901/">乌兰察布</a></li>
                                                        <li><a href="/c101081000-p100901/">锡林郭勒</a></li>
                                                        <li><a href="/c101081100-p100901/">兴安盟</a></li>
                                                        <li><a href="/c101081200-p100901/">阿拉善</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101090100-p100901/">石家庄</a></li>
                                                        <li><a href="/c101090200-p100901/">保定</a></li>
                                                        <li><a href="/c101090300-p100901/">张家口</a></li>
                                                        <li><a href="/c101090400-p100901/">承德</a></li>
                                                        <li><a href="/c101090500-p100901/">唐山</a></li>
                                                        <li><a href="/c101090600-p100901/">廊坊</a></li>
                                                        <li><a href="/c101090700-p100901/">沧州</a></li>
                                                        <li><a href="/c101090800-p100901/">衡水</a></li>
                                                        <li><a href="/c101090900-p100901/">邢台</a></li>
                                                        <li><a href="/c101091000-p100901/">邯郸</a></li>
                                                        <li><a href="/c101091100-p100901/">秦皇岛</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101100100-p100901/">太原</a></li>
                                                        <li><a href="/c101100200-p100901/">大同</a></li>
                                                        <li><a href="/c101100300-p100901/">阳泉</a></li>
                                                        <li><a href="/c101100400-p100901/">晋中</a></li>
                                                        <li><a href="/c101100500-p100901/">长治</a></li>
                                                        <li><a href="/c101100600-p100901/">晋城</a></li>
                                                        <li><a href="/c101100700-p100901/">临汾</a></li>
                                                        <li><a href="/c101100800-p100901/">运城</a></li>
                                                        <li><a href="/c101100900-p100901/">朔州</a></li>
                                                        <li><a href="/c101101000-p100901/">忻州</a></li>
                                                        <li><a href="/c101101100-p100901/">吕梁</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101110100-p100901/">西安</a></li>
                                                        <li><a href="/c101110200-p100901/">咸阳</a></li>
                                                        <li><a href="/c101110300-p100901/">延安</a></li>
                                                        <li><a href="/c101110400-p100901/">榆林</a></li>
                                                        <li><a href="/c101110500-p100901/">渭南</a></li>
                                                        <li><a href="/c101110600-p100901/">商洛</a></li>
                                                        <li><a href="/c101110700-p100901/">安康</a></li>
                                                        <li><a href="/c101110800-p100901/">汉中</a></li>
                                                        <li><a href="/c101110900-p100901/">宝鸡</a></li>
                                                        <li><a href="/c101111000-p100901/">铜川</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101120100-p100901/">济南</a></li>
                                                        <li><a href="/c101120200-p100901/">青岛</a></li>
                                                        <li><a href="/c101120300-p100901/">淄博</a></li>
                                                        <li><a href="/c101120400-p100901/">德州</a></li>
                                                        <li><a href="/c101120500-p100901/">烟台</a></li>
                                                        <li><a href="/c101120600-p100901/">潍坊</a></li>
                                                        <li><a href="/c101120700-p100901/">济宁</a></li>
                                                        <li><a href="/c101120800-p100901/">泰安</a></li>
                                                        <li><a href="/c101120900-p100901/">临沂</a></li>
                                                        <li><a href="/c101121000-p100901/">菏泽</a></li>
                                                        <li><a href="/c101121100-p100901/">滨州</a></li>
                                                        <li><a href="/c101121200-p100901/">东营</a></li>
                                                        <li><a href="/c101121300-p100901/">威海</a></li>
                                                        <li><a href="/c101121400-p100901/">枣庄</a></li>
                                                        <li><a href="/c101121500-p100901/">日照</a></li>
                                                        <li><a href="/c101121700-p100901/">聊城</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101130100-p100901/">乌鲁木齐</a></li>
                                                        <li><a href="/c101130200-p100901/">克拉玛依</a></li>
                                                        <li><a href="/c101130300-p100901/">昌吉</a></li>
                                                        <li><a href="/c101130400-p100901/">巴音郭楞</a></li>
                                                        <li><a href="/c101130500-p100901/">博尔塔拉</a></li>
                                                        <li><a href="/c101130600-p100901/">伊犁</a></li>
                                                        <li><a href="/c101130800-p100901/">吐鲁番</a></li>
                                                        <li><a href="/c101130900-p100901/">哈密</a></li>
                                                        <li><a href="/c101131000-p100901/">阿克苏</a></li>
                                                        <li><a href="/c101131100-p100901/">克孜勒苏柯尔克孜自治州</a></li>
                                                        <li><a href="/c101131200-p100901/">喀什</a></li>
                                                        <li><a href="/c101131300-p100901/">和田</a></li>
                                                        <li><a href="/c101131400-p100901/">塔城</a></li>
                                                        <li><a href="/c101131500-p100901/">阿勒泰</a></li>
                                                        <li><a href="/c101131600-p100901/">石河子</a></li>
                                                        <li><a href="/c101131700-p100901/">阿拉尔</a></li>
                                                        <li><a href="/c101131800-p100901/">图木舒克</a></li>
                                                        <li><a href="/c101131900-p100901/">五家渠</a></li>
                                                        <li><a href="/c101132000-p100901/">铁门关</a></li>
                                                        <li><a href="/c101132100-p100901/">北屯市</a></li>
                                                        <li><a href="/c101132200-p100901/">可克达拉市</a></li>
                                                        <li><a href="/c101132300-p100901/">昆玉市</a></li>
                                                        <li><a href="/c101132400-p100901/">双河市</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101150100-p100901/">西宁</a></li>
                                                        <li><a href="/c101150200-p100901/">海东</a></li>
                                                        <li><a href="/c101150300-p100901/">海北</a></li>
                                                        <li><a href="/c101150400-p100901/">黄南</a></li>
                                                        <li><a href="/c101150500-p100901/">海南藏族自治州</a></li>
                                                        <li><a href="/c101150600-p100901/">果洛</a></li>
                                                        <li><a href="/c101150700-p100901/">玉树</a></li>
                                                        <li><a href="/c101150800-p100901/">海西</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101160100-p100901/">兰州</a></li>
                                                        <li><a href="/c101160200-p100901/">定西</a></li>
                                                        <li><a href="/c101160300-p100901/">平凉</a></li>
                                                        <li><a href="/c101160400-p100901/">庆阳</a></li>
                                                        <li><a href="/c101160500-p100901/">武威</a></li>
                                                        <li><a href="/c101160600-p100901/">金昌</a></li>
                                                        <li><a href="/c101160700-p100901/">张掖</a></li>
                                                        <li><a href="/c101160800-p100901/">酒泉</a></li>
                                                        <li><a href="/c101160900-p100901/">天水</a></li>
                                                        <li><a href="/c101161000-p100901/">白银</a></li>
                                                        <li><a href="/c101161100-p100901/">陇南</a></li>
                                                        <li><a href="/c101161200-p100901/">嘉峪关</a></li>
                                                        <li><a href="/c101161300-p100901/">临夏</a></li>
                                                        <li><a href="/c101161400-p100901/">甘南</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101170100-p100901/">银川</a></li>
                                                        <li><a href="/c101170200-p100901/">石嘴山</a></li>
                                                        <li><a href="/c101170300-p100901/">吴忠</a></li>
                                                        <li><a href="/c101170400-p100901/">固原</a></li>
                                                        <li><a href="/c101170500-p100901/">中卫</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101180100-p100901/">郑州</a></li>
                                                        <li><a href="/c101180200-p100901/">安阳</a></li>
                                                        <li><a href="/c101180300-p100901/">新乡</a></li>
                                                        <li><a href="/c101180400-p100901/">许昌</a></li>
                                                        <li><a href="/c101180500-p100901/">平顶山</a></li>
                                                        <li><a href="/c101180600-p100901/">信阳</a></li>
                                                        <li><a href="/c101180700-p100901/">南阳</a></li>
                                                        <li><a href="/c101180800-p100901/">开封</a></li>
                                                        <li><a href="/c101180900-p100901/">洛阳</a></li>
                                                        <li><a href="/c101181000-p100901/">商丘</a></li>
                                                        <li><a href="/c101181100-p100901/">焦作</a></li>
                                                        <li><a href="/c101181200-p100901/">鹤壁</a></li>
                                                        <li><a href="/c101181300-p100901/">濮阳</a></li>
                                                        <li><a href="/c101181400-p100901/">周口</a></li>
                                                        <li><a href="/c101181500-p100901/">漯河</a></li>
                                                        <li><a href="/c101181600-p100901/">驻马店</a></li>
                                                        <li><a href="/c101181700-p100901/">三门峡</a></li>
                                                        <li><a href="/c101181800-p100901/">济源</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101190100-p100901/">南京</a></li>
                                                        <li><a href="/c101190200-p100901/">无锡</a></li>
                                                        <li><a href="/c101190300-p100901/">镇江</a></li>
                                                        <li><a href="/c101190400-p100901/">苏州</a></li>
                                                        <li><a href="/c101190500-p100901/">南通</a></li>
                                                        <li><a href="/c101190600-p100901/">扬州</a></li>
                                                        <li><a href="/c101190700-p100901/">盐城</a></li>
                                                        <li><a href="/c101190800-p100901/">徐州</a></li>
                                                        <li><a href="/c101190900-p100901/">淮安</a></li>
                                                        <li><a href="/c101191000-p100901/">连云港</a></li>
                                                        <li><a href="/c101191100-p100901/">常州</a></li>
                                                        <li><a href="/c101191200-p100901/">泰州</a></li>
                                                        <li><a href="/c101191300-p100901/">宿迁</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101200100-p100901/">武汉</a></li>
                                                        <li><a href="/c101200200-p100901/">襄阳</a></li>
                                                        <li><a href="/c101200300-p100901/">鄂州</a></li>
                                                        <li><a href="/c101200400-p100901/">孝感</a></li>
                                                        <li><a href="/c101200500-p100901/">黄冈</a></li>
                                                        <li><a href="/c101200600-p100901/">黄石</a></li>
                                                        <li><a href="/c101200700-p100901/">咸宁</a></li>
                                                        <li><a href="/c101200800-p100901/">荆州</a></li>
                                                        <li><a href="/c101200900-p100901/">宜昌</a></li>
                                                        <li><a href="/c101201000-p100901/">十堰</a></li>
                                                        <li><a href="/c101201100-p100901/">随州</a></li>
                                                        <li><a href="/c101201200-p100901/">荆门</a></li>
                                                        <li><a href="/c101201300-p100901/">恩施</a></li>
                                                        <li><a href="/c101201400-p100901/">仙桃</a></li>
                                                        <li><a href="/c101201500-p100901/">潜江</a></li>
                                                        <li><a href="/c101201600-p100901/">天门</a></li>
                                                        <li><a href="/c101201700-p100901/">神农架</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101210100-p100901/">杭州</a></li>
                                                        <li><a href="/c101210200-p100901/">湖州</a></li>
                                                        <li><a href="/c101210300-p100901/">嘉兴</a></li>
                                                        <li><a href="/c101210400-p100901/">宁波</a></li>
                                                        <li><a href="/c101210500-p100901/">绍兴</a></li>
                                                        <li><a href="/c101210600-p100901/">台州</a></li>
                                                        <li><a href="/c101210700-p100901/">温州</a></li>
                                                        <li><a href="/c101210800-p100901/">丽水</a></li>
                                                        <li><a href="/c101210900-p100901/">金华</a></li>
                                                        <li><a href="/c101211000-p100901/">衢州</a></li>
                                                        <li><a href="/c101211100-p100901/">舟山</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101220100-p100901/">合肥</a></li>
                                                        <li><a href="/c101220200-p100901/">蚌埠</a></li>
                                                        <li><a href="/c101220300-p100901/">芜湖</a></li>
                                                        <li><a href="/c101220400-p100901/">淮南</a></li>
                                                        <li><a href="/c101220500-p100901/">马鞍山</a></li>
                                                        <li><a href="/c101220600-p100901/">安庆</a></li>
                                                        <li><a href="/c101220700-p100901/">宿州</a></li>
                                                        <li><a href="/c101220800-p100901/">阜阳</a></li>
                                                        <li><a href="/c101220900-p100901/">亳州</a></li>
                                                        <li><a href="/c101221000-p100901/">滁州</a></li>
                                                        <li><a href="/c101221100-p100901/">淮北</a></li>
                                                        <li><a href="/c101221200-p100901/">铜陵</a></li>
                                                        <li><a href="/c101221300-p100901/">宣城</a></li>
                                                        <li><a href="/c101221400-p100901/">六安</a></li>
                                                        <li><a href="/c101221500-p100901/">池州</a></li>
                                                        <li><a href="/c101221600-p100901/">黄山</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101230100-p100901/">福州</a></li>
                                                        <li><a href="/c101230200-p100901/">厦门</a></li>
                                                        <li><a href="/c101230300-p100901/">宁德</a></li>
                                                        <li><a href="/c101230400-p100901/">莆田</a></li>
                                                        <li><a href="/c101230500-p100901/">泉州</a></li>
                                                        <li><a href="/c101230600-p100901/">漳州</a></li>
                                                        <li><a href="/c101230700-p100901/">龙岩</a></li>
                                                        <li><a href="/c101230800-p100901/">三明</a></li>
                                                        <li><a href="/c101230900-p100901/">南平</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101240100-p100901/">南昌</a></li>
                                                        <li><a href="/c101240200-p100901/">九江</a></li>
                                                        <li><a href="/c101240300-p100901/">上饶</a></li>
                                                        <li><a href="/c101240400-p100901/">抚州</a></li>
                                                        <li><a href="/c101240500-p100901/">宜春</a></li>
                                                        <li><a href="/c101240600-p100901/">吉安</a></li>
                                                        <li><a href="/c101240700-p100901/">赣州</a></li>
                                                        <li><a href="/c101240800-p100901/">景德镇</a></li>
                                                        <li><a href="/c101240900-p100901/">萍乡</a></li>
                                                        <li><a href="/c101241000-p100901/">新余</a></li>
                                                        <li><a href="/c101241100-p100901/">鹰潭</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101250100-p100901/">长沙</a></li>
                                                        <li><a href="/c101250200-p100901/">湘潭</a></li>
                                                        <li><a href="/c101250300-p100901/">株洲</a></li>
                                                        <li><a href="/c101250400-p100901/">衡阳</a></li>
                                                        <li><a href="/c101250500-p100901/">郴州</a></li>
                                                        <li><a href="/c101250600-p100901/">常德</a></li>
                                                        <li><a href="/c101250700-p100901/">益阳</a></li>
                                                        <li><a href="/c101250800-p100901/">娄底</a></li>
                                                        <li><a href="/c101250900-p100901/">邵阳</a></li>
                                                        <li><a href="/c101251000-p100901/">岳阳</a></li>
                                                        <li><a href="/c101251100-p100901/">张家界</a></li>
                                                        <li><a href="/c101251200-p100901/">怀化</a></li>
                                                        <li><a href="/c101251300-p100901/">永州</a></li>
                                                        <li><a href="/c101251400-p100901/">湘西</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101260100-p100901/">贵阳</a></li>
                                                        <li><a href="/c101260200-p100901/">遵义</a></li>
                                                        <li><a href="/c101260300-p100901/">安顺</a></li>
                                                        <li><a href="/c101260400-p100901/">铜仁</a></li>
                                                        <li><a href="/c101260500-p100901/">毕节</a></li>
                                                        <li><a href="/c101260600-p100901/">六盘水</a></li>
                                                        <li><a href="/c101260700-p100901/">黔东南</a></li>
                                                        <li><a href="/c101260800-p100901/">黔南</a></li>
                                                        <li><a href="/c101260900-p100901/">黔西南</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101270100-p100901/">成都</a></li>
                                                        <li><a href="/c101270200-p100901/">攀枝花</a></li>
                                                        <li><a href="/c101270300-p100901/">自贡</a></li>
                                                        <li><a href="/c101270400-p100901/">绵阳</a></li>
                                                        <li><a href="/c101270500-p100901/">南充</a></li>
                                                        <li><a href="/c101270600-p100901/">达州</a></li>
                                                        <li><a href="/c101270700-p100901/">遂宁</a></li>
                                                        <li><a href="/c101270800-p100901/">广安</a></li>
                                                        <li><a href="/c101270900-p100901/">巴中</a></li>
                                                        <li><a href="/c101271000-p100901/">泸州</a></li>
                                                        <li><a href="/c101271100-p100901/">宜宾</a></li>
                                                        <li><a href="/c101271200-p100901/">内江</a></li>
                                                        <li><a href="/c101271300-p100901/">资阳</a></li>
                                                        <li><a href="/c101271400-p100901/">乐山</a></li>
                                                        <li><a href="/c101271500-p100901/">眉山</a></li>
                                                        <li><a href="/c101271600-p100901/">雅安</a></li>
                                                        <li><a href="/c101271700-p100901/">德阳</a></li>
                                                        <li><a href="/c101271800-p100901/">广元</a></li>
                                                        <li><a href="/c101271900-p100901/">阿坝</a></li>
                                                        <li><a href="/c101272000-p100901/">凉山</a></li>
                                                        <li><a href="/c101272100-p100901/">甘孜</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101280100-p100901/">广州</a></li>
                                                        <li><a href="/c101280200-p100901/">韶关</a></li>
                                                        <li><a href="/c101280300-p100901/">惠州</a></li>
                                                        <li><a href="/c101280400-p100901/">梅州</a></li>
                                                        <li><a href="/c101280500-p100901/">汕头</a></li>
                                                        <li><a href="/c101280600-p100901/">深圳</a></li>
                                                        <li><a href="/c101280700-p100901/">珠海</a></li>
                                                        <li><a href="/c101280800-p100901/">佛山</a></li>
                                                        <li><a href="/c101280900-p100901/">肇庆</a></li>
                                                        <li><a href="/c101281000-p100901/">湛江</a></li>
                                                        <li><a href="/c101281100-p100901/">江门</a></li>
                                                        <li><a href="/c101281200-p100901/">河源</a></li>
                                                        <li><a href="/c101281300-p100901/">清远</a></li>
                                                        <li><a href="/c101281400-p100901/">云浮</a></li>
                                                        <li><a href="/c101281500-p100901/">潮州</a></li>
                                                        <li><a href="/c101281600-p100901/">东莞</a></li>
                                                        <li><a href="/c101281700-p100901/">中山</a></li>
                                                        <li><a href="/c101281800-p100901/">阳江</a></li>
                                                        <li><a href="/c101281900-p100901/">揭阳</a></li>
                                                        <li><a href="/c101282000-p100901/">茂名</a></li>
                                                        <li><a href="/c101282100-p100901/">汕尾</a></li>
                                                        <li><a href="/c101282200-p100901/">东沙群岛</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101290100-p100901/">昆明</a></li>
                                                        <li><a href="/c101290200-p100901/">曲靖</a></li>
                                                        <li><a href="/c101290300-p100901/">保山</a></li>
                                                        <li><a href="/c101290400-p100901/">玉溪</a></li>
                                                        <li><a href="/c101290500-p100901/">普洱</a></li>
                                                        <li><a href="/c101290700-p100901/">昭通</a></li>
                                                        <li><a href="/c101290800-p100901/">临沧</a></li>
                                                        <li><a href="/c101290900-p100901/">丽江</a></li>
                                                        <li><a href="/c101291000-p100901/">西双版纳</a></li>
                                                        <li><a href="/c101291100-p100901/">文山</a></li>
                                                        <li><a href="/c101291200-p100901/">红河</a></li>
                                                        <li><a href="/c101291300-p100901/">德宏</a></li>
                                                        <li><a href="/c101291400-p100901/">怒江</a></li>
                                                        <li><a href="/c101291500-p100901/">迪庆</a></li>
                                                        <li><a href="/c101291600-p100901/">大理</a></li>
                                                        <li><a href="/c101291700-p100901/">楚雄</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101300100-p100901/">南宁</a></li>
                                                        <li><a href="/c101300200-p100901/">崇左</a></li>
                                                        <li><a href="/c101300300-p100901/">柳州</a></li>
                                                        <li><a href="/c101300400-p100901/">来宾</a></li>
                                                        <li><a href="/c101300500-p100901/">桂林</a></li>
                                                        <li><a href="/c101300600-p100901/">梧州</a></li>
                                                        <li><a href="/c101300700-p100901/">贺州</a></li>
                                                        <li><a href="/c101300800-p100901/">贵港</a></li>
                                                        <li><a href="/c101300900-p100901/">玉林</a></li>
                                                        <li><a href="/c101301000-p100901/">百色</a></li>
                                                        <li><a href="/c101301100-p100901/">钦州</a></li>
                                                        <li><a href="/c101301200-p100901/">河池</a></li>
                                                        <li><a href="/c101301300-p100901/">北海</a></li>
                                                        <li><a href="/c101301400-p100901/">防城港</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101310100-p100901/">海口</a></li>
                                                        <li><a href="/c101310200-p100901/">三亚</a></li>
                                                        <li><a href="/c101310300-p100901/">三沙</a></li>
                                                        <li><a href="/c101310400-p100901/">儋州</a></li>
                                                        <li><a href="/c101310500-p100901/">五指山</a></li>
                                                        <li><a href="/c101310600-p100901/">琼海</a></li>
                                                        <li><a href="/c101310700-p100901/">文昌</a></li>
                                                        <li><a href="/c101310800-p100901/">万宁</a></li>
                                                        <li><a href="/c101310900-p100901/">东方</a></li>
                                                        <li><a href="/c101311000-p100901/">定安</a></li>
                                                        <li><a href="/c101311100-p100901/">屯昌</a></li>
                                                        <li><a href="/c101311200-p100901/">澄迈</a></li>
                                                        <li><a href="/c101311300-p100901/">临高</a></li>
                                                        <li><a href="/c101311400-p100901/">白沙</a></li>
                                                        <li><a href="/c101311500-p100901/">昌江黎族自治县</a></li>
                                                        <li><a href="/c101311600-p100901/">乐东</a></li>
                                                        <li><a href="/c101311700-p100901/">陵水</a></li>
                                                        <li><a href="/c101311800-p100901/">保亭</a></li>
                                                        <li><a href="/c101311900-p100901/">琼中</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101341100-p100901/">台湾</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101140100-p100901/">拉萨</a></li>
                                                        <li><a href="/c101140200-p100901/">日喀则</a></li>
                                                        <li><a href="/c101140300-p100901/">昌都</a></li>
                                                        <li><a href="/c101140400-p100901/">林芝</a></li>
                                                        <li><a href="/c101140500-p100901/">山南</a></li>
                                                        <li><a href="/c101140600-p100901/">那曲</a></li>
                                                        <li><a href="/c101140700-p100901/">阿里</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>
                                                        <li><a href="/c101320300-p100901/">香港</a></li>
                                                </ul>
                                            </li>
                                            <li class="child-li">
                                                <ul>ed
                                                        <li><a href="/c101330100-p100901/">澳门</a></li>
                                                </ul>
                                            </li>
                            </ul>
                        </div>
                    <div class="iScrollVerticalScrollbar iScrollLoneScrollbar" style="overflow: hidden; pointer-events: none; transform: translateZ(0px); transition-duration: 0ms; opacity: 0;"><div class="iScrollIndicator" style="transition-duration: 0ms; display: none; height: 8px; transform: translate(0px, -8px) translateZ(0px); transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);"></div></div></div>
                </div>
            </div>
        </div>
        <div class="filter-bar">
            <ul>
                <li @click="showList" :class="{'selected':checked}">经验</li>
                <li>学历</li>
                <li>薪资</li>
                <li>规模</li>
                <li>融资</li>
            </ul>
        </div>
        <!-- display:block 激活遮罩-->
        <div class="filter-content" style="touch-action: none;" v-bind:style="{ display: activeDisplay}">
            <div class="scroller" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
                <ul>
                    <!-- selected 激活下拉 -->
                    <li class="filter-li " :class="{'selected':checked}">
                        <ul>
                                       <li><a href="/c101280100-p100901/" class="selected" ka="sel-exp-0">不限</a></li>
                                       <li><a href="/c101280100-p100901/e_108/" ka="sel-exp-108">在校生</a></li>
                                       <li><a href="/c101280100-p100901/e_102/" ka="sel-exp-102">应届生</a></li>
                                       <li><a href="/c101280100-p100901/e_103/" ka="sel-exp-103">1年以内</a></li>
                                       <li><a href="/c101280100-p100901/e_104/" ka="sel-exp-104">1-3年</a></li>
                                       <li><a href="/c101280100-p100901/e_105/" ka="sel-exp-105">3-5年</a></li>
                                       <li><a href="/c101280100-p100901/e_106/" ka="sel-exp-106">5-10年</a></li>
                                       <li><a href="/c101280100-p100901/e_107/" ka="sel-exp-107">10年以上</a></li>
                        </ul>
                    </li>
                    <li class="filter-li">
                        <ul>
                                    <li><a href="/c101280100-p100901/" class="selected" ka="sel-degree-0">不限</a></li>
                                    <li><a href="/c101280100-p100901/d_209/" ka="sel-degree-209">初中及以下</a></li>
                                    <li><a href="/c101280100-p100901/d_208/" ka="sel-degree-208">中专/中技</a></li>
                                    <li><a href="/c101280100-p100901/d_206/" ka="sel-degree-206">高中</a></li>
                                    <li><a href="/c101280100-p100901/d_202/" ka="sel-degree-202">大专</a></li>
                                    <li><a href="/c101280100-p100901/d_203/" ka="sel-degree-203">本科</a></li>
                                    <li><a href="/c101280100-p100901/d_204/" ka="sel-degree-204">硕士</a></li>
                                    <li><a href="/c101280100-p100901/d_205/" ka="sel-degree-205">博士</a></li>
                        </ul>
                    </li>
                    <li class="filter-li">
                        <ul>
                                    <li><a href="/c101280100-p100901/" class="selected" ka="sel-salary-0">不限</a></li>
                                    <li><a href="/c101280100-p100901/y_1/" ka="sel-salary-1">3K以下</a></li>
                                    <li><a href="/c101280100-p100901/y_2/" ka="sel-salary-2">3-5K</a></li>
                                    <li><a href="/c101280100-p100901/y_3/" ka="sel-salary-3">5-10K</a></li>
                                    <li><a href="/c101280100-p100901/y_4/" ka="sel-salary-4">10-15K</a></li>
                                    <li><a href="/c101280100-p100901/y_5/" ka="sel-salary-5">15-20K</a></li>
                                    <li><a href="/c101280100-p100901/y_6/" ka="sel-salary-6">20-30K</a></li>
                                    <li><a href="/c101280100-p100901/y_7/" ka="sel-salary-7">30-50K</a></li>
                                    <li><a href="/c101280100-p100901/y_8/" ka="sel-salary-8">50K以上</a></li>
                        </ul>
                    </li>
                    <li class="filter-li">
                        <ul>
                                    <li><a href="/c101280100-p100901/" class="selected" ka="sel-scale-0">不限</a></li>

                                    <li><a href="/c101280100-p100901/s_301/" ka="sel-scale-301">0-20人</a></li>

                                    <li><a href="/c101280100-p100901/s_302/" ka="sel-scale-302">20-99人</a></li>

                                    <li><a href="/c101280100-p100901/s_303/" ka="sel-scale-303">100-499人</a></li>

                                    <li><a href="/c101280100-p100901/s_304/" ka="sel-scale-304">500-999人</a></li>

                                    <li><a href="/c101280100-p100901/s_305/" ka="sel-scale-305">1000-9999人</a></li>

                                    <li><a href="/c101280100-p100901/s_306/" ka="sel-scale-306">10000人以上</a></li>

                        </ul>
                    </li>
                    <li class="filter-li">
                        <ul>
                                    <li><a href="/c101280100-p100901/" class="selected" ka="sel-stage-0">不限</a></li>
                                    <li><a href="/c101280100-p100901/t_801/" ka="sel-stage-801">未融资</a></li>
                                    <li><a href="/c101280100-p100901/t_802/" ka="sel-stage-802">天使轮</a></li>
                                    <li><a href="/c101280100-p100901/t_803/" ka="sel-stage-803">A轮</a></li>
                                    <li><a href="/c101280100-p100901/t_804/" ka="sel-stage-804">B轮</a></li>
                                    <li><a href="/c101280100-p100901/t_805/" ka="sel-stage-805">C轮</a></li>
                                    <li><a href="/c101280100-p100901/t_806/" ka="sel-stage-806">D轮及以上</a></li>
                                    <li><a href="/c101280100-p100901/t_807/" ka="sel-stage-807">已上市</a></li>
                                    <li><a href="/c101280100-p100901/t_808/" ka="sel-stage-808">不需要融资</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        <div class="iScrollVerticalScrollbar iScrollLoneScrollbar" style="overflow: hidden; pointer-events: none; transform: translateZ(0px); transition-duration: 0ms; opacity: 0;"><div class="iScrollIndicator" style="transition-duration: 0ms; display: none; height: 8px; transform: translate(0px, -8px) translateZ(0px); transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);"></div></div></div>
    </div>
</template>

<script>
export default {
  name: "ListMain",
    data: function() {
    return {
      checked:0,
      activeDisplay:"none"
    };
  },
  methods: {
    showList: function() {

      if(this.checked==1){
        this.checked=0;
        this.activeDisplay="none";
      }else{
        this.checked=1;
        this.activeDisplay="block";
      }
    }
  }
};
</script>

<style scoped>
/* 箭头方向 */
.filter-bar ul li.selected:after {
    transform: rotate(45deg);
    top: 0;
}
.filter-bar ul li.selected {
    color: #484848;
}

  /*! Header */
a,button,div,form,i,input,li,p,ul{padding:0;margin:0;-box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
li,ul{list-style:none;}
a{text-decoration:none;color:#414a60;}
a:active,a:focus,a:hover,button,input{outline:0;}
a:active{color:#55cbc4;text-decoration:none;-webkit-transition:all linear .2s;transition:all linear .2s;}
img{border:none;}
button,input{font-family:arial,verdana,helvetica,Microsoft Yahei,sans-serif;-webkit-font-smoothing:antialiased;}
button,input[type=search]{-webkit-appearance:none;}
input::-webkit-input-placeholder{color:#c0c4cf;}
body ::-webkit-scrollbar-track-piece{background-color:#fff;border-radius:0;}
body ::-webkit-scrollbar{width:4px;}
body ::-webkit-scrollbar-thumb{height:50px;background-color:#ddd;border-radius:4px;}
body ::-webkit-scrollbar-thumb:hover{height:50px;background-color:#ccc;border-radius:4px;}
.icon-close{display:inline-block;width:24px;height:24px;position:relative;vertical-align:top;}
.icon-close:after,.icon-close:before{content:'';position:absolute;width:16px;height:1px;background:#363636;transform:rotate(45deg);left:4px;top:12px;}
.icon-close:after{transform:rotate(-45deg);}
.btn:active,.btn:hover{-webkit-transition:all linear .2s;transition:all linear .2s;}
.ipt-wrap{position:relative;}
.btn{display:inline-block;height:34px;line-height:34px;border:1px #5dd5c8 solid;font-size:14px;color:#fff;background-color:#5dd5c8;text-align:center;cursor:pointer;-webkit-user-select:none;}
.btn:active{background-color:#5de3d3;border-color:#5de3d3;color:#fff;}
#header:after{content:'';display:block;overflow:hidden;visibility:hidden;clear:both;}
.btn-search{display:inline-block;background-image:url(https://static.zhipin.com/zhipin-geek/v89/h5/wap/images/icons.png);background-repeat:no-repeat;background-size:50% auto;}
#header{width:100%;background:#fff;position:relative;}
.top-search{float:right;padding-top:11px;padding-right:20px;padding-bottom:10px;}
.top-search .ipt-wrap{position:relative;}
.top-search .ipt-search{width:120px;height:26px;padding:2px 13px;border:1px #62d5c8 solid;border-radius:15px;font-size:13px;vertical-align:top;}
.top-search .btn-search{position:absolute;right:2px;top:1px;width:30px;height:24px;vertical-align:top;background-color:transparent;border:0;background-position:center 4px;background-size:17px auto;}
.icon-close{display:inline-block;width:23px;height:23px;position:relative;}
.icon-close:after,.icon-close:before{content:'';position:absolute;width:14px;height:1px;background:#bbc5cc;-webkit-transform:rotate(45deg);transform:rotate(45deg);left:5px;top:11px;}
.icon-close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);}
input[type=search]::-ms-clear{display:none;}
.serach-bar{height:55px;width:100%;}
.serach-bar .top-search{float:initial;padding:0;}
.serach-bar .top-search .ipt-wrap{position:relative;padding:0 60px 0 49px;padding-top:13px;}
.serach-bar .top-search .ipt-search{width:100%;height:29px;background-color:#f4f7f9;border:none;font-size:14px;color:#8b96a6;line-height:19px;padding:5px 13px 5px 65px;}
.serach-bar .icon-home{display:block;position:absolute;left:18px;top:18px;}
.serach-bar .icon-home img{width:18px;height:18px;}
.serach-bar .top-search .btn-search{color:#5dd5ca;background:0 0;position:absolute;right:0;top:0;font-size:15px;line-height:55px;height:55px;display:block;width:60px;}
.serach-bar .top-search .icon-close{position:absolute;top:16px;right:67px;display:none;}
.serach-bar .city-text{display:block;position:absolute;left:62px;top:20px;font-size:12px;color:#333;border-right:solid 1px rgba(0,0,0,.05);width:44px;height:15px;line-height:15px;}
.serach-bar .city-text:after{content:"";display:inline-block;width:3px;height:3px;border-left:solid 1px #797979;border-top:solid 1px #797979;transform:rotate(-135deg);position:relative;top:-3px;left:6px;}
.serach-bar .city-list-win{top:0;left:0;position:fixed;width:100%;height:100%;z-index:1;background:#fff;transition:all .5s ease 0s;transform:translateY(100%);}
.serach-bar .city-list-win .city-list-title{height:50px;line-height:48px;padding:0 10px;box-sizing:border-box;text-align:center;color:#333;font-size:16px;display:none;}
.serach-bar .city-list-title .back{float:left;margin-right:5px;height:12px;width:12px;background:url(https://static.zhipin.com/zhipin-geek/v89/h5/wap/images/icon_close.png);background-size:100% 100%;position:relative;top:17px;left:10px;}
.serach-bar .city-list-win .city-box,.serach-bar .city-list-win .city-child-box{height:calc(100% - 50px);width:50%;overflow:hidden;position:absolute;top:50px;display:none;}
.serach-bar .city-list-win .city-child-box{right:0;background:#f8f8fa;}
.serach-bar .city-list-win .city-box::-webkit-scrollbar,.serach-bar .city-list-win .city-child-box::-webkit-scrollbar{width:0;}
.child-li li,.serach-bar .city-list-win .city-box li{color:#4b4b4b;height:60px;line-height:60px;padding:0;}
.serach-bar .city-list-win .city-box li{padding:0 25px;}
.serach-bar .city-list-win .city-child-box .child-li{display:none;}
.filter-content .selected{display:block !important;}
.serach-bar .city-list-win .city-box li.selected{background:#f8f8fa;}
.serach-bar .city-list-win .city-child-box li a{display:block;width:100%;height:100%;padding:0 25px;box-sizing:border-box;}
.serach-bar .city-list-win .city-child-box li a:active{color:#333;background:#efefef;}
.filter-bar{border-top:solid 1px #ebebeb;border-bottom:solid 1px #ebebeb;}
.filter-bar ul{display:flex;height:37px;line-height:37px;}
.filter-bar ul li{flex:1;text-align:center;box-sizing:border-box;font-size:12px;text-indent:-5px;color:#aaa;}
.filter-bar ul li:after{content:"";display:inline-block;width:4px;height:4px;border-left:solid 1px #797979;border-top:solid 1px #797979;transform:rotate(-135deg);position:relative;top:-3px;left:5px;transition:all .3s ease 0s;}
.filter-content{position:fixed;width:100%;height:calc(100% - 93px);background:rgba(0,0,0,.5);z-index:2;box-sizing:border-box;display:none;overflow:hidden;}
.filter-content li.filter-li{background:#fff;display:none;}
.filter-content li.filter-li>ul>li{height:60px;line-height:60px;}
.filter-content li.filter-li>ul>li>a{display:block;width:100%;height:100%;padding:0 20px;color:#aaa;}
.filter-content li.filter-li>ul>li>a:active{background:#f8f8fa;color:#4b4b4b;}
.filter-content li.filter-li>ul>li>a.selected{background:#f8f8fa;color:#4b4b4b;}
.scroller{position:absolute;z-index:1;-webkit-tap-highlight-color:transparent;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;-webkit-text-size-adjust:none;text-size-adjust:none;}
.iScrollVerticalScrollbar{position:absolute;z-index:9999;width:2px;bottom:2px;top:2px;right:2px;overflow:hidden;}
.iScrollVerticalScrollbar{position:absolute;z-index:9999;width:2px;bottom:2px;top:2px;right:2px;overflow:hidden;}
.iScrollIndicator{position:absolute;border-width:1px;border-style:solid;border-color:transparent;border-radius:8px;}
.iScrollVerticalScrollbar .iScrollIndicator{width:100%;background:rgba(0,0,0,.3);border-radius:10px;}
</style>