package org.kajal.mallick.config;

import org.apache.tomcat.dbcp.dbcp2.BasicDataSource;
import org.hibernate.cfg.Environment;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import java.util.Properties;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories("org.kajal.mallick")
public class JpaConfig {
    private static final String MYSQL_DIALECT ="org.hibernate.dialect.MySQL5Dialect";
    private static final String DRIVER_CLASS = "com.mysql.jdbc.Driver";
    private static final String BASE_URL = "jdbc:mysql://localhost:3306";
    private static final String DATABASE = "/restful_assignment";
    private static final String JDBC_URL = BASE_URL + DATABASE  + "?useSSL=false";
    private static final String USER_NAME = "root";
    private static final String PASSWORD = "admin";

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(){
        LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();

        entityManagerFactoryBean.setDataSource(dataSource());
        entityManagerFactoryBean.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
        entityManagerFactoryBean.setJpaProperties(hibernateProperties());
        entityManagerFactoryBean.setPackagesToScan("org.kajal.mallick.entities");

        return entityManagerFactoryBean;
    }

    @Bean
    public JpaTransactionManager transactionManager(EntityManagerFactory entityManagerFactory){
        return new JpaTransactionManager(entityManagerFactory);
    }

    @Bean
    public DataSource dataSource(){
        BasicDataSource basicDataSource = new BasicDataSource();
        basicDataSource.setDriverClassName(DRIVER_CLASS);
        basicDataSource.setUrl(JDBC_URL);
        basicDataSource.setUsername(USER_NAME);
        basicDataSource.setPassword(PASSWORD);
        return basicDataSource;
    }

    private final Properties hibernateProperties() {
        Properties hibernateProperties = new Properties();

        hibernateProperties.setProperty(
                Environment.SHOW_SQL, "true");

        hibernateProperties.setProperty(Environment.FORMAT_SQL,"true");
        hibernateProperties.setProperty(
                Environment.DIALECT, MYSQL_DIALECT);

        return hibernateProperties;
    }
}
