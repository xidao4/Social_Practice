<template>
    <div id="description">
        <div class="container">
            <el-col span="6" style="margin-top: 15%">
                <img @click="archi" class="img animated rotateInDownLeft" src="./assets/images/architecture4.png" alt="nihao"/>
            </el-col>
            <el-col span="6" style="margin-top: 25%">
                <img @click="hist" class="img animated rotateInDownLeft" src="./assets/images/history3.png" alt="nihao"/>
            </el-col>
            <el-col span="6" style="margin-top: 5%">
                <img @click="busi" class="img animated rotateInDownLeft" src="./assets/images/business3.png" alt="nihao"/>
            </el-col>
            <el-col span="6" style="margin-top: 15%">
                <img @click="expe" class="img animated rotateInDownLeft" src="./assets/images/expectation8.png" alt="nihao"/>
            </el-col>
            <el-drawer
                    :title="name"
                    :visible.sync="drawer"
                    :direction="direction"
                    :size="size">
                <div class="des">
                    <div>
                        {{word}}<br>{{word1}}<br>{{word2}}
                    </div>
                </div>
            </el-drawer>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Description",
        data(){
            return{
                drawer:false,
                direction:'rtl',
                word:'',
                word1:'',
                word2:'',
                size:'50%',
            }
        },
        methods:{
            archi(){
                this.size = '50%';
                this.name = '建筑风貌';
                this.drawer = true;
                this.word = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0杨柳村村庄里的建筑又被分为一个个自成体系的“堂”，有翼圣堂、翼经堂、' +
                    '四本堂、树德堂、思承堂、礼和堂、酌雅堂、安雅堂等等，名字显文士之风。而宅院之间的弄堂闾巷，皆以青石板铺路，条石为阶。' +
                    '古时有“青石墁地石门楼，走进杨柳不沾泥”说法，是一条洁净的“青石街”。 杨柳村古建筑群均为坐北朝南的多进穿堂式高墙深院，' +
                    '带有典型的南京地域特色；它也有砖雕、木雕和石雕,但不像徽派建筑那么张扬,显得更内敛和书卷气;房顶的瓦的曲面比较大气,' +
                    '弧线很有力度。';
                this.word1 ='\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0而七坊村的建筑经过了更多的翻新，更像是现代农村，古有的建筑风格.';
            },
            hist(){
                this.size = '50%';
                this.name = '历史传说';
                this.drawer = true;
                this.word = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0相传明末清初江宁杨柳村有一个大富豪，名为朱侯山，他跟南京的沈万三、' +
                    '淳化的孙山，被人称为“南门外的三个山”。可鲜有人知道，他是从安徽逃荒来到这儿的。传说他在开荒的时候在地底发现了金银，' +
                    '从而发家。朱侯山发财之后，就开始请瓦木工匠们造厅盖房。于是就有了大家熟知的“九十九间半”的建筑群。';
                this.word1 ='\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0而七坊村原名郄坊村，是江南名刹——藏龙寺历史典故的发源地。';
                this.word2 ='\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0藏龙寺，又名潜龙寺。相传王莽篡权后，提出"铲除刘秀，绝后患"。' +
                    '刘秀为逃杀身之祸，只身跑到白岩峪口，见炊烟缭绕，房舍连脊，再往里走，山清水秀，郁郁葱葱。这时刘秀腰疼腿困，饥饿难忍。' +
                    '为躲过追兵，继续往山里逃。不料全身瘫软，昏倒山坡。后被山中一聪慧美丽的梨花姑娘相救，藏于山中寺庙。在梨花姑娘精心照料下，' +
                    '刘秀恢复了体力，多次躲过了王莽追杀。刘秀在洛阳称帝后，派人到华县接梨花人宫，封为正宫娘娘，并重修寺庙，取名"潜龙寺"，' +
                    '以为纪念。而当地有一桥也因此典故而闻名天下，曰青龙桥。';
            },
            busi(){
                this.size = '66%';
                this.name = '商业开发';
                this.drawer = true;
                this.direction = 'ltr';
                this.word = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0杨柳村在乡村的发展中作了尝试，也对历史文化以及遗迹进行了一定' +
                '程度的保护，例如“九十九间半”的保存、几个特定旅游景点、内部的江宁民俗展等等。发展中，杨柳村重点似乎都放在了景点的' +
                '建设上，各个景点确实非常漂亮，古建筑也有翻新，也入选了“中国传统村”，因而在游客看来，这是一个不可多得的休憩地；但是在' +
                '光鲜的景点背后，乡村内部的生活环境没有能够完全改善，在乡村道路、乡村卫生等方面仍有改进空间。在景点建设上下了功夫，切实' +
                '守住了相关历史文化的价值。但是村内生活相关的基础建设不达标，生活环境较差，村民的实际生活水平有待提高。在我们调研者看来，' +
                '杨柳村的面貌呈现了两极分化。';
                this.word1 = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0而如今的七坊村，可以说是传统乡村商业化开发的典型，' +
                    '经过改造与杨柳村相比看起来焕然一新。七坊村从原来的名字郄坊村改为如今的名字，一来使名字更加好记，二来以七个作坊' +
                    '（酒坊、酱坊、豆腐坊、粉丝坊、油坊、糕坊、炒米坊）为基点进行开发。七坊村也因为这个名片成为乡村旅游的热区，有不少' +
                    '各方面条件均不错的农家餐馆和酒馆，满足了饮食与居住的需求。村民们富起来了，道德水平、受教育水平也因此得到改善。但是' +
                    '这些似乎只是游客观赏或者体验模式的作坊，一方面确实是让更多的人了解到了七坊村的文化标记，但另一方面我们不禁想问，我们' +
                    '看到的是民间艺人手艺的真实的代代相传，还是为了迎合游客体验而设计的商业化环节？现如今，传统文化为了生存似乎必须走上' +
                    '商业化的道路，但这其中需要把握的一个度，一个更好地保存传统、传承传统的度，值得更多的揣摩和研究。';
            },
            expe(){
                this.size = '66%';
                this.name = '未来展望';
                this.drawer = true;
                this.direction = 'ltr';
                this.word = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0经济与文化对于传统村落都是十分重要的：缺少经济，村民看不到前景，' +
                '就做不到保护，弘扬传统村落文化和开发经营古建筑；缺少文化，使得村落成为空壳，没有文化底蕴，也只是商业化城市的缩影。' +
                '传统村落的旅游发展有其天然优势，可以以旅游业作为乡村振兴的支点，既照顾了经济，也能同时发展文化活动。发展的方法有很多，' +
                '除去古建筑的开发和较为基础的饮食住宿设施，村落本身的生活环境改造，可以依据当地的风俗习惯举办别具特色的民俗文化活动，' +
                '还原建设一些符合古村落的设施，组织村民利用这些设施开展传统活动，使游客近距离体验村落的传统艺能和生活，感受村落文化。' +
                '而发展旅游业只是其中之一的方法，发展村内传统产业也是展示村落文化的重要途径，这样一来村落文化将不仅限于展示于来到村内' +
                '的游客，跟能够展示于更广阔的地区。但在发展的过程中要如何正确地处理好保护和开发之间关系，不能一股脑的把好的东西混在一起。' +
                '在实地调研中，发现了诸如部分传统建筑空间形态损坏严重、整体民居风貌不协调等问题。';
                this.word1 = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0传统村落的未来发展，一定是建立在保护自身优良特色的情况下，' +
                    '并积极地向外界展示的，这既能够有效保护各种各样的传统文化，人文风情，也能使得传统村落重新兴旺，给村民带来幸福，' +
                    '对村落充满希望。';
            }
        }
    }
</script>

<style scoped>
    @import url('../static/animate.min.css');
    @media(max-width:767px){
        .img{
            width:48%;
            margin:1%;
        }
    }
    @media(min-width:768px){
        .img{
            width:100%;
            /*height: 20%;*/
            margin:2%;
            border-bottom: 4px solid #DFDFDF;
            transition:all .3s;
            /*border-radius: 50%;*/
        }
        .img:hover{
            border-bottom:4px solid black;
            transform:translateY(-10px);
        }
        .container{
            margin:0px auto;
            width:90%;
        }
    }
    .des{
        margin-left: 2%;
        margin-right: 2%;
        line-height: 30px;
    }


</style>
