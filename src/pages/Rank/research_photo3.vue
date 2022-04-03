<template>
  <div class="search-model-rank" style="display: block;">
      <!-- <div class="container_main">  -->
          <!-- <div class="el-row" style="height: 770px;margin-left: -10px;margin-right: -10px;box-sizing: border-box;position: relative;"> -->
              <div class="el-col el-col-21"  style="padding-left: 10px;padding-right: 10px;float: left;box-sizing: border-box;display: block;">
                  <p class="retrieves_title">科研情报--技术发布趋势</p>
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
      this.getClaim();
    //   this.getWenxian();
    },
    methods: {
        getClaim() {
          var myChart = this.$echarts.init(document.getElementById("chart"));
          var data = {
            year: [
              [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
              [40, 64, 191, 324, 290, 130, 289, 213, 180, 200, 180, 79],
              [10, 34, 71, 24, 90, 30, 60, 63, 80, 10, 80, 39],

            ]
          };

          // 2. 指定配置和数据
          var option = {
            color: ["#ADFF2F", "#00f2f1", "#ed3f35"],
            tooltip: {
              // 通过坐标轴来触发
              trigger: "axis"
            },
            legend: {
              // 距离容器10%
              top: "2%",
              right: "38%",
              // 修饰图例文字的颜色
              textStyle: {
                color: "#616161",
                fontSize: 16,
              }
              // 如果series 里面设置了name，此时图例组件的data可以省略
              // data: ["邮件营销", "联盟广告"]
            },
            grid: {
              top: "10%",
              left: "10%",
              right: "10%",
              bottom: "5%",
              show: true,
              borderColor: "#012f4a",
              containLabel: true
            },

            xAxis: {
              type: "category",
              boundaryGap: false,
              data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
              ],
              // 去除刻度
              axisTick: {
                show: false
              },
              // 修饰刻度标签的颜色
              axisLabel: {
                // color: "rgba(255,255,255,.7)"
                color: "#5b5b5b",
                fontSize: "18"
              },
              // 去除x坐标轴的颜色
              axisLine: {
                show: false
              }
            },
            yAxis: {
              type: "value",
              // 去除刻度
              axisTick: {
                show: false
              },
              // 修饰刻度标签的颜色
              axisLabel: {
                // color: "rgba(255,255,255,.7)"
                color: "#5b5b5b",
                fontSize: "18"
              },
              // 修改y轴分割线的颜色
              splitLine: {
                lineStyle: {
                  color: "#012f4a"
                }
              }
            },
            series: [{
                name: "成果转化",
                fontSize: 12,
                type: "line",
                stack: "总量",
                smooth: true,
                data: data.year[2]
              },
              {
                name: "纺织文献",
                fontSize: "12",
                type: "line",
                stack: "总量",
                // 是否让线条圆滑显示
                smooth: true,
                data: data.year[0]
              },
              {
                name: "纺织专利",
                fontSize: 12,
                type: "line",
                stack: "总量",
                smooth: true,
                data: data.year[1]
              },

            ]
          };
          // 3. 把配置和数据给实例对象
          myChart.setOption(option);

          // 重新把配置好的新数据给实例对象
          myChart.setOption(option);
          window.addEventListener("resize", function() {
            myChart.resize();
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