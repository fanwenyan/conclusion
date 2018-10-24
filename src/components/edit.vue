<template>
    <div>
      <el-button type="primary" v-on:click = "upContent('1')">上传</el-button>
      <el-button type="info" v-on:click = "upContent('0')">保存草稿</el-button>
      <div id="editorElem" class="cont" style="text-align:left"></div>
    </div>
</template>

<style>
.el-button{
  margin:15px;
}
</style>

<script>
import E from 'wangeditor'
export default {
  name: 'editor',
  props:['number','childms'],
  data () {
    return {
      content: '',
      txt: '',
      uId: '', // 用户学号
      editor: '', // 编辑器
      id: '',
      draft:'', 
    }
  },
  methods: {
    upContent (status) {
      let _this = this
      if (_this.editorText == '' || _this.editorContent == 'undefined') {
        _this.$message({
          message: '内容不能为空',
          type: 'error',
          showClose: 'true',
          center: 'true',
          duration: 3000
        })
      } else {
        _this.$http({
          method: 'post',
          url: '/weekly/article/addArticle.action',
          data: {
            'txt': _this.editorText,
            'content': _this.editorContent,
            'uId': _this.number,
            'status': status,
            'id': '0'
          }
        })
          .then(function (res) {
            if (res.data.status == '200') {
              if (status == '0') {
                _this.$message({
                  message: '保存成功',
                  type: 'success',
                  showClose: 'true',
                  center: 'true',
                  duration: 3000
                })
                // _this.$router.push('draft')
              }
              if (status == '1') {
                _this.$message({
                  message: '上传成功',
                  type: 'success',
                  showClose: 'true',
                  center: 'true',
                  duration: 3000
                })
                _this.$router.push('upload')
              }
            } else {
              if (status == 1) {
                _this.$message({
                  message: '上传失败',
                  type: 'error',
                  showClose: 'true',
                  center: 'true',
                  duration: 3000
                })
              } else {
                _this.$message({
                  message: '保存失败',
                  type: 'error',
                  showClose: 'true',
                  center: 'true',
                  duration: 3000
                })
              }
            }
          })
          .catch(function(res){
            if (status == 1) {
                _this.$message({
                  message: '上传失败',
                  type: 'error',
                  showClose: 'true',
                  center: 'true',
                  duration: 3000
                })
              } else {
                _this.$message({
                  message: '保存失败',
                  type: 'error',
                  showClose: 'true',
                  center: 'true',
                  duration: 3000
                })
              }
          })
      }
    }
  },
  mounted () {
    var editor = new E('#editorElem')
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
      this.editorText = editor.txt.text()
    }
    this.editor = editor
    editor.create()
    this.uId=this.number;
    this.draft=this.childms.text;
    this.editor.txt.html(this.draft);
  }
}
</script>
