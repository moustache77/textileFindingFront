<template>
  <div class="search-model-rank" style="display: block;background: #eeeef9;">
      <!-- <div class="container_main"> -->
          <!-- <div class="el-row" style="height: 770px;margin-left: -10px;margin-right: -10px;box-sizing: border-box;position: relative;"> -->
              <!-- <div class="el-col el-col-21"  style="padding-left: 10px;padding-right: 10px;float: left;box-sizing: border-box;display: block;"> -->
                  <!-- <p class="retrieves_title"></p> -->
                  <!-- <div class="echarts" id="chart"> -->

                  <!-- </div> -->
              <!-- </div> -->
              <div class="el-col el-col-3" style="padding-left: 10px;padding-right: 10px;">
                  <!-- <div class="catalog-main"> -->
                      <p class="theme">科研情报</p>
                      <ul>
                          <li class="photo" >
                                <router-link to='/rank/research/research_photo1' exact>
                                <span class="tag"></span>
                                文献关键词词云
                              </router-link>
                          </li>
                          <li class="photo">
                              <router-link to='/rank/research/research_photo2' exact>
                                <span class="tag"></span>
                                文献类别
                              </router-link>
                          </li>
                          <li class="photo">
                              <router-link to='/rank/research/research_photo3' exact>
                                <span class="tag"></span>
                                技术发布趋势
                              </router-link>
                          </li>
                          <li class="photo">
                              <router-link to='/rank/research/research_photo4' exact>
                                <span class="tag"></span>
                                专利申请与出版趋势
                              </router-link>
                          </li>
                          <li class="photo">
                              <router-link to='/rank/research/research_photo5' exact>
                                <span class="tag"></span>
                                专利受让机构
                              </router-link>
                          </li>
                      </ul>

                  <!-- </div> -->
              </div>
              <router-view></router-view>
          <!-- </div> -->
      <!-- </div> -->
  </div>
</template>

<script>
import Axios from 'axios'
import $ from 'jquery'
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
export default {
    // created() {
    //     const route = this.$route.matched.find(item => item.name === this.$options.name)
    //     this.$store.dispatch('tagsView/addCachedView', route)

    // },
//     methods: {
//         getWordcloud() {
//             var dom = document.getElementById("chart");
//             var myChart11 = this.$echarts.init(dom);
//             var app = {};
//             var option = null;
//             myChart11.showLoading();
//             $.get("http://124.223.32.208:8000/api/chart/generateWordCloud/", function(data) {
//                 let JsonList = [];
//                 for (let word of data.data) {
//                     JsonList.push(word)
//                 }

//                 myChart11.hideLoading();
//                 myChart11.setOption(
//                     option = {
//                         tooltip: {
//                             show: true
//                         },
//                         series: [{
//                             name: '纺织技术词云',
//                             type: 'wordCloud',
//                             sizeRange: [30, 80], //文字范围
//                             //文本旋转范围，文本将通过rotationStep45在[-90,90]范围内随机旋转
//                             rotationRange: [-45, 90],
//                             rotationStep: 45,
//                             textRotation: [0, 45, 90, -45],
//                             gridSize: 9, 
//                             //形状
//                             shape: 'circle',
//                             textStyle: {
//                                 normal: {
//                                     color: function() { //文字颜色的随机色
//                                         return 'rgb(' + [
//                                             Math.round(Math.random() * 250),
//                                             Math.round(Math.random() * 250),
//                                             Math.round(Math.random() * 250)
//                                         ].join(',') + ')';
//                                     }
//                                 },
//                                 //悬停上去的字体的阴影设置
//                                 emphasis: {
//                                     shadowBlur: 10,
//                                     shadowColor: '#333'
//                                 }
//                             },
//                             data: JsonList
//                         }]
//                     }
//                 );
//             });
//         },
//         getWenxian() {
//             var dom = document.getElementById("chart");
//             var myChart = this.$echarts.init(dom);
//             var app = {};
//             var option = null;
//             myChart.showLoading();
//             $.get('http://124.223.32.208:8000/api/chart/getBarData/', function(data) {
//                 var datas = data.bar;
//                 let x_data = [];
//                 let y_data = [];
//                 for (let c of datas) {
//                     x_data.push(c.category);
//                     y_data.push(c.count);
//                 }


//                 var x_data_inno = [];
//                 var y_data_inno = [];
//                 var data_ino = data.bar_inno;
//                 for (let inno of data_ino) {
//                     x_data_inno.push(inno.category);
//                     y_data_inno.push(inno.count);
//                 }

//                 myChart.hideLoading();
//                 myChart.setOption(
//                     option = {
//                         color: ["#2f89cf"],
//                         tooltip: {
//                             trigger: "axis",
//                             axisPointer: {
//                                 // 坐标轴指示器，坐标轴触发有效
//                                 type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
//                             }
//                         },
//                         grid: {
//                             left: "5px",
//                             top: "10px",
//                             right: "0%",
//                             bottom: "4%",
//                             containLabel: true
//                         },
//                         xAxis: [{
//                             type: "category",
//                             data: x_data,
//                             axisTick: {
//                                 alignWithLabel: true
//                             },
//                             axisLabel: {
//                                 textStyle: {
//                                     // color: "rgba(255,255,255,.6)",
//                                     color: "#5b5b5b",
//                                     fontSize: "16"
//                                 },
//                                 rotate: 60,
//                                 interval: 0, //代表显示所有x轴标签显示
//                             },
//                             axisLine: {
//                                 show: false
//                             }
//                         }],
//                         yAxis: [{
//                             type: "value",
//                             axisLabel: {
//                                 textStyle: {
//                                     // color: "rgba(255,255,255,.6)",
//                                     color: "#5b5b5b",
//                                     fontSize: "16"
//                                 }
//                             },
//                             axisLine: {
//                                 lineStyle: {
//                                     color: "rgba(255,255,255,.1)"
//                                     // width: 1,
//                                     // type: "solid"
//                                 }
//                             },
//                             splitLine: {
//                                 lineStyle: {
//                                     color: "rgba(255,255,255,.1)"
//                                 }
//                             }
//                         }],
//                         series: [{
//                             name: "文献数量",
//                             type: "bar",
//                             barWidth: "55%",
//                             data: y_data,
//                             itemStyle: {
//                                 barBorderRadius: 5
//                             }
//                         }]
//                     }
//                 );
//                 let dataAll = [{
//                         category: "总览",
//                         data: y_data,
//                         data_x: x_data,
//                     },
//                     {
//                         category: "创新前沿",
//                         data: y_data_inno,
//                         data_x: x_data_inno,
//                     }
//                 ];

//                 document.querySelector(".bar h2").addEventListener("click", function(e) {
//                     let i = e.target == this.children[0] ? 0 : 1;
//                     option.series[0].data = dataAll[i].data;
//                     option.xAxis[0].data = dataAll[i].data_x;
//                     myChart.setOption(option);
//                 });
//             });          
//         },
//     }
}
</script>

<style lang="less">
    *{
    margin: 0;
    padding: 0; 
   }
    .search-model-rank {
    width: 100%;
    // height: 100%;
    height: 1000px;
    margin:0px auto;
    // background-color: #eeeef9;
    }
    // .container_main {
    // height: 800px;
    // width: 1800px;
    // margin: 0 auto;
    // color: #fff;
    // box-sizing: border-box;
    // padding: 30px 0 0 0;
    // border-radius: 4px;
    // border: 3px solid #878cd6;
    // }
    // .el-row::after, .el-row::before {
    // display: table;
    // }
    // .el-col-21 {
    // width: 80%;
    // height: 100%;
    // border-radius: 20px;
    // background-color: #fff;
    // border: 3px solid #878cd6;
    // box-shadow: 0 5px 202px rgba(0, 0, 0,0.1);
    // }
    .el-col-3 {
    float: right;
    width: 18%; 
    height: 400px;
    margin-top: 20px;
    margin-right: 100px;
    border-radius: 20px;
    background-color: #fff;
    // border: 3px solid #878cd6;
    box-shadow: 0 5px 202px rgba(0, 0, 0,0.1);
    }
    // .catalog-main {
    // box-sizing: border-box;
    // background: #fff;
    // display: inline-block;
    // width: 100%;
    // height: 100%;
    // border-radius: 12px;
    // box-shadow: 6px 6px 10px 2px rgb(218 224 237 / 80%), 6px 6px 10px 2px rgb(238 241 248 / 80%);
    // }
    // .retrieves_title {
    //     width: 90%;
    //     height: 50px;
    //     letter-spacing: 2px;
    //     margin-top: 20px;
    //     margin-left: 20px;
    //     font-size: 18px;
    //     color: #002076;
    //     background: #002076;
    // }
    .echarts {
        height: 700px;
        width: 100%;
        margin-top: 20px;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        position: relative;
        // border-bottom: 3px solid #ccc ;
        // background: #002076;
    }
    .theme {
        width: 200px;
        margin: 10px auto;
        padding-bottom: 10px;
        font-size: 25px;
        // font-weight: 700;
        color: #002076;
        text-align: center;
        border-bottom: 3px solid #ccc ;
    }
    .photo {
        float: left;
        width: 220px;
        height: 26.67px;
        font-size: 20px;
        margin: 15px 20px;
        list-style: none;
    }
    .photo a{
        color: black;
        list-style: none;
        text-decoration: none;
    }
    .tag {
        float: left;
        width: 7px;
        height: 24px;
        margin-right: 10px;
        // background: #00a4ff;
    }
    .photo1 {
        float: left;
        color: brown;
        list-style: none;
        padding-left: 10px;
    }
    
    .active .tag{
        // border-bottom: 2px solid #00a4ff;
        background: #002076;
    }


</style>