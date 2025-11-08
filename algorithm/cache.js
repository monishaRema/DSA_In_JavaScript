 const expensiveTask = (id)=>{
    console.log("Run the expensive function for ",id)

    return{
        id:id,
        data:`this is result for the id:${id}`,
        timeStamp:new Date().getTime()
    }
 }

 const dataCache = new Map()

 const getData = (id)=>{
    if(dataCache.has(id)){
        
        console.log(dataCache.get(id))
        return dataCache.get(id)
    }
    console.log("Cach mis for id",id)

    const data = expensiveTask(id)
    dataCache.set(id,data)

    return data;
 }  
 console.log(dataCache)
 console.log(getData(101))
 console.log(getData(101))
 
 

 console.log(dataCache)




 const  tasks = (id) =>{

    // some proccessing 
    console.log("this is tasks performed", id)

    return {
        id:id,
        data:`this is result for the id:${id}`,
        timeStamp:new Date().getTime()
    }

 }

 const cache = new Map()

 const data = (id) =>{

    const now = new Date().now();
    const time = now - cache.has(id).timeStamp;
    if(time < 1){
        cache.delete(id)
    }

    if(cache.has(id)){
        return cache.get(id)
    }

    const result = tasks(id)
    cache.set(id,result)

    return result

 }

 const revelidate = (id)=>{
    if(cache.has(id)){
        cache.delete(id)
    }

    return "error"
 }
 