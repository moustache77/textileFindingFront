<template>
 <div class="search-model1">
    <div class="el-col-zhishi el-col-210-zhishi"  style="padding-left: 10px;padding-right: 10px;float: left;box-sizing: border-box;display: block;">
        <div class="row" style="margin: 15px auto;">
				<div class="col-lg-6">
					<div class="input-group">
						<input type="text" class="form-control" placeholder="Search for..." id="searchWords">
						<span class="input-group-btn">
							<button class="btn btn-default" type="button" id="button">Go!</button>
						</span>
					</div>
				</div>
	    </div>
			<div id="main" style="height: 900px;width: 90%;margin: 20px auto;"></div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
    *{
    margin: 0;
    padding: 0; 
   }
    .search-model1 {
    width: 100%;
    /* height: 100%; */
    height: 1300px;
    margin:0px auto;
    background-color: #eeeef9;
    }
    .container_main {
    height: 900px;
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
    .el-col-210-zhishi {
    width: 1430px;
    height: 1000px;
    margin-left: 100px; 
    border-radius: 20px;
    background-color: #fff;
     /* border: 3px solid #878cd6; */
    box-shadow: 0 5px 202px rgba(0, 0, 0,0.1);
    }
    .retrieves_title {
        width: 90%;
        height: 50px;
        letter-spacing: 2px;
        margin-top: 20px;
        margin-left: 50px;
        font-size: 30px;
        /* font-weight: 700; */
        color: #002076;
        /* background: #002076; */
    }
    .echarts {
        height: 700px;
        width: 100%;
        margin-top: 20px;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        position: relative;
        border-top: 3px solid #ccc ;
         /* border-bottom: 3px solid #ccc ; */
        /* background: #002076; */
    }

</style>