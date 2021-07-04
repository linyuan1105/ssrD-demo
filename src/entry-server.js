import { createApp } from './app'
export default (context)=>{
  return new Promise((resolve,reject)=>{
    const { app, router,store } = createApp()
    router.push(context.url)
    router.onReady(()=>{
        const matchedComponents = router.getMatchedComponents()
        if(!matchedComponents){
            return reject({code:404})
        }
        Promise.all(matchedComponents.map(Component=>{
          if(Component.asyncData){
            function getData(results, fields,cb){
              context.state = results
              console.log('asyncData---------------------------')
            console.log(Component.asyncData,'--------------------------------1')
            // console.log(sqlCallback,'------------------sqlCallback')
            console.log('------------------context')
            Component.asyncData({
              store,
              route:router.currentRoute,
              results
            })
              resolve(app)
            }
            context.query(getData)
            
          }
        })).then(()=>{
          // const query = context.query
          // new Promise(r=>{
          //   function getData(results, fields,cb){
          //     console.log('-----------------------getData')
          //     context.state = results
          //     cb()
          //     r()
          //   }
          //   query(getData)
          // }).then(()=>{
          //   resolve(app)
          // })
            
        })
    },reject)
  })  
}