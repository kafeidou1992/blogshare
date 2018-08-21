import auth from '@/helps/auth.js'

const state = {
    user: null,
    islogin: false
}

//将state中的数据注入到getters中，以将数据注入到全局，便于获取
const getters = {
    user(state){
        return state.user
    },
    islogin: state => state.islogin 
}

const mutations = {
    setUser(state,obj){
        state.user = obj.user
    },
    setIslogin(state,obj){
        state.islogin = obj.islogin
    }
}

const actions = {
    async register(context,{username,password}){
        let res = await auth.register({username,password}).catch(err=>{console.log(err)})
        context.commit('setUser',{user: res.data})
        context.commit('setIslogin',{islogin: true})
    },

    async login({commit},{username,password}){
        let res = await auth.login({username,password}).catch(err=>{console.log(err)})
        commit('setUser',{user: res.data})
        commit('setIslogin',{islogin: true})
    },

    async logout({commit}){
        await auth.logout().catch(err=>{console.log(err)})
        commit('setUser',{user: null})
        commit('setIslogin',{islogin: false})
    },

    async islogin({commit,state}){
        if(state.islogin) return true
        let res = await auth.islogin().catch(err=>{console.log(err)})
        commit('setIslogin',{islogin: res.isLogin})
        if(res.isLogin){
            commit('setUser',{user: res.data})
            return true
        }else{
            return false
        } 
    }

}

export default {
    state,
    mutations,
    actions,
    getters
}