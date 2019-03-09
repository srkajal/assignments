package org.kajal.mallick.repositories;

import org.kajal.mallick.entities.Subject;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SubjectRepository extends Repository<Subject, Long> {
    final static String SEARCH_SUBJECT_BY_TITLE = "SELECT s FROM Subject s WHERE s.subtitle LIKE %:title%";
    final static String SEARCH_SUBJECT_BY_DURATION = "SELECT s FROM Subject s WHERE s.durationInHours = :duration";
    List<Subject> findAll();
    //List<Subject> findBySubtitleIgnoreCaseContaining(String title);

    @Query(SEARCH_SUBJECT_BY_TITLE)
    List<Subject> findBySubtitle(@Param("title") String title);

    @Query(SEARCH_SUBJECT_BY_DURATION)
    List<Subject> findByDurationInHours(@Param("duration") int duration);

    Subject findById(Long subjectId);
    Subject save(Subject subject);
    void deleteBySubjectId(Long subjectId);
}
