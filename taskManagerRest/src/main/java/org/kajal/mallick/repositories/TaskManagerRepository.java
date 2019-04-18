package org.kajal.mallick.repositories;

import org.kajal.mallick.entities.Task;
import org.springframework.data.repository.Repository;

import java.util.List;
import java.util.Optional;

public interface TaskManagerRepository extends Repository<Task,Long> {
    List<Task> findAll();
    Optional<Task> findById(long id);
    Task save(Task task);
    void deleteById(long id);
}
