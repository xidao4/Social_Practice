<template>

    <el-container style="height: 100%" direction="vertical" class="bg">

        <el-header>
            <el-row type="flex" justify = "end">
                <el-col :span="3">
                    <el-link icon="el-icon-lollipop" style="font-size: 20px; margin-top: 20px;
                           color: black " @click="describe">{{header}}</el-link>
                </el-col>

                <!--                <el-col :span="1">-->
                <!--                    <el-dropdown trigger="hover" class="admin-info right">-->
                <!--                        <el-image src="image_nju" :fit="contain" alt="avatar"/>-->
                <!--                        <el-dropdown-menu slot="dropdown">-->
                <!--                            <el-dropdown-item @click.native="logout">-->
                <!--                                <i class="el-icon-back"></i>-->
                <!--                                <span>关于南大</span>-->
                <!--                            </el-dropdown-item>-->
                <!--                        </el-dropdown-menu>-->
                <!--                    </el-dropdown>-->
                <!--                </el-col>-->

                <!--                <el-col :span="1">-->
                <!--                    <el-dropdown trigger="hover" class="admin-info right">-->
                <!--                        <el-avatar src="image_se" size="30" alt="avatar"/>-->
                <!--                        <el-dropdown-menu slot="dropdown">-->
                <!--                            <el-dropdown-item @click.native="logout">-->
                <!--                                <i class="el-icon-back"></i>-->
                <!--                                <span>关于南大软院</span>-->
                <!--                            </el-dropdown-item>-->
                <!--                        </el-dropdown-menu>-->
                <!--                    </el-dropdown>-->
                <!--                </el-col>-->
            </el-row>
            <el-row type="flex" justify = "end">
                <el-col :span="13">
                    <div style="display: flex; margin-top: 2px; height: 220px">
                        <transition name="el-zoom-in-center">
                            <div v-show="show_description" class="transition-box">
                                <el-row style="font-size: 17px; font-weight: 700">选题名称</el-row>
                                <el-row style="font-size: 13px; text-align: left">
                                    未曾失落的遗迹——江宁传统村落建筑风貌调研
                                </el-row>
                                <el-row style="font-size: 17px; margin-top:15px; font-weight: 700">团队成员</el-row>
                                <el-row style="font-size: 13px; text-align: left">
                                    NJU_SE的准大二coder们
                                </el-row>
                            </div>
                        </transition>
                        <transition name="el-zoom-in-top">
                            <div v-show="show_description" class="transition-box">
                                <el-row style="font-size: 17px; font-weight: 700">背景与来源</el-row>
                                <el-row style="font-size: 13px; text-align: left">
                                    在城市化日益加深的当下，传统古村落日渐式微。根据党中央“社会主义新农村建设”的要求，
                                    当前我国全面建设小康社会的重点难点在农村，农业丰则基础强，农民富则国家盛，农村稳则社会安；
                                    没有农村的小康，就没有全社会的小康。
                                </el-row>
                            </div>
                        </transition>
                        <transition name="el-zoom-in-bottom">
                            <div v-show="show_description" class="transition-box">
                                <el-row style="font-size: 17px; font-weight: 700">意义</el-row>
                                <el-row style="font-size: 13px; text-align: left">
                                    既响应了“社会主义新农村建设”的号召，又能为江宁的传统村落的建设与保护献出一份力量，让
                                    人们更好地了解古村落的文化和内涵，并且小组成员们可以提升知识水平和团队协作能力，在传统村落
                                    的现代化建设中也留下南大学子的足迹。
                                </el-row>
                            </div>
                        </transition>
                    </div>
                </el-col>
            </el-row>
            <el-row>

            </el-row>
        </el-header>

        <el-container>
            <el-main>
                <el-row style="margin-top: 283px">
                    <el-col :span="10" :offset="12">
                        <el-row>
                            <el-link :underline="false" style="font-size: 20px" type="success" @click="jump"
                                     class="welcome">
                                {{str2}}
                                <i class="el-icon-truck el-icon--right"></i>
                            </el-link>
                        </el-row>
                        <el-row v-show="show_icon" style="margin-top: 5px">
                            <i class="el-icon-thumb"></i>
                        </el-row>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>

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
                show_icon: false,
                show_description: false,
                header:'关于我们',
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
            describe(){
                this.show_description = !this.show_description;
                this.header = (this.header === '关于我们')?'收回':'关于我们';
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
        background-image: url("./assets/images/coutryside3.png");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        z-index:1;
    }
    .item{
        background: #ffecd2;
    }
    .aside{
        background: inherit;
        text-align: center;
    }
    .name{
        font: 5em Wawati SC;
        /*文字阴影*/
        text-shadow: 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa,
        0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 5px 10px rgba(0,0,0,.25),
        0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
    }
    .welcome{
        font: 5em SansSerif;
        font-weight: 700;
        color: #05cc27;
    }
    .transition-box{
        margin: 10px;
        width: 200px;
        height: 220px;
        border-radius: 4px;
        padding: 10px;
        box-sizing: border-box;
        background: rgba(255,240,199,0.5);
        color: #000000;
    }
</style>
