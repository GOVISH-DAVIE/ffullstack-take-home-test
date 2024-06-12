export interface IBookQuery {
    data: Data
  }
  
  export interface Data {
    books: Book[]
  }
  
  export interface Book {
    title: string
    author: string
    coverPhotoURL: string
    readingLevel: string
  }