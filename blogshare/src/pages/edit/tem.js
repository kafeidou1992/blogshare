import blog from '../../helps/blog'

export default {
  data () {
    return {
      title: '',
      content: '',
      description: '',
      atIndex: false,
      blogid: null
    }
  },
  computed:{
    disable(){
      return (this.title.length<=100 && this.description.length<=500 && this.content.length<=10000) ?false :true
    }
  },
  created() {
    this.blogid = this.$route.params.blogid
    this.getData()
  },
  methods:{
    getData(){
      blog.detail(this.blogid).then(res=>{
        console.log(res)
        this.blogid= res.data.id
        this.title = res.data.title
        this.content = res.data.content
        this.description = res.data.description
        this.atIndex = res.data.atIndex
      })
    },
    onsave(){
      if(this.disable) return
      blog.edit({
        blogid: this.blogid,
        title: this.title,
        content: this.content,
        description: this.description,
        atIndex: this.atIndex
      }).then(res=>{
        this.$message.success(res.msg)
        this.$router.push({name:'detail',params:{blogid: res.data.id}})
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}