<template>

  <div id="son">
    <div class="division"></div>

    <div>
      <div class="word">照片记录</div>
      <div>
        <img class='row_one' src="./assets/images/1.jpg" alt="nihao"/>
        <img class='row_one' src="./assets/images/hezhao.jpg" alt="nihao"/>
      </div>
      <div>
        <img class='row_two' src="./assets/images/3.jpg" alt="nihao"/>
        <img class='row_two' src="./assets/images/2.jpg" alt="nihao"/>
        <img class='row_two' src="./assets/images/landscape.jpeg" alt="nihao"/>
      </div>
      <div class="division"></div>
    </div>

    <div>
      <div class="word">宣传视频</div>
      <video v-bind:src="v1_src" controls="controls" class="v">
        您的浏览器不支持 video 标签。
      </video>
      <div class="division"></div>
    </div>

    <div>

      <el-tabs :tab-position="tabPosition" style="height: 100%;width:80%;margin:0px auto;">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">
          <p id="no5" align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上午八点二十分，我们集合乘坐约好的中巴，前往南京江宁区湖熟街道的杨柳村。在调研准备负责人的提前安排下，我们在出发前进行了全面的考虑和充分的准备：大致了解杨柳村古建筑旅游风景区的历史传说和现在的布局、发展情况，明确摄影、录音、采访提问、场控等具体分工。在中巴上，我们与本次实地调研的领队、华诚博远建筑规划设计公司的耿总、梁工和贺工第一次进行了当面的交流，他们提出“为什么要选择村落、”“成果的受众是哪些人群”等问题，发人深省，也帮助我们进一步框定主题，细化当天实地调研的安排，使成果的呈现更加合理。</p>
          <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们首先买票进入明清民居建筑群 “朱家大院”，俗称“小九十九间半”，聆听导游细致而形象的讲解。我们了解到建筑的前世今生，零距离感受了江南水乡民居建筑的传统风格，并细致参观屋宇内的民俗展品。</p>
          <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;走出“朱家大院”，我们欣赏到由湿地改造而来的大片湖水景观，可谓“莲叶无穷碧，荷花别样红”。顺着略显狭窄的巷子，两旁未经改造的老民居，屋顶别具传统风格，可惜路上并不干净，整体并不给人整洁有序之感。走出小巷，道路渐宽，两旁变成了村民新造的房子，有民宿、农家乐，然而改造并不完善，景观貌似有些违和。对新旧建筑我们都进行了照片采集。</p>
          <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们还随机采访了一位路过的村民、几个卖菜的村民和一家游客，发现村民们普遍认为村子变化很大，规模大大扩张；游客满意度较高，认为景区在环境卫生上可以进一步提升。</p>
          <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从杨柳村出来，我们又马不停蹄地赶往七坊村。在七坊村的一家特色餐厅吃午饭时，我们采访了一位工作人员样子的奶奶。原来这是一家家族餐厅，在政府的帮助下生意越做越好。奶奶说到这里时，眼睛里闪烁着幸福的光芒。而这只是七坊村众多家常菜餐厅之一。在这里，还有很多村民一家人开的餐厅，在政策扶持下生意兴隆。</p>
          <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;走进七坊村，我们最大的感受就是这和我们印象中的传统农村一点也不相同。相比于刚刚的杨柳村，七坊村的各种基础设施都相当完备了。垃圾回收系统完备，还有很多供村民锻炼的健身设施、孩童嬉戏的游乐设施。绿植的覆盖率也很高，基本可以说是目光所及均有绿色。</p>
          <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除此之外我们还发现，村民们生活的经济情况也很不错。七坊村的“七坊”，指七坊即豆腐坊、粉丝坊、酱坊、茶坊、糕坊、面坊、油坊、炒米坊，除了旅游业、餐饮业，这些都为村民们提供了经济来源。</p>
          <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但我们也看到了一些小问题。旅游业发展得好，也让七坊村带上了商业气息。尽管这里仍有蕴含文化传统的“七坊”，还有磨坊的模型，但主要都是为了供游客体验，还有多少是真正代代相传的手艺精粹，就不得而知了。正如带我们做考察的耿总所说的，不同的人考虑问题的立场不同，作为村民老一代的代表，接受我们采访的奶奶曾经过过苦日子，商业开发让她过上了好日子，她就觉得幸福满足了。但乡村的发展，不能只考虑经济层面，像七坊村这样结合了传统“七坊”，就是经济文化协调发展的例子。但能不能在此基础上真正把文化传承做活，而不仅仅是为了旅游业，还期待我们投入更多的努力。</p>
          <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今天实地考察的这两个传统村落，都在现代化层面做出了尝试。我们也期待着可以用自己的专业知识，做出微薄的贡献。</p>
        </el-tab-pane>
      </el-tabs>

      <div class="division"></div>
    </div>


    <div>
      <div class="word">纪录视频</div>
      <video v-bind:src="v2_src" controls="controls" class="v">
        您的浏览器不支持 video 标签。
      </video>
      <div class="division"></div>
    </div>


    <div>
      <div class="word">照片记录</div>
      <div>
        <img class='row_one' src="./assets/images/1.jpg" alt="nihao"/>
        <img class='row_one' src="./assets/images/hezhao.jpg" alt="nihao"/>
      </div>
      <div>
        <img class='row_two' src="./assets/images/3.jpg" alt="nihao"/>
        <img class='row_two' src="./assets/images/2.jpg" alt="nihao"/>
        <img class='row_two' src="./assets/images/landscape.jpeg" alt="nihao"/>
      </div>
      <div>
        <img class='row_one' src="./assets/images/1.jpg" alt="nihao"/>
        <img class='row_one' src="./assets/images/hezhao.jpg" alt="nihao"/>
      </div>
      <div class="division"></div>
      <div class="division"></div>
    </div>


  </div>
</template>

<script>
    export default {
        // components:{
        //   activityNote: () => import('./ActivityNote.vue'),
        //   activityVideo: () => import('./ActivityVideo.vue'),
        //   activityPhoto: () => import('./ActivityPhoto.vue'),
        // },
        data(){
            return{
                // v1_src:require('./assets/v1.mp4')
                // v2_src:require('./assets/v2.mp4')
                v1_src:require('./assets/v1_2.mp4'),
                v2_src:'',
                dialogVisible: false,
                tabPosition: 'top'
            }
        }
    }
</script>

<style>
  .row_one{
    width:45%;
    height:380px;
    margin:12px;
  }
  .row_two{
    width:30%;
    height:250px;
    margin:12px;
  }
  img{
    border-radius:12px;
  }
  .word{
    margin:30px;
    font-size:x-large;
  }
  .v{
    width:100%;
    height:100%;
    margin-top:24px;
    margin-bottom:24px;
  }
  p{
    align:'left'
  }
  #son{
    overflow:auto;
    padding:0;
    margin:0;
    width:100%;
  }
  .division{
    height:30px;
  }

</style>



