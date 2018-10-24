<template>
<div>
    <div style="border-bottom:1px solid rgb(230, 230, 230);margin-bottom:10px;padding:10px 15px;">
    <el-button  size='small' style="background-color:#f2f2f2;font-size:12px;border:1px solid #a1a1a1;color:black;" @click="back()">返回</el-button>
    <el-button v-show="collectshow" size='small' style="background-color:#f2f2f2;font-size:12px;border:1px solid #a1a1a1;color:black;" :plain="true" @click="bucollect()">{{collecttext}}</el-button>
    </div >
    <div class="contents" v-html="text"></div>
</div>
</template>
<script>
export default{
    props:['number','cate','childms','coll'],
    data(){
        return{
            uid:'',     //本篇文章作者学号
            loginuid:'',  
            collect:'',
            id:'',   //本篇文章id
            text:'',   
            delshow:false,    //控制删除按钮
            collectshow:false,
            collecttext:'收藏', 
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        bucollect(){
            let _this =this;
            if(_this.collecttext == '收藏'){
                var url = './user/addColl.action';
            }
            if(_this.collecttext == '已收藏'){
                var url = './user/deleteColl.action';
            }
            _this.$http({    //请求收藏接口
                method:'post',
                url:url,
                params:{
                    'id':_this.loginuid,
                    'aId':_this.id,
                }
            })
            .then(function(res){
                var sc=_this.collecttext;
                if(sc == '收藏'){ 
                    _this.$message({
                        message: '收藏成功',
                        type: 'success',
                        showClose: 'true',
                        center: 'true',
                        duration: 3000
                    });
                    _this.collecttext ='已收藏';
                    var obj=res.data.data.collection;
                    if(obj==null || obj==''){
                        obj=[];
                    }
                    else{
                        obj=obj.split(',');
                    }
                    _this.$emit('coll',obj);        //
                }
                if(sc == '已收藏'){
                    _this.$message({
                        message: '取消收藏成功',
                        type: 'success',
                        showClose: 'true',
                        center: 'true',
                        duration: 3000
                    });
                    _this.collecttext ='收藏';
                    var obj=res.data.data.collection;
                    if(obj==null || obj==''){
                        obj=[];
                    }
                    else{
                        obj=obj.split(',');
                    }
                    _this.$emit('coll',obj);    //
                }
            })
            .catch(function(error){
               _this.$message({
                        message: '未知错误',
                        type: 'error',
                        showClose: 'true',
                        center: 'true',
                        duration: 3000
                    });
            })
        }
    },
    mounted() {
        this.loginuid = this.number;
        this.collect=this.coll;
        this.uid = this.childms.uid;
        this.id = this.childms.id;
        this.text = this.childms.text;
        let _this =this;
        if(_this.loginuid == _this.uid){
            _this.collectshow = false;
        }else{
            _this.collectshow = true;
            for(var index=0;index<_this.collect.length;index++){
                if(_this.collect[index]==_this.id){
                    _this.collecttext="已收藏";
                }
            }
        }
    },
}
</script>

<style scoped>
.contents{
    width:cale(100% - 60px);
    padding:10px;
    padding-right:12px;
    min-height:calc(100vh - 225px);
    border:1px solid #a1a1a1;
    margin:15px;
    overflow-y:auto;
}
.replytext {
    font-size: 14px;
}
.replyitem {
    padding:5px;
}
.box-card {
    width: 580px;
    border:0px;
    margin:15px 10px;
}
</style>


<style>
.area textarea{
    height:100px;
}
.contents table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.contents table td,
table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
}
.contents table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
}
/* blockquote 样式 */
.contents blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
/* code 样式 */
.contents code {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.contents pre code {
  display: block;
}
.contents h1,h2,h3,h4,h5,h6,p{
    margin:10px 0px;
}
.contents ul, ol {
    padding:0px;
  margin: 10px 0 10px 20px;
}
</style>