<template>
  <div class="search-model-rank" style="display: block;">
      <!-- <div class="container_main">  -->
          <!-- <div class="el-row" style="height: 770px;margin-left: -10px;margin-right: -10px;box-sizing: border-box;position: relative;"> -->
              <div class="el-col el-col-21"  style="padding-left: 10px;padding-right: 10px;float: left;box-sizing: border-box;display: block;">
                  <p class="retrieves_title">科研情报--文献类别<a href="javascript:;" >总览</a>
            <a href="javacript:;"> 创新前沿</a></p>
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
      this.getWenxian();
    },
    methods: {
        getWenxian() {
            var dom = document.getElementById("chart");
            var myChart = this.$echarts.init(dom);
            var app = {};
            var option = null;
            myChart.showLoading();
            $.get('http://124.223.32.208:8000/api/chart/getBarData/', function(data) {
                var datas = data.bar;
                let x_data = [];
                let y_data = [];
                for (let c of datas) {
                    x_data.push(c.category);
                    y_data.push(c.count);
                }


                var x_data_inno = [];
                var y_data_inno = [];
                var data_ino = data.bar_inno;
                for (let inno of data_ino) {
                    x_data_inno.push(inno.category);
                    y_data_inno.push(inno.count);
                }

                myChart.hideLoading();
                myChart.setOption(
                    option = {
                        color: ["#2f89cf"],
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                // 坐标轴指示器，坐标轴触发有效
                                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        grid: {
                            left: '10%',
                            top: '10%',
                            right: '10%',
                            bottom: '1%',
                            show: true,
                            containLabel: true
                        },
                        xAxis: [{
                            type: "category",
                            data: x_data,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                textStyle: {
                                    // color: "rgba(255,255,255,.6)",
                                    color: "#5b5b5b",
                                    fontSize: "18"
                                },
                                rotate: 60,
                                interval: 0, //代表显示所有x轴标签显示
                            },
                            axisLine: {
                                show: false
                            }
                        }],
                        yAxis: [{
                            type: "value",
                            axisLabel: {
                                textStyle: {
                                    // color: "rgba(255,255,255,.6)",
                                    color: "#5b5b5b",
                                    fontSize: "18"
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "rgba(255,255,255,.1)"
                                    // width: 1,
                                    // type: "solid"
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: "rgba(255,255,255,.1)"
                                }
                            }
                        }],
                        series: [{
                            name: "文献数量",
                            type: "bar",
                            barWidth: "55%",
                            data: y_data,
                            itemStyle: {
                                barBorderRadius: 5
                            }
                        }]
                    }
                );
                let dataAll = [{
                        category: "总览",
                        data: y_data,
                        data_x: x_data,
                    },
                    {
                        category: "创新前沿",
                        data: y_data_inno,
                        data_x: x_data_inno,
                    }
                ];

                document.querySelector(".bar h2").addEventListener("click", function(e) {
                    let i = e.target == this.children[0] ? 0 : 1;
                    option.series[0].data = dataAll[i].data;
                    option.xAxis[0].data = dataAll[i].data_x;
                    myChart.setOption(option);
                });
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