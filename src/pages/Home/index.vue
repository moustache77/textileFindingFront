<template>
   <div class="search-model-home">
     <div class="first-part">
       <div class="big-box">
           <div class="img-box">
               <div class="show-box" :style="{'transform':'translateX('+translate+'px)','transition':tsion?'all 0.5s':'none'}">
                   <img src=".//img/picture4.png" alt="">
                   <!-- <img v-for='(item,index) in image' :key="index"  alt=""> -->
                   <img src=".//img/picture2.png" alt="">
                   <img src=".//img/picture3.png" alt="">
                   <img src=".//img/picture5.png" alt="">
                   <img src=".//img/picture1.png" alt="">
                   <img src=".//img/picture4.png" alt="">

               </div>
           </div>
           <div class="arrowhead-box">
                <span @click='last' class="span" >
                    <img src=".//img/arrow-left-bold.png" style="margin-top:7px;margin-left:5px;width: 45px;height: 45px;">
                </span>
                <span @click='next' class="span">
                    <img src=".//img/arrow-left-bold.png" style="margin-top:7px;margin-left:5px;width: 45px;height: 45px;">
                </span>
           </div>
           <div class="swiper-boxs" ref="swiper"  circular="true">
               <span v-for='(item,index) in image'  :key="index" class="span"></span>     
           </div>
       </div>
       <div class="baseBox baseBox3 border-container containerbottom borderno-container" style="height:498px;width: 620px;float: left;display: block;margin-top:40px;margin-left:0px;">
                                <!-- <img src="../../Rank/img/right3.png" alt=""> -->
                            <!-- <div class="boxTitle2">数据日志</div> -->
            <h5 class="name-title tile-size-color" style="color: #000;">
 						行业咨询
            </h5>
            <!-- <div class="data_day" id="demo" style="width: 100%;height: 440px;overflow:hidden;"> -->
            <vueSeamlessScroll :data=news_list  :class-option="classOption" class="incomeList-over" style="width: 100%;height: 498px;overflow:hidden;">>
            <!-- <div class="data_day" id="demo"> -->
                <div class="news-list-t c-mb-20" id="demo1" ref="news_item" style="color: white;">
                    <!-- <div class="news-item" v-for="item in news_list" :key="item" ref="con1" :class="{anim:animate==true}"  @mouseenter="Stop()" @mouseleave="Up()"> -->
                    <div class="news-item" v-for="item in news_list" :key="item" >	
                        <div class="head c-clearfix">
                            <a class="title1" style="font-size: 20px;color: #5b5b5b;" target="_blank"
                                :href="item.url">{{item.title}}</a>
                            <p style="text-align: right;"><span class="time">{{item.date}}</span></p>
                        </div>
                        <p class="discription">
                            <a target="_blank" :href="item.url">{{item.abstract}}</a>
                        </p>
                        <hr>
                    </div> 


                </div>
                <div class="news-list-t c-mb-20" id="demo2" style="color: white;">


                </div>
            </vueSeamlessScroll>
        </div> 
      </div>
   </div>
</template>
<script src="jquery-1.7.2.min.js" type="text/javascript"></script>
<script type="text/javascript">
import Axios from 'axios';
import $ from 'jquery';
import vueSeamlessScroll from 'vue-seamless-scroll';
export default {
    components: {
      vueSeamlessScroll
    },
    data() {
        return {
          news_list: [],
          html: "",
          image:
          [{src:require('.//img/picture1.png')},
           {src:require('.//img/picture2.png')},
           {src:require('.//img/picture3.png')},
           {src:require('.//img/picture4.png')},
           {src:require('.//img/picture5.png')},
        ],
          translateX: 0,
          tsion: true
        };
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
        last() {
            this.translateX--
            this.tsion = true
            if (this.translateX <= 0) {
                setTimeout(()=>{
                    this.tsion = false
                    this.translateX = this.image.length - 1
                },500)
            }
        },
        next() {
            this.translateX++
            this.tsion = true
            if (this.translateX > this.image.length ) {
                setTimeout(()=>{
                    this.tsion = false
                    this.translateX = 0
                },500)
            }
        },
        swiper(i) {
            this.translateX = i
        },
    },
    mounted() {
        setInterval(()=>{
            this.next()
        },3000);
        this.getNewsData();
    },
    computed: {
        translate() {
            if (-(this.translateX + 1) * 1000 > -6000)
               return -(this.translateX + 1) * 1000
            else 
              setTimeout(()=>{
                    this.tsion = false
                    this.translateX = 0
                },500)
        },
        showSwiper () {
				return this.image.length
			}
    },
    watch: {
        translateX: {
            handler(val) {
                let a = this.$refs.swiper.querySelectorAll('span')
                a.forEach(element => {
                    element.style.width = '12px'
                });
                if (this.translateX < 0) {
                    val = this.image.length - 1
                }
                if(this.translateX > this.image.length - 1) {
                    val = 0
                }
                a[val].style.width ='100px'
            }
        }
    }

}
</script>

<style>
    body{
        margin: 0;
        padding: 0;
        /* background: #eeeef9; */
        /* background: #E0CAA5; */
    }
     .search-model-home {
        width: 100%;
        /* height: 100%; */
        height: 940px;
        margin:0px auto;
        background-color: #eeeef9;
    }
    .span {
        margin: 0;
        padding: 0;
    }
    .first-part {
        float: left;
        width: 1900px;
        height: 600px;
    }
    .big-box {
        float: left;
        width: 1000px;
        height: 500px;
        background-color: #999;
        margin-top: 40px;
        margin-left: 200px;
        /* position: relative; */
        box-shadow: 0 0 3pc rgba(0, 0, 0,0.4);
    }
    .img-box {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .show-box {
        display: flex;
        width: 100%;
        height: 100%;
        transition: all 0.5s;
    }
    .show-box img {
        float: left;
        min-width: 1000px;
        min-height: 500px;
    }
    .arrowhead-box {
        position: absolute;
        top: 32%; 
        float: left;
        width: 1000px;
        height: 50px;
    }
    .arrowhead-box span {
        float: left;
        display: block;
        width: 60px;
        height: 60px;
        border-radius: 50px;
        /* background: url('.//img/arrow-right(1).png') no-repeat; */
        background-size:cover;
        background-color: rgba(0, 0, 0,0.4);
        background-position: 6px 14px;
        cursor: pointer;
        opacity: 0.5;
    }
    .arrowhead-box span:nth-child(2) {
        float: right;
        transform: rotate(180deg);
    }
    .arrowhead-box span:hover {
        opacity: 1;
    }
    .swiper-boxs {
        position: absolute;
        bottom: 38%;
        left: 200px;
        width: 1000px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .swiper-boxs span {
        float: left;
        width: 12px;
        height: 12px;
        background-color: white;
        border-radius: 50px;
        margin-left: 10px;
        cursor: pointer;
        transition: all 0.5s;
    }
    .swiper-box span:nth-child(1) {
        width: 100px;
    }
    .search-model {
    width: 100%;
    /* height: 100%; */
    height: 1000px;  
    margin:0px auto;
    background-color: #eeeef9;
    }
    	.baseBox3 {
				position: relative;
			}

	ul, li,ol{
		list-style: none;
	}
	a:link,
	a:visited,
	a:active {
		text-decoration: none;
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

	#demo {
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
		}

    /* 轮播图 */
    .container{
        position: relative;
        width: 100%;
        height: 560px;
        display: flex;
        justify-content: center;
        align-items: center; 
        flex-wrap: wrap; 
        /* padding: 30px */
        /* perspective: 800px;
        transform-style: preserve-3d;
        animation: rotate 20s linear infinite;  */
    }
    /* .container:hover {
        animation-play-state: paused;
    } */
    .container .card {
        position: relative;
        width: 270px;
        /* max-width: 400px; */
        height: 250px;
        background: hsl(0, 0%, 100%);
        margin: 30px 10px;
        padding: 20px 15px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 5px 202px rgba(0, 0, 0,0.5);
        transition:0.5s ease-in-out;
        border-radius: 4px;
        cursor: pointer; 
        /* -webkit-box-reflect: below 15px;
        -webkit-linear-gradient(transparent 10%, rgba(255,255,255,0.3)): ; */
    }
    .container .card:hover {
        height: 350px;

    }
    .container .card .imgBx {
        position: relative;
        width: 248px;
        height: 248px;
        top: 0px;
        left:10px;
        z-index: 1;
        box-shadow: 0 5px 20px rgba(0, 0, 0,0.2);
        background-color:hsl(49, 71%, 86%);
    }
    .container .card .imgBx img {
        max-width: 100%;
        border-radius: 4px;
    }
    .container .card .content {
        position: relative;
        margin-top: -140px;
        padding:10px 15px;
        text-align: center;
        color: #111;
        visibility: hidden;
        opacity: 0;
        transition:0.3s ease-in-out;
    }
    .container .card:hover .content {
        visibility: visible;
        opacity: 1;
        margin-top: -5px;
        transition-delay: 0.3s;
    }
    /* .container .card:nth-child(1) {
        transform: translateZ(80px);
    }
    .container .card:nth-child(2) {
        transform: rotateY(90deg) translateZ(80px);
    }
    .container .card:nth-child(3) {
        transform: rotateY(180deg) translateZ(80px);
    }
    .container .card:nth-child(4) {
        transform: rotateY(270deg) translateZ(80px);
    } */


    /* @keyframes rotate {
        0% {
            transform:rotateY(0);
        }
        100% {
            transform:rotateY(360deg);
        }
    } */




</style>