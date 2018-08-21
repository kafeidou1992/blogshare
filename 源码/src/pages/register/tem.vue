<template>
  <div id="register">
    <div class="wrap">
      <label>用户名</label>
      <el-input placeholder="请输入用户名(1到15个字符，只能是字母数字下划线中文)" v-model="username"></el-input>
      <label>密码</label>
      <div @keyup.enter="onregister"><el-input type="password" placeholder="请输入密码(6到16个任意字符)" v-model="password"></el-input></div>
      <el-button @click="onregister">立即注册</el-button>
      <p class="tip">已有账号？
        <router-link to="/login">
          直接登录
        </router-link>
      </p>
    </div>
  </div>
</template>

<script src="./tem.js">

</script>

<style lang="less" scoped src="./tem.less">

</style>
