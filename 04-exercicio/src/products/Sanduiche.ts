import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauces";

export default class Sanduiche{
    private _sanduiche : SanduicheType;
    private _bread : number;
    private _protein : Protein;
    private _salad : Salad;
    private _sauce : Sauce[]= [];
    
    get sanduicheType() : SanduicheType{
        return this.sanduicheType;
    }

    set sanduicheType(values : SanduicheType){
        this.sanduicheType = values;
    }

    get bread() : number{
        return this._bread;
    }

    set bread(values : number){
        this._bread = values;
    }

    get protein() : Protein{
        return this._protein;
    }

    set protein(values : Protein){
        this._protein = values;
    }

    get Salad() : Salad{
        return this._salad;
    }

    set Salad(values : Salad){
        this._salad= values;
    }
    //array nao da um set e get
    addSauce(sauce : Sauce){
        this._sauce.push(sauce)
    }
    get sauce() : Sauce[] {
        return this._sauce;
    }
    get sauceTotal() : number{
        return this._sauce.length;
    }
}
