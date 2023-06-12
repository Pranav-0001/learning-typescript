class ArrayUtils{
    wrapInArray<T>(val:T){
        return [val]
    }
}

let utils=new ArrayUtils()
let number=utils.wrapInArray(1)

console.log(number);
