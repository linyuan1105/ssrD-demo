<template>
    <div class="text" id="app">
            {{name}}
            <div v-for="i in RowDataPacket" :key="i">{{i}}</div>
            <button @click="getData">getData</button>
            {{storeData}}
            <router-link to="/foo">Foo</router-link>
            <router-view />
            {{elem}}
    </div>
</template>
<script>
export default {
    asyncData ({ store, route,results }) {
        console.log('asyncData-----------------执行')
        store.state.items = results
    },
    created(){
        console.log('created')
        this.RowDataPacket = [1,2,5,9,6,3,4,7,5]
        this.name = 'vue-loader-created'
    },
    computed: {
        elem(){
            return this.$store.state
        },
        // 从 store 的 state 对象中的获取 item。
        item () {
            return  '123456'
        }
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    methods:{
        getData(){
            console.log(this)
            this.name += 1
            this.storeData = this.$store.state.items
            console.log(this.$store.state)
        }
    },
    mounted(){
        console.log('vue------------mounted')
    },
    data(){
        return{
            RowDataPacket:[],
            storeData:null,
            name:'vue-loader'
        }
    }
}
</script>