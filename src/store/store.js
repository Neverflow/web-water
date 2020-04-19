import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        loginstatus: sessionStorage.getItem('loginstatus') || false,
        waterUser: JSON.parse(sessionStorage.getItem('user')) || {}
    },
    mutations: {
        setRouting(state, loginstatus) {
            state.loginstatus = loginstatus
            sessionStorage.setItem('loginstatus', loginstatus)
        },
        setUser(state, user) {
            state.waterUser = user;
            sessionStorage.setItem('user', JSON.stringify(user));
        }
    },
    actions: {

    },
    getters: {}
})
export default store