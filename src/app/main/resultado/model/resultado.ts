export interface Resultado {
  nome: string;
  descricao: string;
  processadorPeso: number;
  processadorNota: number;
  placaDeVideoPeso: number;
  placaDeVideoNota: number;
  ramPeso: number;
  ramNota: number;
  total: number;
}

const Resultados: Resultado[] = [
  {
    nome: 'notebook',
    descricao: 'notebook bonito bla bla bla',
    placaDeVideoNota: 5,
    placaDeVideoPeso: 3,
    processadorNota: 2,
    processadorPeso: 1,
    ramNota: 5,
    ramPeso: 3,
    total: 10
  }

];
