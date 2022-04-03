<template style="height:100%">
 <div class="search-model">
     <!-- <div style="min-height:100%;background-color:#d0d2ef;" class="background"></div> -->
    <!-- 搜索框 -->
      <!-- <div  style="min-height:100%" class="background"></div>
      <div class="searching w"> -->
          <!-- 搜索模块 -->
          <!-- <div class="search">
              <el-input placeholder="请输入内容" v-model="write" clearable @input="searchAction($event)" style="width:391px"></el-input> -->
              <!-- <input id='write' type="text" value="请输入关键词" @input="searchAction($event)"> -->
              <!-- <button @click="getData()" :disabled="isDisable" ><a href="#"><img src=".//img/搜索框.png"></a></button>
          </div>
      </div> -->
      <!-- <button @click="getData()">点击获取</button> -->
      <!-- 论文or专利 -->
    <div class="choose0">
      <div class="choose">
          <ul>
              <li><router-link to="/search/essay" exact><span>论文</span></router-link></li>
              <li><router-link to="/search/patent" exact><span>专利</span></router-link></li>
          </ul>
      </div>
    </div>
      <router-view></router-view>
      <!-- <h1>{{teacher}}</h1> -->
      <!-- <div class="all_result">
        <div v-for="item in teacher" :key="item.id" class="result">
            <div><a :href="item.article_url" target="_blank">{{item.title}}</a></div>
            <div class="authors">作者： {{item.authors}}</div>
            <div class="company_list">机构： {{item.company_list}}</div>
            <div class="keywords">关键词： {{item.keywords}}</div>
        </div>
      </div>
      <div v-if="show1">
        <nav style="text-align: center;">
            <ul class="pagination" @click="backtop">
                <li @click="prePage()" class="prev">
                    <a >&laquo; 上一页</a>
                </li>
                <li :class="page.pageNo==index?'active':''" v-for="index in pages" :key="index" @click="curPage(index)">
                    <a>{{index}}</a>
                </li>
             <li>
                <a>2</a>
            </li>
            <li>
                <a>3</a>
            </li>-->

                <!-- <li @click="nextPage()" class="next"> 
                    <a >下一页 &raquo;</a>
                </li>
            </ul>
        </nav>
      </div> --> 
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
<script src="jquery-3.1.1.min.js" type="text/javascript"></script>
<script>
    
import Axios from 'axios'
export default {
//    data() {
//        return {
//            teacher:[],
//            page :{
//              num_pages: 1, //总页数
//              count: 1, //总条数
//              pageNo: 1, //页码
//              pageSize: 8, //每一页条数
//            },
//            isDisable: false,
//            show1: false,
//            write: ''
//        };
//    },
//    computed: {
//      pages() {
//        let {pageNo:n,num_pages:total} = this.page;
//        if(total < 10) return total;  //页数小于10页  省略号不添加
//        if(n <= 5) {
//            return [1,2,3,4,5,6,'...',total];
//        }else if(n >= total-5){
//            return[1,'...',total-6,total-5,total-4,total-3,total-2,total-1,total]
//        }else {
//            return[1,'...',n-2,n-1,n,n+1,n+2,'...',total]
//        }

//      }
//    },
//    mounted() {
//        this.getData();
//        window.scrollTo(0,0);
//    },
//    name: "",
   methods: {
       searchAction(e) {
        // var inputvalue = e.target.value;
        var inputvalue = this.write;
        window.inputvalue = inputvalue;
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
       },}}
//        getData(i=this.page.pageNo) {
//             this.page.pageNo = i;
//             // this.Axios({
//             //     method:'get',
//             //     url:'http://124.223.32.208:8000/api/searching/get_periodical?keywords=this.write&page=${this.page.pageNo}'
//             // })
//             Axios.get('http://124.223.32.208:8000/api/searching/get_periodical?keywords='+inputvalue+'&page='+this.page.pageNo)
//             .then((response) =>{
//             console.log(response.data)
//             let{list,num_pages,count} = response.data;
//             // if (response.data.list.length != 0) {
//             // var pages = response.data.page_range
//             // var count = response.data.num_pages
//             // for (pages < count;pages++;) {
//             this.teacher = list;
//             this.page.num_pages = num_pages;
//             console.log(this.teacher)
//             console.log(this.page.num_pages)
//             console.log(this.page.count)
//             this.page.count = count;
//             this.isDisable = true
//             setTimeout(() => {
//                 this.isDisable = false
//                 }, 2000)  
//              }) 
//             this.show1 = true
//             // this.show1 = true
//             if (this.teacher == none) {
//                 this.show1 = false
//             }
//         //   var i = 1;
//         //   for (i < 5; i++;) {
//         //     Axios.get('http://124.223.32.208:8000/api/searching/get_periodical?keywords='+inputvalue+'pages='+i).then((response) =>{
//         //     console.log(response.data.list);
//         //     // if (response.data.list.length != 0) {
//         //     this.teacher = response.data.list
//         //     this.isDisable = true
//         //     setTimeout(() => {
//         //         this.isDisable = false
//         //         }, 1000)
//         //     })
//         //   }      
//         },
//         curPage(i) { //当前页
//           if(i=='...') return;
//           this.getData(i)
//         },
//         prePage() { //上一页
//         let {pageNo} = this.page;
//           if (pageNo > 1) {
//               this.getData(--pageNo)
//           }
//         },
//         nextPage() {  //下一页
//         let {pageNo,num_pages} = this.page;
//           if (pageNo < num_pages) {
//               this.getData(++pageNo)
//           }
//         },
//         backtop() {
//             let top = document.documentElement.scrollTop || document.body.scrollTop
//             // 实现滚动效果
//             const timeTop = setInterval(() => {
//               document.body.scrollTop = document.documentElement.scrollTop = top -= 50
//               if (top <= 0) {
//                 clearInterval(timeTop)
//             }
//             }, 10)
//         },

//     }
// }
</script>

<style lang="less">
     *{
    margin: 0;
    padding: 0; 
    /* box-sizing: border-box; */
    /* font-family: 'Poppins', sans-serif;   */
   } 
  /* body {
      display: flex;
      justify-content: center;
      align-items: center;
  } */
  
  /* 导航栏 */

  /* 搜索框 */
/* .w {
      float: center;
      width: 411px;
      margin: auto;
  } */
//  .background {
//       position:absolute;
//       top: 0;
//       left: 0;
//       width:100%;
//       height:100%;
//       min-width: 1000px;
//       z-index:-10;
//       zoom: 1;
//       /* background-image: linear-gradient(to top, #e6b980 0%, #eacda3 100%); */
//       /* background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%); */
//       /* background-image: linear-gradient( 135deg, #FFE985 10%, #FA742B 100%); */
//       /* background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%); */
//       background-image: linear-gradient( 135deg, #5EFCE8 10%, #736EFE 100%);
//       background-color: #d0d2ef; 
//       /* background: url("img/背景图.jpg"); */
//       background-repeat: no-repeat;
//       background-size: cover;
//       -webkit-background-size: cover;
//       -o-background-size: cover;
//       background-position: center 0;
//       background-attachment: fixed;
//       }
  .search-model {
    width: 100%;
    height: 100%;
    background-color: #eeeef9;
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
      height: 1400px;  
    //   margin:0px auto;
      /* position : relative; */
      /* margin-bottom: 60px; */
    //   margin:40px auto;
      /* min-height: 100%; */

  }
  /* 论文Or专利 */
  li {
      list-style: none;
  }
  .choose {
      position:relative;
    //   float: left; 
      height: 80px;
      width: 900px;
      margin-left: 80px;
  }
  .choose ul {
      position:relative;
      display: block; 
      width: 900px;
      height: 80px;
      float: left; 
    //   padding-top: 15px;
      margin-left: 50px;
       margin-top: -10px;
  }
  .choose ul li {
      position:relative;
      display: block; 
      width: 180px;
      height: 80px;
      float: left; 
      margin-top: -9px;
    //   padding-top: 20px;
      border-radius: 20px;
      margin-left: -10px;
  }
  .choose ul li a {
       position:relative;
      display: block; 
      float: left; 
      height: 80px;
      text-align: center;
      padding-left:  10px;
      padding-top: -15px;
      line-height: 80px;
      font-size: 25px;
      color: #303087;
      text-decoration: none;
  }
  .choose ul li span {
      position:relative;
      display: block; 
      float: left; 
      height: 81px;
      width: 180px;
      border-radius: 20px 20px -20px 20px;
    //   background: #e0e6f0;
    //   padding-top: -15px;
  }
  .choose ul li a:hover {
      /* border-bottom: 2px solid #00a4ff; */
      color: #00a4ff;
  }
  .active span{
      border-radius: 20px 20px 0px 0px;
    //   background: #eeeef9;
      background: #eeeef9;
	}
//   .active span{
// 	  border-bottom: 2px solid #00a4ff;
//       color: #00a4ff;
// 	}
//   .all_result {
//       margin: 0 auto;
//       width: 700px;
//     //   display: flex;
//       justify-content: center;
//   }
//   .result {
//        margin: 15px 5px;
//        font-size: 20px;
//        font-weight: 700;
//        text-align: center;
//        line-height: 150%;
//        /* border: solid 1px red; */
//        padding: 10px;
//        background: #fff;
//        border-radius: 4px;
//        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
//   }
//   .authors {
//       font-size: 16px;
//       font-weight: 400;
//       text-align:left;
//   }
//   .company_list {
//       font-size: 16px;
//       font-weight: 400;
//       text-align:left;
//   }
//   .keywords {
//       font-size: 16px;
//       font-weight: 400;
//       text-align:left;
//   }
// //   .all_result  .result .title a{
// //       float: left; 
// //       display: block; 
// //       justify-content: center;
// //     //   text-align: center;
// //       font-size: 20px;
// //   }

// li {
//     list-style: none;
//    }
// // nav {
// //     float: left;
// //     height: 40px;
// //     margin: 0px auto;
// // }
// // nav ul li {
// //     float: left;
// //     width: 38px;
// // }
// // nav ul .active{
// //     display: block;
// //     height: 30px;
// //     margin:30px auto;
// //     padding: 0px 20px;
// //     line-height: 30px; 
// //     font-size: 15px;
// //     color: white;
// //     background-color: #00a4ff;
// //     text-decoration: none;
// //     border-left: 1px solid #ccc ;
// //     text-align: center;
// // }
// .pagination {
//     display: flex;
//     justify-content: center;
//     color: #3951b3;
//     font-size: 14px;
//     li {
//     width: 36px;
//     height: 36px;
//     background: #fff;
//     text-align: center;
//     line-height: 36px;
//     margin-right: 15px;
//     margin-top: 30px;
//     border-radius: 6px;
//     cursor: pointer;
//     &:hover {
//         background: #4e6ef2;
//         color: #fff;
//     }
//     &.prev,&.next{
//         width:80px;
//     }
//     &.active {
//         background: #4e6ef2;
//         color: #fff;
//     }
//     }
// }


</style>
var backgroundColor = () => [
				'#506fc0',
				'#309bd7',
				'#9cafd6',
				'#c4d3fa',
				'#d7dce9',
				'#efd7c1',
				'#f3e4b4',
				// 'black',
			][rindex()];