<template>
  <div id="architecture">
    <div class="divider"></div>
    <div v-responsive.sm.xs>
      <p class="visible-phone">点击查看建筑派系介绍</p>
    </div>
    <div class="container">
      <img @click='chuan' class="img animated bounceInRight" src="./assets/images/chuan.png" alt="nihao"/>
      <img @click='jing' class="img animated bounceInUp" src="./assets/images/jing3.png" alt="nihao"/>
      <img @click='jin' class="img animated bounceInLeft" src="./assets/images/jin.png" alt="nihao"/>
      <img @click='hui' class="img animated bounceInRight" src="./assets/images/hui.png" alt="nihao"/>
      <img @click='min' class="img animated bounceInDown" src="./assets/images/min.png" alt="nihao"/>
      <img @click='su' class="img animated bounceInLeft" src="./assets/images/su.png" alt="nihao"/>
    </div>
    <el-link href="http://public.dupetrc.qiyi.us:31382/model_simplednn/model_archstyle" :underline="false"
             style="font-size: 20px;margin: 13px">点此使用模型
      <i class="el-icon-view el-icon--right"></i></el-link>
    <video :src="v3_src" controls="controls" class="v">
      您的浏览器不支持 video 标签。
    </video>
    <div class="bottom">
      <p>下载模型，了解更多: 链接:<span><a href="https://pan.baidu.com/s/1_osurAZr-5A46tohkqPrNw">https://pan.baidu.com/s/1_osurAZr-5A46tohkqPrNw</a></span>  提取码:eixk</p>
      <p>联系我们：2377651630@qq.com 2764065464@qq.com 839868189@qq.com</p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            v3_src:require('./assets/v3.mp4'),
        }
    },
    methods:{
        chuan(){
            this.$alert('在川派建筑中傣族竹楼、侗族鼓楼、川西吊脚楼最具有鲜明特色。竹楼是一种干栏式建筑，主要用竹子建造，下层高约七八尺，四无遮拦，牛马拴住与柱上。上层进梯出有一露台，用竹篱隔离出主人卧室并兼重要钱物存储式。其余为一敞间。楼中央是一个火塘，日夜燃烧不息。', '川派', {
                confirmButtonText: '确定',
                // callback: action => {
                //     this.$message({
                //         type: 'info',
                //         message: `action: ${action}`
                //     });
                // }
            })
        },
        jing(){
            this.$alert('京派建筑，在于它历经700多年演变而来的四合院，四合院房屋独立，大到皇宫王府，小到平民住宅，每一处雕饰、每一笔彩绘，都是无价之宝。京派建筑里四合院最为典型，四合院是北京地区乃至华北地区的传统住宅。\n', '京派', {
                confirmButtonText: '确定',
                // callback: action => {
                //     this.$message({
                //         type: 'info',
                //         message: `action: ${ action }`
                //     });
                // }
            });
        },
        jin(){
            this.$alert('晋派建筑在很大程度上反应了晋商的品格，稳重、大气、严谨、深沉。斗拱飞檐、彩饰金装、砖瓦磨合、精工细做，它所蕴含的文化与精神是一笔无与伦比的财富。\n', '晋派', {
                confirmButtonText: '确定',
                // callback: action => {
                //     this.$message({
                //         type: 'info',
                //         message: `action: ${ action }`
                //     });
                // }
            });
        },
        hui(){
            this.$alert('徽派建筑有“三绝”（民居、祠堂、牌坊）和“三雕”（木雕、石雕、砖雕）。能工巧匠施尽其技，每一处细节每一处雕刻，结构严谨、雕镂精湛。', '徽派', {
                confirmButtonText: '确定',
                // callback: action => {
                //     this.$message({
                //         type: 'info',
                //         message: `action: ${ action }`
                //     });
                // }
            });
        },
        min(){
            this.$alert('闽，即福建，闽派民居流行与闽南地区的一种建筑风格，其中“土楼”是最为鲜明的代表。是一种供聚族而居，且具有防御性的民居建筑。\n', '闽派', {
                confirmButtonText: '确定',
                // callback: action => {
                //     this.$message({
                //         type: 'info',
                //         message: `action: ${ action }`
                //     });
                // }
            });
        },
        su(){
            this.$alert('苏派建筑，自春秋战国时期人们开始追求，脊角翘高的屋顶，江南风韵的门楼，曲折蜿蜒、藏而不露，饲鸟养鱼、叠石迭景，堪称园林布局的艺术典范。\n', '苏派', {
                confirmButtonText: '确定',
                // callback: action => {
                //     this.$message({
                //         type: 'info',
                //         message: `action: ${ action }`
                //     });
                // }
            });
        }
    }
  // components: {
  //   Import: () => import('./ArchitectureImport.vue'),
  //   Result: () => import('./ArchitectureResult.vue'),
  // }
}
</script>

<style>
  @import url('../static/animate.min.css');
  #architecture{
    margin:0px;
    padding:0px;
  }
  a{
    color:#666;
    text-decoration:none;
  }
  .left{
    float:left;
  }
  @media(max-width:767px){
    .img{
      width:48%;
      margin:1%;
    }
  }
  @media(min-width:768px){
    .img{
      width:31.33%;
      margin:1%;
      border-bottom: 4px solid #DFDFDF;
      transition:all .3s;
    }
    .img:hover{
      border-bottom:4px solid #4FB59D;
      transform:translateY(-10px);
    }
    .container{
      margin:0px auto;
      width:80%;
    }
  }
.bottom{
  margin:0px;
}
.fade{
  opacitiy:0;
}
  .show{
    opacity: 1;
  }
  .divider{
    height:20px;
  }
</style>
