package org.kajal.mallick.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

public class Book implements Serializable, Comparable<Book> {
    private long bookId;
    private String title;
    private double price;
    private Integer volume;
    private LocalDate publishDate;

    public Book() {
    }

    public Book(long bookId) {
        this.bookId = bookId;
    }

    public Book(long bookId, String title) {
        this.bookId = bookId;
        this.title = title;
    }

    public Book(long bookId, String title, double price, Integer volume, LocalDate publishDate) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Book book = (Book) o;
        return bookId == book.bookId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(bookId);
    }

    @Override
    public String toString() {
        return "Book{" +
                "bookId=" + bookId +
                ", title='" + title + '\'' +
                ", price=" + price +
                ", volume=" + volume +
                ", publishDate=" + publishDate +
                '}';
    }

    @Override
    public int compareTo(Book b) {
        return (int) (this.bookId - b.getBookId());
    }
}
