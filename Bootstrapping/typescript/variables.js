// string, number, boolean, null, undefined
var myName = null;
myName = 'test';
// Array
var items = ['test', 5];
// Object
var account = {
    name: 'Markus',
    balance: 5
};
var accounts;
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccount.prototype.withDraw = function () {
    };
    return InvestmentAccount;
}());
