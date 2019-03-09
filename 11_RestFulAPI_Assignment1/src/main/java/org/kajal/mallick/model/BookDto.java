package org.kajal.mallick.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDate;

public class BookDto implements Serializable {
    @JsonProperty("book_id")
    private long bookId;
    private String title;
    private double price;
    private Integer volume;
    @JsonProperty("publish_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @NotNull
    private LocalDate publishDate;

    public BookDto() {
    }

    public BookDto(long bookId, @NotNull String title, @NotNull @DecimalMin(value = "1.00", message = "Minimum value should be equal or more than 1.00") double price, @NotNull @Min(value = 1, message = "Minimum value should be equal or more than 1") Integer volume, @NotNull LocalDate publishDate) {
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
