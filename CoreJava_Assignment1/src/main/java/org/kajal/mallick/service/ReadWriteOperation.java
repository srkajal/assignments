package org.kajal.mallick.service;

import org.kajal.mallick.model.Book;
import org.kajal.mallick.model.Subject;
import org.kajal.mallick.util.HelperUtility;

import java.io.IOException;
import java.net.URL;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

public class ReadWriteOperation {
    private URL url;
    private WriteFile writeFile;
    private ReadFile readFile;
    private Scanner scanner;

    public ReadWriteOperation() {
        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        url = classLoader.getResource("myFile.txt");

        writeFile = new WriteFile();
        readFile = new ReadFile();
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
                System.exit(1);
            }

        }
    }

    private void addSubject() throws IOException {
        Subject subject = new Subject();
        System.out.println("Please enter subject details-->");

        System.out.println("Subtitle:");
        subject.setSubtitle(scanner.nextLine());

        System.out.println("Duration In Hours:");
        subject.setDurationInHours(Integer.valueOf(scanner.nextLine()));

        List<Subject> subjectList = readFile.readFromFile(url.getPath());

        subject.setSubjectId(getUniqueSubjectId(subjectList));

        subjectList.add(subject);

        writeFile.writeToFile(url.getPath(), subjectList);
    }

    private void addBook() throws IOException {
        Book book = new Book();

        System.out.println("Please enter Book details-->");

        System.out.println("Subject Id:");
        int subjectId = Integer.valueOf(scanner.nextLine());

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

        List<Subject> subjectList = readFile.readFromFile(url.getPath());

        if (!subjectList.isEmpty()) {
            int subjectIndex = findSubjectIndexById(subjectId, subjectList);
            Subject resultSubject = subjectList.get(subjectIndex);

            if (subjectIndex != -1) {
                Set<Book> bookSet = resultSubject.getReferences();
                if (bookSet != null) {
                    book.setBookId(getUniqueBookId(subjectList));
                    bookSet.add(book);
                } else {
                    bookSet = new HashSet<>();
                    book.setBookId(getUniqueBookId(subjectList));
                    bookSet.add(book);
                    resultSubject.setReferences(bookSet);
                }
                writeFile.writeToFile(url.getPath(), subjectList);
            } else {
                System.out.println("No Subject available for this Subject Id:" + subjectId);
            }

        } else {
            System.out.println("No Subject available to add book");
        }
    }

    private void deleteSubject() throws IOException {
        System.out.println("Please enter subject id/title to delete");
        String subjectIdOrTitle = scanner.nextLine();

        List<Subject> subjectList = readFile.readFromFile(url.getPath());

        if (subjectIdOrTitle.matches("\\d+")) {
            subjectList.remove(new Subject(Long.valueOf(subjectIdOrTitle)));
        } else {
            subjectList.stream().filter(e -> e.getSubtitle().equals(subjectIdOrTitle)).collect(Collectors.toList()).forEach(e -> subjectList.remove(e));
        }

        writeFile.writeToFile(url.getPath(), subjectList);
    }

    private void deleteBook() throws IOException {
        System.out.println("Please enter book title to delete");
        String bookIdOrTitle = scanner.nextLine();

        List<Subject> subjectList = readFile.readFromFile(url.getPath());

        Set<Book> bookSet = subjectList.stream().filter(s -> s.getReferences() != null).flatMap(q -> q.getReferences().stream()).filter(q -> q.getTitle().equalsIgnoreCase(bookIdOrTitle)).collect(Collectors.toSet());

        subjectList.forEach(q -> {
            if (q.getReferences() != null) q.getReferences().removeAll(bookSet);
        });

        writeFile.writeToFile(url.getPath(), subjectList);
    }

    private void searchBooks() throws IOException {
        System.out.println("Please enter Book title for search:");
        System.out.println("Book Title:");
        String bookTitle = scanner.nextLine();

        List<Subject> subjectList = readFile.readFromFile(url.getPath());
        Set<Book> bookSet = subjectList.stream().filter(s -> s.getReferences() != null).flatMap(q -> q.getReferences().stream()).filter(q -> q.getTitle().toLowerCase().contains(bookTitle.toLowerCase())).collect(Collectors.toSet());

        if (bookSet == null || bookSet.isEmpty()) {
            System.out.println("No Book found");
        } else {
            System.out.println("Search result for Book:");
            HelperUtility.printBook(bookSet);
        }
    }

    private void searchSubjects() throws IOException {
        System.out.println("Please enter Subject title for search:");
        System.out.println("Subject Title:");
        String SubjectTitle = scanner.nextLine();

        List<Subject> subjectList = readFile.readFromFile(url.getPath());
        List<Subject> resultSubjectList = subjectList.stream().filter(e -> e.getSubtitle().toLowerCase().contains(SubjectTitle.toLowerCase())).collect(Collectors.toList());

        if (resultSubjectList == null || resultSubjectList.isEmpty()) {
            System.out.println("No Subject found");
        } else {
            System.out.println("Search result for Subject:");
            HelperUtility.printResult(resultSubjectList);
        }
    }

    private long getUniqueSubjectId(List<Subject> searchList) {

        if (searchList == null || searchList.isEmpty()) {
            return 1;
        } else {
            Subject subject = searchList.get(searchList.size() - 1);

            return subject.getSubjectId() + 1;
        }
    }

    private long getUniqueBookId(List<Subject> subjectList) {
        List<Book> bookList = subjectList.stream().filter(s -> s.getReferences() != null).flatMap(q -> q.getReferences().stream()).sorted().collect(Collectors.toList());
        if (bookList == null || bookList.isEmpty()) {
            return 1;
        } else {

            Book book = bookList.get(bookList.size() - 1);

            return book.getBookId() + 1;
        }
    }

    private int findSubjectIndexById(int subjectId, List<Subject> subjectList) {
        return subjectList.indexOf(new Subject(subjectId));
    }


}
