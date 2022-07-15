import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauces";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./IBuilder";

export default class SanduicheBuilder implements IBuilder{

    private _sanduiche = new Sanduiche();
    reset(): void {//zera o objeto
        this._sanduiche = new Sanduiche();
    }
    getSanduiche(): Sanduiche {
        return this._sanduiche;
    }

    setSanduicheType(values:SanduicheType) {
        this._sanduiche.sanduicheType = values;
    }
    setBread(bread: number) {
        this._sanduiche.bread = bread;
    }
    setProtein(proteina: Protein) {
        this._sanduiche.protein = proteina;
    }
    setSalad(salad: Salad) {
        this._sanduiche.Salad = salad;
    }
    addSauces(sauce: Sauce) {
        this._sanduiche.addSauce(sauce);
    }
}