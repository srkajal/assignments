package org.kajal.mallick.service;

import org.kajal.mallick.dao.ReadWriteDao;
import org.kajal.mallick.dao.ReadWriteDaoImpl;
import org.kajal.mallick.model.Book;
import org.kajal.mallick.model.Subject;
import org.kajal.mallick.util.HelperUtility;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;

public class ReadWriteOperation {
    private Scanner scanner;
    private ReadWriteDao readWriteDao;

    public ReadWriteOperation() {
        readWriteDao = new ReadWriteDaoImpl();
        scanner = new Scanner(System.in);
    }


    public void performOperations() throws IOException {
        while (true) {
            System.out.println(" -----------------------");
            System.out.println("| a.Add a Subject       |");
            System.out.println("| b.Add a Book          |");
            System.out.println("| c.Delete a Subject    |");
            System.out.println("| d.Delete a book       |");
            System.out.println("| e.Search for a book   |");
            System.out.println("| f.Search for a subject|");
            System.out.println("| g.Exit                |");
            System.out.println(" -----------------------");

            System.out.println("\nPlease enter your choice:");

            String choice = scanner.nextLine();

            if ("a".equalsIgnoreCase(choice)) {

                addSubject();

            } else if ("b".equalsIgnoreCase(choice)) {

                addBook();

            } else if ("c".equalsIgnoreCase(choice)) {
                deleteSubject();

            } else if ("d".equalsIgnoreCase(choice)) {
                deleteBook();

            } else if ("e".equalsIgnoreCase(choice)) {

                searchBooks();
            } else if ("f".equalsIgnoreCase(choice)) {

                searchSubjects();
            } else {
                releaseResource();
                System.exit(1);
            }

        }
    }

    private void addSubject() {
        Subject subject = new Subject();
        System.out.println("Please enter subject details-->");

        System.out.println("Subtitle:");
        subject.setSubtitle(scanner.nextLine());

        System.out.println("Duration In Hours:");
        subject.setDurationInHours(Integer.valueOf(scanner.nextLine()));

        readWriteDao.saveSubject(subject);
    }

    private void addBook() {
        Book book = new Book();

        System.out.println("Please enter Book details-->");

        System.out.println("Subject Id:");
        long subjectId = Long.valueOf(scanner.nextLine());

        System.out.println("Book title:");
        book.setTitle(scanner.nextLine());

        System.out.println("Book price:");
        book.setPrice(Double.valueOf(scanner.nextLine()));


        System.out.println("Book volume:");
        book.setVolume(Integer.valueOf(scanner.nextLine()));


        System.out.println("Book publish date(YYYY/MM/DD):");
        String publishDateStr = scanner.nextLine();
        String[] arr = publishDateStr.split("/");

        book.setPublishDate(LocalDate.of(Integer.valueOf(arr[0]), Integer.valueOf(arr[1]), Integer.valueOf(arr[2])));

        Subject subject = readWriteDao.findSubjectById(subjectId);

        if (subject != null) {
            readWriteDao.saveBook(book, subject);
        } else {
            System.out.println("No Subject available for this Subject Id:" + subjectId);
        }
    }

    private void deleteSubject() {
        System.out.println("Please enter subject id/title to delete");
        String subjectIdOrTitle = scanner.nextLine();

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

    private void deleteBook() {
        System.out.println("Please enter book title to delete");
        String bookIdOrTitle = scanner.nextLine();

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

    private void searchBooks() throws IOException {
        System.out.println("Please enter Book title for search:");
        System.out.println("Book Title:");
        String bookTitle = scanner.nextLine();

        List<Book> books = readWriteDao.findBooksByTitle(bookTitle);

        if (books == null || books.isEmpty()) {
            System.out.println("No Book found");
        } else {
            System.out.println("Search result for Book:");
            HelperUtility.printBook(new HashSet<>(books));
        }
    }

    private void searchSubjects() {
        System.out.println("Please enter Subject title for search:");
        System.out.println("Subject Title:");
        String SubjectTitle = scanner.nextLine();

        List<Subject> resultSubjectList = readWriteDao.findSubjectsByTitle(SubjectTitle);

        if (resultSubjectList == null || resultSubjectList.isEmpty()) {
            System.out.println("No Subject found");
        } else {
            System.out.println("Search result for Subject:");
            HelperUtility.printResult(resultSubjectList);
        }
    }

    private void releaseResource() {
        readWriteDao.releaseResource();
    }
}
