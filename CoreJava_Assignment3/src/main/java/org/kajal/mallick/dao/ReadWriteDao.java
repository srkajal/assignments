package org.kajal.mallick.dao;

import org.kajal.mallick.model.Book;
import org.kajal.mallick.model.Subject;

import java.util.List;

public interface ReadWriteDao {
    List<Book> findBooksByTitle(String bookTitle);

    List<Book> findAllBooks();

    List<Subject> findSubjectsByTitle(String subjectTitle);

    List<Subject> findAllSubjects();

    int findSubjectById(int subjectId);

    void saveSubject(Subject subject);

    void saveBook(Book book, Integer subjectId);

    void removeBook(String bookIdOrTitle);

    void removeSubject(String subjectIdOrTitle, List<Integer> bookIds);

    List<Integer> findBooksIdBySubjectTitleOrId(String subjectIdOrTitle);
}
