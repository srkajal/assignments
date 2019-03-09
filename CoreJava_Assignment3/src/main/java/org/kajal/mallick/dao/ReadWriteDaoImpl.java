package org.kajal.mallick.dao;


import org.kajal.mallick.model.Book;
import org.kajal.mallick.model.Subject;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ReadWriteDaoImpl implements ReadWriteDao {
    private static final String userName = "root";
    private static final String password = "root";
    private static final String mysqlUrl = "jdbc:mysql://localhost:3306";
    private static final String database = "library";
    private static final String jdbcUrl = mysqlUrl + "/" + database + "?useSSL=false";

    public List<Book> findBooksByTitle(String bookTitle) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        List<Book> books = new ArrayList<>();
        try {
            connection = getConnection();
            preparedStatement = connection.prepareStatement("select * from book where title like ?");
            preparedStatement.setString(1, "%" + bookTitle + "%");
            resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                Book book = new Book();
                book.setBookId(resultSet.getInt("book_id"));
                book.setTitle(resultSet.getString("title"));
                book.setPrice(resultSet.getDouble("price"));
                book.setVolume(resultSet.getInt("volume"));
                book.setPublishDate(resultSet.getDate("publish_date").toLocalDate());

                books.add(book);
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            closeResources(connection, resultSet, preparedStatement);

        }

        return books;
    }

    @Override
    public List<Book> findAllBooks() {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        List<Book> books = new ArrayList<>();
        try {
            connection = getConnection();
            preparedStatement = connection.prepareStatement("select * from book");
            resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                Book book = new Book();
                book.setBookId(resultSet.getInt("book_id"));
                book.setTitle(resultSet.getString("title"));
                book.setPrice(resultSet.getDouble("price"));
                book.setVolume(resultSet.getInt("volume"));
                book.setPublishDate(resultSet.getDate("publish_date").toLocalDate());

                books.add(book);
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            closeResources(connection, resultSet, preparedStatement);

        }

        return books;
    }

    public List<Integer> findBooksIdBySubjectTitleOrId(String subjectIdOrTitle) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        List<Integer> bookIds = new ArrayList<>();

        try {
            connection = getConnection();
            String findSubjectByTitleSql = "SELECT s.subject_id, b.book_id FROM subject s LEFT JOIN book b ON s.subject_id = b.subject_id WHERE sub_title LIKE ?";
            String findSubjectByIdSql = "SELECT s.subject_id, b.book_id FROM subject s LEFT JOIN book b ON s.subject_id = b.subject_id WHERE subject_id=?";

            if (subjectIdOrTitle.matches("\\d+")) {
                preparedStatement = connection.prepareStatement(findSubjectByIdSql);
                preparedStatement.setInt(1, Integer.valueOf(subjectIdOrTitle));
            } else {
                preparedStatement = connection.prepareStatement(findSubjectByTitleSql);
                preparedStatement.setString(1, "%" + subjectIdOrTitle + "%");
            }

            resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                bookIds.add(resultSet.getInt("book_id"));
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            closeResources(connection, resultSet, preparedStatement);

        }

        return bookIds;
    }

    public List<Subject> findSubjectsByTitle(String SubjectTitle) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        List<Subject> subjects = new ArrayList<>();
        try {
            connection = getConnection();
            preparedStatement = connection.prepareStatement("SELECT s.subject_id, s.sub_title, s.duration_in_hours, b.book_id, b.title, b.price, b.volume, b.publish_date FROM subject s LEFT JOIN book b ON s.subject_id = b.subject_id WHERE sub_title LIKE ?");
            preparedStatement.setString(1, "%" + SubjectTitle + "%");
            resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                int index = subjects.indexOf(new Subject(resultSet.getInt("subject_id")));
                if (index != -1) {
                    addBooksToSubject(resultSet, subjects.get(index));
                } else {
                    Subject subject = new Subject();
                    subject.setSubjectId(resultSet.getInt("subject_id"));
                    subject.setSubtitle(resultSet.getString("sub_title"));
                    subject.setDurationInHours(resultSet.getInt("duration_in_hours"));

                    addBooksToSubject(resultSet, subject);
                    subjects.add(subject);
                }
            }

        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            closeResources(connection, resultSet, preparedStatement);

        }
        return subjects;
    }

    @Override
    public List<Subject> findAllSubjects() {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        List<Subject> subjects = new ArrayList<>();
        try {
            connection = getConnection();
            preparedStatement = connection.prepareStatement("SELECT s.subject_id, s.sub_title, s.duration_in_hours, b.book_id, b.title, b.price, b.volume, b.publish_date FROM subject s LEFT JOIN book b ON s.subject_id = b.subject_id");
            resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                int index = subjects.indexOf(new Subject(resultSet.getInt("subject_id")));
                if (index != -1) {
                    addBooksToSubject(resultSet, subjects.get(index));
                } else {
                    Subject subject = new Subject();
                    subject.setSubjectId(resultSet.getInt("subject_id"));
                    subject.setSubtitle(resultSet.getString("sub_title"));
                    subject.setDurationInHours(resultSet.getInt("duration_in_hours"));

                    addBooksToSubject(resultSet, subject);
                    subjects.add(subject);
                }
            }

        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            closeResources(connection, resultSet, preparedStatement);

        }
        return subjects;
    }

    @Override
    public int findSubjectById(int subjectId) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        int count = 0;

        List<Subject> subjects = new ArrayList<>();
        try {
            connection = getConnection();
            preparedStatement = connection.prepareStatement("SELECT count(*) as count FROM subject WHERE subject_id=?");
            preparedStatement.setInt(1, subjectId);
            resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                count = resultSet.getInt("count");
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            closeResources(connection, resultSet, preparedStatement);

        }
        return count;
    }

    public void saveSubject(Subject subject) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try {

            connection = getConnection();

            String saveSubjectSql = "insert into subject(sub_title, duration_in_hours) values(?,?)";

            preparedStatement = connection.prepareStatement(saveSubjectSql);
            preparedStatement.setString(1, subject.getSubtitle());
            preparedStatement.setInt(2, subject.getDurationInHours());

            preparedStatement.execute();

            System.out.println("Subject data saved");
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            closeResources(connection, preparedStatement);

        }
    }

    public void saveBook(Book book, Integer subjectId) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            connection = getConnection();

            String saveSubjectSql = "insert into book(title, price, volume, publish_date, subject_id) values(?,?,?,?,?)";


            preparedStatement = connection.prepareStatement(saveSubjectSql);
            preparedStatement.setString(1, book.getTitle());
            preparedStatement.setDouble(2, book.getPrice());
            preparedStatement.setInt(3, book.getVolume());
            preparedStatement.setDate(4, Date.valueOf(book.getPublishDate()));

            if (subjectId != null) {
                preparedStatement.setInt(5, subjectId);
            } else {
                preparedStatement.setNull(5, Types.INTEGER);
            }


            preparedStatement.execute();

            System.out.println("Book data saved");
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            closeResources(connection, preparedStatement);

        }
    }

    public void removeBook(String bookIdOrTitle) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            connection = getConnection();


            String removeBookByIdSql = "DELETE FROM book WHERE book_id=?";
            String removeBookByTitleSql = "DELETE FROM book WHERE title LIKE ?";

            if (bookIdOrTitle.matches("\\d+")) {
                preparedStatement = connection.prepareStatement(removeBookByIdSql);
                preparedStatement.setInt(1, Integer.valueOf(bookIdOrTitle));
            } else {
                preparedStatement = connection.prepareStatement(removeBookByTitleSql);
                preparedStatement.setString(1, "%" + bookIdOrTitle + "%");
            }

            preparedStatement.execute();

            System.out.println("Book[s] removed");
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            closeResources(connection, preparedStatement);

        }
    }

    public void removeSubject(String subjectIdOrTitle, List<Integer> bookIds) {
        Connection connection = null;
        ResultSet resultSet = null;
        PreparedStatement preparedStatementRemoveBook = null;
        PreparedStatement preparedStatementRemoveSubject = null;
        try {
            connection = getConnection();


            StringBuilder removeBookByIdSql = new StringBuilder("DELETE FROM book WHERE book_id IN ");
            String removeSubjectByTitleSql = "DELETE FROM subject WHERE sub_title LIKE ?";
            String removeSubjectByIdSql = "DELETE FROM subject WHERE subject_id=?";

            if (subjectIdOrTitle.matches("\\d+")) {
                preparedStatementRemoveSubject = connection.prepareStatement(removeSubjectByIdSql);
                preparedStatementRemoveSubject.setInt(1, Integer.valueOf(subjectIdOrTitle));
            } else {
                preparedStatementRemoveSubject = connection.prepareStatement(removeSubjectByTitleSql);
                preparedStatementRemoveSubject.setString(1, "%" + subjectIdOrTitle + "%");
            }

            if (bookIds != null && !bookIds.isEmpty()) {
                removeBookByIdSql.append("(");
                for (int i = 0; i < bookIds.size(); i++) {
                    removeBookByIdSql = removeBookByIdSql.indexOf("?") == -1 ? removeBookByIdSql.append("?") : removeBookByIdSql.append(",?");
                }
                removeBookByIdSql.append(")");

                preparedStatementRemoveBook = connection.prepareStatement(removeBookByIdSql.toString());

                for (int i = 0; i < bookIds.size(); i++) {
                    preparedStatementRemoveBook.setInt(i + 1, bookIds.get(i));
                }
            }


            connection.setAutoCommit(false);
            if (preparedStatementRemoveBook != null) {
                preparedStatementRemoveBook.execute();
            }

            preparedStatementRemoveSubject.execute();
            connection.commit();

            System.out.println("Subject[s] removed and Book[s] removed");
        } catch (ClassNotFoundException | SQLException e) {
            try {
                connection.rollback();
            } catch (SQLException e1) {
                e1.printStackTrace();
            }
            e.printStackTrace();
        } finally {
            closeResources(connection, resultSet, preparedStatementRemoveBook, preparedStatementRemoveSubject);

        }
    }

    private Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.jdbc.Driver");
        return DriverManager.getConnection(jdbcUrl, userName, password);
    }

    private void closeResources(Connection connection, PreparedStatement preparedStatement) {
        closeResources(connection, null, preparedStatement);
    }

    private void closeResources(Connection connection, ResultSet resultSet, PreparedStatement preparedStatement) {
        try {
            if (resultSet != null) {

                resultSet.close();

            }

            if (preparedStatement != null) {

                preparedStatement.close();

            }

            if (connection != null) {

                connection.close();
            }
        } catch (SQLException sqle) {
            sqle.printStackTrace();
        }
    }

    private void closeResources(Connection connection, ResultSet resultSet, PreparedStatement preparedStatement1, PreparedStatement preparedStatement2) {
        try {
            if (resultSet != null) {

                resultSet.close();

            }

            if (preparedStatement1 != null) {

                preparedStatement1.close();

            }

            if (preparedStatement2 != null) {

                preparedStatement2.close();

            }

            if (connection != null) {

                connection.close();
            }
        } catch (SQLException sqle) {
            sqle.printStackTrace();
        }
    }


    private void addBooksToSubject(ResultSet resultSet, Subject sub) throws SQLException {
        if (resultSet.getInt("book_id") != 0) {

            Book book = new Book();
            book.setBookId(resultSet.getInt("book_id"));
            book.setTitle(resultSet.getString("title"));
            book.setPrice(resultSet.getDouble("price"));
            book.setVolume(resultSet.getInt("volume"));
            book.setPublishDate(resultSet.getDate("publish_date").toLocalDate());

            if (sub.getReferences() == null) {
                Set<Book> books = new HashSet<>();
                sub.setReferences(books);
            }

            sub.getReferences().add(book);
        }
    }
}
