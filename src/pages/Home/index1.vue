<template>
   <div class="search-model">
       <div class="container">
        <div class="card">
            <div class="imgBx">
                <img src=".//img/询问.png">
            </div>
            <div class="content">
                <h2>织了询问</h2>
                <p>搜索想要了解的纺织技术相关的<br/>
                   论文或者专利</p>
            </div>
        </div>
        <div class="card">
            <div class="imgBx">
                <img src=".//img/阅览.png">
            </div>
            <div class="content">
                <h2>织了阅览</h2>
                <p>通过知识图谱了解的纺织创新关<br/>
                    键技术；通过蒲公英图了解纺织<br/>
                    技术分类</p>
            </div>
        </div>
        <div class="card">
            <div class="imgBx">
                <img src=".//img/排行.png">
            </div>
            <div class="content">
                <h2>织了排行</h2>
                <p>通过地图和排行榜了解纺织技术创<br/>
                    新领跑者</p>
            </div>
        </div>
        <div class="card">
            <div class="imgBx">
                <img src=".//img/记忆.png">
            </div>
            <div class="content">
                <h2>织了记忆</h2>
                <p>通过时间线了解纺织行业技术发展</p>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
export default {

}
</script>

<style>
    .search-model {
    width: 100%;
    /* height: 100%; */
    height: 680px;  
    margin:0px auto;
    background-color: #eeeef9;
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