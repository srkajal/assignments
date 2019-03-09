package org.kajal.mallick.service;

import org.kajal.mallick.model.Book;
import org.kajal.mallick.model.Subject;

import java.io.IOException;
import java.util.List;
import java.util.Set;

public interface ReadWriteOperation {
    void addSubject(Subject subject);

    void addBook(Book book, int subjectId);

    void deleteSubject(String subjectIdOrTitle);

    void deleteBook(String bookIdOrTitle);

    Set<Book> searchBooks(String bookTitle);

    List<Subject> searchSubjects(String SubjectTitle);
}
