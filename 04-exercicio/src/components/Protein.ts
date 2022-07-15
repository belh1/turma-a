export default class Protein{
    constructor(private _power : number){}//

    get power() : number{
        return this._power;
    }
    set power(power : number){
        this._power = power;
    }
}