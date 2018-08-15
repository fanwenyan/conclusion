<template>
<el-container class="conten">
  <el-header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <img src="../assets/ZYPC.png" style="width:280px;float:left;outline:none">
      <el-menu-item index="1" class="nav" @click="skip('home')"><strong>首页</strong></el-menu-item>
      <el-menu-item index="2" class="nav" @click="skip('edit')"><strong>写周报</strong></el-menu-item>
      <el-menu-item index="3" class="nav" @click="skip('draft')"><strong>草稿箱</strong></el-menu-item>
      <el-menu-item index="4" class="nav" @click="skip('collection')"><strong>我的收藏</strong></el-menu-item>
      <el-menu-item index="5" class="nav" @click="skip('upload')"><strong>已上传</strong></el-menu-item>
      <el-menu-item index="6" class="nav" @click="skip('infor')"><img src="../assets/message.png" style="width:25px;height:25px;margin-left:110px"></el-menu-item>     <img src="../assets/touxiang.jpg" style="width:55px;height:55px;margin-left:39px">
    </el-menu>
  </el-header>
  <el-container>
    <el-aside style="width:280px; border-right:none;">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            unique-opened="true">
            <el-submenu index="1">
              <template slot="title">
                <span><strong>运维组</strong></span>
              </template>
                <el-menu-item index="1-1">嘻嘻嘻</el-menu-item>
                <el-menu-item index="1-2">嘻嘻嘻</el-menu-item>
                <el-menu-item index="1-3">嘻嘻嘻</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span><strong>开发组</strong></span>
              </template>
                <el-menu-item index="2-1">嘻嘻嘻</el-menu-item>
                <el-menu-item index="2-2">嘻嘻嘻</el-menu-item>
                <el-menu-item index="2-3">嘻嘻嘻</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-main router>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: 'mainframe',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    skip (a) {
      this.$router.push(a)
    }
  }
}
</script>

<style scoped>
*{
  padding:0;
  margin:0;
  height:100%;
}
.el-side{
  overflow:auto;
}
.el-header{
  font-size:16px;
}
.nav{
  font-size:16px;
}
.el-menu-item-group{
  font-size: 13px;
}
span{
  margin-left:30px;
  font-size: 15px;
}
.el-menu-item{
  margin-left:80px;
  margin-right:10px;
}
.el-aside {
  text-align: center;
  margin-top:1px;
}
.el-main {
  margin:0px;
}
</style>
