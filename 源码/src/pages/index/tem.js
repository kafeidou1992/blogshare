import blog from '../../helps/blog'

export default {
  data () {
    return {
      blogs: [],
      total: 0,
      page: 1
    }
  },
  computed:{
    user(){
      return this.$store.getters.user
    }
  },
  watch:{
    '$route' (to, from) {
      this.getData(parseInt(this.$route.query.page) || 1)
    }
  },
  created() {
    this.getData(parseInt(this.$route.query.page) || 1)
  },
  methods:{
    getData(val){
      blog.getlist({page: val, atIndex: true}).then(res=>{
        console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
      })
    },
    pageChange(newPage){
      this.$router.push({path: '/',query:{page: newPage}})
    }
  }
}