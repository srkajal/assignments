package org.kajal.mallick.service;

import org.kajal.mallick.entities.Book;
import org.kajal.mallick.model.BookDto;
import org.kajal.mallick.model.response.BookListResponse;

public interface ReadWriteOperation {

    boolean saveBook(BookDto bookDto);

    boolean updateBook(BookDto bookDto);

    void deleteBook(Long bookId);

    BookListResponse findAllBooks();

    BookDto findBooksById(Long bookId);
}
