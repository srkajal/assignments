package org.kajal.mallick.service;

import org.kajal.mallick.dao.ReadWriteDao;
import org.kajal.mallick.entities.Book;
import org.kajal.mallick.exception.BookException;
import org.kajal.mallick.model.BookDto;
import org.kajal.mallick.model.request.BookSaveRequest;
import org.kajal.mallick.model.request.BookUpdateRequest;
import org.kajal.mallick.model.response.BaseResponse;
import org.kajal.mallick.model.response.ExtendedBookListResponse;
import org.kajal.mallick.model.response.ExtendedBookResponse;
import org.kajal.mallick.utility.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

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
    public BaseResponse deleteBook(Long bookId) {

        if(bookId == null && bookId <=0){
            return new BaseResponse(Constants.ERROR_STATUS,Constants.CODE_FAILURE,"Please enter a valid BookId:"+bookId);
        }

        BaseResponse baseResponse = new BaseResponse(Constants.SUCCESS_STATUS,Constants.CODE_SUCCESS,"Book deleted with bookId:"+bookId +" successfully");
        Book book = readWriteDao.findBooksById(bookId);

        if(book != null){
            try{
                readWriteDao.removeBook(bookId);
            } catch (Exception ex){
                System.out.println(ex.getMessage());
                baseResponse = new BaseResponse(Constants.ERROR_STATUS,Constants.CODE_FAILURE,"Unable to delete the Book due to "+ ex.getMessage());
            }
        } else {
            baseResponse = new BaseResponse(Constants.ERROR_STATUS,Constants.CODE_FAILURE,"No Book found with the bookId:"+bookId+" to delete");
        }

    return baseResponse;

    }

    @Override
    public BaseResponse saveBook(BookSaveRequest bookSaveRequest) {
        Book savedBook = null;

        if(bookSaveRequest.getPrice() <=0.0){
            throw new BookException("Price should be greater than 0");
        }

        BaseResponse baseResponse = new BaseResponse(Constants.SUCCESS_STATUS,Constants.CODE_SUCCESS,"Book saved successfully");

        if(bookSaveRequest != null){
            Book book = new Book(bookSaveRequest.getTitle(), bookSaveRequest.getPrice(), bookSaveRequest.getVolume(), bookSaveRequest.getPublishDate());

            try{
                savedBook = readWriteDao.saveBook(book);
            }catch(Exception ex){
                System.out.println(ex.getMessage());
                baseResponse = new BaseResponse(Constants.ERROR_STATUS,Constants.CODE_FAILURE,"Unable to save the Book due to "+ ex.getMessage());
            }
        } else {
            baseResponse = new BaseResponse(Constants.ERROR_STATUS,Constants.CODE_FAILURE,"Book details should not be null");
        }

        return baseResponse;
    }

    @Override
    public BaseResponse updateBook(BookUpdateRequest bookUpdateRequest) {

        BaseResponse baseResponse = new BaseResponse(Constants.SUCCESS_STATUS,Constants.CODE_SUCCESS,"Book updated successfully with bookId:"+bookUpdateRequest.getBookId());
        /*if(bookDto.getBookId()<=0){
            return new BaseResponse(Constants.ERROR_STATUS,Constants.CODE_FAILURE,"BookId should not be equal or less tahn 0");
        }*/

        Book book = readWriteDao.findBooksById(bookUpdateRequest.getBookId());

        if(book != null){
            if(bookUpdateRequest.getTitle() != null && !"".equals(bookUpdateRequest.getTitle())){
                book.setTitle(bookUpdateRequest.getTitle());
            }

            if(bookUpdateRequest.getPrice()>=1.00){
                book.setPrice(bookUpdateRequest.getPrice());
            }

            if(bookUpdateRequest.getVolume() >=1){
                book.setVolume(bookUpdateRequest.getVolume());
            }

            if(bookUpdateRequest.getPublishDate() != null){
                book.setPublishDate(bookUpdateRequest.getPublishDate());
            }

            try{
                Book bookUpdated = readWriteDao.saveBook(book);
            }catch(Exception ex){
                System.out.println(ex.getMessage());
                baseResponse = new BaseResponse(Constants.ERROR_STATUS,Constants.CODE_FAILURE,"Unable to update the Book due to "+ ex.getMessage());
            }

        } else {
            baseResponse = new BaseResponse(Constants.ERROR_STATUS,Constants.CODE_FAILURE,"No Book found with the bookId:"+bookUpdateRequest.getBookId()+" to update");
        }



        return baseResponse;
    }

    @Override
    public ExtendedBookListResponse findAllBooks() {
        List<BookDto> bookDtos = null;
        List<Book> books = null;
        ExtendedBookListResponse extendedBookListResponse = null;

        try{
            books = readWriteDao.findAllBooks();
        }catch(Exception ex){
            System.out.println(ex.getMessage());
            extendedBookListResponse = new ExtendedBookListResponse(new BaseResponse(Constants.ERROR_STATUS, Constants.CODE_FAILURE, "Unable to get the Book details due to " + ex.getMessage()));
        }

        if(books != null && !books.isEmpty()){
            bookDtos = books
                    .stream()
                    .map(b->new BookDto(b.getBookId(),b.getTitle(), b.getPrice(), b.getVolume(),b.getPublishDate()))
                    .collect(Collectors.toList());
        } else {
            extendedBookListResponse = new ExtendedBookListResponse(new BaseResponse(Constants.ERROR_STATUS, Constants.CODE_FAILURE, "No Book found"));
        }

        if(extendedBookListResponse == null){
            extendedBookListResponse = new ExtendedBookListResponse(new BaseResponse(Constants.SUCCESS_STATUS, Constants.CODE_SUCCESS, "Books found"), bookDtos);
        }


        return extendedBookListResponse;
    }

    @Override
    public ExtendedBookResponse findBooksById(Long bookId) {

        Book book = null;
        ExtendedBookResponse extendedBookResponse = null;

        if(bookId == null && bookId <=0){
            return new ExtendedBookResponse(new BaseResponse(Constants.ERROR_STATUS,Constants.CODE_FAILURE,"Please enter a valid BookId:"+bookId));
        }

        try{
            book = readWriteDao.findBooksById(bookId);
        }catch(Exception ex){
            System.out.println(ex.getMessage());
            extendedBookResponse = new ExtendedBookResponse(new BaseResponse(Constants.ERROR_STATUS,Constants.CODE_FAILURE,"Unable to get the Book with due to "+ ex.getMessage()));
        }

        if(book == null){
            extendedBookResponse = new ExtendedBookResponse(new BaseResponse(Constants.ERROR_STATUS,Constants.CODE_FAILURE,"Book not found with bookId:"+bookId));
        } else {
            extendedBookResponse = new ExtendedBookResponse(new BaseResponse(Constants.SUCCESS_STATUS,Constants.CODE_SUCCESS,"Book found with bookId:"+bookId), new BookDto(book.getBookId(),book.getTitle(), book.getPrice(), book.getVolume(),book.getPublishDate()));
        }

        return extendedBookResponse;
    }
}
