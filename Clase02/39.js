class CuentaBancaria {
  #saldoEnLaCuenta = 0;
  nombre;

  constructor(nombre) {
    this.nombre = nombre;
  }

  verUsuario() {
    return this.nombre;
  }

  agregarSaldo(cant) {
    this.#saldoEnLaCuenta = this.#saldoEnLaCuenta + cant;
    return `Agregaste $${cant} a la cuenta`;
  }

  verSaldo() {
    return this.#saldoEnLaCuenta;
  }
}

const mate = new CuentaBancaria("Mateo");
