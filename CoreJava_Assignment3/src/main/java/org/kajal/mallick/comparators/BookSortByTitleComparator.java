package org.kajal.mallick.comparators;

import org.kajal.mallick.model.Book;

import java.util.Comparator;

public class BookSortByTitleComparator implements Comparator<Book> {
    @Override
    public int compare(Book book1, Book book2) {
        return book1.getTitle().compareTo(book2.getTitle());
    }
}
