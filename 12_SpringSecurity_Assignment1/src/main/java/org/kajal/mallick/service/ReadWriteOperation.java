package org.kajal.mallick.service;

import org.kajal.mallick.entities.Book;
import org.kajal.mallick.entities.Subject;
import org.kajal.mallick.model.RegisterDto;

import java.util.List;

public interface ReadWriteOperation {
    void addSubject(Subject subject);

    void addBook(Book book, long subjectId);

    void registration(RegisterDto registerDto);

    void deleteSubject(String subjectIdOrTitle);

    void deleteBook(String bookIdOrTitle);

    List<Book> searchBooks(String bookTitle);

    List<Subject> searchSubjects(String SubjectTitle);
}
