import blog from '../../helps/blog'

export default {
  data () {
    return {
      title: '',
      content: '',
      description: '',
      atIndex: false
    }
  },
  computed:{
    disable(){
      return (this.title.length<=100 && this.description.length<=500 && this.content.length<=10000) ?false :true
    }
  },
  methods:{
    oncreate(){
      if(this.disable) return
      blog.create({
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