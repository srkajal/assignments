import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router) { }

  editForm: FormGroup;
  ngOnInit() {
    let bookId = localStorage.getItem("editBookId");

    if(!bookId){
      alert("Invalid action.")
      this.router.navigate(['books']);
      return;
    }

    this.apiService.findBookById(bookId).subscribe((data:any)=>{
      this.editForm.setValue(data.book);
    });

    this.editForm = this.formBuilder.group({
      book_id: ['', Validators.min(1)],
      title: ['', Validators.nullValidator],
      price: ['', Validators.min(0)],
      volume: ['', Validators.min(0)],
      publish_date: ['', Validators.nullValidator]
    });

    
  }

  onSubmit(){
    this.apiService.updateBook(this.editForm.value)
    .pipe(first())
    .subscribe(response=>this.router.navigate(['books']),
    error=>alert(error));
  }

}
