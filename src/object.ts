type Employee={
    id:number,
    name:string,
    match:(id:number)=> number

}


let emp:Employee={id:1,name:"pranav",match:(id:number) => id  }
let emp2:Employee={id:2,name:"Adithya",match:(id:number)=>id}
console.log(emp2);
