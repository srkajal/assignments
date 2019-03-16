import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router) { }

  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.min(1)],
      volume: ['', Validators.min(1)],
      publish_date: ['', Validators.required]
    });
  }

  onSubmit(){
    this.apiService.saveBook(this.addForm.value).subscribe(response=>this.router.navigate(['books']));
  }
}
