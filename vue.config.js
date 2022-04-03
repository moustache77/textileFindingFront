module.exports= {
    //关闭eslint
    lintOnSave: false,
    productionSourceMap: false,
	compact: false,
}

// <template>
<!-- //   <div class="search-model">>
//         <h2 style="text-align: center;color: white;margin: 10px 0;">纺织行业动态</h2>
// 		<div class="main clearfix" style="{width: '100%', height: '1000px'}">
// 			<div class="main-left">
// 				<div class="border-container containertop">
// 					<h5 class="name-title tile-size-color" style="color: #fff;">
// 						本周纺织行业热门主题
// 					</h5>
// 					<div id="radar">
// 						<div class="radarkong">
// 							<p class="tile-size-color" style="color: #002076;font-size: 15px;margin: -14px;">主题总数 :<span class="Totalequipment"> 99个</span>统计时间 :<span>
// 									2022.02.20 15:28</span></p>
// 						</div>
// 						<div class="pie-chart" id="pie-chart" style="margin: 40px 5px 0px -10px;"></div>
// 						<!-- <ul class="SiteStatusList"> -->
<!-- // 							<li><i class="Statusnormal Statussame"></i>正常：<span>556</span></li>
// 							<li><i class="Statusemergency Statussame"></i>告警：<span>40</span></li>
// 							<li><i class="StatusOffline Statussame"></i>离线：<span>30</span></li>
// 						</ul> -->
// 					</div>
// 				</div>

// 				<div class="border-container containerbottom">
// 					<div class="name-title tile-size-color" style="color: #fff;">
// 						行业情绪可视化
// 					</div>
// 					<div class="graduateyear">
// 						<div class="bar-chart" id="bar-chart"></div>
// 					</div>


// 				</div>
// 			</div>
// 			<div class="main-middle">
// 				<div class="border-container containerbottom borderno-container">
// 					<ul class="teacher-pie clearfix">
// 						<li class="teacherList">
// 							<div class="name-title tile-size-color" style="color: #fff;"> 
// 								行业景气指数
// 							</div>
// 							<div id="courserate">
// 								<div class="line-chart" id="line-chart" style="background:"></div>
// 								<ul class="SiteStatusList">
// 									<li style="color: #002076;font-size: 15px;margin: -14px;"><i class="Statusnormal Statussame"></i>平均指数 <span>1136</span></li>

// 								</ul>
// 							</div>
// 						</li>
// 						<li class="teacherList">
// 							<div class="name-title tile-size-color" style="color: #fff;">
// 								价格指数
// 							</div>
// 							<div class="bars-chart" id="bars-chart"></div>
// 						</li>
// 					</ul>
// 				</div>
// 				<div class="baseBox baseBox3 border-container containerbottom borderno-container" style="height:440px">
// 					<!-- 					<img src="./img/right3.png" alt=""> -->
// 					<!-- 				<div class="boxTitle2">数据日志</div> -->
// 					<h5 class="name-title tile-size-color" style="color: #fff;">
// 						行业咨询
// 					</h5>
// 					<!-- <div class="data_day" id="demo" style="width: 100%;height: 440px;overflow:hidden;"> -->
// 					<vueSeamlessScroll :data=news_list  :class-option="classOption" class="incomeList-over" style="width: 100%;height: 440px;overflow:hidden;">>
// 					<!-- <div class="data_day" id="demo"> -->
// 						<div class="news-list-t c-mb-20" id="demo1" ref="news_item" style="color: white;">
// 							<!-- <div class="news-item" v-for="item in news_list" :key="item" ref="con1" :class="{anim:animate==true}"  @mouseenter="Stop()" @mouseleave="Up()"> -->
// 							<div class="news-item" v-for="item in news_list" :key="item" >	
// 								<div class="head c-clearfix">
// 									<a class="title1" style="font-size: 20px;color: #5b5b5b;" target="_blank"
// 										:href="item.url">{{item.title}}</a>
// 									<p style="text-align: right;"><span class="time">{{item.date}}</span></p>
// 								</div>
// 								<p class="discription">
// 									<a target="_blank" :href="item.url">{{item.abstract}}</a>
// 								</p>
// 								<hr>
// 							</div> -->


// 						</div>
// 						<div class="news-list-t c-mb-20" id="demo2" style="color: white;">


// 						</div>
// 					</vueSeamlessScroll>
// 				</div>
// 			</div>
// 			<div class="main-right">
// 				<div class="border-container containertop">
// 					<div class="name-title tile-size-color" style="color: #fff;">
// 						优秀企业月度排名
// 					</div>
// 					<div class="progress1-chart" id="progress1-chart"></div>
// 				</div>
// 				<div class="border-container containerbottom">
// 					<div class="name-title tile-size-color" style="color: #fff;">
// 						行业情绪追踪器
// 					</div>
// 					<div id="radar-chart" class="radar-chart">

// 					</div>

// 				</div>
// 			</div>
// 		</div>
//   </div>
// </template>

<script src="jquery-1.7.2.min.js" type="text/javascript"></script>
<script type="text/javascript">
// import bootstrap from 'bootstrap';
import Axios from 'axios';
import $ from 'jquery';
import vueSeamlessScroll from 'vue-seamless-scroll';
// import echarts from 'echarts';
export default {
	components: {
      vueSeamlessScroll
    },
    data() {
		return {
			news_list: [],
			html: "",
		}
	},
	mounted() {
		this.getNewsData();
		// this.Marquee();
		// this.loop();
		this.getPie();
		this.getBar();
		this.getLine(); 
		this.getBubble();
		this.getRadar();
		this.getProgress1();


	},
	computed: {
		classOption () {
		return {
			step: 0.2, // 数值越大速度滚动越快
			limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
			hoverStop: false, // 是否开启鼠标悬停stop
			direction: 1, // 0向下 1向上 2向左 3向右
			openWatch: true, // 开启数据实时监控刷新dom
			singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
			singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
			waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
		}
		}
	},
	methods: {
		// 获取新闻数据
		async getNewsData() {
		    await Axios({
				method: "get",
				url: "http://124.223.32.208:8000/api/chart/getIndustryNews/",
			}).then(response => {
				console.log(response.data)
				this.news_list = response.data.news;
				this.html = this.$refs.news_item;
			});
		},
		// 实现滚动效果的方法
		// loop() {
		// 	var demo = document.getElementById("demo");
		// 	var demo1 = document.getElementById("demo1");
		// 	var demo2 = document.getElementById("demo2");
		// 	var speed = 20; //滚动速度值，值越大速度越慢
		// 	demo2.innerHTML = this.html //克隆demo2为demo1
		// 	function Marquee() {
		// 		console.log(demo2.offsetTop - demo.scrollTop)
		// 		if (demo2.offsetTop - demo.scrollTop <= 600) {
		// 			// console.log('77777') //当滚动至demo1与demo2交界时
		// 			demo.scrollTop -= demo1.offsetHeight //demo跳到最顶端
		// 		} else {
		// 			//console.log('88888')
		// 			demo.scrollTop++
		// 		}
		// 	}
		// 	var MyMar = setInterval(Marquee, speed); //设置定时器
		// 	demo.onmouseover = function() {
		// 		clearInterval(MyMar)
		// 	} //鼠标经过时清除定时器达到滚动停止的目的
		// 	demo.onmouseout = function() {
		// 		MyMar = setInterval(Marquee, speed)
		// 	} //鼠标移开时重设定时器

		// },
		getBubble(){
			var chartDom = document.getElementById('bars-chart');
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
								repulsion: 150,
								edgeLength: [120, 100],
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
										symbolSize: node.size / 1.5,
										itemStyle: {
											color: bgcolor,
											borderColor: color,
											borderWidth: node.size / 30
										},
										label: {
											show: true,
											fontSize: node.size / 8,
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
							center: ['80%', '80%'],
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
		// function1() {
		// 	pieChar();
		// 	barChar([20, 60, 82, 60]);
		// 	linchar();
		// 	// barschar();
		// 	radarchar();
		// 	progress1char();
		// 	// progress2char();
		// 	// mapchar();
		// 	var onresize = function() {
		// 	pieChart.resize();
		// 	barChart.resize(); //若有多个图表变动，可多写
		// 	linchart.resize();
		// 	// barschart.resize();
		// 	radarchart.resize();
		// 	progress1chart.resize();}
		// 	// progress2chart.resize();
		// 	// mapchart.resize()
		// 	window.onresize = onresize
		// },
		getPie() {
			// 饼图
			var dom = document.getElementById("pie-chart");
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
						series: [{
							name: '行业主题',
							type: 'pie',
							selectedMode: 'single',
							radius: [0, '60%'],
							center: ["50%", "42%"],
							label: {
								normal: {
									position: 'outside',
									formatter: "{b}:{d}%",
									"textStyle": {
                    					"fontSize": 15 }
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
		getBar() {
            var dom = document.getElementById("bar-chart");
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
							top: 45,
							textStyle: {
								color: "#5b5b5b"
							},
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
									fontSize: 16,
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
									fontSize: 16,
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
							top: '22%'
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
		getLine() {
            var dom = document.getElementById("line-chart");
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
								left: '10%',
								right: '15%',
								bottom: '15%',
								top: '20%',

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
									fontSize: 16,
								},
								axisLabel: {
									textStyle: {
										color: "#5b5b5b",
										fontSize: 16,
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
		getRadar() {
			var dom = document.getElementById("radar-chart");
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
									fontSize: 15,
								}

							},
							grid: {
								left: '3%',
								right: '8%',
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
										fontSize: 16,
									},
								},
							}],
							yAxis: [{
								type: 'value',
								min: 0.4,
								axisLabel: {
									textStyle: {
										fontSize: 16,
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
								fontsize: 16,
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
		getProgress1() {
			var dom = document.getElementById("progress1-chart");
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
								left: '3%',
								right: '12%',
								top: '15%',
								bottom: '5%',
								containLabel: true
							},
							xAxis: {
								name: 'amount',
								axisLabel: {
									textStyle: {
										show: true,
									    fontSize: 16,
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
										fontSize: 16,
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
								color: "#4280f1",
								encode: {
									// Map the "amount" column to X axis.
									x: 'amount',
									// Map the "product" column to Y axis
									y: 'product'
								},
								itemStyle: {
									barBorderRadius: 5,
									borderWidth: 1,
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

		// 实现滚动效果的方法
		// scroll() {
		// 	this.animate = true; // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
		// 	setTimeout(() => {
		// 		//  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
		// 		this.news_list.push(this.news_list[0]); // 将数组的第一个元素添加到数组的
		// 		this.news_list.shift(); //删除数组的第一个元素
		// 		this.animate = false; // margin-top 为0 的时候取消过渡动画，实现无缝滚动
		// 	}, 1000);
		// 	},
		// 	//鼠标移上去停止
		// Stop() {
		// clearInterval(this.timer);
		// },
		// Up() {
		// this.timer = setInterval(this.scroll, 1000);
		// },
	

	}
}

</script>
<style lang="less">
	// Body reset
    *{
    margin: 0;
    padding: 0; 
   }
    .search-model {
    width: 100%;
    height: 100%;
    height: 1400px;
    margin:0px auto;
    background-color: #eeeef9;
    }


    body,html,.main{
	height: 1000px;
	width: 100%;
	}
	body,ul,li,p,h1,h2,h3,h4,h5,h6,dl,dt,dd,ol{
		margin:0;
		padding:0;
	}
	ul, li,ol{
		list-style: none;
	}
	a:link,
	a:visited,
	a:active {
		text-decoration: none;
	}
	body{
		background: #eeeef9;
	}

	.main-left,
	.main-right{
		float: left;
		width: 28%;
		height: 100%;
		padding: 0 5px;
	}
	.main-middle{
		float: left;
		width: 42.5%;
		height: 100%;
		padding: 0 5px;
	}

	.border-container {
		position: relative;
		margin-top: 10px;
		background: #fff;
	/* padding: 10px;*/
		border: 1px solid #24214e;
	}
	.main-middle .borderno-container{
		border-top: none;
		border-bottom: none;
	}
	.name-title{  
		background: #4545e3;
		padding: 8px 14px;
		border-bottom-right-radius:6px;
		border-bottom-left-radius:6px;
		position: absolute;
		left: 5%;
		
	}
	.tile-size-color{
		font-size:12px ;
		color: #303030;
	}
	.containertop{
		height: 50%;
	}
	.containerbottom{
		height: 47%;
	}
	#radar,.graduateyear,.bar-chart,#courserate,.line-chart,.bars-chart,.radar-chart,.progress1-chart,#mapadd,
	.progress2-chart{
		height: 100%;
	}
	#mapadd{
		position:relative;
	}
	#radar .radarkong{
		height: 17%;
		position: relative;
	}
	.Totalequipment{
		margin-right: 18px;
	}
	#radar .radarkong p{
		position: absolute;
		bottom: 0;
		text-align: center;
		width: 100%;
		
	}
	.SiteStatusList{
		position: absolute;
		bottom: 10%;
		color: #fff;
		font-size: 12px;
		width: 100%;
		display: flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
	}
	.SiteStatusList li:first-child{
		margin-left: 22px;
	}
	.SiteStatusList li{
		margin-right: 20px;
	}
	.SiteStatusList .Statussame{
		float: left;
		padding: 5px;
		margin-top: 2px;
		margin-right: 5px;
		
	}
	.SiteStatusList .Statusnormal{
		background: #4f8bf9;
	}
	.SiteStatusList .Statusemergency{
		background: #fea31e;
	}
	.SiteStatusList .StatusOffline{
		background: #959595;
	}
	.SiteStatusList .ThisweekData,.SiteStatusList .ThisweekData{
		padding: 7px;
		border-radius: 50%;
		float: left;
		cursor: pointer;
	}
	.SiteStatusList .Datasame{
		background: #39c1f5;
	}
	.SiteStatusList .Defaultgray{
		color: #959595;
	}
	.SiteStatusList .DataSwitch{
		background: #555474;
		border-radius: 10px;
	}
	.teacher-pie,.teacher-pie .teacherList{
		height: 100%;
	}
	.teacher-pie .teacherList{
		border: 1px solid #24214e;
		position: relative;
	}
	.teacher-pie .teacherList:first-child{
		width: 50%;
		border-left: none;
		float: left;
	}
	.teacher-pie .teacherList .name-title{
		padding-left:10px ;
	}
	.teacher-pie .teacherList:last-child{
		width: 49%;
		border-right: none;
		float: right;
	}

	.number-show{
		position: absolute;
		top: 20%;
		right: 5%;
	}
	#mapadd .mapleft{
		width: 33%;
		height: 100%;
		float: left;
		position: relative;
		/*background: #009688;*/
	}
	#mapadd .progressMore{
		color: #fff;
		font-size: 12px;
		position: absolute;
		right: 7%;
		top: 60%;
		text-decoration: underline;
	}
	#mapadd .map-chart{
		width: 65%;
		height: 100%;
		float: left;
	}
	#mapadd .Devicestatus-List{
		width: 50%;
		position: absolute;
		bottom: 12%;
		left: 4%;
		color: #fff;
	}
	#mapadd .Devicestatus-List li{
		float: left;
		height: 35px;
		margin-right: 1%;
		line-height: 35px;
		position: relative;
	}
	#mapadd .Devicestatus-List li:nth-of-type(1){
		width: 65.5%;
		border: 1px solid #3ae034;
		background: rgba(58,224,52,0.5);
	}
	#mapadd .Devicestatus-List li:nth-of-type(2){
		width: 10.5%;
		border: 1px solid #778699;
		background: rgba(199,134,153,0.5);
	}
	#mapadd .Devicestatus-List li:nth-of-type(3){
		width: 10.5%;
		border: 1px solid #1b9fff;
		background: rgba(27,159,255,0.5);
	}
	#mapadd .Devicestatus-List li:nth-of-type(4){
		width: 9.5%;
		border: 1px solid #e77407;
		background: rgba(213,116,7,0.5);
	}
	.Devicestatus-List .DevicestatusName{
		position: absolute;
		top: -35px;
		left: 0;
	}
	.pie-chart{
		width: 100%;
		height: 82%;
	}
	.baseBox3 {
				position: relative;
			}

	.baseBox3 img {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.title1 {
		width: 800px;
		height: 50px;
	}
	.news_item {
		height: 120px;
	}

	/* #demo {
		overflow: hidden;
		height: 412.5px;
		width: 800px;
		margin: 90px auto;
		position: relative;
		}
		
		#demo1 {
		height: auto;
		text-align: left;
		}
		
		#demo2 {
		height: auto;
		text-align: left;
		}
		
		#demo1 li {
		list-style-type: none;
		height: 22px;
		text-align: left;
		text-indent: 15px;
		}
		
		#demo2 li {
		list-style-type: none;
		height: 22px;
		text-align: left;
		text-indent: 15px;
		} */




</style>