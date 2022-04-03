<template >
  <div class="search-model-rank" style="background-color: #eeeef9;">
    <div class="choose0">  
	  <div class="choose2">
          <ul>
              <li><router-link to="/rank/research" ><span class="rank">科研情报</span></router-link></li>
              <li><router-link to="/rank/industry" ><span class="rank">行业情报</span></router-link></li>
          </ul>
      </div>
     </div>
      <router-view></router-view> 
  </div>
</template>

<script src="jquery-1.7.2.min.js" type="text/javascript"></script>
<script type="text/javascript">

</script>
<style lang="less">
    *{
    margin: 0;
    padding: 0; 
   }
    .search-model-rank {
    width: 100%;
    // height: 100%;
    height: 1400px;
    // margin:0px auto;
    background-color: #eeeef9;
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
  .choose2 {
      position:relative;
      height: 80px;
      width: 900px;
      margin-left: 80px;
  }
  .choose2 ul {
      position:relative;
      display: block; 
      width: 900px;
      height: 80px;
      float: left; 
    //   padding-top: 15px;
      margin-left: 50px;
       margin-top: -10px;
  }
  .choose2 ul li {
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
  .choose2 ul li a {
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
  .choose2 ul li span {
      position:relative;
      display: block; 
      float: left; 
      height: 71px;
      width: 180px;
      border-radius: 20px 20px 20px 20px;
    //   background: #e0e6f0;
    //   padding-top: -15px;
  }
  .choose2 ul li a:hover {
      /* border-bottom: 2px solid #00a4ff; */
      color: #00a4ff;
  }
  .active span{
      border-radius: 20px 20px 0px 0px;
    //   background: #eeeef9;
      background: #eeeef9;
	}
    .active span{
    //   border-radius: 20px;
	//   border-bottom: 2px solid #005cb8;
      color: #005cb8;
	}
//   .active span{
// 	  border-bottom: 2px solid #00a4ff;
//       color: #00a4ff;
// 	}




</style>