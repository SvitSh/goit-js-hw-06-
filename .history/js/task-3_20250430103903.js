class StringBuilder {
  // Приватна властивість
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  // Повертає поточне значення
  getValue() {
    return this.#value;
  }

  // Додає в кінець
  padEnd(str) {
    this.#value += str;
  }

  // Додає на початок
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Додає і на початок, і в кінець
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

// Перевірка (не змінювати)
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
