<template>
<div>
    <el-card class="box-card" v-for="data in datas" v-bind:key="data" shadow="never" >
  <div slot="header" class="clearfix">
    <span style="font-size:14px;"><strong>卡片名称</strong></span>
    <el-button style="float: right; padding: 3px 0; color:rgb(111, 102, 102);" type="text">删除</el-button>
  </div>
  <div class="text-item">
    {{data.txt}}
  </div>
</el-card>
</div>
</template>

<style scoped>
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
</style>
<style>
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
    border-width:0px 0px 1px 0px;
    padding:8px;
}
</style>
<script>
export default {
  name: 'draft',
  data () {
    return {
      datas: ''
    }
  },
  mounted () {
    let _this = this
    _this.$http({
      method: 'post',
      url: '/api/weekly/article/getArticleList.action',
      params: {
        'uId': '04163111'
      }
    })
      .then(function (res) {

      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>
