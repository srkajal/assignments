package org.kajal.mallick.repositories;

import org.kajal.mallick.entities.ParentTask;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface ParentTaskManagerRepository extends Repository<ParentTask, Long> {

    List<ParentTask> findAll();

    ParentTask save(ParentTask parentTask);
}
