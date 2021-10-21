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
ford.accelerate(30)
ford.describe()
ford.accelerate(30)
ford.describe()


let renaut = new Car("Renault", 0)
renaut.accelerate(100)
renaut.brake(37)
renaut.describe()

class tv {
    constructor(brand, channel, volume) {
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }

    volumeUp(valueVolume) {
        this.volume += valueVolume
        if (this.volume > 100) {
            this.volume = 100
        }
    }

    volumeDown(valueVolumeDown) {
        this.volume -= valueVolumeDown
        if (this.volume < 0) {
            this.volume = 0
        }

    }

    changeChannel(channelValue) {
        if (channelValue < 0) {
            console.log("Ce numéro de chaine n'existe pas")
        } else if (channelValue > 50) {
            console.log("Ce numéro de chaine n'existe pas");
        } else(this.channel = channelValue)
    }

    reset(tvName) {
        this.brand = tvName
        this.channel = 1
        this.volume = 50
    }

    describe() {
        console.log(`la télé ${this.brand} a un volume à ${this.volume} et nous sommes sur la chaine numéro :${this.channel}`);
    }
}

let samsumg = new tv("samsumg")

// samsumg.volumeUp(49)
samsumg.volumeUp(1222)
samsumg.changeChannel(4)
samsumg.describe("samsumg")
    // samsumg.reset()
samsumg.describe()