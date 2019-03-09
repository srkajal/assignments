package org.kajal.mallick.model.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.NotBlank;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDate;

public class BookSaveRequest implements Serializable {
    @JsonProperty("book_id")
    private long bookId;
    @NotEmpty(message = "TITLE_REQUIRED")
    private String title;
    private double price;
    @NotNull
    @Min(value = 1, message = "Volume should be greater than 0")
    private Integer volume;
    @JsonProperty("publish_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @NotNull(message = "PUBLISH_DATE_REQUIRED")
    private LocalDate publishDate;

    public BookSaveRequest() {
    }

    public BookSaveRequest(long bookId, String title, double price, Integer volume, LocalDate publishDate) {
        this.bookId = bookId;
        this.title = title;
        this.price = price;
        this.volume = volume;
        this.publishDate = publishDate;
    }

    public long getBookId() {
        return bookId;
    }

    public void setBookId(long bookId) {
        this.bookId = bookId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Integer getVolume() {
        return volume;
    }

    public void setVolume(Integer volume) {
        this.volume = volume;
    }

    public LocalDate getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(LocalDate publishDate) {
        this.publishDate = publishDate;
    }
}
