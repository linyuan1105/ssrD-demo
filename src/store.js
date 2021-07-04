const axios = require('axios')
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import { createAPI } from 'create-api'
import { fetchData } from './fetchData.js'
Vue.use(Vuex)
export function createStore () {
    return new Vuex.Store({
        state:{
            items:{}
        },
        mutations: {
            fetchItem (state,data) {
              state.items = data || ''
            }
        },
        actions:{
            fetchItem(context,data){
                fetchData().then(res=>{
                  context.commit('fetchItem',data)
                })
            }
        }
    })
}