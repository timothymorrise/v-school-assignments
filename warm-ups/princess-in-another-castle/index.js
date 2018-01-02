class Player{
    constructor(name, totalCoins) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = "Small";
        this.star = false;
        this.gameActive= true;
    }
    setName(namePIcked ) {
        this.namePicked = namePicked;
    }
    gotHit() {
        switch(this.status) {
            case "Powered Up":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Small":
                this.status = "Dead";
                this.gameActive = false;
            
        }
    }
    gotPowerup() {
        switch(this.status) {
            case "Small":
                this.status = "Big";
                break
            case "Big":
                this.status = "Powered Up";
            
        }
    }
    addCoin() {
        this.totalCoins++
    }
    print() {
        for(let key in this) {
            // console.log(`${key}: ${this[key]`);
        
        }
    }
}

let rand = () => {
    return Math.floor(Math.random() * 3)
}

let petey = new Player("Petey", 9)

for(let i = 0; i < 3; i++) {
    switch(rand()) {
        case 0:
            petey.gotHit();
            break;
        case 1: 
            petey.gotPowerup();
            break;
        case 2:
            petey.addCoin();
    }  
}
petey.print();