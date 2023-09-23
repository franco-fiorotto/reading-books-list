export namespace GetBooksErrors {
  export class GeneralError {
    constructor(error: Error) {
      new Error(`Error while getting books: , ${error.message}`);
    }
  }
}
