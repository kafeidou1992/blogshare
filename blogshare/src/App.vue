<template>
  <div id="app">
    <Header></Header>
    <main>
      <router-view/>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less">
@import './assets/common.less';

html,body {
  height: 100%;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;

  &>main {
    flex: 1;
    width: 80%;
    margin: 0 auto;
  }
}

</style>
