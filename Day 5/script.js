function Personnage(nom, type, force, PV) {
    this.nom = nom
    this.type = type
    this.force = force
    this.PV = PV

    this.attaque = function (adversaire) {
        if(this.PV>0) {
            console.log(nom + " fait " + force + " dégats sur " + adversaire.nom);
            adversaire.PV = adversaire.PV - force;
            adversaire.sante();
        }
    }

    this.sante = function () {
        if(this.PV > 0){
            console.log(nom +" à " + this.PV + " PV");
        }else{
            console.log(nom + " est mort(e)");
        }
        
    }
}

let paladin1 = new Personnage("darion", "paladin", 200, 400)
let sorcerer1 = new Personnage("megan", "sorcerer", 100, 200)

paladin1.attaque(sorcerer1);

sorcerer1.attaque(paladin1);