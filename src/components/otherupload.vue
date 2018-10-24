<template>
<div>
    <el-card class="box-card" v-for="data in datas" v-bind:key="data.id" shadow="never" @click.native="showContent(data.id,data.content,data.uId)">
  <div class="text-item">
    {{data.txt}}
  </div>
</el-card>
</div>
</template>

<style>
*{
    padding:0;
    margin:0;
}
.box-card{
    width:830px;
    margin:0 auto;
    border-width:0px 0px 1px 0px;
}
.text-item{
    font-size:13px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
}
.clearfix:before,
.clearfix:after {
display: table;
content: "";
}
.clearfix:after {
clear: both
}
.el-card__header{
    padding:10px;
    border-bottom:0px;
}
.el-card__body{
    border-width:0px 0px 3px 0px;
    padding:8px;
}
</style>
<script>
export default {
  name: 'otherupload',
  props:['number','childms'],
  data () {
    return {
      datas:''
    }
  },
  mounted () {
    let _this=this;
    _this.$http({
        method:'post',
        url:'/weekly/article/getArticleList.action',
        params:{
            'uId':_this.childms.uid,
        }
    })
    .then(function(res){
        _this.datas = res.data.data
    })
  },
  methods: {
  showContent(idd,contentt,uIdd){
    this.$emit("showarti",idd,contentt,uIdd,'1')
    this.$router.push('showCon')
  } 
}
}
</script>
