<template>
  <div class="search-model-rank" style="display: block;">
      <!-- <div class="container_main">  -->
          <!-- <div class="el-row" style="height: 770px;margin-left: -10px;margin-right: -10px;box-sizing: border-box;position: relative;"> -->
              <div class="el-col el-col-210"  style="padding-left: 10px;padding-right: 10px;float: left;box-sizing: border-box;display: block;">
                  <p class="retrieves_title">行业情报--行业情绪追踪器</p>
                  <div class="echarts" id="chart1">
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
      this.getRadar();
    //   this.getWenxian();
    },
    methods: {
        getRadar() {
			var dom = document.getElementById("chart1");
			var radarchart = this.$echarts.init(dom);
			var app = {};
			var option = null;
			radarchart.showLoading();
				$.get("http://124.223.32.208:8000/media/json_files/patentStatistics.json", function(data) {
					radarchart.hideLoading();
					var yearmonth = [];
					var scores = [];
					for (let d of data.IndustrySentiment) {
						yearmonth.push(d.yearmonth);
						scores.push(d.sentimentscore);
					}

					radarchart.setOption(
						option = {
							tooltip: {
								trigger: 'axis',
								axisPointer: {
									type: 'cross',
									label: {
										backgroundColor: '#6a7985',
										fontSize: 16,
									}
								}
							},
							legend: {
								top: 30,
								textStyle: {
									color: "#5b5b5b",
									fontSize: 16,
								}

							},
							grid: {
								left: '15%',
								right: '15%',
								top: '18%',
								bottom: '3%',
								containLabel: true
							},
							xAxis: [{
								type: 'category',
								boundaryGap: false,
								data: yearmonth,
								axisLabel: {
									textStyle: {
										fontSize: 18,
									},
								},
							}],
							yAxis: [{
								type: 'value',
								min: 0.4,
								axisLabel: {
									textStyle: {
										fontSize: 18,
									},
								},
							}],
							series: [{
								// color: "#20B2AA",
								color: "#506fc0",
								label: {
									show: true,
									formatter: function(datas) {
										return datas.value.toFixed(3);
									}
								},
								name: '情绪分数',
								fontSize: 16,
								color: '#002076' ,
								type: 'line',
								stack: 'Total',
								areaStyle: {},
								emphasis: {
									focus: 'series'
								},
								data: scores
							}, ]
						}
					);

				})
 
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
    .el-col-210 {
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