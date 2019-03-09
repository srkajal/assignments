package org.kajal.mallick.dao;

import org.kajal.mallick.model.Book;
import org.kajal.mallick.model.Subject;

import java.util.List;

public interface ReadWriteDao {
    List<Book> findBooksByTitle(String bookTitle);

    List<Subject> findSubjectsByTitle(String subjectTitle);

    Subject findSubjectById(Long subjectId);

    Book findBookById(Long bookId);

    void saveSubject(Subject subject);

    void saveBook(Book book, Subject subject);

    void removeBook(List<Book> books);

    void removeSubject(List<Subject> subjects);

    void releaseResource();
}
