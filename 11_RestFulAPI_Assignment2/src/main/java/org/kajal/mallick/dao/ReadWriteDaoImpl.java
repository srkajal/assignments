package org.kajal.mallick.dao;


import org.kajal.mallick.entities.Book;
import org.kajal.mallick.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional
public class ReadWriteDaoImpl implements ReadWriteDao {


    private BookRepository bookRepositories;

    @Autowired
    public ReadWriteDaoImpl(BookRepository bookRepositories) {
        this.bookRepositories = bookRepositories;
    }

    public List<Book> findAllBooks(){
        return bookRepositories.findAll();
    }

    @Override
    public Book saveBook(Book book) {
        return bookRepositories.save(book);
    }

    public Book findBooksById(Long bookId) {
        return bookRepositories.findById(bookId);
    }

    public void removeBook(Long bookId) {
        bookRepositories.deleteByBookId(bookId);

    }

}
