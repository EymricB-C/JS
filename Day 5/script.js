function Personnage(name, type, force, PV) {
    this.name = name;
    this.type = type;
    let strength = force;
    let health = PV;

    this.getStrength = function (){
        return strength;
    };

    this.getHealth = function (){
        return health;
    };


    this.setStrength = function (force){
        strength = force;
    };

    this.setHealth = function (PV){
        health = PV;
    };



    this.attaque = function (adversaire) {
        if(this.getHealth()>0) {
            console.log(name + " fait " + strength + " dégats sur " + adversaire.name);
            adversaire.setHealth(adversaire.getHealth() - strength);
            adversaire.sante();
        };
    };

    this.sante = function () {
        if(this.getHealth() > 0){
            console.log(name +" à " + this.getHealth() + " PV");
        }else{
            console.log(name + " est mort(e)");
        };
    };
};

function Exp(exp, name, type, force, PV){
    Personnage.call(this, name, type, force, PV)

    this.exp = exp

    if(exp < 1000){
        level = "junior"
    } else {
        level = "senior"
    }
    console.log(name + " est niveau " + level)
}

function SuperSummon(exp, name, type, force, PV, bonus){
    Exp.call(this, exp, name, type, force, PV)

    this.showBonus = function (){
        console.log(name +" a le bonus " + bonus)
    }
}

const god = new SuperSummon(1000000, "god", "god", 1000000, 10000000, "fly")

let Darion = new Personnage("darion", "paladin", 3000, 14000);
let Bear = new Personnage("bear", "tank", 500, 100000);
let spectra = new Exp(142, "spectra", "support", 750, 40000)

god.showBonus();

Darion.attaque(Bear);

Bear.attaque(Darion);