package org.kajal.mallick.dao;

import org.kajal.mallick.entities.Book;

import java.util.List;

public interface ReadWriteDao {

    List<Book> findAllBooks();

    Book findBooksById(Long bookId);

    Book saveBook(Book book);

    void removeBook(Long bookId);
}
