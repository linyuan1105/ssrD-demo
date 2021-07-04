export function fetchData(){
    return new Promise(res=>{
            res([1,2,3,4,5,6,'静态数据','异步数据','file'])
    })
}