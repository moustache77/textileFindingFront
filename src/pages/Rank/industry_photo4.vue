<template>
  <div class="search-model-rank" style="display: block;">
      <!-- <div class="container_main">  -->
          <!-- <div class="el-row" style="height: 770px;margin-left: -10px;margin-right: -10px;box-sizing: border-box;position: relative;"> -->
              <div class="el-col el-col-210"  style="padding-left: 10px;padding-right: 10px;float: left;box-sizing: border-box;display: block;">
                  <p class="retrieves_title">行业情报--行业情绪可视化</p>
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
      this.getBar();
    //   this.getWenxian();
    },
    methods: {
        getBar() {
            var dom = document.getElementById("chart1");
			var barChart = this.$echarts.init(dom);
			var app = {};
			var option = null;
			barChart.showLoading();
			$.get("http://124.223.32.208:8000/media/json_files/patentStatistics.json", function(json) {
				console.log(json.Emotion.Data);
				var year_list = ['year'];
				var joy_list = ['joy'];
				var sadness_list = ['sadness'];
				var fear_list = ['fear'];
				var disgust_list = ['disgust'];
				var anger_list = ['anger'];
				for (let d of json.Emotion.Data) {
					year_list.push(d.yearmonth);
					joy_list.push(d.emotionjoy);
					sadness_list.push(d.emotionssadness);
					fear_list.push(d.emotionfear);
					disgust_list.push(d.emotiondisgust);
					anger_list.push(d.emotionanger);
				}
				barChart.hideLoading();
				barChart.setOption(
					option = {
						legend: {
							top: 35,
							textStyle: {
									color: "#5b5b5b",
									fontSize: 16,
								}
						},
						tooltip: {
							trigger: 'axis',
							showContent: true,
						},
						dataset: {
							source: [
								year_list,
								fear_list,
								disgust_list,
								anger_list,
								joy_list,
								sadness_list,
							]
						},
						xAxis: {
							type: 'category',
							axisLabel: {
								textStyle: {
									show: true,
									fontSize: 18,
									fontFamily: '微软雅黑',
									color: "#5b5b5b",
								},
							},
							axisLine: {
								lineStyle: {
									type: 'solid',
									color: "#5b5b5b",
									width: '1  ', //坐标线的宽度
								}
							},
						},
						yAxis: {
							gridIndex: 0,
							axisLabel: {
								textStyle: {
									show: true,
									fontSize: 18,
									fontFamily: '微软雅黑',
									color: "#5b5b5b",
								},
							},
							axisLine: {
								lineStyle: {
									type: 'solid',
									color: "#5b5b5b",
									width: '1  ', //坐标线的宽度
								}
							},
						},
						grid: {
								left: '15%',
								right: '15%',
								top: '18%',
								bottom: '3%',
								containLabel: true
							},
						series: [{
								type: 'line',
								smooth: true,
								seriesLayoutBy: 'row',
								stack: 'x',
								// areaStyle: {},
								emphasis: {
									focus: 'series'
								}
							},
							{
								type: 'line',
								smooth: true,
								seriesLayoutBy: 'row',
								stack: 'x',
								// areaStyle: {},
								emphasis: {
									focus: 'series'
								}
							},
							{
								type: 'line',
								smooth: true,
								seriesLayoutBy: 'row',
								stack: 'x',
								// areaStyle: {},
								emphasis: {
									focus: 'series'
								}
							},
							{
								type: 'line',
								smooth: true,
								seriesLayoutBy: 'row',
								stack: 'x',
								areaStyle: {},
								emphasis: {
									focus: 'series'
								}
							},
							{
								type: 'line',
								smooth: true,
								seriesLayoutBy: 'row',
								stack: 'x',
								// areaStyle: {},
								emphasis: {
									focus: 'series'
								}
							},

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