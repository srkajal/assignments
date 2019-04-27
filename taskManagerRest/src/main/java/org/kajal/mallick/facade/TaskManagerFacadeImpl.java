package org.kajal.mallick.facade;

import org.kajal.mallick.dao.TaskManagerDao;
import org.kajal.mallick.entities.ParentTask;
import org.kajal.mallick.entities.Task;
import org.kajal.mallick.model.request.TaskRequest;
import org.kajal.mallick.util.TaskManagerConstant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TaskManagerFacadeImpl implements TaskManagerFacade {
    private final TaskManagerDao taskManagerDao;

    @Autowired
    public TaskManagerFacadeImpl(TaskManagerDao taskManagerDao) {
        this.taskManagerDao = taskManagerDao;
    }

    @Override
    public List<Task> findAllTasks() {
        return taskManagerDao.findAllTasks();
    }

    @Override
    public Task findTaskById(long taskId) {
        return taskManagerDao.findTaskById(taskId);
    }

    @Override
    public Task save(TaskRequest taskRequest) {
        ParentTask parentTask = new ParentTask(taskRequest.getParentId());
        Task task = new Task(parentTask, taskRequest.getTaskName(), taskRequest.getStartDate(), taskRequest.getEndDate(), taskRequest.getPriority(), TaskManagerConstant.STATUS_OPEN);
        return taskManagerDao.save(task);
    }

    @Override
    public Task update(TaskRequest taskRequest) {
        ParentTask parentTask = new ParentTask(taskRequest.getParentId());
        Task task = new Task(taskRequest.getTaskId(), parentTask, taskRequest.getTaskName(), taskRequest.getStartDate(), taskRequest.getEndDate(), taskRequest.getPriority(), TaskManagerConstant.STATUS_OPEN);
        return taskManagerDao.save(task);
    }

    @Override
    public void deleteByTaskId(long taskId) {
        taskManagerDao.deleteByTaskId(taskId);

    }

    @Override
    public int closeTaskById(long taskId) {
        return taskManagerDao.updateTaskStatus(TaskManagerConstant.STATUS_CLOSED, taskId);
    }
}
