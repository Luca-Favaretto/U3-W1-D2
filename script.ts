class Account {
  nome: string;
  cognome: string;
  eta: number;
  balanceInit: number;
  constructor(
    _nome: string,
    _cognome: string,
    _eta: number,
    _balanceInit: number = 0
  ) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.eta = _eta;
    this.balanceInit = _balanceInit;
  }

  deposit(num: number): number {
    this.balanceInit += num;
    console.log(
      `${this.nome} ${this.cognome} hai versato ${num} ora il tuo saldo è ${this.balanceInit}`
    );
    return this.balanceInit;
  }
  whithDraw(num: number): number {
    this.balanceInit -= num;
    console.log(
      `${this.nome} ${this.cognome} hai prelevato ${num} ti rimangono ${this.balanceInit} `
    );
    return this.balanceInit;
  }
  addInterest(): void {
    this.eta > 30
      ? console.log(
          `${this.nome} ${this.cognome} togliendo gli intersssi ti rimangono  ${
            this.balanceInit * 0.9
          }`
        )
      : console.log(
          `${this.nome} ${
            this.cognome
          } per il momento sei esonerato da pagare interessi questo è il tuo saldo attuale ${
            this.balanceInit * 0.9
          }`
        );
  }
}
let sonAccount = new Account("Luca", "Favaretto", 28, 3000);
sonAccount.deposit(200);
sonAccount.whithDraw(400);
sonAccount.whithDraw(400);
sonAccount.addInterest();

console.log(
  "/////////////////////////////////////////////////////////////////////"
);

let momAccount = new Account("Marta", "Gialli", 45, 12000);
momAccount.deposit(1800);
momAccount.whithDraw(400);
momAccount.whithDraw(900);
momAccount.addInterest();
console.log(
  "/////////////////////////////////////////////////////////////////////"
);
let accountArray: any = [];
let count: number = 0;
const accountForm = document.getElementById("accountForm") as HTMLFormElement;
accountForm.addEventListener("submit", function (e) {
  e.preventDefault();
  count++;
  console.log(accountForm);
  const nome = (document.getElementById("nome") as HTMLInputElement).value;
  console.log(nome);
  const cognome = (document.getElementById("cognome") as HTMLInputElement)
    .value;
  console.log(cognome);
  const eta = parseInt(
    (document.getElementById("eta") as HTMLInputElement).value
  );
  console.log(eta);
  const balanceInit = parseInt(
    (document.getElementById("balanceInit") as HTMLInputElement).value
  );
  console.log(balanceInit);

  interface Persona {
    id: number;
    nome: string;
    cognome: string;
    eta: number;
    saldo: number;
  }

  const persona: Persona = {
    id: count,
    nome: nome,
    cognome: cognome,
    eta: eta,
    saldo: balanceInit
  };
  console.log(persona);

  if (accountArray.length === 0) {
    accountArray.push(persona);
  } else {
    accountArray.forEach(elemento => {
      if (
        elemento.nome === persona.nome &&
        elemento.cognome === persona.cognome
      ) {
        alert("nome e cognome già in utilizzo");
        return;
      } else {
        accountArray.push(persona);
      }
    });
  }

  console.log(accountArray);
});
// accountArray.forEach(obj=>
//   let newAccount= new Account(obj.name,obj.cognome,obj.eta,obj.saldo));
