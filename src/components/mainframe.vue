<template>
<el-container class="conten">
  <el-header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <img src="../assets/ZYPC.png" style="width:280px;float:left;outline:none">
      <el-menu-item index="1" class="nav" @click="skip('home')" style="margin:0 10px 0px 80px;"><strong>首页</strong></el-menu-item>
      <el-menu-item index="2" class="nav" @click="skip('edit')" style="margin:0 10px 0px 80px;"><strong>写周报</strong></el-menu-item>
      <el-menu-item index="3" class="nav" @click="skip('draft')" style="margin:0 10px 0px 80px;"><strong>草稿箱</strong></el-menu-item>
      <el-menu-item index="4" class="nav" @click="skip('collection')" style="margin:0 10px 0px 80px;"><strong>我的收藏</strong></el-menu-item>
      <el-menu-item index="5" class="nav" @click="skip('upload')" style="margin:0 10px 0px 80px;"><strong>已上传</strong></el-menu-item>
      <img :src="img" style="width:55px;height:55px;margin-left:39px;float:right;">
    </el-menu>
  </el-header>
  <el-container class="content">
    <el-aside style="width:280px; border-right:none;">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :unique-opened="true">
            <el-submenu  v-for="(da,num) in datas" :key="num" :index="num.toString()">
              <template slot="title" style="padding :0 35px;">
                <span><strong>{{da.category}}</strong></span>
              </template>
                <el-menu-item id="itenn" class="nam" @click.native="sideother(d.id)" v-for="d in da.list" :key="d.id" :index="d.id">{{d.name}}</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-main router>
      <router-view :number="xuehao" :cate="category" :childms="childmsg" :coll="collect"  v-on:showarti="read" v-on:showup="heupload"></router-view>
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
      activeIndex2: '1',
      datas: '',
      name:'',    //名字
      xuehao:'04161111',
      category:'',
      img:'',
      childmsg:{'id':'','text':'','uid':''},
      collect:'',
      asidemenu:true, 
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
    },
    read(id,text,userid){
          this.childmsg={'id':id,'text':text,'uid':userid};
      },
    heupload(id){
      this.childmsg.uid=id
    },
    sideother(xue){
      this.childmsg.uid = xue
      this.$router.push('otherupload')
    }
  },
  mounted () {
    let _this = this
    _this.$http({
      method: 'post',
      url: '/weekly/user/login.action',
      pamras: {
      }
    })
      .then(function (res) {
        _this.datas = res.data.data;
        _this.img=res.data.user.headImage;
        _this.xuehao=res.data.user.id;
        _this.category=res.data.user.category;
        _this.name=res.data.user.name;
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style scoped>
*{
  padding:0;
  margin:0;
  height:100%;
}
.el-header{
  font-size:16px;
  padding:0;
}
.nav{
  font-size:16px;
}
.el-menu-item-group{
  font-size: 13px;
}
span{
  margin:0;
  font-size: 15px;
  padding:0 60px;
}
.el-aside {
  text-align: center;
  margin-top:1px;
  overflow: auto;
}
.el-main {
  margin:0px;
  overflow:auto;
}
.nam{
  text-align: center;
}
#itenn{
  margin: 0;
}
</style>
<style>
.el-submenu__title{
  text-align: left;
  padding-left: 35px;
}
body{
  margin:0;
  padding:0;
  height:100vh;
}
</style>
