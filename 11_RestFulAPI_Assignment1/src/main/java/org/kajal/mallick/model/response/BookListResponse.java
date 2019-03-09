package org.kajal.mallick.model.response;

import org.kajal.mallick.model.BookDto;

import java.util.List;

public class BookListResponse {
    private List<BookDto> books;

    public BookListResponse() {
    }

    public BookListResponse(List<BookDto> books) {
        this.books = books;
    }

    public List<BookDto> getBooks() {
        return books;
    }

    public void setBooks(List<BookDto> books) {
        this.books = books;
    }
}
