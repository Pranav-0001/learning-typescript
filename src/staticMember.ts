class Ride{
    static activeRides:number=0
    start(){Ride.activeRides++;}
    stop(){Ride.activeRides--}
    get getRides(){
        return Ride.activeRides
    }
}

let ride1=new Ride()
let ride2=new Ride()
ride1.start()
ride2.start()
console.log(ride1.getRides)