<template>
  <div class="search-model-rank" style="display: block;">
      <!-- <div class="container_main">  -->
          <!-- <div class="el-row" style="height: 770px;margin-left: -10px;margin-right: -10px;box-sizing: border-box;position: relative;"> -->
              <div class="el-col el-col-210"  style="padding-left: 10px;padding-right: 10px;float: left;box-sizing: border-box;display: block;">
                  <p class="retrieves_title">行业情报--行业景气指数</p>
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
      this.getLine();
    //   this.getWenxian();
    },
    methods: {
        getLine() {
            var dom = document.getElementById("chart1");
			var linchart = this.$echarts.init(dom);
			var app = {};
			var option = null;
			linchart.showLoading();
			$.get("http://124.223.32.208:8000/media/json_files/price_i.json", function(json) {
					console.log(json)
					linchart.hideLoading();
					linchart.setOption(
						option = {
							tooltip: {
								formatter: '{c}'
							},
							grid: {
								left: '15%',
								right: '15%',
								top: '18%',
								bottom: '3%',

								containLabel: true,
								z: 22
							},
							xAxis: {
								data: json.time.map(function(time) {
									return time.toFixed(0)
								}),
								name: "(月)",
								nameTextStyle: {
									color: "#5b5b5b",
									nameLocation: "start",
									fontSize: 18,
								},
								axisLabel: {
									textStyle: {
										color: "#5b5b5b",
										fontSize: 18,
									}
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
								min: 1100,
								nameTextStyle: {
									color: "#5b5b5b"
								},
								nameLocation: "center",
								nameGap: 30,
								nameRotate: -270,
								axisLabel: {
									textStyle: {
										color: "#5b5b5b",
										fontSize: 16, //坐标值得具体的颜色
									}
								},
								axisLine: {
									lineStyle: {
										type: 'solid',
										color: "#5b5b5b",
										width: '1  ', //坐标线的宽度

									}
								},
								splitLine: {
									lineStyle: {
										color: "#5b5b5b",
									}
								}

							},
							series: [{
								type: 'line',
								data: json.score,
								itemStyle: {
									normal: {
										lineStyle: {
											width: 3, //折线宽度
										},
										color: '#298fcf',
										// color:  this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
										// 	offset: 1,
										// 	color: '#508ff6' // 0% 处的颜色
										// }, {
										// 	offset: 0,
										// 	color: '#2c137a' // 100% 处的颜色
										// }], false),
										// opacity: 0.4
									}
								},
							}]
						}
					)
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