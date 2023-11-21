var Account = /** @class */ (function () {
    function Account(_nome, _cognome, _eta, _balanceInit) {
        if (_balanceInit === void 0) { _balanceInit = 0; }
        this.nome = _nome;
        this.cognome = _cognome;
        this.eta = _eta;
        this.balanceInit = _balanceInit;
    }
    Account.prototype.deposit = function (num) {
        this.balanceInit += num;
        console.log("".concat(this.nome, " ").concat(this.cognome, " hai versato ").concat(num, " ora il tuo saldo \u00E8 ").concat(this.balanceInit));
        return this.balanceInit;
    };
    Account.prototype.whithDraw = function (num) {
        this.balanceInit -= num;
        console.log("".concat(this.nome, " ").concat(this.cognome, " hai prelevato ").concat(num, " ti rimangono ").concat(this.balanceInit, " "));
        return this.balanceInit;
    };
    Account.prototype.addInterest = function () {
        this.eta > 30
            ? console.log("".concat(this.nome, " ").concat(this.cognome, " togliendo gli intersssi ti rimangono  ").concat(this.balanceInit * 0.9))
            : console.log("".concat(this.nome, " ").concat(this.cognome, " per il momento sei esonerato da pagare interessi questo \u00E8 il tuo saldo attuale ").concat(this.balanceInit * 0.9));
    };
    return Account;
}());
var sonAccount = new Account("Luca", "Favaretto", 28, 3000);
sonAccount.deposit(200);
sonAccount.whithDraw(400);
sonAccount.whithDraw(400);
sonAccount.addInterest();
console.log("/////////////////////////////////////////////////////////////////////");
var momAccount = new Account("Marta", "Gialli", 45, 12000);
momAccount.deposit(1800);
momAccount.whithDraw(400);
momAccount.whithDraw(900);
momAccount.addInterest();
console.log("/////////////////////////////////////////////////////////////////////");
var accountArray = [];
var count = 0;
var accountForm = document.getElementById("accountForm");
accountForm.addEventListener("submit", function (e) {
    e.preventDefault();
    count++;
    console.log(accountForm);
    var nome = document.getElementById("nome").value;
    console.log(nome);
    var cognome = document.getElementById("cognome")
        .value;
    console.log(cognome);
    var eta = parseInt(document.getElementById("eta").value);
    console.log(eta);
    var balanceInit = parseInt(document.getElementById("balanceInit").value);
    console.log(balanceInit);
    var persona = {
        id: count,
        nome: nome,
        cognome: cognome,
        eta: eta,
        saldo: balanceInit
    };
    console.log(persona);
    console.log(accountArray);
    accountArray.push(persona);
});
// accountArray.forEach(obj=>
//   let newAccount= new Account(obj.name,obj.cognome,obj.eta,obj.saldo));
