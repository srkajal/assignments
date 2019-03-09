package org.kajal.mallick.model.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.kajal.mallick.model.BookDto;

import java.util.List;

public class ExtendedBookResponse {
    @JsonProperty("response_detail")
    private BaseResponse baseResponse;
    private BookDto book;

    public ExtendedBookResponse() {
    }

    public ExtendedBookResponse(BaseResponse baseResponse, BookDto book) {
        this.baseResponse = baseResponse;
        this.book = book;
    }

    public ExtendedBookResponse(BaseResponse baseResponse) {
        this(baseResponse,null);
    }

    public BookDto getBook() {
        return book;
    }

    public void setBook(BookDto book) {
        this.book = book;
    }
}
