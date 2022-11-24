function Personnage(nom, type, force, PV) {
    this.nom = nom
    this.type = type
    this.force = force
    this.PV = PV

    

    this.attaque = function (adversaire) {
        console.log(nom + " fait " + force + " dégats sur " + adversaire.nom);
        adversaire.PV = adversaire.PV - force;
    }

    this.sante = function () {
        if(PV > 0){
            console.log(nom +" à " + PV + " PV");
        }else{
            console.log("personnage mort (comme ma maman)");
        }
        
    }
}

let paladin1 = new Personnage("darion", "paladin", 100, 400)
let sorcerer1 = new Personnage("megan", "sorcerer", 100, 200)

paladin1.attaque(sorcerer1);
paladin1.sante();

sorcerer1.attaque(paladin1);
sorcerer1.sante();