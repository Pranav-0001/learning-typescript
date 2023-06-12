function Sample<T extends number | string>(val : T){
    console.log(val);
    
}

Sample(1) //only we can pass number or string. Constraints