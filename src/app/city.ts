export class City {

        //#region Attrib
        private _name: string;
        private _tarifs: number[];
        private _ste: string;


        public get name(): string {
            return this._name;
        }
        public set name(value: string) {
            this._name = value;
        }
        public get tarifs(): number[] {
            return this._tarifs;
        }
        public set tarifs(value: number[]) {
            this._tarifs = value;
        }
        
        public get ste(): string {
            return this._ste;
        }
        public set ste(value: string) {
            this._ste = value;
        }
        //#endregion
    
        constructor(name: string, tarifs: number[], holder: string) {
            this._tarifs = tarifs;
            this._name = name;
            this._ste = holder;
        }
    
    
        //#region  Logic
        tranchs = [100, 150, 210, 310, 510];
        tva: number = 14;
    
        public calcTarifHT( amount: number): number {
            let tarif = 0;
            
    
            if (amount <= this.tranchs[0]) { //100
                console.log('first');
    
                return this.trimNumber(amount * this._tarifs[0]) ;
            }
            if (amount <= this.tranchs[1]) { // 100 - 150
                let t2 = amount - this.tranchs[0];
                let t1 = amount - t2;
                console.log('second');
                return this.trimNumber((t1 * this._tarifs[0]) + (t2 * this._tarifs[1])) ;
            }
            if (amount <= this.tranchs[2]) {// 150 - 210
                console.log('third ');
                return this.trimNumber(amount * this._tarifs[2]) ;
    
            }
            if (amount <= this.tranchs[3]) {// 210 - 310
                console.log('forth');
    
                return this.trimNumber(amount * this._tarifs[3]) ;
            }
            if (amount <= this.tranchs[4]) {// 310 - 510
                console.log('fifth');
    
                return this.trimNumber(amount * this._tarifs[4]) ;
            }
    
            // > 510
            console.log('sixth');
            return this.trimNumber( amount * this._tarifs[4]);
    
        }
    
        public calcTva(tarifHt: number) {
            
            return this.trimNumber(tarifHt * this.tva / 100 ) ;
        }
    
        public calcCost( amount: number): number {
            let ht:number = this.calcTarifHT(amount) ;
            // 14.7 is the Fixed Red value ;
            let result = ht + this.calcTva(ht) + 14.7;
            //forma result
            return this.trimNumber(result) ;
        }
        //#endregion
/**
 * format a degit 12.3456789 -- to --> 12.34
 * @param num any float degit
 * @returns the round of a digit plus two degits after comma .
 */
        private trimNumber(num :number):number {
            return Math.round(num * 100) /100 ;
        }
}
