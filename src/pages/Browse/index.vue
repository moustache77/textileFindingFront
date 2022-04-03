<template style="height:100%">
 <div class="search-model">
    <div class="choose0">
      <div class="choose1">
          <ul>
              <!-- <div></div> -->
              <li><router-link to="/browse/zhishi" ><span class="yuelan">知识图谱</span></router-link></li>
              <li><router-link to="/browse/tree" exact><span class="yuelan">分类</span></router-link></li>
              <!-- <div></div> -->
          </ul>
      </div>
    </div>
      <router-view></router-view>
  </div>
</template>
<script src="jquery-3.1.1.min.js" type="text/javascript"></script>
<script>
    
import Axios from 'axios'
export default {

   methods: {}
}       
</script>

<style lang="less">
    *{
    margin: 0;
    padding: 0; 
      }
  .search-model {
    width: 100%;
    height: 100%;
    background-color: #eeeef9;
    }
  .search-model {
      height: 1000px;  
      /* position : relative; */
      /* margin-bottom: 60px; */
    //   margin:40px auto;
      /* min-height: 100%; */

  }
  /* 论文Or专利 */
  li {
      list-style: none;
  }
  .choose0 {
      background: #e0e6f0;
    //   float: left; 
      height: 70px;
      width: 100%;
      margin-top: 0px;
      position:relative;
  }
  .choose1 {
    //   background: #e0e6f0;
      position:relative;
    //   float: left; 
      height: 80px;
      width: 900px;
      margin-left: 80px;
  }
  .choose1 ul {
      position:relative;
      display: block; 
      width: 900px;
      height: 80px;
      float: left; 
    //   padding-top: 15px;
      margin-left: 50px;
       margin-top: -10px;
  }
  .choose1 ul li {
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
  .choose1 ul li a {
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
//   .choose1 ul li div {
//       position:relative;
//       display: block; 
//       float: left; 
//       height: 82px;
//       width: 20px;
//       border-radius: 40px;
//       color: #303087;
//     //   padding-top: -15px;
//   }
  .choose1 ul li span {
      position:relative;
      display: block; 
      float: left; 
      height: 81px;
      width: 180px;
      border-radius: 20px 20px -20px 20px;
    //   background: #e0e6f0;
    //   padding-top: -15px;
  }
  .choose1 ul li a:hover {
      /* border-bottom: 2px solid #00a4ff; */
      color: #00a4ff;
  }
  .active span{
      border-radius: 20px 20px 0px 0px;
    //   background: #eeeef9;
      background: #eeeef9;
	}
    //  .active div{
    // //   border-radius: 20px 20px 0px 0px;
    // //   background: #e0e6f0;
    //   background: #e0e6f0;
	// }
  .active span{
    //   border-radius: 20px;
	//   border-bottom: 2px solid #005cb8;
      color: #005cb8;
	}
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



    // methods: {
    //   getzhishi() {
    //       var chartDom = document.getElementById('main');
    //       var myChart = this.$echarts.init(chartDom);
    //       var option;

    //       myChart.showLoading();
    //       myChart.showLoading();
    //       $.get('http://124.223.32.208:8000/media/json_files/projectRelations.json', function(webkitDep) {
    //         myChart.hideLoading();
    //         option = {
    //           legend: {
    //             data: ['author', 'project']
    //           },
    //           series: [{
    //             type: 'graph',
    //             layout: 'force',
    //             animation: true,
    //             symbolSize: 35,
    //             draggable: true,
    //             focusNodeAdjacency: true,
    //             roam: true,
    //             edgeSymbol: ['circle', 'arrow'],
    //             edgeSymbolSize: [2, 8],
    //             label: {
    //               position: 'right',
    //               formatter: '{b}'
    //             },
    //             edgeLabel: { //线条的边缘标签
    //               normal: {
    //                 show: false,
    //                 textStyle: {
    //                   fontSize: 7
    //                 },
    //                 //通过回调函数设置连线上的标签
    //                 formatter: function(params) {
    //                   return params.data.relation;
    //                 }
    //               }
    //             },
    //             force: { //设置节点空隙
    //               repulsion: 2500,
    //               edgeLength: [10, 30]
    //             },
    //             lineStyle: { // 关系边的公用线条样式。其中 lineStyle.color 支持设置为'source'或者'target'特殊值，此时边会自动取源节点或目标节点的颜色作为自己的颜色。
    //               normal: {
    //                 color: '#aaa', // 线的颜色[ default: '#aaa' ]
    //                 width: 1, // 线宽[ default: 1 ]
    //                 type: 'solid', // 线的类型[ default: solid ]   'dashed'    'dotted'
    //                 opacity: 0.5, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。[ default: 0.5 ]
    //                 curveness: 0 // 边的曲度，支持从 0 到 1 的值，值越大曲度越大。[ default: 0 ]
    //               }
    //             },
    //             data: webkitDep.nodes,
    //             links: webkitDep.links,
    //             categories: webkitDep.categories,

    //           }]
    //         };
    //         myChart.setOption(option);

    //       });

    //       option && myChart.setOption(option);
    //     }
    // }
</style>