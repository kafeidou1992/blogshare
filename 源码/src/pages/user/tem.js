import blog from '../../helps/blog'

export default {
  data () {
    return {
      page: 1,
      user: {},
      total: 0,
      blogs: []
    }
  },
  created() {
    this.getData(parseInt(this.$route.query.page) || 1)
  },
  watch:{
    '$route' (to, from) {
      this.getData(parseInt(this.$route.query.page) || 1)
    }
  },
  methods:{
    getData(val){
      blog.getlist({userId: this.$route.params.userid,page: val}).then(res=>{
        console.log(res)
        this.total = res.total
        this.page= res.page
        this.blogs = res.data
        this.user = this.blogs.length>0 ? this.blogs[0].user : {}
      })
    },
    changeTime(val){
      return{
        date: new Date(val).getDate(),
        month: new Date(val).getMonth()+1,
        year: new Date(val).getFullYear()
      }
    },
    pageChange(newPage){
      this.$router.push({path:`/user/${this.user.id}`,query:{page: newPage}})
    }
  }
}