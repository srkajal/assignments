package org.kajal.mallick.service;

import org.kajal.mallick.dao.ReadWriteDao;
import org.kajal.mallick.entities.Book;
import org.kajal.mallick.model.BookDto;
import org.kajal.mallick.model.response.BookListResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReadWriteOperationImpl implements ReadWriteOperation{

    private ReadWriteDao readWriteDao;

    @Autowired
    public ReadWriteOperationImpl(ReadWriteDao readWriteDao) {
        this.readWriteDao = readWriteDao;
    }

    @Override
    public void deleteBook(Long bookId) {
        readWriteDao.removeBook(bookId);
    }

    @Override
    public boolean saveBook(BookDto bookDto) {
        Book book = new Book(bookDto.getTitle(), bookDto.getPrice(), bookDto.getVolume(), bookDto.getPublishDate());
        Book savedBook = readWriteDao.saveBook(book);

        return savedBook != null;
    }

    @Override
    public boolean updateBook(BookDto bookDto) {

        if(bookDto.getBookId()<=0){
            return false;
        }

        Book book = readWriteDao.findBooksById(bookDto.getBookId());

        if(bookDto.getTitle() != null && !"".equals(bookDto.getTitle())){
            book.setTitle(bookDto.getTitle());
        }

        if(bookDto.getPrice()>=1.00){
            book.setPrice(bookDto.getPrice());
        }

        if(bookDto.getVolume() >=1){
            book.setVolume(bookDto.getVolume());
        }

        if(bookDto.getPublishDate() != null){
            book.setPublishDate(bookDto.getPublishDate());
        }

        Book bookUpdated = readWriteDao.saveBook(book);

        return bookUpdated != null;
    }

    @Override
    public BookListResponse findAllBooks() {
        List<BookDto> books = readWriteDao.findAllBooks()
                .stream()
                .map(b->new BookDto(b.getBookId(),b.getTitle(), b.getPrice(), b.getVolume(),b.getPublishDate()))
                .collect(Collectors.toList());

        return new BookListResponse(books);
    }

    @Override
    public BookDto findBooksById(Long bookId) {
        Book book = readWriteDao.findBooksById(bookId);

        if(book == null){
            return new BookDto();
        }

        return new BookDto(book.getBookId(),book.getTitle(), book.getPrice(), book.getVolume(),book.getPublishDate());
    }
}
