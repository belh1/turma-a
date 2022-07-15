import Protein from "../../components/Protein";
import Salad from "../../components/Salad";
import SanduicheType from "../../components/SanduicheType";
import Sauce from "../../components/Sauces";
import IBuilder from "../IBuilder";

export default class Director{
    constructor(private builder : IBuilder){}
    constructorHotDog(){
        this.builder.setSanduicheType(SanduicheType.HotDog);
        this.builder.setBread(5);
        this.builder.setSalad(Salad.TOMATE);
        this.builder.setProtein(new Protein(160));
        this.builder.addSauces(new Sauce(1));
    }
    constructorxSalada(){
        this.builder.setSanduicheType(SanduicheType.xSalada);
        this.builder.setBread(3);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.setSalad(Salad.TOMATE);
        this.builder.setProtein(new Protein(10));
        this.builder.addSauces(new Sauce(1));
    }
}