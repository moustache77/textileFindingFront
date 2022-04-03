<template>
  <div class="search-model-rank" style="display: block;">
      <!-- <div class="container_main">  -->
          <!-- <div class="el-row" style="height: 770px;margin-left: -10px;margin-right: -10px;box-sizing: border-box;position: relative;"> -->
              <div class="el-col el-col-21"  style="padding-left: 10px;padding-right: 10px;float: left;box-sizing: border-box;display: block;">
                  <p class="retrieves_title">科研情报--文献关键词词云</p>
                  <div class="echarts" id="chart">
                  </div>
              </div>
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
    mounted() {
      this.getWordcloud();
    //   this.getWenxian();
    },
    methods: {
        getWordcloud() {
            var dom = document.getElementById("chart");
            var myChart11 = this.$echarts.init(dom);
            var app = {};
            var option = null;
            myChart11.showLoading();
            $.get("http://124.223.32.208:8000/api/chart/generateWordCloud/", function(data) {
                let JsonList = [];
                for (let word of data.data) {
                    JsonList.push(word)
                }

                myChart11.hideLoading();
                myChart11.setOption(
                    option = {
                        tooltip: {
                            show: true
                        },
                        series: [{
                            name: '纺织技术词云',
                            type: 'wordCloud',
                            sizeRange: [30, 80], //文字范围
                            //文本旋转范围，文本将通过rotationStep45在[-90,90]范围内随机旋转
                            rotationRange: [-45, 90],
                            rotationStep: 45,
                            textRotation: [0, 45, 90, -45],
                            gridSize: 30, 
                            //形状
                            shape: 'circle',
                            textStyle: {
                                normal: {
                                    color: function() { //文字颜色的随机色
                                        return 'rgb(' + [
                                            Math.round(Math.random() * 250),
                                            Math.round(Math.random() * 250),
                                            Math.round(Math.random() * 250)
                                        ].join(',') + ')';
                                    }
                                },
                                //悬停上去的字体的阴影设置
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowColor: '#333'
                                }
                            },
                            data: JsonList
                        }]
                    }
                );
            });
        },
    }
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
    background-color: #eeeef9;
    }
    .container_main {
    height: 850px;
    width: 1800px;
    margin: 0 auto;
    color: #fff;
    box-sizing: border-box;
    padding: 30px 0 0 0;
    border-radius: 4px;
    border: 3px solid #878cd6;
    }
    .el-row::after, .el-row::before {
    display: table;
    }
    .el-col-21 {
    width: 1430px;
    height: 850px;
    margin-left: 100px; 
    border-radius: 20px;
    background-color: #fff;
    // border: 3px solid #878cd6;
    box-shadow: 0 5px 202px rgba(0, 0, 0,0.1);
    }
    // .el-col-3 {
    // float: right;
    // width: 18%; 
    // height: 50%;
    // border-radius: 20px;
    // background-color: #fff;
    // border: 3px solid #878cd6;
    // box-shadow: 0 5px 202px rgba(0, 0, 0,0.1);
    // }
    // .catalog-main {
    // box-sizing: border-box;
    // background: #fff;
    // display: inline-block;
    // width: 100%;
    // height: 100%;
    // border-radius: 12px;
    // box-shadow: 6px 6px 10px 2px rgb(218 224 237 / 80%), 6px 6px 10px 2px rgb(238 241 248 / 80%);
    // }
    .retrieves_title {
        width: 90%;
        height: 50px;
        letter-spacing: 2px;
        margin-top: 20px;
        margin-left: 50px;
        font-size: 30px;
        // font-weight: 700;
        color: #002076;
        // background: #002076;
    }
    .echarts {
        height: 700px;
        width: 100%;
        margin-top: 20px;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        position: relative;
        border-top: 3px solid #ccc ;
        // border-bottom: 3px solid #ccc ;
        // background: #002076;
    }
    

</style>