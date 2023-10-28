export class Resultado {
  private _id!: number;
  private _nome!: string;
  private _resultado!: number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get resultado(): number {
    return this._resultado;
  }

  set resultado(value: number) {
    this._resultado = value;
  }
}
