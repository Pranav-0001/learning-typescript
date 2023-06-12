interface Producct{
    name:string;
    price:number
}
class Store<T>{
    objects:T[]=[]
    add(obj:T):void{
        this.objects.push(obj)
    }
}



let store=new Store<Producct>()


//pass on the generictype parameter

class NewStore<T> extends Store<T>{
    compress(){}
}


//restrict the generictype parameter

class Search<T extends {name:string}> extends Store<T>{
    find(name:string):T |undefined{
        return this.objects.find(obj=>obj.name===name)
    }
}