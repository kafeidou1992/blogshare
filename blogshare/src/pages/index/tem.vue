<template>
  <div id="index">
    <section>
      <div class="items" v-for="blog in blogs" :key="blog.id">
        <template v-if="user && user.id===blog.user.id">
          <router-link to="/my">
            <div class="author">
              <img class="avatar" :src="blog.user.avatar" :alt="blog.user.username">
              <div class="name">{{blog.user.username}}</div>
            </div>
          </router-link>
        </template>
        <template v-else>
           <router-link :to="{name: 'user',params:{userid: blog.user.id}}">
            <div class="author">
              <img class="avatar" :src="blog.user.avatar" :alt="blog.user.username">
              <div class="name">{{blog.user.username}}</div>
            </div>
          </router-link>  
        </template>
        <div class="content">
          <div class="title clearfix">
            <router-link :to="{name: 'detail',params:{blogid: blog.id}}"><h3>{{blog.title}}</h3></router-link>
            <span class="time">{{blog.updatedAt | fixtime}}</span>
          </div>
          <router-link :to="{name: 'detail',params:{blogid: blog.id}}">
            <p>{{blog.description}}</p>
          </router-link>
        </div>
      </div>
    </section>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="total" @current-change="pageChange" :current-page="page"></el-pagination>
    </div>
  </div>
</template>

<script src="./tem.js">

</script>

<style lang="less" scoped src="./tem.less">

</style>
