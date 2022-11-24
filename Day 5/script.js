function Personnage(nom, type, force, vitalité) {
    this.nom = nom
    this.type = type
    this.force = force
    this.vitalité = vitalité

    this.attaque = function () {
        console.log(nom + " fait " + force + " dégats")
    }

    this.sante = function () {
        console.log(nom +" à " + vitalité + " PV")
    }
}

const paladin1 = new Personnage("darion", "paladin", 200, 400)
const sorcerer1 = new Personnage("megan", "sorcerer", 100, 200)

paladin1.attaque();
paladin1.sante();

sorcerer1.attaque();
sorcerer1.sante();