export default class Lotto {
	#nRows;
	#nCols;
	#nSize;
	#matrix;

	constructor(nRows = 5, nCols = 6, nSize = 45) {
		this.#nRows = nRows;
		this.#nCols = nCols;
		this.#nSize = nSize;

		this.#matrix = new Array(nRows).fill(null).map(() => new Array(nCols));
	}

	#sample() {
		if (this.#nRows <= 0 || this.#nCols <= 0 || this.#nSize < this.#nCols) {
			throw Error("Illegal Argument!!!");
		}

		for (let i = 0; i < this.#matrix.length; i++) {
			const seq = Array(this.#nSize)
				.fill()
				.map((_, i) => i + 1);
			for (let j = 0; j < this.#matrix[i].length; j++) {
				let drawnIndex = Math.floor(seq.length * Math.random());
				this.#matrix[i][j] = seq.splice(drawnIndex, 1)[0];
			}
		}
	}

	#sort() {
		this.#matrix.forEach((row) => row.sort((a, b) => a - b));
	}

	#matrixToString() {
		const digit = String(this.#nSize).length;

		return this.#matrix
			.map((aRow) =>
				aRow
					.map(String)
					.map((v) => v.padStart(digit, "0"))
					.join(" ")
			)
			.join("\n");
	}

	str() {
		try {
			this.#sample();
			this.#sort();
			return this.#matrixToString();
		} catch (e) {
			return "" + e;
		}
	}
}
