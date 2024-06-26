import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private httpClient: HttpClient) {}

  getAllBooks() {
    return this.httpClient.get(environment.baseAPi + 'GetAllBooks?startPage=1&pageSize=10');
  }

  createBook(model: any) {
    return this.httpClient.post(environment.baseAPi + 'AddBook', model);
  }

  deleteBook(id: any) {
    return this.httpClient.delete(environment.baseAPi +'DeleteBook?bookId=' + id);
  }

  updateBook(model: any, id: any) {
    return this.httpClient.put(environment.baseAPi+ 'EditBook?Id=' + id, model);
  }
  getBookById(id: number) {
    return this.httpClient.get(environment.baseAPi +'GetBookById?bookId=' + id);
  }
}
