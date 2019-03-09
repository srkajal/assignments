package org.kajal.mallick.controller;

import org.kajal.mallick.entities.Book;
import org.kajal.mallick.model.BookDto;
import org.kajal.mallick.model.response.BaseResponse;
import org.kajal.mallick.model.response.BookListResponse;
import org.kajal.mallick.service.ReadWriteOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/book")
public class BookController {

    public ReadWriteOperation readWriteOperation;

    private static final String SUCCESS_STATUS = "success";
    private static final String ERROR_STATUS = "error";
    private static final int CODE_SUCCESS = 100;
    private static final int CODE_FAILURE = 102;

    @Autowired
    public BookController(ReadWriteOperation readWriteOperation) {
        this.readWriteOperation = readWriteOperation;
    }

    @GetMapping("/findAllBooks")
    public BookListResponse findAllBooks() {
        return readWriteOperation.findAllBooks();
    }

    @GetMapping("/findBookById/{bookId}")
    public BookDto findBookById(@PathVariable("bookId") Long bookId) {

        System.out.println("BookId:"+bookId);

        return readWriteOperation.findBooksById(bookId);
    }

    @PostMapping("/save")
    public @ResponseBody BaseResponse saveBook(@RequestBody @Valid BookDto bookDto) {
        BaseResponse baseResponse = null;

        boolean isSaved = readWriteOperation.saveBook(bookDto);

        if(isSaved){
            baseResponse = new BaseResponse(SUCCESS_STATUS, CODE_SUCCESS);
        } else {
            baseResponse = new BaseResponse(ERROR_STATUS, CODE_FAILURE);
        }

        return baseResponse;
    }


    @DeleteMapping("/delete/{bookId}")
    public BaseResponse deleteBook(@PathVariable("bookId") Long bookId){
        readWriteOperation.deleteBook(bookId);
        return new BaseResponse(SUCCESS_STATUS, CODE_SUCCESS);

    }

    @PutMapping("/update")
    public BaseResponse update(@RequestBody BookDto bookDto){

        BaseResponse baseResponse = null;

        boolean isUpdated = readWriteOperation.updateBook(bookDto);

        if(isUpdated){
            baseResponse = new BaseResponse(SUCCESS_STATUS, CODE_SUCCESS);
        } else {
            baseResponse = new BaseResponse(ERROR_STATUS, CODE_FAILURE);
        }

        return baseResponse;
    }


}
