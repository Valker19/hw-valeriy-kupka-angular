// Cоздать интерфейс Converter с двумя методами from и to.
// Его должны реализовывать три класса ToBinary, ToHexal and ToHexidecimal должны
// переводить поступающие значения в соответствующую систему исчисления (двоичную, восьмиричную и шестнадцатеричную)

interface Converter {
    numberSystem: number;
    
    from(value: any): number;
    to(value: number): any;
}

class ToBinary implements Converter {
    public numberSystem: number = 2;
    
    from(value: number): number {
        let result: any = parseInt(`${value}`, this.numberSystem);
        if (result === isNaN) result = 0;
        return result;
    }
    
    to(value: number): number {
        let result: string = parseInt(`${value}`).toString(this.numberSystem);
        if (result.length < 2) result = `0${result}`;
        return +result;
    }
}

class ToHexal implements Converter {
    public numberSystem: number = 8;

    from(value: number): number {
        let result: any = parseInt(`${value}`, this.numberSystem);
        if (result === isNaN) result = 0;
        return result;
    }
    
    to(value: number): number {
        let result: string = parseInt(`${value}`).toString(this.numberSystem);
        if (result.length < 2) result = `0${result}`;
        return +result;
    }
}

class ToHexidecimal implements Converter {
    public numberSystem: number = 16;

    from(value: string): number {
        let result: any = parseInt(value, this.numberSystem);
        if (result === isNaN) result = 0;
        return result;
    }

    to(value: number): string {
        let result: string = parseInt(`${value}`).toString(this.numberSystem).toUpperCase();
        if (result.length < 2) result = `0${result}`;
        return result;
    }

}