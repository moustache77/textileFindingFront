<template>
  <div class="search-model-rank" style="display: block;">
      <!-- <div class="container_main">  -->
          <!-- <div class="el-row" style="height: 770px;margin-left: -10px;margin-right: -10px;box-sizing: border-box;position: relative;"> -->
              <div class="el-col el-col-21"  style="padding-left: 10px;padding-right: 10px;float: left;box-sizing: border-box;display: block;">
                  <p class="retrieves_title">科研情报--专利申请与出版趋势</p>
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
      this.getTrend();
    //   this.getWenxian();
    },
    methods: {
        getTrend() {
          var dom = document.getElementById("chart");
          var myChart5 = this.$echarts.init(dom);
          var app = {};
          var option = null;
          myChart5.showLoading();
          // $.get('http://124.223.32.208:8000/media/json_files/patentHistory.json').then((response) =>{
          //      console.log(response)
          //     this.treedata = response});
          $.get("http://124.223.32.208:8000/media/json_files/patentHistory.json", function(data) {

            myChart5.hideLoading();

            let applications_list = [];
            let publications_list = [];
            let year_list = []
            // let applications = 0
            // let publications = 0
            // for (let i = 1; i <= 17; i++) {
            // 	for (let m = 1; m <= 12; m++) {
            // 		applications += data[m * i - 1].applications;
            // 		publications += data[m * i - 1].publications;
            // 	}
            // 	year_list.push(data[i * 12].YYYYMM.slice(0, 4))
            // 	applications_list.push(applications);
            // 	publications_list.push(publications);
            // }
            for (let d of data) {
              applications_list.push(d.applications);
              publications_list.push(d.publications);
              year_list.push(d.YYYYMM)
            }


            myChart5.setOption(
              option = {
                // color: ["#1498b9", "#ed3f35"],
                color: ["#506fc0", "#ee6666"],
                tooltip: {
                  trigger: 'axis'
                },
                grid: {
                  top: "10%",
                  left: "10%",
                  right: "10%",
                  bottom: "4%",
                  show: true,
                  borderColor: "#012f4a",
                  containLabel: true
                },
                legend: {
                  top: "2%",
                  right: "38%",
                  data: ['applications', 'publications'],
                  textStyle: {
                    color: "#616161",
                    fontSize: 16,
                  }
                },

                xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  axisLabel: {
                    textStyle: {
                      show: true,
                      fontFamily: '微软雅黑',
                      color: "#5b5b5b",
                      fontSize: "18"
                      // fontSize: '45',
                    },
                  },
                  data: year_list,
                },
                yAxis: {
                  type: 'value',
                  axisLabel: {
                    textStyle: {
                      show: true,
                      fontFamily: '微软雅黑',
                      color: "#5b5b5b",
                      fontSize: "18"
                      // fontSize: '45',
                    },
                  },
                },
                series: [{
                    name: 'applications',
                    type: 'line',
                    data: applications_list,
                    markPoint: {
                      data: [{
                        type: 'max',
                        name: 'Max'
                      }, ]
                    },
                    markLine: {
                      data: [{
                        type: 'average',
                        name: 'Avg'
                      }]
                    }
                  },
                  {
                    name: 'publications',
                    type: 'line',
                    data: publications_list,
                    markPoint: {
                      data: [{
                          type: 'max',
                          name: 'Max'
                        },
                        {
                          type: 'min',
                          name: 'Min'
                        }
                      ]
                    },
                    markLine: {
                      data: [{
                          type: 'average',
                          name: 'Avg'
                        },
                        [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                          },
                          {
                            symbol: 'circle',
                            label: {
                              position: 'start',
                              formatter: 'Max'
                            },
                            type: 'max',
                            name: '最高点'
                          }
                        ]
                      ]
                    }
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