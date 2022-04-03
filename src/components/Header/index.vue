<template>
   <div>
     <div class="header w">
       <!-- logo部分 -->
       <div class="logo" style="white-space:pre;">
           <p class="zhiliao">织了Innovation Discovery</p>   
           <p class="fangzhi"> 纺织行业创新情报站</p> 
       </div>
       <!-- 导航栏部分 nav -->
       <div class="nav">
           <ul>
               <li><router-link to="/home" exact><div class="color">首页</div></router-link></li>
               <li><router-link to="/search" ><div class="color">织了询问</div></router-link></li>
               <li><router-link to="/browse" ><div class="color">织了阅览</div></router-link></li>
               <li><router-link to="/rank" ><div class="color">织了排行</div></router-link></li>
               <li><router-link to="/memory" exact><div class="color"> 织了记忆</div></router-link></li>
           </ul>
       </div>
     </div>
   </div>
</template>

<script>
export default {
    methods:{
      goTo(url){
        this.$router.push(url)
      }
   }

}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    /* .w {
        width: 1200px;
        margin: auto;
    } */
    .header {
        height: 80px;
        /* background-color: rgb(77, 84, 194); */
        /* background-color: rgb(77, 84, 194); */
        background-color: #0D2D54;
        /* margin: 10px auto; */
    }
    @font-face
    {
        font-family: myFirstFont;
        src: url("苏新诗柳楷简_mianfeiziti.com.ttf");
    }
    .zhiliao {
        font-family: myFirstFont;
        font-size: 21px;
        font-weight: 700;
        color: white;
        line-height: 70%;
      }
    .fangzhi {
        font-family: myFirstFont;
        font-size: 21px;
        font-weight: 700;
        color: white;
        line-height: 70%;
    }
    .logo {
        float: left;
        width: 198px;
        height: 60px;
        margin: 19px 80px;
    }
    li {
        list-style: none;
    }
    .nav {
        float: left;
        margin-left: 60px;
    }
    .nav ul li {
        float: left;
    }
    .nav ul li a{
        display: block;
        height: 30px;
        margin:30px auto;
        padding: 0px 50px;
        line-height: 20px; 
        font-size: 23px;
        color: white;
        text-decoration: none;
        border-left: 2px solid #ccc ;
        border-right: 2px solid #ccc ;
    }
    /* .nav ul li a:hover {
        /* border-bottom: 2px solid #00a4ff; */
        /* color: rgb(23, 203, 248);
    } */ 
    /* .router-link-active {
        color: rgb(23, 203, 248);
    } */
    /* .router-link-exact-active{
         color: blue;
    } */
    .active div{
        font-weight: 700;
	    /* color: #005cb8; */
        /* color: red; */
	}

    /* .background {
      position:absolute;
      top: 0;
      left: 0;
      width:100%;
      height:100%;
      min-width: 1000px;
      z-index:-10;
      zoom: 1;
      /* background-image: linear-gradient(to top, #e6b980 0%, #eacda3 100%); */
      /* background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%); */
      /* background-image: linear-gradient( 135deg, #FFE985 10%, #FA742B 100%); */
      /* background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%); */
      /* background-color: #fff; */
      /* background: url("img/背景图.jpg"); */
      /* background-repeat: repeat-y;
      background-size: cover;
      -webkit-background-size: cover;
      -o-background-size: cover;
      background-position: center 0;
      background-attachment: fixed;
      } */ 

      .title {
            height: 20px;
            width: 1000px;
            margin: 10px 650px;
            font-size: 40px;
            font-weight: 500;
      }

     .guideline {
            height: 60px;
            width: 1000px;
            margin: 83px auto;
            background: #fff;
            line-height: 60px;
            box-shadow: 0 5px 10px rgba(0,0,0,0.25);
            border-radius: 50px;
        }
        .guideline nav {
            position: relative; 
            display: flex;
        }
        .guideline nav label {
            flex: 1;
            width: 100%;
            z-index: 1;
            position: relative;
            cursor: pointer; 
        }
        .guideline nav label a {
            position: relative; 
            z-index: -1;
            color: #1d1f20;
            font-size: 25px;
            font-weight: 500;
            text-decoration: none;
            transition: color 0.6s ease;

        }
        .guideline nav #home:checked ~ label.home a {
            color: #fff;
        }
        .guideline nav label a img {
            height: 28px;
            margin:  -3px 25px; 
        }
        .guideline nav .tab {
            position: absolute;
            height: 100%;
            width: 20%;
            left: 0;
            bottom: 0;
            /* background: linear-gradient(45deg, #05abe0 0%, #8200f4 100%); */
            /* background: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%); */
            /* background-image: linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%); */
            /* background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%); */
            background-image: linear-gradient(to top, #209cff 0%, #68e0cf 100%);
            border-radius: 50px;
            transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .guideline nav #home:checked ~ label.home a,
        .guideline nav #search:checked ~ label.search a,
        .guideline nav #browse:checked ~ label.browse a,
        .guideline nav #rank:checked ~ label.rank a,
        .guideline nav #memory:checked ~ label.memory a {
            color: #fff;
        }
        .guideline nav #search:checked ~ .tab {
            left: 20%;
        }
        .guideline nav #browse:checked ~ .tab {
            left: 40%;
        }
        .guideline nav #rank:checked ~ .tab {
            left: 60%;
        }
        .guideline nav #memory:checked ~ .tab {
            left: 80%;
        }
        .guideline nav input {
            display: none;
        }

</style>