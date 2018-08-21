<template>
  <div id="detail">
    <template v-if="user && user.id===blog.user.id">
      <div class="userinfo">
        <router-link to="/my">
          <div><img :src="blog.user.avatar" :alt="blog.user.username"></div>
        </router-link> 
        <div class="msg">
          <div class="title">{{blog.title}}</div>
          <router-link to="/my">
            <span class="author">{{blog.user.username}}</span>
          </router-link>
          <span class="time">发布于{{blog.updatedAt | fixtime}}</span>
        </div>
      </div>             
    </template>
    <template v-else>
      <div class="userinfo">
        <router-link :to="{name: 'user',params:{userid: blog.user.id}}">
          <div><img :src="blog.user.avatar" :alt="blog.user.username"></div>
        </router-link>  
        <div class="msg">
          <div class="title">{{blog.title}}</div>
          <router-link :to="{name: 'user',params:{userid: blog.user.id}}">
            <span class="author">{{blog.user.username}}</span>
          </router-link>   
          <span class="time">发布于{{blog.updatedAt | fixtime}}</span>
        </div>
      </div>
    </template>
    <div class="article" v-html="markdown"></div>
  </div>
</template>

<script src="./tem.js">

</script>

<style lang="less" src="./tem.less">

</style>
