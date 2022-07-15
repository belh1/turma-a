import Director from "./buider/Director/Director";
import SanduicheBuilder from "./buider/SanduicheBuilder";
import Sanduiche from "./products/Sanduiche";


const builder :SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.constructorxSalada();
let xSalada : Sanduiche = builder.getSanduiche();
console.log("Fazendo um xSalada....");
console.log("QUANTOS:" + xSalada.bread);
console.log("MOLHO" + xSalada.sauceTotal);