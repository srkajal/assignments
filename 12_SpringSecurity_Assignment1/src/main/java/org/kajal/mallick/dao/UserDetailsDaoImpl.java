package org.kajal.mallick.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.kajal.mallick.entities.Authorities;
import org.kajal.mallick.entities.Book;
import org.kajal.mallick.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

@Repository
public class UserDetailsDaoImpl implements UserDetailsDao {
    private SessionFactory sessionFactory;

    @Autowired
    public UserDetailsDaoImpl(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public User findUserByUsername(String username) {
        return sessionFactory.getCurrentSession().get(User.class, username);
    }

    @Override
    public void saveUse(User user) {
        sessionFactory.getCurrentSession().persist(user);
    }
}
