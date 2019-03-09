package org.kajal.mallick.util;

import org.kajal.mallick.model.Book;
import org.kajal.mallick.model.Subject;

import java.util.List;
import java.util.Set;

public class HelperUtility {
    public static void printResult(List<Subject> subjects) {
        printChar("*");
        int numberOfSubject = 1;

        for (Subject subject : subjects) {
            printChar("#");
            printChar("-");
            printHeader("Subject - " + numberOfSubject++);
            printChar("-");
            printKeyAndValue("subjectId:", subject.getSubjectId());
            printKeyAndValue("subtitle:", subject.getSubtitle());
            printKeyAndValue("durationInHours:", subject.getDurationInHours());
            if (subject.getReferences() != null) {

                printBook(subject.getReferences());

            }
            printChar("#");
        }
        printChar("*");

    }

    public static void printChar(String ch) {
        System.out.print("|");
        for (int i = 0; i < 31; i++) {
            System.out.print(ch);
        }
        System.out.print("|\n");

    }

    public static void printHeader(String StringToPrint) {
        System.out.print("|");

        int len = StringToPrint.length();
        int halfLen = len / 2;
        int fixedIteration = 30;
        int numberOfIteration = fixedIteration / 2 - halfLen;

        for (int i = 0; i < numberOfIteration; i++) {
            System.out.print(" ");
        }
        System.out.print(StringToPrint);
        for (int i = numberOfIteration; i > 0; i--) {
            System.out.print(" ");
        }
        System.out.print("|\n");

    }

    public static void printKeyAndValue(String key, Object value) {
        System.out.print("| ");

        String valueString = String.valueOf(value);
        int len1 = key.length();
        int len2 = valueString.length();
        int fixedIteration = 30;
        int numberOfIteration = fixedIteration - len1 - len2 - 1;

        System.out.print(key + valueString);
        for (int i = 0; i < numberOfIteration; i++) {
            System.out.print(" ");
        }
        System.out.print(" |\n");
    }

    public static void printBook(Set<Book> books){

        int numberOfBook = 1;
        for (Book book : books) {
            printChar("-");
            printHeader("Book - " + numberOfBook++);
            printChar("-");
            printKeyAndValue("bookId:", book.getBookId());
            printKeyAndValue("title:", book.getTitle());
            printKeyAndValue("price:", book.getPrice());
            printKeyAndValue("volume:", book.getVolume());
            printKeyAndValue("publishDate:", book.getPublishDate());
            printChar("-");
        }

    }
}
