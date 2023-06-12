function kgToLbs(weight : number | string):number{
    if(typeof weight==="number"){
        return weight
    }
    return parseInt(weight)
}

console.log(kgToLbs("10"));
