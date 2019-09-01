<template>
    <el-container>
        <el-main style="height: 100%;margin-top: 0">
            <el-tabs :tab-position="tabPosition" style="height: 700px;">
                <el-tab-pane label="七坊村" style="height: fit-content;margin-top: 0">
                    <iframe src="http://118.25.112.144"
                            width="100%" height="800" scrolling="no" frameborder="0">
                    </iframe>
                </el-tab-pane>
                <el-tab-pane label="杨柳村" style="height: fit-content;margin-top: 0">
                    <iframe src="http://118.25.112.144/map_ylc/map_ylc.html"
                            width="100%" height="700" scrolling="no" frameborder="0">
                    </iframe>
                </el-tab-pane>
            </el-tabs>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name:'Map_qfc',
        data(){
            return{
                tabPosition:'right',
            }
        },
        methods:{
            open1(){
                this.$notify.info({
                    title: '提示',
                    message: '点击蓝色泡泡可以看到介绍哦~ 按住鼠标可以拖动地图～ 地图还可以放大缩小，快试一下吧～',
                    offset:75,
                    duration:0
                })
            },
        },
        mounted() {
            this.open1();
        }
    }

</script>

<style>
    .map{
        text-align: left;
        margin-left: 20px;
    }
</style>
