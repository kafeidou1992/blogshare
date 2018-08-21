<template>
  <header :class="{login: islogin, nologin: !islogin}" v-show="show">
    <template v-if="!islogin">
      <h1><router-link to="/">Let's share</router-link></h1>
      <p>精品博客汇聚</p>
      <div class="btns" v-if="!onlogin && !onregister">
        <router-link to="/login">
          <el-button>登录</el-button> 
        </router-link>
        <router-link to="/register">
          <el-button>注册</el-button>
        </router-link> 
      </div>
    </template>
    <template v-if="islogin">
      <h1><router-link to="/">Let's share</router-link></h1>
      <router-link to="/create">
        <i class="edit el-icon-edit"></i>
      </router-link>
      <div class="user-area">
        <img class="avatar" :src="user.avatar" :alt="user.username">
        <ul class="child">
          <router-link to="/my">
            <li class="username">我的</li>
          </router-link>
          <router-link to="/">
            <li class="logout" @click="logout">注销</li>
          </router-link>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
import vuex from 'vuex'

export default {
  data () {
    return {
      onlogin: false,
      onregister: false,
      show: false
    }
  },
  computed:{
    ...vuex.mapGetters(['user','islogin'])
  },
  created(){
    this.$store.dispatch('islogin').then(()=>{
      this.show = true
    })
    this.$root.bus.$on('login',val=>{
      this.onlogin = val.onlogin
    })
    this.$root.bus.$on('register',val=>{
      this.onregister = val.onregister
    })
  },
  methods:{
    logout(){
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped lang="less">
  @import '../assets/base.less';

header {
  a{
    color: #fff;
    text-decoration: none;
  }
}
  header.login{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    background-color: @bgColor;

    h1 {
      margin-left: 60px;
      color: #fff;
      font-size: 30px;
      text-transform: uppercase;
      flex: 1;
    }

    .edit {
      color: #fff;
      font-size: 30px;
    }

    .user-area {
      padding-top: 8px;
      padding-bottom: 8px;
      cursor: pointer;
      position: relative;
      margin-left: 15px;
      margin-right: 60px;

      img.avatar {
        width: 30px;
        height: 30px;
        border: 1px solid #fff;
        border-radius: 50%;
        vertical-align: top;
      } 

      &:hover .child {
        display: block;
      }

      .child {
        position: absolute;
        top: 48px;
        left: -8px;
        display: none;
        list-style: none;
        background-color: @bgColor;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.30);
        border-radius: 0 0 2px 2px;
        color: #fff;
        font-size: 12px;
        width: 70px;

        .username {
          padding: 8px 16px 4px 12px;
        }

        .logout {
          padding: 4px 0 8px 12px;
        }
      }
    }
  }

  header.nologin{
    padding: 0 12% 30px 12%;
    background-color: @bgColor;
    text-align: center;

    h1 {
      color: #fff;
      font-size: 40px;
      margin-top: 40px;
      text-transform: uppercase;
    }

    p {
      margin-top: 15px;
      color: #fff;
    }

    .btns {
      margin-top: 20px;

      .el-button {
        color: @themeColor;
        border: 1px solid #fff;
        border-radius: 4px; 
        font-weight: normal;
        padding: 6px 10px; 

        &:first-child{
          margin-right: 16px;
        }

        &:hover {
          color: #fff;
          background-color: @themeLighterColor;
        }
      }
    }
  }

</style>
