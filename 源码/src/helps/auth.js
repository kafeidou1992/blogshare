import require from './require'

const url = {
    register: '/auth/register',
    login: '/auth/login',
    logout: '/auth/logout',
    islogin: '/auth'
}

export default {
    register({username,password}){
        return require(url.register,'post',{username,password})
    },
    login({username,password}){
        return require(url.login,'post',{username,password})
    },
    logout(){
        return require(url.logout,'get')
    },
    islogin(){
        return require(url.islogin,'get')
    }
}