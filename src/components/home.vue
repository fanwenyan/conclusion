<template>
<div>
  <div class="finish" v-for="y in yes" :key="y.id">
    <div class="card" style="width:120px;height:120px;margin:30px 30px;float:left;" @click="heupload(y.id)">
      <img :src="y.headImage" class="image">
      <div class="namer">{{y.name}}</div>
    </div>
  </div>
  <div class="notfinish" v-for="n in no" :key="n.id">
    <div class="card" style="width:120px;height:150px;margin:30px 30px;float:left;" @click="heupload(n.id)">
      <img :src="n.headImage" class="image">
      <div class="namer">{{n.name}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  props:['number','cate'],
  data () {
    return {
      data: '',
      yes:'',
      no:''
    }
  },
  mounted() {
      let _this = this
     if(_this.cate != '') {
       _this.$http({
        method: 'post',
        url: '/weekly/user/getUserList.action',
        params: {
          'id': _this.number,
          'category': _this.cate
        }
    })
    .then(function(res){
       _this.data = res.data
      _this.yes = res.data.data[0].yes
      _this.no = res.data.data[1].no
    })
    .catch(function(err){
      console.log(err)
    })
    }
  },
  methods:{
    heupload(idd){
    {//此人学号
      this.$emit('showup',idd);
      this.$router.push('otherupload');
    }
    }
  },
  watch:{
    cate:function(){
       let _this = this
       _this.$http({
        method: 'post',
        url: '/weekly/user/getUserList.action',
        params: {
          'id': _this.number,
          'category': _this.cate
        }
    })
    .then(function(res){
        _this.data = res.data
        _this.yes = res.data.data[0].yes
        _this.no = res.data.data[1].no
      })
      .catch(function(err){
        console.log(err)
      })
    } 
  }
}
</script>

<style>
.namer{
  font-size: 20px;
}
.image{
  width:120px;
  height:120px;
}
</style>
