package org.kajal.mallick.dao;

import org.kajal.mallick.entities.Task;

import java.util.List;

public interface TaskManagerDao {

    List<Task> findAllTasks();

    Task findTaskById(long taskId);

    Task save(Task task);

    void deleteByTaskId(long taskId);

    int updateTaskStatus(String status, long taskId);
}
