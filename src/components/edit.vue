<template>
    <div>
      <el-button type="primary">上传</el-button>
      <el-button>保存草稿</el-button>
      <div id="editorElem" class="cont" style="text-align:left"></div>
      <!-- <button v-on:click="getContent">查看内容</button> -->
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
  data () {
    return {
      editorContent: ''
    }
  },
  methods: {
    // getContent: function () {
    //   alert(this.editorContent)
    // }
  },
  mounted () {
    var editor = new E('#editorElem')
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.create()
  }
}
</script>
