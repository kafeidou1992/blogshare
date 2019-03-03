import blog from '../../helps/blog'

export default {
  data () {
    return {
      page: 1,
      total: 0,
      blogs: []
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
      blog.getlist({userId: this.user.id,page: val}).then(res=>{
        console.log(res)
        this.total = res.total
        this.page= res.page
        this.blogs = res.data
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
      this.$router.push({path:'/my',query:{page: newPage}})
    },
    ondelete(val){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return blog.delete(val)
      }).then(res=>{
        this.$message.success(res.msg)
        this.getData(parseInt(this.$route.query.page) || 1)
      })
    }
  }
}