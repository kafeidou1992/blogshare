import blog from '../../helps/blog'
import marked from 'marked'

export default {
  data () {
    return {
      blog: {},
      markContent: ''
    }
  },
  computed:{
    markdown(){
      return marked(this.markContent)
    },
    user(){
      return this.$store.getters.user
    }
  },
  created() {
    this.getData()
  },
  methods:{
    getData(){
      blog.detail(this.$route.params.blogid).then(res=>{
        console.log(res)
        this.blog = res.data
        this.markContent = res.data.content
      }).catch(err=>{
        console.log(err)
      })
    }
  }

}