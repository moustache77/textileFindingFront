<template style="height:100%">
  <div class="search-model1">
    <div class="tree">
          <div id="treechart" :style="{width: '1800px', height: '900px', padding: '0px 0px'}"></div> 
          <div id="fade" class="black_overlay">
	      </div>

        <div id="MyDiv" class="white_content">
            <div style="text-align: right; cursor: default; height: 40px;">
            <!-- <span style="font-size: 16px;" onclick="CloseDiv('MyDiv','fade')">关闭</span>  -->
                <button class="close" style="border: none;background:white;" @click="CloseDiv('MyDiv','fade','3Dwordcloud','3Dwordcloud1')"><img src=".//img/关闭.png" style="height: 20px;width: 20px;cursor: pointer;"></button>
		  	    </div> 
            <div id="3Dwordcloud" style="float: left;margin-top: 50px;margin-left: 20px;cursor: default; height: 200px;width: 200px;border-radius: 50%;border: 5px solid #fff;"></div>
            <div id="3Dwordcloud1" style="float: left;margin-top: 40px;margin-left: 70px;cursor: default; height: 300px;width: 400px;font-size:19px;"></div>
        </div>
	  </div> 
  </div>
</template>
<script src="jquery-1.7.2.min.js" type="text/javascript"></script>
<script src="./tagcanvas.min.js"></script>
<script type="text/javascript">
import Axios from 'axios';
import $ from 'jquery'
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
import echarts from 'echarts';
// import echarts from 'echarts';
// import  canvas from 'tagcanvas.min'
export default {
  data() {
        return {
             treedata:[
				{"name": "纺织材料", "children": [{"name": "纺织纤维", "children": [{"name": "天然纤维", "children": [{"name": "植物纤维", "children": [{"name": "白棉纤维", "details": {"name": "白棉纤维", "introduction": "棉纤维是由受精胚珠的表皮细胞经伸长、加厚而成的种子纤维，不同于一般的韧皮纤维。它的主要组成物质是纤维素。", "wordcloud": "纤维素,C6H10O5,蛋白质,蜡质", "value": null, "category": 1}}, {"name": "天然彩色棉", "details": {"name": "天然彩色棉", "introduction": "采用现代生物工程技术培育出来的一种在棉花吐絮时纤维就具有天然色彩的新型纺织原料,彩色棉制品有利于人体健康;在纺织过程中减少印染工序;迎合了人类提出的\"绿色革命\"口号，减少了对环境污染；有利于国家继续保持纺织品出口大国的地位，打破了国际\"绿色贸易壁垒\" ", "wordcloud": "抗静电,回归自然,天然色素", "value": null, "category": 1}}, {"name": "木棉纤维", "details": {"name": "木棉纤维", "introduction": "木棉纤维是锦葵目木棉科内几种植物的果实纤维，是最细、最轻、中空度最高、最保暖的纤维材质。具有防霉、轻柔、不透水、不导热，保暖、吸湿性强等特点。广泛应用各种家纺类产品中。", "wordcloud": "轻柔保暖,抗菌防霉,环保绿色", "value": null, "category": 1}}, {"name": "黄麻纤维", "details": {"name": "黄麻纤维", "introduction": "黄麻纤维白色，有光泽，吸湿性能好，散水快，主要供制作麻袋、麻布用，还可选纸、制绳索、织地毯和窗帘等。麻骨可制 活性炭、纤维板等", "wordcloud": "韧皮纤维,生物降解,廉价", "value": null, "category": 1}}, {"name": "苎麻纤维", "details": {"name": "苎麻纤维", "introduction": "苎麻，为我国特产，被世界誉为“中国草，中国宝”。苎麻纤维吸湿透气性是棉纤维的3-5倍左右，同时含有叮咛，嘧啶，嘌呤等有益元素，是世界公认的“天然纤维之王”。最适合做枕套、凉席的面料", "wordcloud": "除臭吸附,抗菌抑菌,吸湿透气", "value": null, "category": 1}}, {"name": "剑麻纤维", "details": {"name": "剑麻纤维", "introduction": "剑麻纤维质地坚韧，耐磨、耐盐碱、耐腐蚀，广泛运用在运输、渔业、石油、冶金等各种行业，具有重要的经济价值。", "wordcloud": "β-谷甾醇,5α孕甾烷-3β,硬质纤维", "value": null, "category": 1}}, {"name": "竹纤维", "details": {"name": "竹纤维", "introduction": "竹原纤维具有良好的透气性、瞬间吸水性、较强的耐磨性和良好的染色性等特性，具有天然抗菌、抑菌、除螨、防臭和抗紫外线功能。", "wordcloud": "轻薄服装面料,抗紫外线,吸湿透气", "value": null, "category": 1}}]}, {"name": "动物纤维", "children": [{"name": "羊毛纤维", "details": {"name": "羊毛纤维", "introduction": "羊毛纤维是羊的皮肤的变形物，保暖性极佳，多用于秋冬季节的服装，但极易虫蛀。纺织用毛纤维最主要是绵羊毛，通常称作羊毛，或称毛纤维，或简称毛", "wordcloud": "可塑性,保暖,二硫键", "value": null, "category": 2}}, {"name": "兔毛纤维", "details": {"name": "兔毛纤维", "introduction": "兔毛由角蛋白组成，绒毛和粗毛都有髓质层，绒毛的毛髓呈单列断续状或狭块状，粗毛的毛髓较宽，呈多列块状，含有空气。纤维细长，颜色洁白，光泽好，柔软蓬松，保暖性强，但纤维卷曲少，表面光滑，纤维之间抱合性能差，强度较低，细毛为15.9～27.4cN/tex，粗毛为62.7～122.4cN/tex，平均断裂伸长率为31%～48%。对酸、碱的反应与羊毛大致相同。", "wordcloud": "机织面料,防蛀,角蛋白", "value": null, "category": 2}}, {"name": "羊绒纤维", "details": {"name": "羊绒纤维", "introduction": "羊绒是一根根细而弯曲的纤维，其中含有很多的空气，并形成空气层，可以防御外来冷空气的侵袭，保留体温不会减低。", "wordcloud": "特种纤维,纤细柔韧,产量稀少", "value": null, "category": 2}}, {"name": "骆驼毛纤维", "details": {"name": "骆驼毛纤维", "introduction": "骆驼毛颜色从乳白色至棕褐色，其中色浅的、光泽好的骆驼毛品质优良。骆驼毛的重要特征是粗细毛纤维混杂，其中细短的绒毛纤维含量约为50%左右。", "wordcloud": "粗细毛纤维混杂,苏氨酸,半胱氨酸", "value": null, "category": 2}}, {"name": "牦牛绒纤维", "details": {"name": "牦牛绒纤维", "introduction": "牦牛绒平均直径约20μm，平均长度约30～40mm,纤维具有滑软、弹性好、光泽柔和等特点,是毛纺工业的高档原料", "wordcloud": "柔软滑糯,密度差异大,绒纤维", "value": null, "category": 2}}, {"name": "蚕丝纤维", "details": {"name": "蚕丝纤维", "introduction": "蚕丝是自然界中最轻最柔最细的天然纤维，撤消外力后可轻松恢复原状，内胎不结饼，不发闷，不缩拢，均匀柔和，可永久免翻使用。桑蚕丝主要由动物蛋白组成，富含十八种人体所必须的氨基酸，能促进皮肤细胞活力，防血管硬化，长期使用可防皮肤衰老，对某些皮肤病有特殊的止痒效果", "wordcloud": "腺分泌物类纤维,丝胶蛋白,天门冬氨酸", "value": null, "category": 2}}, {"name": "蜘蛛丝纤维", "details": {"name": "蜘蛛丝纤维", "introduction": "蜘蛛丝对昆虫来说是非常强大的。蜘蛛丝的理化性质与蚕丝相比，具有非常明显的优势，在力学强度方面，蜘蛛丝纤维与强度最高的碳纤维及高强合纤Aramid、Kevlar，等强度相接近，但它的韧性明显优于上述几种纤维。因此，蜘蛛丝纤维在国防、军事（防弹衣）、建筑等领域具有广阔应用前景。", "wordcloud": "腺分泌物类纤维,NH2-CH2-COOH,NH2-CH[CH3]-COOH", "value": null, "category": 2}}]}, {"name": "矿物纤维", "children": [{"name": "石棉纤维", "details": {"name": "石棉纤维", "introduction": "石棉由纤维束组成，而纤维束又由很长很细的能相互分离的纤维组成。石棉具有高度耐火性、电绝缘性和绝热性，是重要的防火、绝缘和保温材料", "wordcloud": "单斜晶系,致癌性,耐碱性", "value": null, "category": 3}}]}]}, {"name": "化学纤维", "children": [{"name": "有机再生纤维", "children": [{"name": "粘胶纤维", "details": {"name": "粘胶纤维", "introduction": "其主要原料是化学浆粕，包括棉浆粕和木浆粕两种，通过化学反应将天然纤维素分离出来再生而成，国内所用原料主要是棉浆粕. 粘胶纤维吸湿性好，易于染色，不易起静电，有较好的可纺性能，被广泛应用于各类纺织、服装等领域。", "wordcloud": "（C6H10O5）n,装饰用纺织品,吸湿性", "value": null, "category": 4}}, {"name": "TENCEL(天丝)", "details": {"name": "TENCEL(天丝)", "introduction": "天丝TENCEL纤维是由长链纤维素分子，所组成高结晶结构组织，因此具有高强度、高纯净度，并在湿态中仍然能维持原有的化学性质.", "wordcloud": "亲水性,强韧柔软,坦西尔纤维", "value": null, "category": 4}}, {"name": "莫代尔纤维", "details": {"name": "莫代尔纤维", "introduction": "Modal的结构Modal分子中纤维素的聚合度高于普通黏胶纤维，低于Lyocell。Moda的形态结构为纵向表面有1～2根沟槽，截面不规则，类似腰圆形，也有皮芯层结构。皮j卷层结构是湿法纺丝过程中纤维表层与芯层的凝固速率不同造成的。皮层的结晶度较低，取向度较高；芯层的结晶度较高，取向度较低。", "wordcloud": "纤维素纤维,可染性,生物降解", "value": null, "category": 4}}, {"name": "大豆纤维", "details": {"name": "大豆纤维", "introduction": "大豆蛋白纤维属于再生植物蛋白纤维类，以食用级大豆蛋白粉为原料，利用生物工程技术，提取出蛋白粉中的球蛋白，通过添加功能性助剂，与腈基、羟基等高聚物接枝、共聚、共混，制成一定浓度的蛋白质纺丝液，改变蛋白质空间结构，经湿法纺丝而成。", "wordcloud": "亲肤性,植物球蛋白,海岛结构", "value": null, "category": 4}}, {"name": "牛奶纤维", "details": {"name": "牛奶纤维", "introduction": "牛奶纤维具有极好的服用安全性；具有天然抑菌功能，比羊毛、羊绒防霉防蛀，强度高，耐穿耐洗，易贮藏；水洗后易干，洗涤后仍可保持产品永久性能等。", "wordcloud": "绿色环保,吸热放热,舒适性", "value": null, "category": 4}}]}, {"name": "有机合成纤维", "children": [{"name": "聚酯纤维(涤纶)", "details": {"name": "聚酯纤维(涤纶)", "introduction": "聚酯纤维最大的优点是抗皱性和保形性很好，具有较高的强度与弹性恢复能力。其坚牢耐用、抗皱免烫、不粘毛。", "wordcloud": "有机二元酸,二元醇,耐微生物性", "value": null, "category": 5}}, {"name": "聚酰胺(尼龙)", "details": {"name": "聚酰胺(尼龙)", "introduction": "尼龙是美国杰出的科学家卡罗瑟斯（Carothers）及其领导下的一个科研小组研制出来的，是世界上出现的第一种合成纤维，尼龙是聚酰胺纤维（锦纶）的一种说法。尼龙的出现使纺织品的面貌焕然一新，它的合成是合成纤维工业的重大突破，同时也是高分子化学的一个非常重要里程碑。\n", "wordcloud": "H-[HN(CH2)xNHCO(CH2)yCO]-OH,医用纺织品,耐磨抗尘", "value": null, "category": 5}}, {"name": "聚丙烯腈纤维(腈纶)", "details": {"name": "聚丙烯腈纤维(腈纶)", "introduction": "主要特点是外观、手感、弹性、保暖性等方面类似羊毛，所以有“合成羊毛”之称。腈纶纤维的用途广泛，原料丰富，发展速度很快，现今已是三大合成纤维之一，其产量仅次于涤纶和尼龙。", "wordcloud": "-CH2-CH(CN)-,耐晒性,螺旋形构象", "value": null, "category": 5}}, {"name": "聚丙烯纤维(丙纶)", "details": {"name": "聚丙烯纤维(丙纶)", "introduction": "丙纶的品种有长丝（包括未变形长丝和膨体变形长丝）、短纤维、鬃丝、膜裂纤维、中空纤维、异形纤维、各种复合纤维和无纺织布等。主要用途是制作地毯（包括地毯底布和绒面）、装饰布、家具布、各种绳索、条带、渔网、吸油毡、建筑增强材料、包装材料和工业用布，如滤布、袋布等。此外在衣着方面应用也日趋广泛，可与多种纤维混纺制成不同类型的混纺织物，经过针织加工后可以制成衬衣、外衣、运动衣、袜子等。由丙纶中空纤维制成的絮被，质轻、保暖，弹性良好", "wordcloud": "(C3H6)n,平直光滑,强度高", "value": null, "category": 5}}, {"name": "聚乙烯醇缩醛纤维(维纶)", "details": {"name": "聚乙烯醇缩醛纤维(维纶)", "introduction": "维纶的柔软及保暖性好，它的相对密度比棉花要小，因此与棉花相同重量的维纶能织出更多的衣料。它的热传导率低，因而保暖性好。维纶的耐磨性和强度也比棉花要好，因此维纶在很多方面可以与棉混纺以节省棉花。维纶主要用于制作外衣、棉毛衫裤、运动衫等针织物，还可用于帆布、渔网、外科手术缝线、自行车轮胎帘子线、过滤材料等", "wordcloud": "吸湿性,-[CH2-CH(OH)]n-,产量小", "value": null, "category": 5}}, {"name": "聚氯乙烯纤维(氯纶)", "details": {"name": "聚氯乙烯纤维(氯纶)", "introduction": "氯纶的突出优点是难燃、保暖、耐晒、耐磨、耐蚀和耐蛀，弹性也很好，可以制造各种针织品、工作服、毛毯、滤布、绳绒、帐篷等，特别是由于它保暖性好，易生产和保持静电，故用它做成的针织内衣对风湿性关节炎有一定疗效。", "wordcloud": "-[CH2-CHCl]n-,耐酸碱,成本低廉,工艺简单", "value": null, "category": 5}}, {"name": "聚氨基甲酸酯纤维(氨纶)", "details": {"name": "聚氨基甲酸酯纤维(氨纶)", "introduction": "氨纶弹性优异。而强度比乳胶丝高2～3倍，线密度也更细，并且更耐化学降解。氨纶的耐酸碱性、耐汗、耐海水性、耐干洗性、耐磨性均较好。", "wordcloud": "干法纺丝,弹性纤维,低熔点", "value": null, "category": 5}}]}, {"name": "无机纤维", "children": [{"name": "玻璃纤维", "details": {"name": "玻璃纤维", "introduction": "玻璃纤维（Fiberglass），是一种性能优异的无机非金属材料，种类繁多，优点是绝缘性好、耐热性强、抗腐蚀性好、机械强度高，但缺点是性脆，耐磨性较差", "wordcloud": "弹性系数高,绝缘性,坩埚拉丝,池窑拉丝", "value": null, "category": 6}}, {"name": "碳纤维", "details": {"name": "碳纤维", "introduction": "碳纤维是由有机纤维经过一系列热处理转化而成，含碳量高于90%的无机高性能纤维，是一种力学性能优异的新材料，具有碳材料的固有本性特征，又兼备纺织纤维的柔软可加工性，是新一代增强纤维", "wordcloud": "结构材料,高强度,特种纤维", "value": null, "category": 6}}, {"name": "石墨纤维", "details": {"name": "石墨纤维", "introduction": "用作高温绝缘辐射屏罩、先进复合材料增强剂和功能复合材料，而镀镍石墨纤维可作燃料罐、防雷击和电磁波屏蔽材料，用于军事上的电力打击，即所谓的石墨炸弹", "wordcloud": "军工,特种纤维,层状六方晶格", "value": null, "category": 6}}, {"name": "金属纤维", "details": {"name": "金属纤维", "introduction": "金属纤维一般均达微米级，如不锈钢纤维一般直径在10μm左右，且市场供应的细不锈钢纤维平均直径为4μm。金属纤维具有良好的力学性能，不仅断裂比强度和拉伸比模量较高，而且可耐弯折、韧性良好；具有很好的导电性，能防静电，如钨纤维用作白炽灯泡的灯丝，同时它也是防电磁辐射和导电及电信号传输的重要材料", "wordcloud": "军工特种纤维,耐高温,抗静电", "value": null, "category": 6}}]}]}]}, {"name": "纤维制品", "children": [{"name": "纱线", "details": {"name": "纱线", "introduction": "纱线是一种纺织品，用各种纺织纤维加工成一定细度的产品，用于织布、制绳、制线、针织和刺绣等，分为短纤维纱，连续长丝等", "wordcloud": "混纺纱,复合纱,单纱,", "value": null, "category": 7}}, {"name": "织物", "details": {"name": "织物", "introduction": "织物 是由细小柔长物通过交叉，绕结，连接构成的平软片块物。 机织物是由存在交叉关系的纱线构成的。 针织物是由存在绕结关系的纱线构成的。 无纺织物是由存在连接关系的纱线构成的。 第三织物是由存在交叉/绕结关系的纱线构成的", "wordcloud": "机织物,针织物,无纺织物,立体织物,复合织物", "value": null, "category": 8}}]}]}
			 ]
        };
   },
   mounted() {
	   this.getTree();
    //  this.function1();
   },
//    beforeDestroy () {
//     myChart.clear()
//    },
   methods: {
	  CloseDiv(show_div,bg_div,pho_div,wor_div) {
                $("#"+ wor_div+" p ").remove();
			 	document.getElementById(show_div).style.display = 'none';
			 	document.getElementById(bg_div).style.display = 'none';
                // document.getElementById(pho_div).style.display = 'none';
                document.getElementById(wor_div).style.display = 'none';
                // $("#"+show_div+" div").remove();
                $("#"+ pho_div+" img").remove();
                $("#"+ wor_div+"").empty();
			 	// $("#" + wor_div+" p").remove();

	        },
    getTree() {    
        var dom = document.getElementById("treechart");
        var myChart =  this.$echarts.init(dom);
        var app = {};
        var option = null;
        myChart.showLoading();
        // Axios.get('http://124.223.32.208:8000/api/chart/getTreeChart/').then((response) =>{
        //       console.log(response.data)})}
        // this.treedata = response.data}
        $.get('http://124.223.32.208:8000/api/chart/getTreeChart/', function(data) {
        myChart.on("click", clickFun); 
        //  });
        myChart.hideLoading();
        myChart.setOption(option =
                    {
              tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
              },
              series: [{
                type: 'tree',
                // data: this.treedata,
                // data: [data],
                initialTreeDepth:5,
                data: [
                {
                name: '纺织材料',
                // value: 4,
                //图片大小
                symbolSize: [85, 85],
                //图片
                symbol: 'circle',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'inside',
                            textStyle:{
                                          align:'center',
                                    verticalAlign:'middle'
                            },
                        },
                        color:'#fff',
                        borderWidth: 3,
                        borderColor: 'rgb(77, 84, 194)'
                    },
                },
                children: [
                    {
                        name: '纺织纤维',
                        symbolSize: [80, 80],
                        symbol: 'circle',
                        // color:'#fff',
                        itemStyle: {
                              color:'#fff',
                              borderWidth: 2,
                              borderColor: 'rgb(77, 84, 194)',
                              normal: {
                                label: {
                                      show: true,
                                      position: 'inside',
                                      textStyle:{
                                                align:'center',
                                            verticalAlign:'middle'
                                            }
                                },
                                    },
                                },
                                // symbolSize: [80, 80],
                                children: [
                                    {
                                        name: '天然纤维',
                                        symbol: 'circle',
                                        symbolSize: [80, 80],
                                        //value: 4,
                                        itemStyle: {
                                            color:'#fff',
                                            borderWidth: 2,
                                            borderColor: 'rgb(77, 84, 194)',
                                            normal: {
                                                label: {
                                                    show: true,
                                                    position: 'bottom',
                                                    verticalAlign:'middle'
                                                  },
                                                            }                                                       
                                        },
                                        children: [
                                          {
                                              name: '植物纤维',
                                              symbol: 'circle',
                                              symbolSize: [80, 80],
                                              //value: 4,
                                              itemStyle: {
                                                  color:'#fff',
                                                  borderWidth: 2,
                                                  borderColor: 'rgb(77, 84, 194)',
                                                  normal: {
                                                      label: {
                                                          show: true,
                                                          position: 'bottom'
                                                      }
                                                  }
                                              },
                                              children: [
                                                {
                                                    name: '\n\n\n\n\n\n\n白\n棉\n纤\n维',
                                                    details:{
                                                    name: '白棉纤维',
                                                    introduction: "棉纤维是由受精胚珠的表皮细胞经伸长、加厚而成的种子纤维，不同于一般的韧皮纤维。它的主要组成物质是纤维素。",
                                                    wordcloud: "纤维素,C6H10O5,蛋白质,蜡质",
                                                    value: null, 
                                                    category: 1,
                                                    url:"http://img.mp.itc.cn/upload/20160531/15fe4fd903a742cc8f65303729f80be8_th.jpg"},
                                                    symbol: 'circle',
                                                    symbolSize: [20, 20],
                                                    //value: 4,
                                                    itemStyle: {
                                                        color:'#fff',
                                                        position: 'bottom',
                                                        rotate: -90,
                                                        normal: {
                                                            label: {
                                                                show: true,
                                                                position: 'bottom',
                                                                rotate: -90,
                                                                align: 'right',
                                                                textStyle:{
                                                                    align:'center',
                                                                verticalAlign:'middle',
                                                                rotate: -90,
                                                                align: 'right',
                                                                }
                                                            }
                                                        }

                                                    }
                                                },
                                                {
                                                    name: '\n\n\n\n\n\n\n\n天\n然\n彩\n色\n棉',
                                                    details:{
                                                    name: '天然彩色棉',
                                                    introduction: "采用现代生物工程技术培育出来的一种在棉花吐絮时纤维就具有天然色彩的新型纺织原料,彩色棉制品有利于人体健康;在纺织过程中减少印染工序;迎合了人类提出的\"绿色革命\"口号，减少了对环境污染；有利于国家继续保持纺织品出口大国的地位，打破了国际\"绿色贸易壁垒\" ",
                                                    wordcloud: "抗静电,回归自然,天然色素",
                                                    value: null, 
                                                    category: 1,
                                                    url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2017%2F994%2F792%2F7347297499_22321206.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648032811&t=7daac1d7642279dc5cb37aecaa63c22e"},
                                                    symbol: 'circle',
                                                    symbolSize: [20, 20],
                                                    itemStyle: {
                                                        color:'#fff',
                                                        normal: {
                                                            label: {
                                                                show: true,
                                                                position: 'bottom',
                                                                rotate: -90,
                                                                align: 'right',
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    name: '\n\n\n\n\n\n\n木\n棉\n纤\n维',
                                                    details:{
                                                    name: '木棉纤维',
                                                    introduction: "木棉纤维是锦葵目木棉科内几种植物的果实纤维，是最细、最轻、中空度最高、最保暖的纤维材质。具有防霉、轻柔、不透水、不导热，保暖、吸湿性强等特点。广泛应用各种家纺类产品中。",
                                                    wordcloud: "轻柔保暖,抗菌防霉,环保绿色",
                                                    value: null, 
                                                    category: 1,
                                                    url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.xjishu.com%2Fimg%2Fzl%2F2011%2F01%2F01%2F2311348211804.gif&refer=http%3A%2F%2Fimg.xjishu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648033099&t=9635c2335ea6229a9942b84c6cb4f3ec"},
                                                    symbol: 'circle',
                                                    symbolSize: [20, 20],
                                                    itemStyle: {
                                                        color:'#fff',
                                                        normal: {
                                                            label: {
                                                                show: true,
                                                                position: 'bottom',
                                                                rotate: -90,
                                                                align: 'right',
                                                            }
                                                        }
                                                    }
                                                },
                                                 {
                                                    name: '\n\n\n\n\n\n\n黄\n麻\n纤\n维',
                                                    details:{
                                                    name: '黄麻纤维',
                                                    introduction: "黄麻纤维白色，有光泽，吸湿性能好，散水快，主要供制作麻袋、麻布用，还可选纸、制绳索、织地毯和窗帘等。麻骨可制 活性炭、纤维板等",
                                                    wordcloud: "韧皮纤维,生物降解,廉价",
                                                    value: null, 
                                                    category: 1,
                                                    url:"http://t15.baidu.com/it/u=727529933,1619951327&fm=224&app=112&f=JPEG?w=500&h=500"},
                                                    symbol: 'circle',
                                                    symbolSize: [20, 20],
                                                    itemStyle: {
                                                        color:'#fff',
                                                        normal: {
                                                            label: {
                                                                show: true,
                                                                position: 'bottom',
                                                                rotate: -90,
                                                                align: 'right',
                                                            }
                                                        }
                                                    }
                                                },
                                                 {
                                                    name: '\n\n\n\n\n\n\n苎\n麻\n纤\n维',
                                                    details:{
                                                    name: '苎麻纤维',
                                                    introduction: "苎麻，为我国特产，被世界誉为“中国草，中国宝”。苎麻纤维吸湿透气性是棉纤维的3-5倍左右，同时含有叮咛，嘧啶，嘌呤等有益元素，是世界公认的“天然纤维之王”。最适合做枕套、凉席的面料",
                                                    wordcloud: "除臭吸附,抗菌抑菌,吸湿透气",
                                                    value: null, 
                                                    category: 1,
                                                    url:"https://bkimg.cdn.bcebos.com/pic/d439b6003af33a872393a4f9c45c10385243b553?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxODA=,g_7,xp_5,yp_5/format,f_auto"},
                                                    symbol: 'circle',
                                                    symbolSize: [20, 20],
                                                    itemStyle: {
                                                        color:'#fff',
                                                        normal: {
                                                            label: {
                                                                show: true,
                                                                position: 'bottom',
                                                                rotate: -90,
                                                                align: 'right',
                                                            }
                                                        }
                                                    }
                                                },
                                                 {
                                                    name: '\n\n\n\n\n\n\n剑\n麻\n纤\n维',
                                                    details:{
                                                    name: '剑麻纤维',
                                                    introduction: "剑麻纤维质地坚韧，耐磨、耐盐碱、耐腐蚀，广泛运用在运输、渔业、石油、冶金等各种行业，具有重要的经济价值。",
                                                    wordcloud: "β-谷甾醇,5α孕甾烷-3β,硬质纤维",
                                                    value: null, 
                                                    category: 1,
                                                    url:"http://img2.99114.com/group1/M00/5F/7B/wKgGTFhg0xCAD2y_AAUHkj0JhV4770_600_600.png"},
                                                    symbol: 'circle',
                                                    symbolSize: [20, 20],
                                                    itemStyle: {
                                                        color:'#fff',
                                                        normal: {
                                                            label: {
                                                                show: true,
                                                                position: 'bottom',
                                                                rotate: -90,
                                                                align: 'right',
                                                            }
                                                        }
                                                    }
                                                },
                                                 {
                                                    name: '\n\n\n\n\n\n竹\n纤\n维',
                                                    details:{
                                                    name: '竹纤维',
                                                    introduction: "竹原纤维具有良好的透气性、瞬间吸水性、较强的耐磨性和良好的染色性等特性，具有天然抗菌、抑菌、除螨、防臭和抗紫外线功能。",
                                                    wordcloud: "轻薄服装面料,抗紫外线,吸湿透气",
                                                    value: null, 
                                                    category: 1,
                                                    url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fng1.17img.cn%2Fbbsfiles%2Fimages%2F2014%2F09%2F201409081636_513183_2223901_3.bmp&refer=http%3A%2F%2Fng1.17img.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648033470&t=6936622df77d214eaec989b9d6a2d974"},
                                                    symbol: 'circle',
                                                    symbolSize: [20, 20],
                                                    itemStyle: {
                                                        color:'#fff',
                                                        normal: {
                                                            label: {
                                                                show: true,
                                                                position: 'bottom',
                                                                rotate: -90,
                                                                align: 'right',
                                                            }
                                                        }
                                                    }
                                                },
                                            ]
                                          },
                                          {
                                              name: '动物纤维',
                                              symbol: 'circle',
                                              symbolSize: [80, 80],
                                              itemStyle: {
                                                  color:'#fff',
                                                  borderWidth: 2,
                                                  borderColor: 'rgb(77, 84, 194)',
                                                  normal: {
                                                      label: {
                                                          show: true,
                                                          position: 'bottom'
                                                      }
                                                  }
                                              },
                                              children: [
                                                {
                                                    name: '\n\n\n\n\n\n\n羊\n毛\n纤\n维',
                                                    details:{
                                                    name: '羊毛纤维',
                                                    introduction: "羊毛纤维是羊的皮肤的变形物，保暖性极佳，多用于秋冬季节的服装，但极易虫蛀。纺织用毛纤维最主要是绵羊毛，通常称作羊毛，或称毛纤维，或简称毛。",
                                                    wordcloud: "可塑性,保暖,二硫键",
                                                    value: null, 
                                                    category: 2,
                                                    url:"http://5b0988e595225.cdn.sohucs.com/images/20171128/0c2e4c047d87454f99ef408f1c7d147f.jpeg"},
                                                    symbol: 'circle',
                                                    symbolSize: [20, 20],
                                                    //value: 4,
                                                    itemStyle: {
                                                        color:'#fff',
                                                        normal: {
                                                            label: {
                                                                show: true,
                                                                position: 'bottom'
                                                            }
                                                        }

                                                    }
                                                },
                                                {
                                                    name: '\n\n\n\n\n\n\n兔\n毛\n纤\n维',
                                                    details:{
                                                    name: '兔毛纤维',
                                                    introduction: "兔毛由角蛋白组成，绒毛和粗毛都有髓质层，绒毛的毛髓呈单列断续状或狭块状，粗毛的毛髓较宽，呈多列块状，含有空气。纤维细长，颜色洁白，光泽好，柔软蓬松，保暖性强，但纤维卷曲少，表面光滑，纤维之间抱合性能差，强度较低，细毛为15.9～27.4cN/tex，粗毛为62.7～122.4cN/tex，平均断裂伸长率为31%～48%。对酸、碱的反应与羊毛大致相同。",
                                                    wordcloud: "机织面料,防蛀,角蛋白",
                                                    value: null, 
                                                    category: 2,
                                                    url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ffii.com.cn%2Fupload%2Fimages%2F20190531165552_66505.jpg&refer=http%3A%2F%2Fwww.ffii.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648033623&t=f32cdd2b197951f9f129e00936fe321a"},
                                                    symbol: 'circle',
                                                    symbolSize: [20, 20],
                                                    itemStyle: {
                                                        color:'#fff',
                                                        normal: {
                                                            label: {
                                                                show: true,
                                                                position: 'bottom'
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    name: '\n\n\n\n\n\n\n羊\n绒\n纤\n维',
                                                    details:{
                                                    name: '羊绒纤维',
                                                    introduction: "羊绒是一根根细而弯曲的纤维，其中含有很多的空气，并形成空气层，可以防御外来冷空气的侵袭，保留体温不会减低。",
                                                    wordcloud: "特种纤维,纤细柔韧,产量稀少",
                                                    value: null, 
                                                    category: 2,
                                                    url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages2.qianyan.biz%2Fqy%2F5%2F4%2F6%2F201231017374960656138.jpg&refer=http%3A%2F%2Fimages2.qianyan.biz&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648033664&t=0c71420db0b1d1510cc415a4ae757b74"},
                                                    symbol: 'circle',
                                                    symbolSize: [20, 20],
                                                    itemStyle: {
                                                        color:'#fff',
                                                        normal: {
                                                            label: {
                                                                show: true,
                                                                position: 'bottom'
                                                            }
                                                        }
                                                    }
                                                },
                                                 {
                                                    name: '\n\n\n\n\n\n\n\n骆\n驼\n毛\n纤\n维',
                                                    details:{
                                                    name: '骆驼毛纤维',
                                                    introduction: "骆驼毛颜色从乳白色至棕褐色，其中色浅的、光泽好的骆驼毛品质优良。骆驼毛的重要特征是粗细毛纤维混杂，其中细短的绒毛纤维含量约为50%左右。",
                                                    wordcloud: "粗细毛纤维混杂,苏氨酸,半胱氨酸",
                                                    value: null, 
                                                    category: 2,
                                                    url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0422%2F654032c5j00qry38m000nc000hs00bvg.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648033716&t=86dc6851fcaee427aae1e377e45311b3"},
                                                    symbol: 'circle',
                                                    symbolSize: [20, 20],
                                                    itemStyle: {
                                                        color:'#fff',
                                                        normal: {
                                                            label: {
                                                                show: true,
                                                                position: 'bottom'
                                                            }
                                                        }
                                                    }
                                                },
                                                 {
                                                    name: '\n\n\n\n\n\n\n\n牦\n牛\n绒\n纤\n维',
                                                    details:{
                                                    name: '牦牛绒纤维',
                                                    introduction: "牦牛绒平均直径约20μm，平均长度约30～40mm,纤维具有滑软、弹性好、光泽柔和等特点,是毛纺工业的高档原料。",
                                                    wordcloud: "柔软滑糯,密度差异大,绒纤维",
                                                    value: null, 
                                                    category: 2,
                                                    url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.qfc.cn%2Fupload%2F01%2Fproduct%2Fe8%2Fec%2F1969879.jpg&refer=http%3A%2F%2Fimg1.qfc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648033753&t=dc60f0c65a1f4edd69645e2362c0c385"},
                                                    symbol: 'circle',
                                                    symbolSize: [20, 20],
                                                    itemStyle: {
                                                        color:'#fff',
                                                        normal: {
                                                            label: {
                                                                show: true,
                                                                position: 'bottom'
                                                            }
                                                        }
                                                    }
                                                },
                                                 {
                                                    name: '\n\n\n\n\n\n\n蚕\n丝\n纤\n维',
                                                    details:{
                                                    name: '蚕丝纤维',
                                                    introduction: "蚕丝是自然界中最轻最柔最细的天然纤维，撤消外力后可轻松恢复原状，内胎不结饼，不发闷，不缩拢，均匀柔和，可永久免翻使用。桑蚕丝主要由动物蛋白组成，富含十八种人体所必须的氨基酸，能促进皮肤细胞活力，防血管硬化，长期使用可防皮肤衰老，对某些皮肤病有特殊的止痒效果。",
                                                    wordcloud: "腺分泌物类纤维,丝胶蛋白,天门冬氨酸",
                                                    value: null, 
                                                    category: 2,
                                                    url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fse%2F6s%2FQJ9111080768.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648033792&t=baff568ce26fbcc9a30f8300e4eaaa71"},
                                                    symbol: 'circle',
                                                    symbolSize: [20, 20],
                                                    itemStyle: {
                                                        color:'#fff',
                                                        normal: {
                                                            label: {
                                                                show: true,
                                                                position: 'bottom'
                                                            }
                                                        }
                                                    }
                                                },
                                                 {
                                                    name: '\n\n\n\n\n\n\n\n蜘\n蛛\n丝\n纤\n维',
                                                    details:{
                                                    name: '蜘蛛丝纤维',
                                                    introduction: "蜘蛛丝对昆虫来说是非常强大的。蜘蛛丝的理化性质与蚕丝相比，具有非常明显的优势，在力学强度方面，蜘蛛丝纤维与强度最高的碳纤维及高强合纤Aramid、Kevlar，等强度相接近，但它的韧性明显优于上述几种纤维。因此，蜘蛛丝纤维在国防、军事（防弹衣）、建筑等领域具有广阔应用前景。",
                                                    wordcloud: "腺分泌物类纤维,NH2-CH2-COOH,NH2-CH[CH3]-COOH",
                                                    value: null, 
                                                    category: 2,
                                                    url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.nz86.com%2Fupload%2Fvideo%2Fsystem%2F19%2F44%2F91%2F11084462395910972.jpg&refer=http%3A%2F%2Fimg1.nz86.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648033850&t=535f05caaaee25c34f0a02a4c139e13a"},
                                                    symbol: 'circle',
                                                    symbolSize: [20, 20],
                                                    itemStyle: {
                                                        color:'#fff',
                                                        normal: {
                                                            label: {
                                                                show: true,
                                                                position: 'bottom'
                                                            }
                                                        }
                                                    }
                                                },
                                            ]
                                          },
                                          {
                                              name: '矿物纤维',
                                              symbol: 'circle',
                                              symbolSize: [80, 80],
                                              itemStyle: {
                                                  color:'#fff',
                                                  borderWidth: 2,
                                                  borderColor: 'rgb(77, 84, 194)',
                                                  normal: {
                                                      label: {
                                                          show: true,
                                                          position: 'bottom'
                                                      }
                                                  }
                                              },
                                              children: [
                                                {
                                                    name: '\n\n\n\n\n\n\n石\n棉\n纤\n维',
                                                    details:{
                                                    name: '石棉纤维',
                                                    introduction: "石棉由纤维束组成，而纤维束又由很长很细的能相互分离的纤维组成。石棉具有高度耐火性、电绝缘性和绝热性，是重要的防火、绝缘和保温材料。",
                                                    wordcloud: "单斜晶系,致癌性,耐碱性",
                                                    value: null, 
                                                    category: 3,
                                                    url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.qdaily.com%2Fuploads%2F2018090213230368xNenvlR31P7yUT.jpg-w600&refer=http%3A%2F%2Fimg.qdaily.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648033899&t=1f7a7b870fdae5ab08497eda376ed5b8"},
                                                    symbol: 'circle',
                                                    symbolSize: [20, 20],
                                                    //value: 4,
                                                    itemStyle: {
                                                        color:'#fff',
                                                        normal: {
                                                            label: {
                                                                show: true,
                                                                position: 'bottom'
                                                            }
                                                        }
                                                    },
                                                },
                                              ]
                                          },
                                         ]},
                                            {
                                                name: '化学纤维',
                                                symbol: 'circle',
                                                symbolSize: [80, 80],
                                                itemStyle: {
                                                    color:'#fff',
                                                    borderWidth: 2,
                                                    borderColor: 'rgb(77, 84, 194)',
                                                    normal: {
                                                        label: {
                                                            show: true,
                                                            position: 'bottom'
                                                        }
                                                    }
                                                },
                                                children: [
                                                    {
                                                        name: '有机再生\n纤维',
                                                        symbol: 'circle',
                                                        symbolSize: [80, 80],
                                                        //value: 4,
                                                        itemStyle: {
                                                            color:'#fff',
                                                            borderWidth: 2,
                                                            borderColor: 'rgb(77, 84, 194)',
                                                            normal: {
                                                                label: {
                                                                    show: true,
                                                                    position: 'bottom'
                                                                }
                                                            }
                                                        },
                                                        children: [
                                                        {
                                                            name: '\n\n\n\n\n\n\n粘\n胶\n纤\n维',
                                                            details:{
                                                            name: '粘胶纤维',
                                                            introduction: "其主要原料是化学浆粕，包括棉浆粕和木浆粕两种，通过化学反应将天然纤维素分离出来再生而成，国内所用原料主要是棉浆粕. 粘胶纤维吸湿性好，易于染色，不易起静电，有较好的可纺性能，被广泛应用于各类纺织、服装等领域。",
                                                            wordcloud: "C6H10O5）n,装饰用纺织品,吸湿性",
                                                            value: null, 
                                                            category: 4,
                                                            url:"https://img0.baidu.com/it/u=3054452460,2832313424&fm=253&fmt=auto&app=138&f=JPEG?w=543&h=500"},
                                                            symbol: 'circle',
                                                            symbolSize: [20, 20],
                                                            //value: 4,
                                                            itemStyle: {
                                                                color:'#fff',
                                                                normal: {
                                                                    label: {
                                                                        show: true,
                                                                        position: 'bottom'
                                                                    }
                                                                }

                                                            }
                                                        },
                                                        {
                                                            name: '\n\n\n\n\n天\n丝',
                                                            details:{
                                                            name: 'TENCEL(天丝)',
                                                            introduction: "天丝TENCEL纤维是由长链纤维素分子，所组成高结晶结构组织，因此具有高强度、高纯净度，并在湿态中仍然能维持原有的化学性质。",
                                                            wordcloud: "亲水性,强韧柔软,坦西尔纤维",
                                                            value: null, 
                                                            category: 4,
                                                            url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.xjishu.com%2Fimg%2Fzl%2F2020%2F1%2F7%2F4023724540.gif&refer=http%3A%2F%2Fimg.xjishu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648034032&t=79404ed969b519c597879184eb25f881"},
                                                            symbol: 'circle',
                                                            symbolSize: [20, 20],
                                                            itemStyle: {
                                                                color:'#fff',
                                                                normal: {
                                                                    label: {
                                                                        show: true,
                                                                        position: 'bottom'
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        {
                                                            name: '\n\n\n\n\n\n\n\n莫\n代\n尔\n纤\n维',
                                                            details:{
                                                            name: '莫代尔纤维',
                                                            introduction: "Modal的结构Modal分子中纤维素的聚合度高于普通黏胶纤维，低于Lyocell。Moda的形态结构为纵向表面有1～2根沟槽，截面不规则，类似腰圆形，也有皮芯层结构。皮j卷层结构是湿法纺丝过程中纤维表层与芯层的凝固速率不同造成的。皮层的结晶度较低，取向度较高；芯层的结晶度较高，取向度较低。",
                                                            wordcloud: "纤维素纤维,可染性,生物降解",
                                                            value: null, 
                                                            category: 4,
                                                            url:"https://img1.baidu.com/it/u=1311134809,1644976818&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500"},
                                                            symbol: 'circle',
                                                            symbolSize: [20, 20],
                                                            itemStyle: {
                                                                color:'#fff',
                                                                normal: {
                                                                    label: {
                                                                        show: true,
                                                                        position: 'bottom'
                                                                    }
                                                                }
                                                            }
                                                        },
                                                            {
                                                            name: '\n\n\n\n\n\n\n大\n豆\n纤\n维',
                                                            details:{
                                                            name: '大豆纤维',
                                                            introduction: "大豆蛋白纤维属于再生植物蛋白纤维类，以食用级大豆蛋白粉为原料，利用生物工程技术，提取出蛋白粉中的球蛋白，通过添加功能性助剂，与腈基、羟基等高聚物接枝、共聚、共混，制成一定浓度的蛋白质纺丝液，改变蛋白质空间结构，经湿法纺丝而成。",
                                                            wordcloud: "亲肤性,植物球蛋白,海岛结构",
                                                            value: null, 
                                                            category: 4,
                                                            url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.windmsn.com%2Fb%2F2%2F285%2F28578%2F2857801.jpg&refer=http%3A%2F%2Fimg1.windmsn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648034131&t=002cc5e42f5866ea27cbc09343d18523"},
                                                            symbol: 'circle',
                                                            symbolSize: [20, 20],
                                                            itemStyle: {
                                                                color:'#fff',
                                                                normal: {
                                                                    label: {
                                                                        show: true,
                                                                        position: 'bottom'
                                                                    }
                                                                }
                                                            }
                                                        },
                                                            {
                                                            name: '\n\n\n\n\n\n\n牛\n奶\n纤\n维',
                                                            details:{
                                                            name: '牛奶纤维',
                                                            introduction: "牛奶纤维具有极好的服用安全性；具有天然抑菌功能，比羊毛、羊绒防霉防蛀，强度高，耐穿耐洗，易贮藏；水洗后易干，洗涤后仍可保持产品永久性能等。",
                                                            wordcloud: "绿色环保,吸热放热,舒适性",
                                                            value: null, 
                                                            category: 4,
                                                            url:"https://p1.ssl.qhimg.com/dr/270_500_/t0178e2a14bdf1680ba.jpg?size=250x230"},
                                                            symbol: 'circle',
                                                            symbolSize: [20, 20],
                                                            itemStyle: {
                                                                color:'#fff',
                                                                normal: {
                                                                    label: {
                                                                        show: true,
                                                                        position: 'bottom'
                                                                    }
                                                                }
                                                            }
                                                        },
                                                    ]
                                                    },
                                                    {
                                                        name: '有机合成\n纤维',
                                                        symbol: 'circle',
                                                        symbolSize: [80, 80],
                                                        //value: 4,
                                                        itemStyle: {
                                                            color:'#fff',
                                                            borderWidth: 2,
                                                            borderColor: 'rgb(77, 84, 194)',
                                                            normal: {
                                                                label: {
                                                                    show: true,
                                                                    position: 'bottom'
                                                                }
                                                            }
                                                        },
                                                        children: [
                                                        {
                                                            name: '\n\n\n\n\n\n\n聚\n酯\n纤\n维',
                                                            details:{
                                                            name: '聚酯纤维(涤纶)',
                                                            introduction: "聚酯纤维最大的优点是抗皱性和保形性很好，具有较高的强度与弹性恢复能力。其坚牢耐用、抗皱免烫、不粘毛。",
                                                            wordcloud: "有机二元酸,二元醇,耐微生物性",
                                                            value: null, 
                                                            category: 5,
                                                            url:"https://img0.baidu.com/it/u=3010059603,556196144&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=600"},
                                                            symbol: 'circle',
                                                            symbolSize: [20, 20],
                                                            //value: 4,
                                                            itemStyle: {
                                                                color:'#fff',
                                                                normal: {
                                                                    label: {
                                                                        show: true,
                                                                        position: 'bottom'
                                                                    }
                                                                }

                                                            }
                                                        },
                                                        {
                                                            name: '\n\n\n\n\n\n聚\n酰\n胺',
                                                            details:{
                                                            name: '聚酰胺(尼龙)',
                                                            introduction: "尼龙是美国杰出的科学家卡罗瑟斯（Carothers）及其领导下的一个科研小组研制出来的，是世界上出现的第一种合成纤维，尼龙是聚酰胺纤维（锦纶）的一种说法。尼龙的出现使纺织品的面貌焕然一新，它的合成是合成纤维工业的重大突破，同时也是高分子化学的一个非常重要里程碑。",
                                                            wordcloud: "H-[HN(CH2)xNHCO(CH2)yCO]-OH,医用纺织品,耐磨抗尘",
                                                            value: null, 
                                                            category: 5,
                                                            url:"https://img0.baidu.com/it/u=3731197629,3952188952&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=426"},
                                                            symbol: 'circle',
                                                            symbolSize: [20, 20],
                                                            itemStyle: {
                                                                color:'#fff',
                                                                normal: {
                                                                    label: {
                                                                        show: true,
                                                                        position: 'bottom'
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        {
                                                            name: '\n\n\n\n\n\n\n\n\n聚\n丙\n烯\n腈\n纤\n维',
                                                            details:{
                                                            name: '聚丙烯腈纤维(腈纶)',
                                                            introduction: "主要特点是外观、手感、弹性、保暖性等方面类似羊毛，所以有“合成羊毛”之称。腈纶纤维的用途广泛，原料丰富，发展速度很快，现今已是三大合成纤维之一，其产量仅次于涤纶和尼龙。",
                                                            wordcloud: "-CH2-CH(CN)-,耐晒性,螺旋形构象",
                                                            value: null, 
                                                            category: 5,
                                                            url:"https://img0.baidu.com/it/u=2551598818,1768474100&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"},
                                                            symbol: 'circle',
                                                            symbolSize: [20, 20],
                                                            itemStyle: {
                                                                color:'#fff',
                                                                normal: {
                                                                    label: {
                                                                        show: true,
                                                                        position: 'bottom'
                                                                    }
                                                                }
                                                            }
                                                        },
                                                            {
                                                            name: '\n\n\n\n\n\n\n\n聚\n丙\n烯\n纤\n维',
                                                            details:{
                                                            name: '聚丙烯纤维(丙纶)',
                                                            introduction: "丙纶的品种有长丝（包括未变形长丝和膨体变形长丝）、短纤维、鬃丝、膜裂纤维、中空纤维、异形纤维、各种复合纤维和无纺织布等。主要用途是制作地毯（包括地毯底布和绒面）、装饰布、家具布、各种绳索、条带、渔网、吸油毡、建筑增强材料、包装材料和工业用布，如滤布、袋布等。此外在衣着方面应用也日趋广泛，可与多种纤维混纺制成不同类型的混纺织物，经过针织加工后可以制成衬衣、外衣、运动衣、袜子等。由丙纶中空纤维制成的絮被，质轻、保暖，弹性良好。",
                                                            wordcloud: "(C3H6)n,平直光滑,强度高",
                                                            value: null, 
                                                            category: 5,
                                                            url:"https://img0.baidu.com/it/u=218660953,2148595988&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375"},
                                                            symbol: 'circle',
                                                            symbolSize: [20, 20],
                                                            itemStyle: {
                                                                color:'#fff',
                                                                normal: {
                                                                    label: {
                                                                        show: true,
                                                                        position: 'bottom'
                                                                    }
                                                                }
                                                            }
                                                        },
                                                            {
                                                            name: '\n\n\n\n\n\n\n\n\n\n\n聚\n乙\n烯\n醇\n缩\n醛\n纤\n维',
                                                            details:{
                                                            name: '聚乙烯醇缩醛纤维(维纶)',
                                                            introduction: "维纶的柔软及保暖性好，它的相对密度比棉花要小，因此与棉花相同重量的维纶能织出更多的衣料。它的热传导率低，因而保暖性好。维纶的耐磨性和强度也比棉花要好，因此维纶在很多方面可以与棉混纺以节省棉花。维纶主要用于制作外衣、棉毛衫裤、运动衫等针织物，还可用于帆布、渔网、外科手术缝线、自行车轮胎帘子线、过滤材料等。",
                                                            wordcloud: "吸湿性,-[CH2-CH(OH)]n-,产量小",
                                                            value: null, 
                                                            category: 5,
                                                            url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.cnipr.com%3A8080%2FXmlData%2FFM%2F20110914%2F201110059523.X%2F201110059523.gif&refer=http%3A%2F%2Fpic.cnipr.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648034676&t=20e58472f2f27bb88a9d3ee75f1b11d8"},
                                                            symbol: 'circle',
                                                            symbolSize: [20, 20],
                                                            itemStyle: {
                                                                color:'#fff',
                                                                normal: {
                                                                    label: {
                                                                        show: true,
                                                                        position: 'bottom'
                                                                    }
                                                                }
                                                            }
                                                        },
                                                            {
                                                            name: '\n\n\n\n\n\n\n\n\n聚\n氯\n乙\n烯\n纤\n维',
                                                            details:{
                                                            name: '聚氯乙烯纤维(氯纶)',
                                                            introduction: "氯纶的突出优点是难燃、保暖、耐晒、耐磨、耐蚀和耐蛀，弹性也很好，可以制造各种针织品、工作服、毛毯、滤布、绳绒、帐篷等，特别是由于它保暖性好，易生产和保持静电，故用它做成的针织内衣对风湿性关节炎有一定疗效。",
                                                            wordcloud: "-[CH2-CHCl]n-,耐酸碱,成本低廉,工艺简单",
                                                            value: null, 
                                                            category: 5,
                                                            url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F024f78f0f736afc33612961cbe19ebc4b74512a8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648034783&t=8be31c64479344d96b3f5f91c34da63a"},
                                                            symbol: 'circle',
                                                            symbolSize: [20, 20],
                                                            itemStyle: {
                                                                color:'#fff',
                                                                normal: {
                                                                    label: {
                                                                        show: true,
                                                                        position: 'bottom'
                                                                    }
                                                                }
                                                            }
                                                        },
                                                            {
                                                            name: '\n\n\n\n\n\n\n\n\n\n\n聚\n氨\n基\n甲\n酸\n酯\n纤\n维',
                                                            details:{
                                                            name: '聚氨基甲酸酯纤维(氨纶)',
                                                            introduction: "氨纶弹性优异。而强度比乳胶丝高2～3倍，线密度也更细，并且更耐化学降解。氨纶的耐酸碱性、耐汗、耐海水性、耐干洗性、耐磨性均较好。",
                                                            wordcloud: "干法纺丝,弹性纤维,低熔点",
                                                            value: null, 
                                                            category: 5,
                                                            url:"https://img2.baidu.com/it/u=1030991293,2252563834&fm=253&fmt=auto&app=138&f=JPEG?w=727&h=500"},
                                                            symbol: 'circle',
                                                            symbolSize: [20, 20],
                                                            itemStyle: {
                                                                color:'#fff',
                                                                normal: {
                                                                    label: {
                                                                        show: true,
                                                                        position: 'bottom'
                                                                    }
                                                                }
                                                            }
                                                        },
                                                    ]
                                                    },
                                                    {
                                                        name: '无机纤维',
                                                        symbol: 'circle',
                                                        symbolSize: [80, 80],
                                                        //value: 4,
                                                        itemStyle: {
                                                            color:'#fff',
                                                            borderWidth: 2,
                                                            borderColor: 'rgb(77, 84, 194)',
                                                            normal: {
                                                                label: {
                                                                    show: true,
                                                                    position: 'bottom'
                                                                }
                                                            }
                                                        },
                                                        children: [
                                                        {
                                                            name: '\n\n\n\n\n\n\n玻\n璃\n纤\n维',
                                                            details:{
                                                            name: '玻璃纤维',
                                                            introduction: "玻璃纤维（Fiberglass），是一种性能优异的无机非金属材料，种类繁多，优点是绝缘性好、耐热性强、抗腐蚀性好、机械强度高，但缺点是性脆，耐磨性较差。",
                                                            wordcloud: "弹性系数高,绝缘性,坩埚拉丝,池窑拉丝",
                                                            value: null, 
                                                            category: 6,
                                                            url:"https://img0.baidu.com/it/u=3611041719,3314852880&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=357"},
                                                            symbol: 'circle',
                                                            symbolSize: [20, 20],
                                                            //value: 4,
                                                            itemStyle: {
                                                                color:'#fff',
                                                                normal: {
                                                                    label: {
                                                                        show: true,
                                                                        position: 'bottom'
                                                                    }
                                                                }

                                                            }
                                                        },
                                                        {
                                                            name: '\n\n\n\n\n\n碳\n纤\n维',
                                                            details:{
                                                            name: '碳纤维',
                                                            introduction: "碳纤维是由有机纤维经过一系列热处理转化而成，含碳量高于90%的无机高性能纤维，是一种力学性能优异的新材料，具有碳材料的固有本性特征，又兼备纺织纤维的柔软可加工性，是新一代增强纤维。",
                                                            wordcloud: "结构材料,高强度,特种纤维",
                                                            value: null, 
                                                            category: 6,
                                                            url:"https://img0.baidu.com/it/u=932723884,3028211770&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"},
                                                            symbol: 'circle',
                                                            symbolSize: [20, 20],
                                                            itemStyle: {
                                                                color:'#fff',
                                                                normal: {
                                                                    label: {
                                                                        show: true,
                                                                        position: 'bottom'
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        {
                                                            name: '\n\n\n\n\n\n\n石\n墨\n纤\n维',
                                                            details:{
                                                            name: '石墨纤维',
                                                            introduction: "用作高温绝缘辐射屏罩、先进复合材料增强剂和功能复合材料，而镀镍石墨纤维可作燃料罐、防雷击和电磁波屏蔽材料，用于军事上的电力打击，即所谓的石墨炸弹。",
                                                            wordcloud: "军工,特种纤维,层状六方晶格",
                                                            value: null, 
                                                            category: 6,
                                                            url:"https://tse1-mm.cn.bing.net/th/id/R-C.d2116f91591a79f6d4343a5568da40e5?rik=84TgW3I8Xrwcog&riu=http%3a%2f%2fwww.jcnano.com%2fpublic%2fimages_article%2fimages%2f20161129112009_meitu_2.jpg&ehk=FwThRSw1J%2bp4AiEBCrFuqU9D9KHCNn%2fOB6BIzSgZ8hc%3d&risl=&pid=ImgRaw&r=0"},
                                                            symbol: 'circle',
                                                            symbolSize: [20, 20],
                                                            itemStyle: {
                                                                color:'#fff',
                                                                normal: {
                                                                    label: {
                                                                        show: true,
                                                                        position: 'bottom'
                                                                    }
                                                                }
                                                            }
                                                        },
                                                            {
                                                            name: '\n\n\n\n\n\n\n金\n属\n纤\n维',
                                                            details:{
                                                            name: '金属纤维',
                                                            introduction: "金属纤维一般均达微米级，如不锈钢纤维一般直径在10μm左右，且市场供应的细不锈钢纤维平均直径为4μm。金属纤维具有良好的力学性能，不仅断裂比强度和拉伸比模量较高，而且可耐弯折、韧性良好；具有很好的导电性，能防静电，如钨纤维用作白炽灯泡的灯丝，同时它也是防电磁辐射和导电及电信号传输的重要材料。",
                                                            wordcloud: "军工特种纤维,耐高温,抗静电",
                                                            value: null, 
                                                            category: 6,
                                                            url:"https://tse1-mm.cn.bing.net/th/id/R-C.8f41eb32395b4abed666310fea0ac0db?rik=v4LcPUJaGkTtCg&riu=http%3a%2f%2fwww.jswds.com%2fupload%2fmonth_1811%2f201811300952392412.jpg&ehk=7CJP6FsG8Nmm6RrEuadIr63VRPxDNU1mhp2muk1Jh9k%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"},
                                                            symbol: 'circle',
                                                            symbolSize: [20, 20],
                                                            itemStyle: {
                                                                color:'#fff',
                                                                normal: {
                                                                    label: {
                                                                        show: true,
                                                                        position: 'bottom'
                                                                    }
                                                                }
                                                            }
                                                        },]                       
                                          },
                                        // ]
                                    // }
                                ]
                            },
                  {
                      name: '纤维制品',
                      symbol: 'circle',
                      symbolSize: [80, 80],
                      itemStyle: {
                          color:'#fff',
                          borderWidth: 2,
                          borderColor: 'rgb(77, 84, 194)',
                          normal: {
                              label: {
                                  show: true,
                                  textStyle:{
                                      align:'center',
                                      verticalAlign:'middle'
                                  }
                              },
                              color:'#fff',
                              borderWidth: 2,
                              borderColor: '#00A0E9'
                          }
                      },
                      children: [
                          {
                              name: '\n\n\n\n\n纱\n线',
                              details:{
                              name: '纱线',
                              introduction: "纱线是一种纺织品，用各种纺织纤维加工成一定细度的产品，用于织布、制绳、制线、针织和刺绣等，分为短纤维纱，连续长丝等。",
                              wordcloud: "混纺纱,复合纱,单纱",
                              value: null, 
                              category: 7,
                              url:"https://tse4-mm.cn.bing.net/th/id/OIP-C.z2geRpjSC9zZdTO15VUjRgHaFp?pid=ImgDet&rs=1"},
                              symbol: 'circle',
                              symbolSize: [20, 20],
                              itemStyle: {
                                  color:'#fff',
                                  normal: {
                                      label: {
                                          show: true,
                                          position: 'bottom'
                                      }
                                  }
                              }
                          },
                          {
                              name: '\n\n\n\n\n织\n物',
                              details:{
                              name: '织物',
                              introduction: "织物是由细小柔长物通过交叉，绕结，连接构成的平软片块物。 机织物是由存在交叉关系的纱线构成的。 针织物是由存在绕结关系的纱线构成的。无纺织物是由存在连接关系的纱线构成的。 第三织物是由存在交叉/绕结关系的纱线构成的。 ",
                              wordcloud: "机织物,针织物,无纺织物,立体织物,复合织物",
                              value: null, 
                              category: 8,
                              url:"https://tse1-mm.cn.bing.net/th/id/OIP-C.byYopyk-k1PyZ6hU5g2zhAHaHa?pid=ImgDet&rs=1"},
                              symbol: 'circle',
                              symbolSize: [20, 20],
                              itemStyle: {
                                  color:'#fff',
                                  normal: {
                                      label: {
                                          show: true,
                                          position: 'bottom'
                                      }
                                  }
                              }
                          }
                      ]
                  }
                ],
                    }],
                }],
                orient: 'vertical', 
                top: '6%',
                left: '2%',
                bottom: '18%',
                right: '2%',
                initialTreeDepth:5,
                symbolSize: 7,
                //连接线长度
                layerPadding: 15,
                //结点间距
                nodePadding: 20,
                // itemStyle: {
                //         //正常情况显示
                //         normal: {
                //             label: {
                //                 // position: 'inside',
                //                 // rotate: -90,
                //                 // verticalAlign: 'middle',
                //                 // align: 'right',
                //                 fontSize: 17,
                //                 fontweight: 700,
                //                 color: "black"
                //                 }
                //             },
                //             color:'#fff',
                //             lineStyle: {
                //                 color: '#000',
                //                 width: 1,
                //                 // type: 'broken'
                //             }
                //         },
                label: {
                  position: 'inside',
                  // rotate: -90,
                  verticalAlign: 'middle',
                  // align: 'right',
                  fontSize: 17,
                  fontweight: 700,
                  color: " #132838"
                },
                leaves: {
                  label: {
                    // position: 'inside',
                    // rotate: -90,
                    verticalAlign: 'middle',
                  },
                    // color:'#fff',
                    // borderWidth: 2,
                    // borderColor: '#00A0E9'
                    // align: 'left'
                },
                emphasis: {
                  focus: 'descendant'
                },
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750,
              }]
            }); 
        }),
        // myChart.clear();
        //   myChart.setOption(option);
        myChart.setOption(option);
        if (option && typeof option === "object") {
          myChart.setOption(option, true);
        }
        //关键点！
        function clickFun(param) {
          if (typeof param.seriesIndex == 'undefined') {
            return;
          }
          if (param.type == 'click') {
            var name1 = param.data.details.name;
            var introduction = param.data.details.introduction;
            var wordcloud = param.data.details.wordcloud;            
            // try {
            // var srcObject = param.data.details.url;} catch (error) {
            // var src = window.URL.createObjectURL(srcObject);}
            var picture = param.data.details.url;
            // this.picture = scr;
            ShowDiv('MyDiv', 'fade','3Dwordcloud','3Dwordcloud1', name1, introduction, wordcloud,picture);
            // getWordcloud(wordcloud);
          }
        }

        function ShowDiv(show_div, bg_div, pho_div,wor_div,name1, introduction, wordcloud,picture) {
          document.getElementById(show_div).style.display = 'block';
          document.getElementById(bg_div).style.display = 'block';
          document.getElementById(pho_div).style.display = 'block';
          document.getElementById(wor_div).style.display = 'block';
          var bgdiv = document.getElementById(bg_div);
          bgdiv.style.width = document.body.scrollWidth; // bgdiv.style.height = $(document).height();

          $("#" + bg_div).height($(document).height());
          $("#" + wor_div).append('<p style="margin-bottom:10px;"><div  style="font-weight:700;display: block; float:left">纤维名称：</div><div style="display: block;">' + name1 + '\n</div></p>');
          $("#" + wor_div).append('<p style="margin-bottom:10px;line-height:150%;"><div  style="font-weight:700;display: block; float:left">简介：</div>' + introduction + ' \n</p>');
          $("#" + wor_div).append('<p style="margin-top:10px;"><div  style="font-weight:700;display: block; float:left">词云：</div>' + wordcloud + '</p>');
          $("#" + pho_div).html('<img src="' + picture + '" style="height: 200px;width: 200px;border-radius: 50%;">');
        //   var div1 = '<img src="' + + src + + '" >';
        //   $("#" + show_div).append(div1);
        }
    //   function getWordcloud(wordcloud) {
    //         var dom = document.getElementById("3Dwordcloud");
    //         var myChart11 = echarts.init(dom);
    //         var app = {};
    //         var option = null;
    //         myChart11.showLoading();
    //         let JsonList = [];
    //         for (let word of wordcloud) {
    //             JsonList.push(word)
    //         }

    //         myChart11.hideLoading();
    //         myChart11.setOption(
    //             option = {
    //                 tooltip: {
    //                     show: true
    //                 },
    //                 series: [{
    //                     name: '纺织技术词云',
    //                     type: 'wordCloud',
    //                     sizeRange: [20, 70], //文字范围
    //                     //文本旋转范围，文本将通过rotationStep45在[-90,90]范围内随机旋转
    //                     rotationRange: [-45, 90],
    //                     rotationStep: 45,
    //                     textRotation: [0, 45, 90, -45],
    //                     // gridSize: 9, 
    //                     //形状
    //                     shape: 'circle',
    //                     textStyle: {
    //                         normal: {
    //                             color: function() { //文字颜色的随机色
    //                                 return 'rgb(' + [
    //                                     Math.round(Math.random() * 250),
    //                                     Math.round(Math.random() * 250),
    //                                     Math.round(Math.random() * 250)
    //                                 ].join(',') + ')';
    //                             }
    //                         },
    //                         //悬停上去的字体的阴影设置
    //                         emphasis: {
    //                             shadowBlur: 10,
    //                             shadowColor: '#333'
    //                         }
    //                     },
    //                     data: JsonList
    //                 }]
    //             }
    //         );
    //         }
         },
         
        //  function CloseDiv(show_div,bg_div) {
        //  	document.getElementById(show_div).style.display = 'none';
        //  	document.getElementById(bg_div).style.display = 'none';
        //  	$("#" + show_div+" p").remove();				
            // }

    // CloseDiv() {
    // 		 	document.getElementById(show_div).style.display = 'none';
    // 		 	document.getElementById(bg_div).style.display = 'none';
    // 		 	$("#" + show_div+" p").remove();				
    //         };
      

  }
}
</script>

<style scoped lang="less">
   *{
    margin: 0;
    padding: 0; 
   }
    .search-model1 {
      float: left;
      width: 100%;
      height: 100%;
      background-color: #eeeef9;
      }
    .tree {
        float: left;
        // margin-top: 30px;
        margin-left: 100px;
        // padding:50px 0;
        width: 1800px;
        height: 900px;
        // border: 3px solid #878cd6;
        // background: #fff;
        border-radius: 10px;
        
    }
    .black_overlay {
        float: left;
        margin: 10px 30px;
				display: none;
				position: absolute;
				top: 0%;
				left: 0%;
				width: 100%;
				height: 100%;
				background-color: black;
				z-index: 1001;
				-moz-opacity: 0.8;
				opacity: .80;
				filter: alpha(opacity=80);
			} 

			.white_content {
				display: none; 
				position: absolute; 
				/* display: flex; */
                /* justify-content: center; */
				top: 30%;
				left: 25%; 
				width: 50%; 
				height: 40%; 
				border: 16px solid lightblue;
				// background-color: white;
                // background-color: #8EC5FC;
                background-color: #74EBD5;
                background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);

				z-index: 1002;
				overflow: auto;
				border-radius: 6px;
				line-height: 150%;
			}

			.white_content_small {
				display: none;
				position: absolute;
				top: 20%;
				left: 30%;
				width: 40%;
				height: 50%;
				border: 16px solid lightblue;
				background-color: white;
				z-index: 1002;
				overflow: auto;
			}
			.close {
				margin:4px 4px;
			}


</style>