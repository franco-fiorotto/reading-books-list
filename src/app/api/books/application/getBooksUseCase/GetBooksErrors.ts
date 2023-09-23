export namespace GetBooksErrors {
  export class GeneralError {
    constructor(error: Error) {
      new Error(`General Error: , ${error.message}`);
    }
  }
}
