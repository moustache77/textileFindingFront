<template>
  <div class="search-model-rank" style="display: block;">
      <!-- <div class="container_main">  -->
          <!-- <div class="el-row" style="height: 770px;margin-left: -10px;margin-right: -10px;box-sizing: border-box;position: relative;"> -->
              <div class="el-col el-col-22"  style="padding-left: 10px;padding-right: 10px;float: left;box-sizing: border-box;display: block;">
                  <p class="retrieves_title">科研情报--专利受让机构</p>
                  <div class="echarts1" id="chart1">
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
      this.getPatent();
    //   this.getWenxian();
    },
    methods: {
        getPatent() {
          var dom = document.getElementById("chart1");
          var myChart4 = this.$echarts.init(dom);
          var app = {};
          var option = null;
          // var assignee = [];
          myChart4.showLoading();
          $.get("http://124.223.32.208:8000/media/json_files/patentAss.json", function(data) {

            myChart4.hideLoading();
            console.log(data);
            var assignee = [];
            var C12m_count = [];
            var all_count = [];
            // assignee = [];
            // C12m_count = [];
            // all_count = [];
            // let{assignee,C12m_count,all_count}=data
            for (let i = 0; i < data.length; i++) {
              // var assignee1 = [];
              // var C12m_count1 = [];
              // var all_count1 = [];
              assignee.push(data[i].assignee);
              console.log(assignee);
              C12m_count.push(data[i].C12m_count);
              all_count.push(data[i].all_count);
      
            }
            //  assignee = assignee.reverse();
            C12m_count = C12m_count.reverse();
            all_count = all_count.reverse();
            //  console.log(assignee1);

            myChart4.setOption(
              option = {
                color: ["#2f89cf", "#ee6666"],
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    type: 'shadow'
                  }
                },
                legend: {
                   top: "2%",
                  right: "38%",
                  data: ['过去12个月专利数', '2005年起专利数'],
                  textStyle: {
                    color: "#616161",
                    fontSize: 16,
                  }
                },
                grid: {
                  x: 0,
                  y2: 0,
                  left: '25%',
                  right: '19%',
                  bottom: '2%',
                  top: '10%',
                  containLabel: true,
                },
                xAxis: [{
                  type: 'value',
                  axisLabel: {
                    textStyle: {
                      show: true,
                      fontFamily: '微软雅黑',
                      color: "#5b5b5b",
                      fontSize: '18',
                    },
                  }
                }],
                yAxis: [{
                  type: 'category',
                  axisTick: {
                    // show: false,
                    alignWithLabel: true,
                  },
                  data: assignee,
                  axisLabel: {
                    textStyle: {
                      show: true,
                      fontFamily: '微软雅黑',
                      color: "#5b5b5b",
                      fontSize: '18',
                      rotate: 60,
                      interval: 0,
                    },
                  }
                }],
                series: [{
                    name: '2005年起专利数',
                    type: 'bar',
                    stack: 'Total',
                    barWidth: '90%',
                    barCategoryGap: '40%',
                    itemStyle: {
                      barBorderRadius: 3,
                    },
                    label: {
                      show: false
                    },
                    emphasis: {
                      focus: 'series'
                    },
                    data: all_count
                  },
                  {
                    name: '过去12个月专利数',
                    type: 'bar',
                    stack: 'Total',
                    barWidth: '90%',
                    barCategoryGap: '40%',
                    itemStyle: {
                      barBorderRadius: 3,
                    },
                    label: {
                      show: false,
                      position: 'left'
                    },
                    emphasis: {
                      focus: 'series'
                    },
                    data: C12m_count
                  }
                ]
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
    height: 1200px;
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
    .el-col-22 {
    width: 1430px;
    height: 900px;
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
    .echarts1 {
        height: 750px;
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