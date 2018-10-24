<template>
<div>
    <el-card class="box-card" v-for="(data,index) in dataa" v-bind:key="data.id" shadow="never" style="border-width:0px 0px 1px 0px;">
  <div slot="header" class="clearfix" style="border-bottom:none;">
    <span style="font-size:14px;"><strong>{{data.user.category}} / {{data.user.name}}</strong></span>
    <el-button style="float: right; padding: 3px 0; color:rgb(111, 102, 102); margin:0;" type="text" v-on:click = "deleteCollect(data.id,index)">删除</el-button>
  </div>
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
    /* padding:10px; */
    border-bottom:0px;
}
.el-card__body{
    border-width:0px 0px 3px 0px;
    /* padding:8px; */
}
.el-card__header{
  border-bottom:none;
}
</style>
<script>
export default {
  name: 'draft',
  props:['number'],
  data () {
    return {
      dataa: ''
    }
  },
  mounted () {
    let _this = this
    _this.$http({
      method: 'post',
      url: '/weekly/article/getActicleListByUserId.action',
      params: {
        'uId': _this.number
      }
    })
      .then(function (res) {
        _this.dataa = res.data.data
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  methods: {
    deleteCollect (id, index) {
      let _this = this
      _this.$http({
        method: 'post',
        url: '/weekly/user/deleteColl.action',
        params: {
          'id': '04161111',
          'aId': id
        }
      })
        .then(function (res) {
          if (res.data.status == '200') {
            _this.dataa.splice(index, 1)
            _this.$message({
              message: '删除成功',
              type: 'success',
              showClose: 'true',
              center: 'true',
              duration: 3000
            })
          }
        })
        .catch(function (res) {
          _this.$message({
            message: '删除失败',
            type: 'error',
            showClose: 'true',
            center: 'true',
            duration: 3000
          })
        })
    }
  }
}
</script>
