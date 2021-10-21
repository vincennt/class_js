class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }

    accelerate(accel) {
        this.speed += accel
    }

    brake(frein) {
        this.speed -= frein
    }

    describe(carName, speedCar) {
        carName = this.brand
        speedCar = this.speed
        console.log(`${carName} running at ${speedCar}`);
    }



}

let ford = new Car("ford", 0)
ford.accelerate(50)
ford.brake(25)
ford.describe()


let renaut = new Car("Renault", 0)
renaut.accelerate(100)
renaut.brake(37)
renaut.describe()