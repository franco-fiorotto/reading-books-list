import { Author } from "../model/author";

export default class AuthorMapper {
  static toDomain(raw: any): Author {
    return Author.create({
      name: raw.name,
      otherBooks: raw.otherBooks,
    });
  }
}
