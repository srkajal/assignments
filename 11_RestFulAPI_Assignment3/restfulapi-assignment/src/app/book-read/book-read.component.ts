import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent implements OnInit {
  private books: Array<Object> = [];
  constructor(private apiService: ApiService, private router: Router) {
   }

  ngOnInit() {
    this.getBookList();
  }

  public getBookList(){
    this.apiService.getBooks().subscribe((data: any)=>{
      this.books = data.books;
      console.log(data);
    });
  };

  removeBook(bookId){
    console.log("BookId:"+bookId);
    this.apiService.deleteBook(bookId).subscribe((data: any)=>{this.books = this.books.filter((a: any)=>a.book_id!=bookId)});
  }

  editBook(bookId){
    console.log("BookId:"+bookId);
    localStorage.removeItem("editBookId");
    localStorage.setItem("editBookId", bookId);
    this.router.navigate(['edit-book']);
  }
}
