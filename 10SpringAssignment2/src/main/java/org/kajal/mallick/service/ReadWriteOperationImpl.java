package org.kajal.mallick.service;

import org.kajal.mallick.fao.ReadFile;
import org.kajal.mallick.fao.WriteFile;
import org.kajal.mallick.model.Book;
import org.kajal.mallick.model.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URL;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class ReadWriteOperationImpl implements ReadWriteOperation{
    private URL url;

    @Autowired
    private WriteFile writeFile;

    @Autowired
    private ReadFile readFile;

    public ReadWriteOperationImpl() {
        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        url = classLoader.getResource("myFile.txt");
    }

    public void addSubject(Subject subject) {

        List<Subject> subjectList = null;
        try {
            subjectList = readFile.readFromFile(url.getPath());


            subject.setSubjectId(getUniqueSubjectId(subjectList));

            subjectList.add(subject);

            writeFile.writeToFile(url.getPath(), subjectList);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void addBook(Book book, int subjectId) {

        List<Subject> subjectList = null;
        try {
            subjectList = readFile.readFromFile(url.getPath());


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
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void deleteSubject(String subjectIdOrTitle) {
        try {
            List<Subject> subjectList = readFile.readFromFile(url.getPath());


            if (subjectList != null && !subjectList.isEmpty()) {
                if (subjectIdOrTitle.matches("\\d+")) {
                    subjectList.remove(new Subject(Integer.valueOf(subjectIdOrTitle)));
                } else {
                    subjectList.stream().filter(e -> e.getSubtitle().equals(subjectIdOrTitle)).collect(Collectors.toList()).forEach(e -> subjectList.remove(e));
                }


                writeFile.writeToFile(url.getPath(), subjectList);

            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void deleteBook(String bookIdOrTitle) {

        try {
            List<Subject> subjectList = readFile.readFromFile(url.getPath());

            if (subjectList != null && !subjectList.isEmpty()) {
                if (bookIdOrTitle.matches("\\d+")) {
                    subjectList.forEach(q -> {
                        if (q.getReferences() != null) q.getReferences().remove(new Book(Long.valueOf(bookIdOrTitle)));
                    });
                } else {
                    Set<Book> bookSet = subjectList.stream().filter(s -> s.getReferences() != null).flatMap(q -> q.getReferences().stream()).filter(q -> q.getTitle().equalsIgnoreCase(bookIdOrTitle)).collect(Collectors.toSet());
                    subjectList.forEach(q -> {
                        if (q.getReferences() != null) q.getReferences().removeAll(bookSet);
                    });
                }

                writeFile.writeToFile(url.getPath(), subjectList);

            }



            writeFile.writeToFile(url.getPath(), subjectList);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public Set<Book> searchBooks(String bookTitle) {
        Set<Book> bookSet = null;

        try {
            List<Subject> subjectList = readFile.readFromFile(url.getPath());
            bookSet = subjectList.stream().filter(s -> s.getReferences() != null).flatMap(q -> q.getReferences().stream()).filter(q -> q.getTitle().toLowerCase().contains(bookTitle.toLowerCase())).collect(Collectors.toSet());

            if (bookSet == null || bookSet.isEmpty()) {
                System.out.println("No Book found");
                bookSet = new HashSet<>();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return bookSet;
    }

    public List<Subject> searchSubjects(String SubjectTitle) {
        List<Subject> resultSubjectList = null;

        try {
            List<Subject> subjectList = readFile.readFromFile(url.getPath());
            resultSubjectList = subjectList.stream().filter(e -> e.getSubtitle().toLowerCase().contains(SubjectTitle.toLowerCase())).collect(Collectors.toList());

            if (resultSubjectList == null || resultSubjectList.isEmpty()) {
                System.out.println("No Subject found");
                resultSubjectList = new ArrayList<>();
            }
        } catch (IOException e) {
            e.printStackTrace();
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
