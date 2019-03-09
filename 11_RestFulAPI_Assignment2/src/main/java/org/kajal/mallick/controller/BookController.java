package org.kajal.mallick.controller;

import org.kajal.mallick.model.BookDto;
import org.kajal.mallick.model.request.BookSaveRequest;
import org.kajal.mallick.model.request.BookUpdateRequest;
import org.kajal.mallick.model.response.BaseResponse;
import org.kajal.mallick.model.response.ExtendedBookListResponse;
import org.kajal.mallick.model.response.ExtendedBookResponse;
import org.kajal.mallick.service.ReadWriteOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/book")
public class BookController {

    public ReadWriteOperation readWriteOperation;

    @Autowired
    public BookController(ReadWriteOperation readWriteOperation) {
        this.readWriteOperation = readWriteOperation;
    }

    @GetMapping("/findAllBooks")
    public ExtendedBookListResponse findAllBooks() {
        return readWriteOperation.findAllBooks();
    }

    @GetMapping("/findBookById/{bookId}")
    public ExtendedBookResponse findBookById(@PathVariable("bookId") Long bookId) {

        System.out.println("BookId:"+bookId);

        return readWriteOperation.findBooksById(bookId);
    }

    @PostMapping("/save")
    public @ResponseBody BaseResponse saveBook(@RequestBody @Valid BookSaveRequest bookSaveRequest) {
        return readWriteOperation.saveBook(bookSaveRequest);
    }


    @DeleteMapping("/delete/{bookId}")
    public BaseResponse deleteBook(@PathVariable("bookId") Long bookId){
        return readWriteOperation.deleteBook(bookId);
    }

    @PutMapping("/update")
    public BaseResponse update(@RequestBody @Valid BookUpdateRequest bookUpdateRequest){

        return readWriteOperation.updateBook(bookUpdateRequest);
    }


}
