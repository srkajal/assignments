package org.kajal.mallick.model.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.kajal.mallick.model.BookDto;

import java.util.ArrayList;
import java.util.List;

public class ExtendedBookListResponse {
    @JsonProperty("response_detail")
    private BaseResponse baseResponse;
    List<BookDto> books;

    public ExtendedBookListResponse() {
    }

    public ExtendedBookListResponse(BaseResponse baseResponse, List<BookDto> books) {
        this.baseResponse = baseResponse;
        this.books = books;
    }

    public ExtendedBookListResponse(BaseResponse baseResponse) {
        this(baseResponse, new ArrayList<>());
    }

    public List<BookDto> getBooks() {
        return books;
    }

    public void setBooks(List<BookDto> books) {
        this.books = books;
    }
}
