<template style="height:100%">
  <div class="search-model">
    <!-- 搜索框 -->
      <!-- <div  style="min-height:100%"></div> -->
      <!-- <div style="min-height:100%;background-color:#d0d2ef;" class="background"></div> -->
    <div class="card1_patent">
      <div class="searching w">
          <!-- 搜索模块 -->
          <div class="search">
              <el-input placeholder="请输入内容" v-model="value" clearable @input="searchAction($event)" style="width:391px"></el-input>
              <!-- <input id='write' type="text" value="请输入关键词" @input="searchAction($event)"> -->
              <button @click="getData()" :disabled="isDisable" ><a href="#"><img src=".//img/搜索框.png"></a></button>
          </div>
      </div>
      <!-- <button @click="getData()">点击获取</button> -->
      <!-- 论文or专利 -->
      <!-- <div class="choose">
          <ul>
              <li><router-link to="/search/essay" exact><span>论文</span></router-link></li>
              <li><router-link to="/search/patent" exact><span>专利</span></router-link></li>
          </ul>
      </div> -->
      <!-- <router-view></router-view> -->
      <!-- <h1>{{teacher}}</h1> -->
      <div class="all_result_patent">
        <div v-for="item in teacher" :key="item.id" class="result">
            <div><a :href="item.url" target="_blank">{{item.name}}</a></div>
            <div class="authors">申请人： {{item.applicant}}</div>
            <div class="company_list">发明人： {{item.inventor}}</div>
            <div class="keywords">专利国别： {{item.guo_bie}}</div>
            <div class="keywords">分类编号： {{item.bh}}</div>
            <div class="keywords">申请日： {{item.sq_date}}</div>
        </div>
      </div>
      <div v-if="show1">
        <nav style="text-align: center;">
            <ul class="pagination" @click="backtop">
                <li @click="prePage()" class="prev">
                    <a >&laquo; 上一页</a>
                </li>
                <!-- page.pageNo==index?'active':'' -->
                <li :class="page.pageNo==index?'active':''" v-for="index in pages" :key="index" @click="curPage(index)">
                    <a>{{index}}</a>
                </li>
                <li @click="nextPage()" class="next"> 
                    <a >下一页 &raquo;</a>
                </li>
            </ul>
        </nav>
      </div> 
    </div>
    <div class="panel pie" style="{width: '400px', height: '400px', padding: '25px'}">
        <h2 style="text-align: center; color: #303030">关键词词云</h2>
        <div id="chart"></div>
        <div class="panel-footer"></div>
	</div>
    <div class="panel bar" style="{width: '400px', height: '400px', padding: '25px'}">
        <h2 style="text-align: center; color: #222222">
            纺织文献类别 <a href="javascript:;" >总览</a>
            <a href="javacript:;"> 创新前沿</a>
        </h2>
        <div id="chart1"  style="{width: '400px', height: '400px', padding: '25px'}"></div>
        <div class="panel-footer"></div>
	</div>
    <router-view></router-view>
      <!-- 论文结果展示 -->
      <!-- <div>
          <ul>
              <li v-for="(item, index") of data
              :key="index">
                  <h3>{{item.title}}</h1>
                  <div>
                      <p>{{item.keywords}}</p>
                      <a href="{item.article_url}">点击链接</a>
                  </div>
              </li>
          </ul>
      </div> -->
      <!-- <router-view></router-view> -->
  </div>
</template>
// <script src="jquery-3.1.1.min.js" type="text/javascript"></script>
<script type="text/javascript">  
import Axios from 'axios'
import $ from 'jquery'
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
export default {
   data() {
       return {
           teacher:[],
           page :{
             num_pages: 1, //总页数
             count: 1, //总条数
             pageNo: 1, //页码
             pageSize: 8, //每一页条数
           },
           isDisable: false,
           show1: false,
           value: ''
       };
   },
   computed: {
     pages() {
       let {pageNo:n,num_pages:total} = this.page;
       if(total < 10) return total;  //页数小于10页  省略号不添加
       if(n <= 5) {
           return [1,2,3,4,5,6,'...',total];
       }else if(n >= total-5){
           return[1,'...',total-6,total-5,total-4,total-3,total-2,total-1,total]
       }else {
           return[1,'...',n-2,n-1,n,n+1,n+2,'...',total]
       }

     }
   },
//    created() {
//        this.getData();
//     //    window.scrollTo(0,0);
//    },
    //     watch: {//监听
    //   $route(to, from) {
    //   //to form 代表路由跳转的方式 $route对路由监听
    //     this.getData()//清空数据
    //   }
    // },
      mounted() {
      this.searchAction();
      this.getData();
      this.getWordcloud();
      this.getWenxian();
      },
//    name: "",
   methods: {
        searchAction(e) {
         // var inputvalue = e.target.value;
         var inputvalue = this.value;
         window.inputvalue = inputvalue;
        //  this.$forceUpdate();
        //1.获取元素
        // var text = document.innerHTML('write');
        // var text = this.write;
        // //2.注册事件 获得焦点事件 onfocus
        // text.onfocus = function() {
        //     //console.log('得到了焦点');
        //     if (this.write === '请输入关键词') {
        //         this.write = '';
        //     }
        //     //获得焦点文本框里面文字颜色变深
        //     this.style.color = '#333';
        // }
        // //3.注册事件 失去焦点事件 onblur
        // text.onblur = function() {
        //     //console.log('失去了焦点');
        //     if (this.value === '') {
        //         this.value = '请输入关键词';
        //     }
        //     //失去焦点文本框里面文字颜色变浅
        //     this.style.color = '#999';
        // }
        },
       getData(i=this.page.pageNo) {
            this.page.pageNo = i;
            // var inputvalue = this.write;
            // this.Axios({
            //     method:'get',
            //     url:'http://124.223.32.208:8000/api/searching/get_periodical?keywords=this.write&page=${this.page.pageNo}'
            // })
            Axios.get('http://124.223.32.208:8000/api/searching/get_patent?keywords='+inputvalue+'&page='+this.page.pageNo)
            .then((response) =>{
            console.log(response.data)
            let{list,num_pages,count} = response.data;
            // if (response.data.list.length != 0) {
            // var pages = response.data.page_range
            // var count = response.data.num_pages
            // for (pages < count;pages++;) {
            this.teacher = list;
            this.page.num_pages = num_pages;
            console.log(this.teacher)
            console.log(this.page.num_pages)
            console.log(this.page.count)
            this.page.count = count;
            this.isDisable = true
            setTimeout(() => {
                this.isDisable = false
                }, 1000)  }) 
            this.show1 = true
            //   }).catch(error=>{
            //      console.log(error)
            // this.show1 = true
            // this.show1 = true
            // if (this.teacher == none) {
            //     this.show1 = false
            // }
        //   var i = 1;
        //   for (i < 5; i++;) {
        //     Axios.get('http://124.223.32.208:8000/api/searching/get_periodical?keywords='+inputvalue+'pages='+i).then((response) =>{
        //     console.log(response.data.list);
        //     // if (response.data.list.length != 0) {
        //     this.teacher = response.data.list
        //     this.isDisable = true
        //     setTimeout(() => {
        //         this.isDisable = false
        //         }, 1000)
        //     })
        //   }      
        },
        curPage(i) { //当前页
          if(i =='...') return;
          this.getData(i);
        },
        prePage() { //上一页
        let {pageNo} = this.page;
          if (pageNo > 1) {
              this.getData(--pageNo)
          }
        },
        nextPage() {  //下一页
        let {pageNo,num_pages} = this.page;
          if (pageNo < num_pages) {
              this.getData(++pageNo)
          }
        },
        backtop() {
            let top = document.documentElement.scrollTop || document.body.scrollTop
            // 实现滚动效果
            const timeTop = setInterval(() => {
              document.body.scrollTop = document.documentElement.scrollTop = top -= 50
              if (top <= 0) {
                clearInterval(timeTop)
            }
            }, 10)
        },
        getWordcloud() {
            var dom = document.getElementById("chart");
            var myChart11 = this.$echarts.init(dom);
            var app = {};
            var option = null;
            myChart11.showLoading();
            $.get("http://124.223.32.208:8000/api/chart/generateWordCloud/", function(data) {
                let JsonList = [];
                for (let word of data.data) {
                    JsonList.push(word)
                }

                myChart11.hideLoading();
                myChart11.setOption(
                    option = {
                        tooltip: {
                            show: true
                        },
                        series: [{
                            name: '纺织技术词云',
                            type: 'wordCloud',
                            sizeRange: [20, 70], //文字范围
                            //文本旋转范围，文本将通过rotationStep45在[-90,90]范围内随机旋转
                            rotationRange: [-45, 90],
                            rotationStep: 45,
                            textRotation: [0, 45, 90, -45],
                            // gridSize: 9, 
                            //形状
                            shape: 'circle',
                            textStyle: {
                                normal: {
                                    color: function() { //文字颜色的随机色
                                        return 'rgb(' + [
                                            Math.round(Math.random() * 250),
                                            Math.round(Math.random() * 250),
                                            Math.round(Math.random() * 250)
                                        ].join(',') + ')';
                                    }
                                },
                                //悬停上去的字体的阴影设置
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowColor: '#333'
                                }
                            },
                            data: JsonList
                        }]
                    }
                );
            });
        },
        getWenxian() {
            var dom = document.getElementById("chart1");
            var myChart = this.$echarts.init(dom);
            var app = {};
            var option = null;
            myChart.showLoading();
            $.get('http://124.223.32.208:8000/api/chart/getBarData/', function(data) {
                var datas = data.bar;
                let x_data = [];
                let y_data = [];
                for (let c of datas) {
                    x_data.push(c.category);
                    y_data.push(c.count);
                }


                var x_data_inno = [];
                var y_data_inno = [];
                var data_ino = data.bar_inno;
                for (let inno of data_ino) {
                    x_data_inno.push(inno.category);
                    y_data_inno.push(inno.count);
                }

                myChart.hideLoading();
                myChart.setOption(
                    option = {
                        color: ["#2f89cf"],
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                // 坐标轴指示器，坐标轴触发有效
                                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        grid: {
                            left: "5px",
                            top: "10px",
                            right: "0%",
                            bottom: "4%",
                            containLabel: true
                        },
                        xAxis: [{
                            type: "category",
                            data: x_data,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                textStyle: {
                                    // color: "rgba(255,255,255,.6)",
                                    color: "#5b5b5b",
                                    fontSize: "16"
                                },
                                rotate: 60,
                                interval: 0, //代表显示所有x轴标签显示
                            },
                            axisLine: {
                                show: false
                            }
                        }],
                        yAxis: [{
                            type: "value",
                            axisLabel: {
                                textStyle: {
                                    // color: "rgba(255,255,255,.6)",
                                    color: "#5b5b5b",
                                    fontSize: "16"
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "rgba(255,255,255,.1)"
                                    // width: 1,
                                    // type: "solid"
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: "rgba(255,255,255,.1)"
                                }
                            }
                        }],
                        series: [{
                            name: "文献数量",
                            type: "bar",
                            barWidth: "55%",
                            data: y_data,
                            itemStyle: {
                                barBorderRadius: 5
                            }
                        }]
                    }
                );
                let dataAll = [{
                        category: "总览",
                        data: y_data,
                        data_x: x_data,
                    },
                    {
                        category: "创新前沿",
                        data: y_data_inno,
                        data_x: x_data_inno,
                    }
                ];

                document.querySelector(".bar h2").addEventListener("click", function(e) {
                    let i = e.target == this.children[0] ? 0 : 1;
                    option.series[0].data = dataAll[i].data;
                    option.xAxis[0].data = dataAll[i].data_x;
                    myChart.setOption(option);
                });
            });          
        }
    }
}
</script>


<style scoped lang="less">
   *{
    margin: 0;
    padding: 0; 
   }
    .search-model {
    width: 100%;
    height: 100%;
    background-color: #eeeef9;
    }
    .card1_patent {
        float: left;
        margin: 30px 80px;
        width: 1150px;
        height: 1300px;
        border: 3px solid #878cd6;
        background: #fff;
        border-radius: 10px;
        
    }
     .searching {
      float: center;
      /* height: 42px; */
      width: 440px;
      /* height: 45px; */
      /* background-color: pink; */
      margin: 10px auto;
  }
  .search {
      /* float: left; */
      width: 446px;
      height: 45px;
      /* background-color: skyblue; */
      /* margin-left: 20px;  */
  } 
  .el-input__inner{
      float: left;
      width: 388px;
      height: 45px;
      display:inline;
 }
  .search el-input {
      float: left;
      width: 200px;
      height: 45px;
      border: 1px solid #00a4ff;
      border-right: 0;
      color: #999;
      font-size:18px;
      display:inline;
  } 
  .search button {
      float: right;
      width: 50px;
      height: 45px;
      background-color: #00a4ff;
      border: 0;
      /* background: url(img/搜索框.png); */
  }
  .search button a img {
      height: 40px;
      width: 45px;
      margin: 3px auto;
  }
  .search-model {
      height: 1200px;  
      /* position : relative; */
      /* margin-bottom: 60px; */
      margin:0px auto;
      /* min-height: 100%; */

  }
  /* 论文Or专利 */
  li {
      list-style: none;
  }
  .choose {
      /* float: center; */
      height: 70px;
      width: 200px;
      margin: 0px auto;
  }
  .choose ul li {
      float: left; 
      margin: 0 5px;
  }
  .choose ul li a {
      display: block; 
      height: 30px;
      padding: 0 10px;
      line-height: 20px;
      font-size: 22px;
      color: #050505;
      text-decoration: none;
  }
  .choose ul li a:hover {
      /* border-bottom: 2px solid #00a4ff; */
      color: #00a4ff;
  }
  .all_result_patent {
    margin: 0 50px;
    width: 1100px;
    height: 1100px;
  //   display: flex;
  //   justify-content: center;
  }
  .result {
       float: left;
       width: 500px;
       height: 170px;
       margin: 15px 5px;
       font-size: 20px;
       font-weight: 700;
       text-align: center;
       line-height: 150%;
       /* border: solid 1px red; */
       padding: 10px;
       background: #fff;
       border-radius: 4px;
       box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .authors {
      font-size: 16px;
      font-weight: 400;
      text-align:left;
  }
  .company_list {
      font-size: 16px;
      font-weight: 400;
      text-align:left;
  }
  .keywords {
      font-size: 16px;
      font-weight: 400;
      text-align:left;
  }
//   .all_result  .result .title a{
//       float: left; 
//       display: block; 
//       justify-content: center;
//     //   text-align: center;
//       font-size: 20px;
//   }

li {
    list-style: none;
   }
// nav {
//     float: left;
//     height: 40px;
//     margin: 0px auto;
// }
// nav ul li {
//     float: left;
//     width: 38px;
// }
// nav ul .active{
//     display: block;
//     height: 30px;
//     margin:30px auto;
//     padding: 0px 20px;
//     line-height: 30px; 
//     font-size: 15px;
//     color: white;
//     background-color: #00a4ff;
//     text-decoration: none;
//     border-left: 1px solid #ccc ;
//     text-align: center;
// }
.pagination {
    display: flex;
    justify-content: center;
    color: #3951b3;
    font-size: 14px;
    li {
    width: 36px;
    height: 36px;
    background: #fff;
    text-align: center;
    line-height: 36px;
    margin-right: 15px;
    margin-top: 30px;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
        background: #4e6ef2;
        color: #fff;
    }
    &.prev,&.next{
        width:80px;
    }
    &.active {
        background: #4e6ef2;
        color: #fff;
    }
    }
}
  .panel {
          float: right;
        //   position: absolute;
          width: 500px;
          height: 500px;
          border: 3px solid #878cd6;
        //   background: #797ed1;
          background: #fff;
          border-radius: 10px;
          padding: 0 0.1875rem 0.5rem;
          margin: 30px 80px;
        }
    #chart {
          float: left;
          width: 500px;
          height: 500px;
        }
    #chart1 {
          float: left;
          width: 500px;
          height: 500px;
        }


</style>