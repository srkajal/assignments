package org.kajal.mallick.dao;


import org.hibernate.Session;
import org.hibernate.query.Query;
import org.kajal.mallick.model.Book;
import org.kajal.mallick.model.Subject;
import org.kajal.mallick.util.HibernateUtility;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;


public class ReadWriteDaoImpl implements ReadWriteDao {

    public List<Book> findBooksByTitle(String bookTitle) {
        Session session = null;
        List<Book> books = null;

        try {
            session = getSession();
            books = searchCriteria(session,"title", bookTitle, Book.class);
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            if (session != null) {
                session.close();

            }
        }

        if (books == null) {
            books = new ArrayList<>();
        }
        return books;
    }

    public List<Subject> findSubjectsByTitle(String SubjectTitle) {

        Session session = null;
        List<Subject> subjects = null;

        try {
            session = getSession();
            subjects = searchCriteria(session,"subtitle", SubjectTitle, Subject.class);
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            if (session != null) {
                session.close();

            }
        }

        if (subjects == null) {
            subjects = new ArrayList<>();
        }

        return subjects;
    }

    @Override
    public Subject findSubjectById(Long subjectId) {
        Session session = null;
        Subject subject = null;

        try {
            session = getSession();
            session.beginTransaction();

            subject = session.get(Subject.class, subjectId);

            session.getTransaction().commit();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            if (session != null) {
                session.close();

            }
        }

        return subject;
    }

    @Override
    public Book findBookById(Long bookId) {
        Session session = null;
        Book book = null;

        try {
            session = getSession();
            session.beginTransaction();

            book = session.get(Book.class, bookId);

            session.getTransaction().commit();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            if (session != null) {
                session.close();

            }
        }

        return book;
    }

    public void saveSubject(Subject subject) {
        Session session = null;

        try {
            session = getSession();
            session.beginTransaction();
            session.persist(subject);
            session.getTransaction().commit();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            if (session != null) {
                session.close();
            }
        }

    }

    public void saveBook(Book book, Subject subject) {

        Session session = null;

        try {
            session = getSession();
            session.beginTransaction();

            book.setSubject(subject);
            session.persist(book);

            session.getTransaction().commit();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            if (session != null) {
                session.close();

            }
        }
    }

    public void removeBook(List<Book> books) {
        Session session = null;

        try {
            session = getSession();
            session.beginTransaction();

            for (Book book : books) {
                session.delete(book);
            }

            session.getTransaction().commit();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            if (session != null) {
                session.close();
            }
        }
    }

    public void removeSubject(List<Subject> subjects) {
        Session session = null;

        try {
            session = getSession();
            session.beginTransaction();

            for (Subject subject : subjects) {
                session.delete(subject);
            }
            session.getTransaction().commit();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            if (session != null) {
                session.close();

            }
        }
    }

    @Override
    public void releaseResource() {
        HibernateUtility.shutdown();
    }

    private Session getSession() {
        return HibernateUtility.getSessionFactory().openSession();
    }

    private <T> List<T> searchCriteria(Session session, String field, String searchValue, Class<T> clazz){
        session.beginTransaction();
        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<T> criteriaQuery = criteriaBuilder.createQuery(clazz);
        Root<T> root = criteriaQuery.from(clazz);

        Predicate findByTitle = criteriaBuilder.like(root.get(field), "%" + searchValue + "%");

        criteriaQuery.select(root).where(findByTitle);

        Query<T> query = session.createQuery(criteriaQuery);

        List<T> list = query.getResultList();
        session.getTransaction().commit();
        return list;
    }


}
