import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { BookReadComponent } from './book-read/book-read.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
    {path:'', redirectTo:'books', pathMatch: 'full'},
    {path: 'books', component: BookReadComponent},
    {path: 'update-book', component: BookAddComponent},
    {path: 'edit-book', component: BookEditComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

} 