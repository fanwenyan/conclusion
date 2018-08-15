<template>
    <el-card class="box-card" shadow="never">
  <div slot="header" class="clearfix">
    <span style="font-size:14px;"><strong>卡片名称</strong></span>
    <el-button style="float: right; padding: 3px 0; color:rgb(111, 102, 102);" type="text">删除</el-button>
  </div>
  <div class="text-item">
    {{msg}}
  </div>
</el-card>
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
      msg: '文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容'
    }
  }
}
</script>
