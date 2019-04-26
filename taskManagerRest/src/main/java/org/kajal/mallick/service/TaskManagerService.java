package org.kajal.mallick.service;

import org.kajal.mallick.model.request.TaskRequest;
import org.kajal.mallick.model.response.BaseResponse;
import org.kajal.mallick.model.response.ExtendedTaskListResponse;
import org.kajal.mallick.model.response.ExtendedTaskResponse;

public interface TaskManagerService {

    ExtendedTaskListResponse findAllTasks();

    ExtendedTaskResponse findTaskById(long taskId);

    BaseResponse save(TaskRequest taskRequest);

    BaseResponse update(TaskRequest taskRequest);

    BaseResponse deleteByTaskId(long taskId);
}
