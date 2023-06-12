interface Result<T>{
    data:T|null,
    err:string |null
}

function fetch<T>(url : string):Result<T>{
    console.log(url);
    
    return {data:null,err:null}
}
interface User{
    username:string
}

interface Producct{
     title:string
}

let result=fetch<Producct>('url') 
result.data?.title
