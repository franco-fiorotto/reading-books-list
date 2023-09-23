export class Author {
  private _name: string;
  private _otherBooks: string[];

  private constructor({
    name,
    otherBooks,
  }: {
    name: string;
    otherBooks: string[];
  }) {
    this._name = name;
    this._otherBooks = otherBooks;
  }

  static create({ name, otherBooks }: { name: string; otherBooks: string[] }) {
    return new Author({ name, otherBooks });
  }

  get name() {
    return this._name;
  }

  get otherBooks() {
    return this._otherBooks;
  }
}
