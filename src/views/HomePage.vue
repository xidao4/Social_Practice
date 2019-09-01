<template>

    <el-container class="bg">
            <el-main class="bg-main">
                <el-row style="margin-top: 17%;font-size: 4vw">
                    南京大学软件学院 拾遗者团队
                </el-row>
                <el-row style="margin-top: 4%">
                    <el-link :underline="false" type="info" @click="jump"
                             class="welcome">
                        {{str2}}
                        <i class="el-icon-truck el-icon--right"></i>
                    </el-link>
                </el-row>
            </el-main>
        <el-footer class="footer">
            <el-image :src="aboutus" @click="drawer = true"></el-image>
<!--            <el-link :underline="false" @click="drawer = true" class="name" type="success">关于我们</el-link>-->
            <el-drawer
                    :visible.sync="drawer"
                    :direction="direction"
                    size="80%">
                    <div class="introduction">
                        <div>
                            <h3>选题名称</h3>
                            <span style="font-size: 1.2vw">未曾失落的遗迹——江宁传统村落建筑风貌调研</span>
                            <h3>背景与来源</h3>
                            <span style="font-size: 1.2vw">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在城市化日益加深的当下，传统古村落日渐式微。根据党中央“社会主义新农村建设”的要求，
                            当前我国全面建设小康社会的重点难点在农村，农业丰则基础强，农民富则国家盛，农村稳则社会安；
                            没有农村的小康，就没有全社会的小康。</span>
                            <h3>意义</h3>
                            <span style="font-size: 1.2vw">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;既响应了“社会主义新农村建设”的号召，又能为江宁的传统村落的建设与保护献出一份力量，让
                            人们更好地了解古村落的文化和内涵，并且小组成员们可以提升知识水平和团队协作能力，在传统村落
                            的现代化建设中也留下南大学子的足迹。</span>
                        </div>
                    </div>

            </el-drawer>
        </el-footer>
    </el-container>

</template>

<script>
    export default {
        name: 'HomePage',
        data() {
            return {
                str1: '快来和coder们一起探索未曾失落的遗迹吧',
                i: 0,
                timer: 0,
                str2: '',
                aboutus: require("./assets/images/aboutus3.gif"),
                drawer: false,
                direction: 'btt',
                // exp: require("./assets/images/logo.png")
                // image_nju: require("./assets/images/nju.jpg"),
                // image_se: require("./assets/images/se.jpg")
            }
        },
        methods: {
            typing() {
                if (this.i <= this.str1.length) {
                    this.str2 = this.str1.slice(0, this.i++);
                    this.timer = setTimeout( this.typing, 150);
                } else {
                    this.str2 = this.str1;
                    clearTimeout(this.timer);
                    this.show_icon = true;
                }
            },
            jump(){
                this.$router.push('/home')
            }
        },
        mounted() {
            this.typing();
        }
    }

</script>

<style scoped>
    .bg{
        height: 100%;
        background-color: black;
    }
    .bg-main{
        height: 85%;
        background:url("./assets/images/countryside.png") no-repeat center;
        background-size: cover;
        margin-bottom: 0;
    }
    .footer{
        margin-top: 1.8%;
        height: 15%;
        padding: 0;
        background-color: black;
        color: white;
    }
    .introduction{
        margin-left: 2%;
        margin-right: 2%;
        background: url("./assets/images/bg2.png") no-repeat center;
        background-size: cover;
    }
    .name{
        color: white;
        font-size: 2.5vw;
        /*文字阴影*/
        /*text-shadow: 0 2px 0 #bbb, 0 3px 0 #b9b9b9, 0 4px 0 #aaa,*/
        /*0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 5px 10px rgba(0,0,0,.25),*/
        /*0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);*/
    }
    .welcome{
        font: 5em SansSerif;
        font-weight: 700;
        font-size: 2vw;
    }
</style>
