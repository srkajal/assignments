package org.kajal.mallick.service;

import org.kajal.mallick.dao.ReadWriteDao;
import org.kajal.mallick.dao.UserDetailsDao;
import org.kajal.mallick.entities.Authorities;
import org.kajal.mallick.entities.Book;
import org.kajal.mallick.entities.Subject;
import org.kajal.mallick.entities.User;
import org.kajal.mallick.model.RegisterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class ReadWriteOperationImpl implements ReadWriteOperation{

    private ReadWriteDao readWriteDao;

    private BCryptPasswordEncoder passwordEncoder;

    private UserDetailsDao userDetailsDao;

    @Autowired
    public ReadWriteOperationImpl(ReadWriteDao readWriteDao, BCryptPasswordEncoder passwordEncoder, UserDetailsDao userDetailsDao) {
        this.readWriteDao = readWriteDao;
        this.passwordEncoder = passwordEncoder;
        this.userDetailsDao = userDetailsDao;
    }

    public void addSubject(Subject subject) {
        readWriteDao.saveSubject(subject);
    }

    public void addBook(Book book, long subjectId) {
        readWriteDao.saveBook(book, new Subject(subjectId));
    }

    @Override
    @Transactional
    public void registration(RegisterDto registerDto) {
        User user = new User();
        user.setUsername(registerDto.getUserName());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
        user.setEnabled(true);

        Authorities authorities = new Authorities();
        authorities.setAuthority(registerDto.getRole());
        authorities.setUser(user);

        user.setAuthorities(Collections.singleton(authorities));

        userDetailsDao.saveUse(user);
    }

    public void deleteSubject(String subjectIdOrTitle) {
        List<Subject> subjects = null;
        if (subjectIdOrTitle.matches("\\d+")) {
            Subject subject = readWriteDao.findSubjectById(Long.valueOf(subjectIdOrTitle));

            if (subject != null) {
                subjects = Collections.singletonList(subject);
            }
        } else {
            subjects = readWriteDao.findSubjectsByTitle(subjectIdOrTitle);
        }


        if (subjects != null && !subjects.isEmpty()) {
            readWriteDao.removeSubject(subjects);
        } else {
            System.out.println("No Subject found to delete");
        }
    }

    public void deleteBook(String bookIdOrTitle) {
        List<Book> books = null;

        if (bookIdOrTitle.matches("\\d+")) {
            Book book = readWriteDao.findBookById(Long.valueOf(bookIdOrTitle));

            if (book != null) {
                books = Collections.singletonList(book);
            }
        } else {
            books = readWriteDao.findBooksByTitle(bookIdOrTitle);
        }

        if (books != null & !books.isEmpty()) {
            readWriteDao.removeBook(books);
        } else {
            System.out.println("No Book found to delete");
        }

    }

    public List<Book> searchBooks(String bookTitle) {
        List<Book> books = readWriteDao.findBooksByTitle(bookTitle);

        if (books == null) {
            books = new ArrayList<>();
        }

        return books;
    }

    public List<Subject> searchSubjects(String SubjectTitle) {
        List<Subject> resultSubjectList = readWriteDao.findSubjectsByTitle(SubjectTitle);

        if (resultSubjectList == null) {
            resultSubjectList = new ArrayList<>();
        }

        return resultSubjectList;
    }

    private long getUniqueSubjectId(List<Subject> searchList) {

        if (searchList == null || searchList.isEmpty()) {
            return 1;
        } else {
            Subject subject = searchList.get(searchList.size() - 1);

            return subject.getSubjectId() + 1;
        }
    }
}
