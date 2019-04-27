package org.kajal.mallick.dao;


import org.kajal.mallick.entities.Task;
import org.kajal.mallick.repositories.TaskManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class TaskManagerDaoImpl implements TaskManagerDao {

    private final TaskManagerRepository taskManagerRepository;

    @Autowired
    public TaskManagerDaoImpl(TaskManagerRepository taskManagerRepository) {
        this.taskManagerRepository = taskManagerRepository;
    }

    public List<Task> findAllTasks() {
        return taskManagerRepository.findAll();
    }

    @Override
    public Task findTaskById(long taskId) {
        return taskManagerRepository.findById(taskId).orElse(null);
    }

    @Override
    public Task save(Task task) {
        return taskManagerRepository.save(task);
    }

    @Override
    public void deleteByTaskId(long taskId) {
        taskManagerRepository.deleteById(taskId);
    }

    @Override
    public int updateTaskStatus(String status, long taskId) {
        return taskManagerRepository.updateTaskStatus(status, taskId);
    }
}
