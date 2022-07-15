import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauces";
import Sanduiche from "../products/Sanduiche";

export default interface IBuilder{
    reset() : void;
    getSanduiche() : Sanduiche;
    setSanduicheType( values : SanduicheType);
    setBread(bread : number);
    setProtein(protein:Protein);
    setSalad(salad : Salad);
    addSauces(sauce : Sauce);
}