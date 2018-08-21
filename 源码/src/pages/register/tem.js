import vuex from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  created() {
    
    this.$root.bus.$emit('register',{onregister: true})
  },
  beforeDestroy() {
    this.$root.bus.$emit('register',{onregister: false})
  },
  methods: {
    ...vuex.mapActions(['register']),
    onregister(){
      this.register({username: this.username,password: this.password}).then(()=>{
        this.$router.push({ name: 'root'})
      })
    }
  }
}