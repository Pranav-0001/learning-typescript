class Account{
    readonly id:number;
    owner:string;
    private balance:number;

    constructor(id:number,owner:string,balance:number){
        this.id=id
        this.owner=owner
        this.balance=balance
        
        
    }

    dep(mon:number):void{
        if(mon<=0){
            console.log("err");
        }else{
            this.balance+=mon
        }
    }

    get getBalance():number{
        return this.balance
    }

    set setbalance(val:number){
        this.balance=val
    }
    
}

let acc=new Account(1,'pranav',1000)
acc.dep(1001)
acc.setbalance=500
console.log(acc.getBalance);


