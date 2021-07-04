<template>
    <div>
        {{name}}
        <div v-for="i in item" :key="i.RowDataPacket">{{i.runoob_id}}</div>
    </div>
</template>
<script>
export default {
    asyncData ({ store, route,results }) {
        console.log('asyncData-----------------执行')
        store.state.items = results
    },
    computed: {
        // 从 store 的 state 对象中的获取 item。
        item () {
            return this.$store.state.items || '123456'
        }
    },
    data(){
        return{
            name:'Home'
        }
    }
}
</script>