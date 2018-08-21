<template>
  <div id="login">
    <div class="wrap">
      <label>用户名</label>
      <el-input placeholder="请输入用户名" v-model="username"></el-input>
      <label>密码</label>
      <div @keyup.enter="onlogin"><el-input type="password" placeholder="请输入密码" v-model="password"></el-input></div>
      <el-button @click="onlogin">立即登录</el-button>
      <p class="tip">没有账号？
        <router-link to="/register">
          注册新用户
        </router-link> 
      </p>
    </div>
  </div>
</template>

<script src="./tem.js">

</script>


<style lang="less" scoped src="./tem.less">

</style>
