<template>
  <div id="my">
    <div class="userinfo">
      <div class="avatar"><img :src="user.avatar" :alt="user.username"></div>
      <div class="author">{{user.username}}</div>
    </div>
    <div class="blogs" >
      <div class="items" v-for="blog in blogs" :key="blog.id">
        <div class="wrap">
          <div class="time">
            <p class="date">{{changeTime(blog.updatedAt).date}}</p>
            <p class="month">{{changeTime(blog.updatedAt).month}}月</p>
            <p class="year">{{changeTime(blog.updatedAt).year}}</p>
          </div>
          <div class="content">
            <router-link :to="{name:'detail',params:{blogid: blog.id}}">
              <h3>{{blog.title}}</h3>
              <p>{{blog.description}}</p>
            </router-link>
          </div>
        </div>
        <div class="handle">
          <router-link :to="{name:'edit',params:{blogid: blog.id}}">
            <span>编辑</span>
          </router-link>
          <span class="delete" @click="ondelete(blog.id)">删除</span>
        </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="total" @current-change="pageChange" :current-page="page"></el-pagination>
    </div>
  </div>
</template>

<script src="./tem.js">

</script>


<style lang="less" scoped src="./tem.less">

</style>
