package org.kajal.mallick.dao;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.kajal.mallick.entities.Book;
import org.kajal.mallick.entities.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional
public class ReadWriteDaoImpl implements ReadWriteDao {

    private SessionFactory sessionFactory;

    @Autowired
    public ReadWriteDaoImpl(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public List<Book> findBooksByTitle(String bookTitle) {

        List<Book> books = null;

        try {

            books = searchCriteria(sessionFactory.getCurrentSession(),"title", bookTitle, Book.class);
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        if (books == null) {
            books = new ArrayList<>();
        }
        return books;
    }

    public List<Subject> findSubjectsByTitle(String SubjectTitle) {

        List<Subject> subjects = null;

        try {
            subjects = searchCriteria(sessionFactory.getCurrentSession(),"subtitle", SubjectTitle, Subject.class);
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        if (subjects == null) {
            subjects = new ArrayList<>();
        }

        return subjects;
    }

    @Override
    public Subject findSubjectById(Long subjectId) {

        Subject subject = null;

        try {

            subject = sessionFactory.getCurrentSession().get(Subject.class, subjectId);

        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return subject;
    }

    @Override
    public Book findBookById(Long bookId) {
        Book book = null;

        try {
            book = sessionFactory.getCurrentSession().get(Book.class, bookId);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return book;
    }

    public void saveSubject(Subject subject) {
        sessionFactory.getCurrentSession().persist(subject);
    }

    public void saveBook(Book book, Subject subject) {

        book.setSubject(subject);
        sessionFactory.getCurrentSession().persist(book);

    }

    public void removeBook(List<Book> books) {
        for (Book book : books) {
            sessionFactory.getCurrentSession().delete(book);
        }
    }

    public void removeSubject(List<Subject> subjects) {
        for (Subject subject : subjects) {
            sessionFactory.getCurrentSession().delete(subject);
        }
    }

    private <T> List<T> searchCriteria(Session session, String field, String searchValue, Class<T> clazz){
        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<T> criteriaQuery = criteriaBuilder.createQuery(clazz);
        Root<T> root = criteriaQuery.from(clazz);

        Predicate findByTitle = criteriaBuilder.like(root.get(field), "%" + searchValue + "%");

        criteriaQuery.select(root).where(findByTitle);

        Query<T> query = session.createQuery(criteriaQuery);

        List<T> list = query.getResultList();
        return list;
    }


}
