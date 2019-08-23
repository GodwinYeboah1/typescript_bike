
class Bike{
    price: number;
    max_speed: string;
    miles: number;

constructor(price: number, max_speed:string){
  this.price = price;
  this.max_speed = max_speed;
  this.miles = 0;
}

displayInfo(){
    return `The bike price {this.price}, The max speed {this.max_speed}, and the total miles {this.miles} `
}

ride(){
    this.miles = this.miles + 10;
    console.log(`Riding`);
    return this;
}

reverse(){
    this.miles = this.miles - 5;
    console.log("Reversing ");
    return this;
}   
}

let b1 = new Bike(200, "25mph");
b1.ride().ride().ride().reverse().displayInfo();

let b2 = new Bike(500, "45mph");
b2.ride().ride().reverse().reverse().displayInfo();

let b3 = new Bike(100, "15mph");
b3.reverse().displayInfo();
