export default class Lotto {
  #nRows;
  #nCols;
  #nSize;
  #matrix;

  constructor(nRows = 5, nCols = 6, nSize = 45) {
    this.#nRows = nRows;
    this.#nCols = nCols;
    this.#nSize = nSize;

    this.#matrix = this.#make();
  }

  #make() {
    if (
      this.#nRows < 1 ||
      this.#nCols < 1 ||
      this.#nSize < 1 ||
      this.#nSize < this.#nCols
    ) {
      throw Error("Illegal Argument!!!");
    }

    let matrix = new Array(this.#nRows)
      .fill()
      .map(() => new Array(this.#nCols));

    matrix.forEach((_, i) => {
      matrix[i] = Array.from(this.#sample());
    });
    matrix.forEach((row) => row.sort((a, b) => a - b));

    return matrix;
  }

  *#seq(nSize) {
    for (let i = 0; i < nSize; i++) {
      yield i + 1;
    }
  }

  *#sample() {
    const seq = Array.from(this.#seq(this.#nSize));

    for (let i = 0; i < this.#nCols; i++) {
      yield seq.splice(Math.floor(seq.length * Math.random()), 1)[0];
    }
  }

  #convert() {
    const digits = String(this.#nSize).length;
    const pad = (n) => String(n).padStart(digits, "0");

    return this.#matrix.map((row) => row.map(pad).join(" ")).join("\n");
  }

  str() {
    return this.#convert();
  }
}
