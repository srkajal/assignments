package org.kajal.mallick.facade;

import org.kajal.mallick.entities.Task;
import org.kajal.mallick.model.request.TaskRequest;

import java.util.List;

public interface TaskManagerFacade {
    List<Task> findAllTasks();
    Task findTaskById(long taskId);
    Task save(TaskRequest taskRequest);
    Task update(TaskRequest taskRequest);
    void deleteByTaskId(long taskId);
}
