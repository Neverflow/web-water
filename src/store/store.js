import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        loginstatus: sessionStorage.getItem('loginstatus') || false
    },
    mutations: {
        setRouting(state, loginstatus) {
            state.loginstatus = loginstatus
            sessionStorage.setItem('loginstatus', loginstatus)
        }
    },
    actions: {

    },
    getters: {}
})
export default store