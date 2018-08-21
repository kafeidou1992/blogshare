import vuex from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  created() {
    this.$root.bus.$emit('login',{onlogin: true})
  },
  beforeDestroy() {
    this.$root.bus.$emit('login',{onlogin: false})
  },
  methods: {
    ...vuex.mapActions(['login']),
    onlogin(){
      this.login({username: this.username,password: this.password}).then(()=>{
        this.$router.push({ path: this.$route.query.redirect || '/'})
      })
    }
  }
}