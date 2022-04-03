<template>
  <div class="search-model-rank" style="display: block;">
      <!-- <div class="container_main">  -->
          <!-- <div class="el-row" style="height: 770px;margin-left: -10px;margin-right: -10px;box-sizing: border-box;position: relative;"> -->
              <div class="el-col el-col-210"  style="padding-left: 10px;padding-right: 10px;float: left;box-sizing: border-box;display: block;">
                  <p class="retrieves_title">行业情报--本周纺织行业热门主题</p>
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
      this.getPie();
    //   this.getWenxian();
    },
    methods: {
        getPie() {
			// 饼图
			var dom = document.getElementById("chart1");
			var pieChart = this.$echarts.init(dom);
			var app = {};
			var option = null;
			pieChart.showLoading();
			$.get("http://124.223.32.208:8000/media/json_files/patentStatistics.json", function(json) {
				pieChart.hideLoading();
				var topic_list = [];
				for (let d of json.TrendingTopics) {
					if (d.topic == "Yarn") {
						topic_list.push({
							value: d.count,
							name: d.topic,
							selected: true,
						});

					} else {
						topic_list.push({
							value: d.count,
							name: d.topic
						});
					}

				}
				console.log(topic_list);
				pieChart.setOption(
					option = {
						// color: ["#506fc0", "#309bd7", "#9cafd6", "#8696a5", "#a7a7a9", "#cbbfd3",
						// 	"#c5b8a5", "#a1a6b9", "#97a38b", "#797282"
						// ],
						color: ["#546fc6", "#91cb74", "#fac859", "#ee6666", "#73c0de", "#3ca272",
							"#f88553", "#9a60b4", "#d38265", "#416074"
						],
						tooltip: {
							trigger: 'item',
							formatter: "{a} <br/>{b}: {c} ({d}%)",
						},
                        // grid: {
                        //     top: "20%",
                        //     left: "10%",
                        //     right: "10%",
                        //     bottom: "5%",
                        //     // show: true,
                        //     borderColor: "#012f4a",
                        //     containLabel: true
                        // },
						series: [{
							name: '行业主题',
							type: 'pie',
							selectedMode: 'single',
							radius: [0, '60%'],
							center: ["50%", "55%"],
							label: {
								normal: {
									position: 'outside',
									formatter: "{b}:{d}%",
									"textStyle": {
                    					"fontSize": 18 }
								},
							},
							data: topic_list,
							// [
							// 	{
							// 		value: 556,
							// 		name: '正常'
							// 	},
							// 	{
							// 		value: 100,
							// 		name: '告警',
							// 		selected: true
							// 	},
							// 	{
							// 		value: 30,
							// 		name: '离线'
							// 	}
							// ]
						}]
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








