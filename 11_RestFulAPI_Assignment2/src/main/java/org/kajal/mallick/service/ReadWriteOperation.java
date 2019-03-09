package org.kajal.mallick.service;

import org.kajal.mallick.model.BookDto;
import org.kajal.mallick.model.request.BookSaveRequest;
import org.kajal.mallick.model.request.BookUpdateRequest;
import org.kajal.mallick.model.response.BaseResponse;
import org.kajal.mallick.model.response.ExtendedBookListResponse;
import org.kajal.mallick.model.response.ExtendedBookResponse;

public interface ReadWriteOperation {

    BaseResponse saveBook(BookSaveRequest bookSaveRequest);

    BaseResponse updateBook(BookUpdateRequest bookUpdateRequest);

    BaseResponse deleteBook(Long bookId);

    ExtendedBookListResponse findAllBooks();

    ExtendedBookResponse findBooksById(Long bookId);
}
