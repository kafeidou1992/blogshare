<template>
  <div id="create">
    <h2>创建文章</h2>
    <div class="title">
      <h3>文章标题</h3>
      <el-input type="textarea" rows="1" placeholder="请输入标题" v-model.trim="title"></el-input>
      <div class="tip"><span :class="{err: title.length>100}">{{title.length}}/100</span></div>
    </div>
    <div class="description">
      <h3>内容简介</h3>
      <el-input type="textarea" rows="3" placeholder="请输入简介" v-model.trim="description"></el-input>
      <div class="tip"><span :class="{err: description.length>500}">{{description.length}}/500</span></div>
    </div>
    <div class="content">
      <h3>文章内容</h3>
      <el-input type="textarea" rows="20" placeholder="请输入内容,支持markdown语法" v-model.trim="content"></el-input>
      <div class="tip"><span :class="{err: content.length>10000}">{{content.length}}/10000</span></div>
    </div> 
    <div class="atIndex">
      <label for="atIndex">是否展示到首页</label>
      <input id="atIndex" type="checkbox" v-model="atIndex">
    </div>
    <el-button @click="oncreate" :class="{disable: disable}">创建</el-button>
  </div>
</template>

<script src="./tem.js">

</script>

<style lang="less" scoped src="./tem.less">

</style>
