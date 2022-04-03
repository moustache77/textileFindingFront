<template>
  <div class="search-model-rank" style="display: block;">
      <!-- <div class="container_main">  -->
          <!-- <div class="el-row" style="height: 770px;margin-left: -10px;margin-right: -10px;box-sizing: border-box;position: relative;"> -->
              <div class="el-col el-col-210"  style="padding-left: 10px;padding-right: 10px;float: left;box-sizing: border-box;display: block;">
                  <p class="retrieves_title">行业情报--价格指数</p>
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
      this.getBubble();
    //   this.getWenxian();
    },
    methods: {
        getBubble(){
			var chartDom = document.getElementById('chart1');
			var myChart666 = this.$echarts.init(chartDom);
			let option = {};

			var rindex = () => parseInt(Math.random() * 100) % 7;
			var mycolor = () => ['#506fc0', '#d38265', '#61a0a9', '#ca8623', '#749f83', '#f3e4b4', '#2c9d68'][
				rindex()
			];
			var backgroundColor = () => [
				'#506fc0',
				'#d38265',
				'#61a0a9',
				'#2f4553',
				'#ca8623',
				'#749f83',
				// '#f3e4b4',
				// 'black',
			][rindex()];

			myChart666.showLoading();

			$.get(
				'http://124.223.32.208:8000/media/json_files/price_i.json',
				function(json) {
					option = {
						animationDurationUpdate: 1500,
						animationEasingUpdate: 'bounceIn',
						series: [{
							layout: 'force',
							force: {
								repulsion: 300,
								edgeLength: [150, 130],
								layoutAnimation: true
							},
							legendHoverLink: true,
							animation: true,
							draggable: true,
							type: 'graph',
							roam: "true",
							// progressiveThreshold: 700,
							data: json.nodes
								.filter((item) => item.size > 15)
								.map(function(node) {
									let color = mycolor();
									let bgcolor = backgroundColor();
									return {
										id: node.id,
										name: node.label,
										value: node.value,
										symbolSize: node.size / 0.9,
										itemStyle: {
											color: bgcolor,
											borderColor: color,
											borderWidth: node.size / 30
										},
										label: {
											show: true,
											fontSize: node.size / 5,
											// color: '"#5b5b5b"',
											// color: '"#fff"',
											formatter: function(param) { // 标签内容
												return param.data.name + "\n" + (param.data
													.symbolSize *
													1.5).toFixed(2);
											},
										}
									};
								}),
							zoom: 1,
							center: ['50%', '50%'],
							roam: true,
							edgeSymbol: ['circle', 'arrow']
						}]
					};
					myChart666.hideLoading();
					myChart666.setOption(
						option
					);
					// console.log(option.series[0].data)
					// setInterval(function() {
					// 	let random = (Math.random() * 100).toFixed(1) - 0;
					// 	option.series[0].data[0].value = random;
					// 	option.series[0].data[1].value = random;
					// 	myChart666.setOption(option)

					// }, 10)
				},
			);



			option && myChart666.setOption(option);

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

