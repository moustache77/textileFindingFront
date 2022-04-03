<template>
  <div class="search-model-rank" style="display: block;">
      <!-- <div class="container_main">  -->
          <!-- <div class="el-row" style="height: 770px;margin-left: -10px;margin-right: -10px;box-sizing: border-box;position: relative;"> -->
              <div class="el-col el-col-210"  style="padding-left: 10px;padding-right: 10px;float: left;box-sizing: border-box;display: block;">
                  <p class="retrieves_title">行业情报--优秀企业月度排名</p>
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
      this.getProgress1();
    //   this.getWenxian();
    },
    methods: {
        getProgress1() {
			var dom = document.getElementById("chart1");
			var progress1chart = this.$echarts.init(dom);
			var app = {};
			var option = null;
			progress1chart.showLoading();
				$.get("http://124.223.32.208:8000/media/json_files/patentStatistics.json", function(data) {
					progress1chart.hideLoading();
					var company_list = [];
					company_list.push(['amount', 'product']);
					for (let d of data.TrendingCompanies) {
						company_list.push([d.trendscore, d.company]);
					}
					company_list.reverse();
					company_list.pop(0);
					progress1chart.setOption(
						option = {
							dataset: {
								source: company_list,
							},
							grid: {
								left: '10%',
								right: '15%',
								top: '10%',
								bottom: '5%',
								containLabel: true
							},
							xAxis: {
								name: 'amount',
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
								type: 'category',
								axisLabel: {
									textStyle: {
										show: true,
										fontFamily: '微软雅黑',
										color: "#5b5b5b",
										fontSize: 18,
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
							// visualMap: {
							// 	orient: 'horizontal',
							// 	left: 'center',
							// 	min: 10,
							// 	max: 100,
							// 	text: ['High Score', 'Low Score'],
							// 	// Map the score column to color
							// 	dimension: 0,
							// 	inRange: {
							// 		color: ['#65B581', '#FFCE34', '#FD665F']
							// 	}
							// },
							series: [{
								type: 'bar',
								label: {
									show: true,
								},
								color: "#2f89cf",
                                fontSize: 16,
								encode: {
									// Map the "amount" column to X axis.
									x: 'amount',
									// Map the "product" column to Y axis
									y: 'product',
                                    fontSize: 16,
								},
								itemStyle: {
									barBorderRadius: 5,
									borderWidth: 1,
                                    fontSize: 16,
									borderType: 'solid',
									borderColor: '#65B581',
									shadowColor: '#5470c6',
									shadowBlur: 3
								}
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