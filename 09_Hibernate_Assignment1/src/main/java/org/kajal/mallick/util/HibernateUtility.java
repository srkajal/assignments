package org.kajal.mallick.util;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.cfg.Environment;
import org.kajal.mallick.model.Book;
import org.kajal.mallick.model.Subject;

import java.util.Properties;

public class HibernateUtility {
    private static SessionFactory sessionFactory;

    private static SessionFactory buildSessionFactory() {
        Configuration configuration = new Configuration();
        Properties setting = new Properties();
        setting.put(Environment.DRIVER, "com.mysql.jdbc.Driver");
        setting.put(Environment.URL, "jdbc:mysql://localhost:3306/hibernate_assignment?useSSL=false");
        setting.put(Environment.USER, "root");
        setting.put(Environment.PASS, "root");
        setting.put(Environment.DIALECT, "org.hibernate.dialect.MySQL5Dialect");
        setting.put(Environment.SHOW_SQL, true);

        configuration.setProperties(setting);
        configuration.addAnnotatedClass(Subject.class);
        configuration.addAnnotatedClass(Book.class);

        final StandardServiceRegistry registry = new StandardServiceRegistryBuilder().applySettings(configuration.getProperties()).build();
        return configuration.buildSessionFactory(registry);
    }

    public static SessionFactory getSessionFactory() {
        if (sessionFactory == null) {
            sessionFactory = buildSessionFactory();
        }
        return sessionFactory;
    }

    public static void shutdown() {
        // Close caches and connection pools
        getSessionFactory().close();
    }
}
