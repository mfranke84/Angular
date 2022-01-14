// string, number, boolean, null, undefined
let myName: string|null = null;
myName = 'test';

// Array
let items = ['test', 5]

interface IAccount {
    name: string,
    balance: number,
    status?: string,
    deposite?: () => void
}

// Object
let account: IAccount = {
    name: 'Markus',
    balance: 5 
}

let accounts: IAccount[];

class InvestmentAccount implements IAccount {
    
    constructor(
        public name, public balance
    ){

    }

    private withDraw(){

    }
}

