import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  getBooks(){
    return this.httpClient.get(`${this.API_URL}/book/findAllBooks`);
  }

  saveBook(book){
    return this.httpClient.post(`${this.API_URL}/book/save`,book);
  }

  deleteBook(bookId){
    return this.httpClient.delete(`${this.API_URL}/book/delete/${bookId}`)
  }

  updateBook(book){
    return this.httpClient.put(`${this.API_URL}/book/update`, book);
  }

  findBookById(bookId){
    return this.httpClient.get(`${this.API_URL}/book/findBookById/${bookId}`);
  }
}
