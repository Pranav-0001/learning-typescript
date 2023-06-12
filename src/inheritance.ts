class Person{
    constructor(public firstname : string,public lastname:string){

    }
    get fullname(){
        return this.firstname+' '+this.lastname
    }
    walk(){
        console.log("walking");
    }

}

class Student extends Person{
    constructor(public studentId:number,public firstname:string,public lastname:string){
        super(firstname,lastname)
    }
    takeTest(){
        console.log('Taking a test');
        
    }
}

let s1=new Student(1,'Pranav','C')
console.log(s1.fullname);
