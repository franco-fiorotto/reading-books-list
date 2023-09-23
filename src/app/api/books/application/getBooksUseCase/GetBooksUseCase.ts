import { mockedData } from "../../mockedBooksList";
import { GetBooksErrors } from "./GetBooksErrors";

export default function GetBooksUseCase() {
  const execute: {
    (): any | GetBooksErrors.GeneralError;
  } = () => {
    try {
      const data = { ...mockedData };

      return data;
    } catch (error: any) {
      return new GetBooksErrors.GeneralError(error);
    }
  };

  return { execute };
}
