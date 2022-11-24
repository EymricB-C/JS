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

let paladin1 = new Personnage("darion", "paladin", 3000, 14000);
let tank1 = new Personnage("megan", "tank", 500, 50000);

paladin1.attaque(tank1);

tank1.attaque(paladin1);