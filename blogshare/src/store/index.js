import Vue from 'vue'
import vuex from 'vuex'
import auth from './auth'
import blog from './blog'

Vue.use(vuex)

export default new vuex.Store({
    modules: {
        auth,
        blog
    }
})