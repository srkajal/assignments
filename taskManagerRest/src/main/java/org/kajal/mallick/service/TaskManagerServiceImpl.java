package org.kajal.mallick.service;

import org.kajal.mallick.entities.Task;
import org.kajal.mallick.exception.TaskException;
import org.kajal.mallick.facade.TaskManagerFacade;
import org.kajal.mallick.model.TaskDto;
import org.kajal.mallick.model.request.TaskRequest;
import org.kajal.mallick.model.response.BaseResponse;
import org.kajal.mallick.model.response.ExtendedTaskListResponse;
import org.kajal.mallick.model.response.ExtendedTaskResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;

@Service
public class TaskManagerServiceImpl implements TaskManagerService {

    private Logger logger = LoggerFactory.getLogger(TaskManagerServiceImpl.class);

    private final TaskManagerFacade taskManagerFacade;

    @Autowired
    public TaskManagerServiceImpl(TaskManagerFacade taskManagerFacade) {
        this.taskManagerFacade = taskManagerFacade;
    }

    @Override
    public ExtendedTaskListResponse findAllTasks() {
        ExtendedTaskListResponse extendedTaskListResponse = new ExtendedTaskListResponse();
        BaseResponse baseResponse;

        List<Task> taskList = taskManagerFacade.findAllTasks();

        if (!CollectionUtils.isEmpty(taskList)) {
            taskList
                    .forEach(task -> extendedTaskListResponse.getTasks()
                            .add(new TaskDto(task)));
            baseResponse = new BaseResponse(HttpStatus.FOUND.getReasonPhrase(), HttpStatus.FOUND.value(), "Number of Tasks found " + taskList.size());

            logger.info("Find number of task:{}", taskList.size());
        } else {
            baseResponse = new BaseResponse(HttpStatus.NOT_FOUND.getReasonPhrase(), HttpStatus.NOT_FOUND.value(), "No Task found");
            logger.info("No Task found");
        }

        extendedTaskListResponse.setBaseResponse(baseResponse);

        return extendedTaskListResponse;
    }

    @Override
    public ExtendedTaskResponse findTaskById(long taskId) {
        ExtendedTaskResponse extendedTaskResponse = new ExtendedTaskResponse();
        BaseResponse baseResponse;

        if (taskId <= 0) {
            throw new TaskException("TaskId should not be less than 1");
        }

        Task task = taskManagerFacade.findTaskById(taskId);

        if (task != null) {
            extendedTaskResponse.setTaskDto(new TaskDto(task));
            baseResponse = new BaseResponse(HttpStatus.FOUND.getReasonPhrase(), HttpStatus.FOUND.value(), "Task found for Id:" + taskId);
            logger.info("Find task by id:{}", taskId);
        } else {
            baseResponse = new BaseResponse(HttpStatus.NOT_FOUND.getReasonPhrase(), HttpStatus.NOT_FOUND.value(), "No Task found for Id:" + taskId);
            logger.info("Task not found for id:{}", taskId);
        }

        extendedTaskResponse.setBaseResponse(baseResponse);

        return extendedTaskResponse;
    }

    @Override
    public BaseResponse save(TaskRequest taskRequest) {

        Task savedTask = taskManagerFacade.save(taskRequest);

        if (savedTask != null) {
            logger.info("Task saved successfully :{}", taskRequest.getTaskName());
            return new BaseResponse(HttpStatus.CREATED.getReasonPhrase(), HttpStatus.CREATED.value(), "Task saved successfully");
        } else {
            logger.info("Unable to save the task :{}", taskRequest.getTaskName());
            return new BaseResponse(HttpStatus.UNPROCESSABLE_ENTITY.getReasonPhrase(), HttpStatus.UNPROCESSABLE_ENTITY.value(), "Failed to save task");
        }
    }

    @Override
    public BaseResponse update(TaskRequest taskRequest) {

        if (taskRequest.getTaskId() <= 0) {
            throw new TaskException("TaskId should not be less than 1");
        }

        Task updateTask = taskManagerFacade.update(taskRequest);

        if (updateTask != null) {
            logger.info("Task updated successfully :{}", taskRequest.getTaskName());
            return new BaseResponse(HttpStatus.OK.getReasonPhrase(), HttpStatus.OK.value(), "Task updated successfully");
        } else {
            logger.info("Unable to update the task :{}", taskRequest.getTaskName());
            return new BaseResponse(HttpStatus.UNPROCESSABLE_ENTITY.getReasonPhrase(), HttpStatus.UNPROCESSABLE_ENTITY.value(), "Failed to update task");
        }
    }

    @Override
    public BaseResponse deleteByTaskId(long taskId) {
        if (taskId <= 0) {
            throw new TaskException("TaskId should not be less than 1");
        }

        try {
            taskManagerFacade.deleteByTaskId(taskId);
        } catch (Exception ex) {
            logger.error("Unable to delete the Task", ex);
            return new BaseResponse(HttpStatus.UNPROCESSABLE_ENTITY.getReasonPhrase(), HttpStatus.UNPROCESSABLE_ENTITY.value(), "Unable to delete the task by taskId:" + taskId);
        }

        logger.info("Task deleted successfully taskId:{}", taskId);

        return new BaseResponse(HttpStatus.OK.getReasonPhrase(), HttpStatus.OK.value(), "Task deleted successfully for taskId: " + taskId);

    }

    @Override
    public BaseResponse closeTaskById(long taskId) {
        int rowUpdated;
        if (taskId <= 0) {
            throw new TaskException("TaskId should not be less than 1");
        }

        try {
            rowUpdated = taskManagerFacade.closeTaskById(taskId);
        } catch (Exception ex) {
            rowUpdated = 0;
            logger.error("Unable to closed the Task", ex);
        }
        if (rowUpdated <= 0) {

            return new BaseResponse(HttpStatus.UNPROCESSABLE_ENTITY.getReasonPhrase(), HttpStatus.UNPROCESSABLE_ENTITY.value(), "Unable to close the task by taskId:" + taskId);
        }

        logger.info("Task closed successfully taskId:{}", taskId);

        return new BaseResponse(HttpStatus.OK.getReasonPhrase(), HttpStatus.OK.value(), "Task closed successfully for taskId: " + taskId);
    }
}
