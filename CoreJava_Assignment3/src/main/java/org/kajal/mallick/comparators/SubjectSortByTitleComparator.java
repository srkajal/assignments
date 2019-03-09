package org.kajal.mallick.comparators;

import org.kajal.mallick.model.Book;
import org.kajal.mallick.model.Subject;

import java.util.Comparator;

public class SubjectSortByTitleComparator implements Comparator<Subject> {
    @Override
    public int compare(Subject subject1, Subject subject2) {
        return subject1.getSubtitle().compareTo(subject2.getSubtitle());
    }
}
