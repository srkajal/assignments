package org.kajal.mallick.model;

import java.io.Serializable;
import java.util.Objects;
import java.util.Set;

public class Subject implements Serializable {
    private long subjectId;
    private String subtitle;
    private int durationInHours;
    private Set<Book> references;

    public Subject() {
    }

    public Subject(long subjectId) {
        this.subjectId = subjectId;
    }

    public Subject(long subjectId, String subtitle, int durationInHours, Set<Book> references) {
        this.subjectId = subjectId;
        this.subtitle = subtitle;
        this.durationInHours = durationInHours;
        this.references = references;
    }

    public long getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(long subjectId) {
        this.subjectId = subjectId;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    public int getDurationInHours() {
        return durationInHours;
    }

    public void setDurationInHours(int durationInHours) {
        this.durationInHours = durationInHours;
    }

    public Set<Book> getReferences() {
        return references;
    }

    public void setReferences(Set<Book> references) {
        this.references = references;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Subject subject = (Subject) o;
        return subjectId == subject.subjectId;
    }

    @Override
    public int hashCode() {

        return Objects.hash(subjectId);
    }

    @Override
    public String toString() {
        return "Subject{" +
                "subjectId=" + subjectId +
                ", subtitle='" + subtitle + '\'' +
                ", durationInHours=" + durationInHours +
                ", references=" + references +
                '}';
    }
}
