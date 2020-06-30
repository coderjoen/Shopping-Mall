import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './type'

//  安装插件
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 100,
        student: [
            {id: 1, age: 18, sex: '男'},
            {id: 2, age: 23, sex: '女'},
            {id: 3, age: 49, sex: '男'}
        ]
    },
    mutations: {
        // 方法
        [INCREMENT](state) {
            this.state.count++
        },
        decrement(state) {
            this.state.count--
        },
        incrementCount(state, count) {
            this.state.count += count
        }
    },
    actions: {},
    getters: {
        powerCounter(state) {
            return state.count * state.count
        },
        mout(state) {
            return state.student.filter(s => s.age > 20)
        }
    },
    modules: {}
})

export default store